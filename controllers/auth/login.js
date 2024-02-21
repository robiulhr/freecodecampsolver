import { algorithm, cookieChecker, privateKey } from "../../constants.js";
import { insertUserData } from "../../dbActions/userActions.js";
import { generateJWT } from "../../utils/jwtToken.js";
import { getUserData } from "../../serverActions/userActions.js";

export default async function loginController(req, res, next) {
  const data = req.body;
  const { cookie } = data;
  const isFormatedCookie = cookieChecker.test(cookie);
  if (!isFormatedCookie) res.send({ message: "invalid cookie." });
  try {
    const user = await getUserData(cookie);
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
