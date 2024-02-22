import env from "dotenv";
env.config();

export const BASE_URL = "https://www.freecodecamp.org";
export const API_BASE_URL = "https://api.freecodecamp.org";
export const app_data_cookie_Checker = /^gbuuid=.+; __stripe_mid=.+; __stripe_sid=.+; _csrf=.+; csrf_token=.+; jwt_access_token=.+\..+\..+$/;
export const user_session_cookie_checker = /^connect.sid=.+\.[A-Za-z%0-9]+; _csrf=.+; csrf_token=.+; jwt_access_token=.+\..+\..+$/;
export const coursePathChecker = /^[a-z]+([a-z0-9-_]+[a-z]+)+\.json$/;
export const privateKey = process.env.JWT_PRIVATE_KEY;
export const algorithm = process.env.JWT_ALGORITHM;
export const dev_pass_key = process.env.DEV_PASS_KEY;
export const dev_cookie = process.env.DEV_COOKIE;
