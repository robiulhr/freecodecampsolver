import { app_data_cookie_Checker } from "../../constants.js";
import { insertChallengesData } from "../../dbActions/challangeActions.js";
export default async function fetchChallengesController(req, res, next) {
  const query = req.query;
  const { course_path } = query;
  const app_data_cookie = req.headers.app_data_cookie;
  if (!app_data_cookie) res.status(300).send({ message: "please, provide the app_data_cookie header." });
  const isFormatedApp_data_cookie = app_data_cookie_Checker.test(app_data_cookie);
  if (!isFormatedApp_data_cookie) res.status(300).send({ message: "invalid cookie format." });
  try {
    if (course_path) {
      // this is how the fetch url will look like : {{BASE_URL}}/fetchallchallenges?course_path=/page-data/learn/2022/responsive-web-design/page-data.json
      await insertChallengesData(app_data_cookie, course_path);
    } else {
      // this is how the fetch url will look like : {{BASE_URL}}/fetchallchallenges
      await insertChallengesData(app_data_cookie);
    }
    res.send({ message: "challenges inserted successfully." });
  } catch (err) {
    next(err);
  }
}
