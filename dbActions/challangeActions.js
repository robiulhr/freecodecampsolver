import fs from "fs/promises";
import rootDir from "app-root-path";
import { jsonReader } from "./utils.js";
import { getAllCourseChallenges } from "../serverActions/challengeActions.js";

const CHALLENGES_STORE = rootDir.resolve("/store/allChallenges.json");

export const insertChallengesData = async (coursePath) => {
  try {
    let challengesByCourse = await new Promise((resolve, reject) => {
      jsonReader(CHALLENGES_STORE, async (err, challengesbycourse) => {
        if (err) {
          reject(err);
        }
        resolve(challengesbycourse);
      });
    });
    // insert new challenges
    if (challengesByCourse === undefined) {
      challengesByCourse = [];
    }
    if (coursePath) {
      const alreadyPresent = challengesByCourse.findIndex(
        (course) => course.coursePath === coursePath
      );
      const singleCourseChallenges = await getAllCourseChallenges(coursePath);
       if (typeof alreadyPresent === "number" && alreadyPresent >= 0) {
        // replace the existing course challenges with the new data
        challengesByCourse[alreadyPresent] = singleCourseChallenges;
      } else {
        challengesByCourse.push(singleCourseChallenges);
      }
    } else {
      challengesByCourse = await getAllCourseChallenges();
    }
    // write the updated challenges array to the store
    await fs.writeFile(CHALLENGES_STORE, JSON.stringify(challengesByCourse));
  } catch (err) {
    throw err; // Rethrow the error or handle it as needed
  }
};
