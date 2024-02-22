import { algorithm, app_data_cookie_Checker, privateKey, user_session_cookie_checker } from "../../constants.js";
import { insertUserData } from "../../dbActions/userActions.js";
import { generateJWT } from "../../utils/jwtToken.js";
import { getUserData } from "../../freeCodeCampActions/userActions.js";

export default async function loginController(req, res, next) {
  const data = req.body;
  const { user_session_cookie, app_data_cookie } = data;
  if (!user_session_cookie || !app_data_cookie) res.status(300).send({ message: "please provide user_session cookie and app_data_cookie" });
  else {
    const isFormatedUser_session_cookie = user_session_cookie_checker.test(user_session_cookie);
    const isFormatedApp_data_cookie = app_data_cookie_Checker.test(app_data_cookie);
    if (!isFormatedApp_data_cookie || !isFormatedUser_session_cookie) res.status(300).send({ message: "invalid cookie." });
    try {
      const user = await getUserData(app_data_cookie);
      user.user_session_cookie = user_session_cookie;
      user.app_data_cookie = app_data_cookie;
      // insert the user to the database
      const newUser = await insertUserData(user);
      if (newUser) {
        const tokenData = { userId: newUser.id };
        // generate one hour expire time token.
        const token = await generateJWT(tokenData, privateKey, algorithm);
        res.send({ message: "login successfull", access_token: token });
      } else {
        res.status(400).send({ message: "logging failed" });
      }
    } catch (err) {
      next(err);
    }
  }
}
