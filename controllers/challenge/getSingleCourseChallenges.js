import { coursePathChecker } from "../../constants.js";
import getCourseChallenges from "../../serverActions/challengeActions.js";

export default async function getSingleCourseChallengesController(req, res, next) {
  const params = req.params;
  if (!coursePathChecker.test(params.path)) {
    req.status(300).send({ message: "please, provide valid coursepath" });
  }
  const forMattedCoursePath = ("/" + params.path).split("_").join("/");
  try {
    const courseChallenges = await getCourseChallenges(forMattedCoursePath);
    res.send({
      message: "course challenges found successfully.",
      data: courseChallenges,
    });
  } catch (err) {
    next(err);
  }
}
