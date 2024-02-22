import { readUserData } from "../../dbActions/userActions.js";

export default async function getUserController(req, res, next) {
  const userId = req.user.userId;
  if (userId) {
    try {
      const user = await readUserData(userId);
      if (!user) {
        res.status(400).send({ message: "user not found." });
      } else {
        res.send({ message: "user found successfully.", data: user });
      }
    } catch (err) {
      next(err);
    }
  }
}
