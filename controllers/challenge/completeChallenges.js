import { completeChallenge } from "../../freeCodeCampActions/challengeActions.js";
import { pause } from "../../utils/utils.js";

export default async function completeChallengesController(req, res, next) {
  const data = req.body;
  if (!Array.isArray(data)) {
    res.status(300).send({ message: "please, provide a valid array." });
  } else {
    const validationErrors = [];
    const challengePromises = data.map((challenge, index) => {
      const { id, challengeType } = challenge;
      if (!id || typeof challengeType !== "number") {
        validationErrors.push(
          `Invalid challenge at index ${index}: Missing id or challengeType is not a number.`
        );
        return Promise.resolve(); // Return a resolved promise to keep array lengths consistent
      } else {
        return pause(100).then(() => completeChallenge({ id, challengeType }));
      }
    });
    try {
      if (validationErrors.length > 0) {
        res.status(400).send({
          message: "Validation errors occurred.",
          errors: validationErrors,
        });
      } else {
        await Promise.all(challengePromises).finally(() => {
          res.send({ message: "successfull." });
        });
      }
    } catch (err) {
      next(err);
    }
  }
}
