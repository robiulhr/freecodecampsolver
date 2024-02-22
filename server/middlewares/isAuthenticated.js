import { privateKey } from "../constants.js";
import { verifyJWT } from "../utils/jwtToken.js";
export default async function isAuthenticated(req, res, next) {
  const authToken = req.headers.authorization.slice(7);
  try {
    const decoded = await verifyJWT(authToken, privateKey);
    if (decoded) {
      req.user = decoded.data;
      next();
    }
  } catch (err) {
    next(err);
  }
}
