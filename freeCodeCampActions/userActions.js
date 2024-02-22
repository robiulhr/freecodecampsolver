import { API_BASE_URL } from "../constants.js";
import axios from "axios";

export function getUserData(app_data_cookie) {
  const userDataPath = "/user/get-session-user";
  let finalUser;
  return new Promise(async (resole, reject) => {
    await axios
      .get(`${API_BASE_URL}${userDataPath}`, {
        headers: {
          Cookie: app_data_cookie,
          "Content-Type": "application/json",
        },
      })
      .then((resp) => {
        const data = resp.data;
        const userName = data.result;
        const user = data.user[userName];
        const name = user.name;
        const picture = user.picture;
        const completedChallenges = user.completedChallenges;
        const about = user.about;
        const email = user.email;
        const joinDate = user.joinDate;
        const finalObj = {
          userName,
          name,
          picture,
          about,
          email,
          joinDate,
          completedChallenges,
        };
        finalUser = finalObj;
        resole(finalUser);
      })
      .catch((err) => {
        reject("something went wrong.");
      });
  });
}
