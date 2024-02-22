import getCourseChallenges from "../../serverActions/challengeActions.js";

export default async function getAllCourseChallengesController(req, res, next) {
  try {
    const allCourseChallenges = await getCourseChallenges();
    res.send({
      message: "all course challenges found successfully.",
      data: allCourseChallenges,
    });
  } catch (err) {
    next(err);
  }
}
