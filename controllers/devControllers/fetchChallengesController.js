import { insertChallengesData } from "../../dbActions/challangeActions.js";
export default async function fetchChallengesController(req, res, next) {
  const query = req.query;
  const { course_path } = query;
  try {
    if (course_path) {
      // this is how the fetch url will look like : {{BASE_URL}}/fetchallchallenges?course_path=/page-data/learn/2022/responsive-web-design/page-data.json
      await insertChallengesData(course_path);
    } else {
      // this is how the fetch url will look like : {{BASE_URL}}/fetchallchallenges
      await insertChallengesData();
    }
    res.send({ message: "challenges inserted successfully." });
  } catch (err) {
    next(err);
  }
}
