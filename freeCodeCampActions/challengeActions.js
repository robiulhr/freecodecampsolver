import axios from "axios";
import {
  BASE_URL,
  API_BASE_URL,
  dev_cookie,
  demoChallengeCompleteCookie,
} from "../constants.js";
import { jsonReader } from "../utils/dbUtils.js";
import rootDir from "app-root-path";
import { pause } from "../utils/utils.js";

const COURSES_STORE = rootDir.resolve("/store/allCourses.json");

export function getAllCourseChallenges(coursePath) {
  return new Promise((resolve, reject) => {
    if (coursePath) {
      fetchCourseChallenges(coursePath).then((singleCourseChallenges) => {
        resolve(singleCourseChallenges);
      });
    } else {
      jsonReader(COURSES_STORE, async (err, courses) => {
        if (err) reject(err);
        Promise.all(
          courses.map((course) => {
            return pause(100).then(() => fetchCourseChallenges(course.path));
          })
        ).then((allCoursesChallenges) => resolve(allCoursesChallenges));
      });
    }
  });
}

async function fetchCourseChallenges(coursePath) {
  return new Promise((resolve, reject) => {
    axios
      .get(`${BASE_URL}${coursePath}`, {
        headers: {
          Cookie: dev_cookie,
          "Content-Type": "application/json",
        },
      })
      .then((resp) => {
        const data = resp.data.result.data;
        const courseTitle = data.markdownRemark.frontmatter.title;
        const allChallenges = data.allChallengeNode.edges.map((ele) => {
          const challenge = ele.node.challenge;
          return {
            challengeId: challenge.id,
            challengeType: challenge.challengeType,
            title: challenge.title,
            block: challenge.block,
            superBlock: challenge.superBlock,
          };
        });
        const finalObj = {
          courseTitle: courseTitle,
          coursePath: coursePath,
          allChallenges,
        };
        resolve(finalObj);
      })
      .catch((err) => reject(err));
  });
}

// test the function
// (async () => {
//   const allChallenges = await getAllCourseChallenges();
//   console.log(allChallenges);
// })();

export async function completeChallenge({ id, challengeType }) {
  const challengeCompletePath = "/modern-challenge-completed";
  const csrf_token_Start = demoChallengeCompleteCookie.indexOf("csrf_token=");
  const csrf_token_End = demoChallengeCompleteCookie.indexOf(
    ";",
    csrf_token_Start
  );
  const csrf_token = demoChallengeCompleteCookie
    .slice(csrf_token_Start, csrf_token_End)
    .slice("11");
  return axios.post(
    `${API_BASE_URL}${challengeCompletePath}`,
    { challengeType, id },
    {
      headers: {
        Cookie: demoChallengeCompleteCookie,
        "Content-Type": "application/json",
        "Csrf-Token": csrf_token,
      },
    }
  );
}

// (async () => {
//   await completeChallenge({
//     id: "bad87fee1348cd8acef08812",
//     challengeType: 0,
//   })
//     .then((resp) => console.log(resp))
//     .catch((err) => console.log(err));
// })();
