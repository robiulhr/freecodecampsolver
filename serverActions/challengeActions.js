import { BASE_URL, API_BASE_URL, dev_cookie } from "../constants.js";
import { jsonReader } from "../dbActions/utils.js";
import rootDir from "app-root-path";
import { pause } from "../utils/utils.js";
import axios from "axios";

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

export function completeChallenge() {
  const challengeCompletePath = "/modern-challenge-completed";
  axios
    .post(
      `${API_BASE_URL}${challengeCompletePath}`,
      { challengeType: 0, id: "bad87fee1348bd9acde08812" },
      {
        headers: {
          Cookie:
            "connect.sid=s%3A4H5VmSMkLLxoW6L6mVAT9kvo60lWHKzK.6CT5BmSh%2Bmvjr0cWKD1TO6DnIGXcrZgjoy4mxse%2FRfU; _csrf=ybZ1fdUmJ789C5_QtCUoe-PF; csrf_token=dARjR3NU-20TKbHTHejz3e5XdeiDQChRwqa4; jwt_access_token=s%3AeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2Nlc3NUb2tlbiI6eyJpZCI6IlFXUVN3VXVZcG9Ib1dqNnVOYkZQelpEZnREclpCVVh5WTFwcE9tOUVadlZiNE5vZHV3eU9TVkpqcnZlZkZyTksiLCJ0dGwiOjc3NzYwMDAwMDAwLCJjcmVhdGVkIjoiMjAyNC0wMi0yMFQxOToyMjoxMi43ODNaIiwidXNlcklkIjoiNjVkNGZiZTRhMDY0Nzg0MzM5NzJiMjE2In0sImlhdCI6MTcwODQ1NjkzMn0.HzfIYr3QLj-7vUghyypKcCx-IKb24Q99RGPEhjZMmBQ.wMmY9142%2FdlClx2qLLJkZa3P9qYdn2uDOth7B7iHCrE",
          authority: "api.freecodecamp.org",
          method: "POST",
          path: "/modern-challenge-completed",
          scheme: "https",
          Accept: "*/*",
          "Accept-Encoding": "gzip, deflate, br",
          "Accept-Language": "en-US, en;q=0.9",
          "Content-Length": 51,
          "Content-Type": "application/json",
          "Csrf-Token": "dARjR3NU-20TKbHTHejz3e5XdeiDQChRwqa4",
          Origin: "https://www.freecodecamp.org",
          Referer: "https://www.freecodecamp.org/",
          "Sec-Ch-Ua":
            '"Not A(Brand";v="99", "Brave";v="121", "Chromium";v="121"',
          "Sec-Ch-Ua-Mobile": "?0",
          "Sec-Ch-Ua-Platform": "Windows",
          "Sec-Fetch-Dest": "empty",
          "Sec-Fetch-Mode": "cors",
          "Sec-Fetch-Site": "same-site",
          "Sec-Gpc": 1,
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36",
        },
      }
    )
    .then((resp) => {
      if (resp.data) console.log("challenge completed.");
    });
}
