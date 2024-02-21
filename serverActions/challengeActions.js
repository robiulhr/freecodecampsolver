import { BASE_URL, API_BASE_URL } from "../constants.js";
import { allCourseData } from "../store/allCourses.js";
import { pause } from "../utils.js";
import axios from "axios";

export function getAllCourseChallenges() {
  allCourseData.forEach((item) => {
    axios
      .get(`${BASE_URL}${item.path}`, {
        headers: {
          Cookie:
            "gbuuid=9eaad644-37cd-4e65-844b-39519d6a0f8e; jwt_access_token=s%3AeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2Nlc3NUb2tlbiI6eyJpZCI6IlFXUVN3VXVZcG9Ib1dqNnVOYkZQelpEZnREclpCVVh5WTFwcE9tOUVadlZiNE5vZHV3eU9TVkpqcnZlZkZyTksiLCJ0dGwiOjc3NzYwMDAwMDAwLCJjcmVhdGVkIjoiMjAyNC0wMi0yMFQxOToyMjoxMi43ODNaIiwidXNlcklkIjoiNjVkNGZiZTRhMDY0Nzg0MzM5NzJiMjE2In0sImlhdCI6MTcwODQ1NjkzMn0.HzfIYr3QLj-7vUghyypKcCx-IKb24Q99RGPEhjZMmBQ.wMmY9142%2FdlClx2qLLJkZa3P9qYdn2uDOth7B7iHCrE; __stripe_mid=cda7bc54-5b09-4a54-a9d2-d4f6cd0c2f4c6a3d63; _csrf=ybIi2s_uU3Gv3uR0Tqy6S7MR; csrf_token=ZNliZYtZ-CBLf9MArnKrHLHYnIexcKDqxKY8; __stripe_sid=713c5098-8522-4785-af79-9652e832de2aa6a098",
          "Content-Type": "application/json",
        },
      })
      .then((resp) => {
        const data = resp.data.result.data;
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
          courseTitle: item.title,
          coursePath: item.path,
          allChallenges,
        };
        console.log(finalObj);
      })
      .catch((err) => console.log(err));
    pause(100);
  });
}




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
      if(resp.data) console.log("challenge completed.");
    });
}
