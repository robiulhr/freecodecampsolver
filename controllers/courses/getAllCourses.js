import { readAllCoursesData } from "../../dbActions/courseActions.js";

export default async function getAllCoursesController(req, res, next) {
  try {
    const allCourses = await readAllCoursesData();
    res.send({
      message: "fetched all courses successfully.",
      data: allCourses,
    });
  } catch (err) {
    next(err);
  }
}
