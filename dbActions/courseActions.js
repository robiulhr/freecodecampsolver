import fs from "fs/promises";
import rootDir from "app-root-path";
import { jsonReader } from "./utils.js";

const COURSES_STORE = rootDir.resolve("/store/allCourses.json");

export const readAllCoursesData = async () => {
  return new Promise(async (resolve, reject) => {
    await jsonReader(COURSES_STORE, async (err, courses) => {
      if (err) {
        reject(err);
      }
      if (courses === undefined) {
        courses = [];
      }
      resolve(courses);
    });
  });
};
