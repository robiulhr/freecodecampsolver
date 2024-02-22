import rootDir from "app-root-path";
import { jsonReader } from "../utils/dbUtils.js";

const CHALLENGES_STORE = rootDir.resolve("/store/allChallenges.json");

export default function getCourseChallenges(coursePath) {
  return new Promise((resolve, reject) => {
    jsonReader(CHALLENGES_STORE, (err, challenges) => {
      if (err) {
        reject(err);
      }
      if (challenges === undefined) {
        challenges = [];
      }
      if(coursePath){
       const filteredChallenges = challenges.filter(challenge=>{return challenge.coursePath === coursePath}) 
       resolve(filteredChallenges);
      }else{
        resolve(challenges);
      }
    });
  });
}
