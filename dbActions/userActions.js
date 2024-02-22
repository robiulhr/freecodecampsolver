import fs from "fs/promises";
import rootDir from "app-root-path";
import { v4 as uuidv4 } from "uuid";
import { jsonReader } from "../utils/dbUtils.js";

const USER_STORE = rootDir.resolve("/store/users.json");

export const insertUserData = async (newUser) => {
  const userCustomId = uuidv4();
  newUser.id = userCustomId;
  return new Promise(async (resolve, reject) => {
    await jsonReader(USER_STORE, async (err, users) => {
      if (err) {
        reject(err);
      }
      // insert new user
      if (users === undefined) {
        users = [];
      }
      const alreadyPresent = users.findIndex(
        (user) => user.userName === newUser.userName
      );
      if (typeof alreadyPresent !== "number" || alreadyPresent < 0) {
        users.push(newUser);
      } else reject({ message: "this user already present." });
      // write the updated users array to the store
      await fs
        .writeFile(USER_STORE, JSON.stringify(users))
        .then(() => {
          resolve(newUser);
        })
        .catch((err) => reject(err));
    });
  });
};

export const readUserData = async (userId) => {
  return new Promise(async (resolve, reject) => {
    if (!userId) reject({ message: "please, provide the userid" });
    await jsonReader(USER_STORE, async (err, users) => {
      if (err) {
        reject(err);
      }
      if (users === undefined) {
        users = [];
      }
      if (userId) {
        const user = users.filter((user) => user.id === userId);
        resolve(user);
      }
    });
  });
};

export const deleteUser = async (id) => {
  let message = "";
  let data = [];
  await jsonReader(USER_STORE, async (err, users) => {
    if (err) {
      console.log("Error reading users", err);
      return;
    }
    if (users === undefined) {
      users = [];
    }
    if (id) {
      users = users.filter((user) => user.id !== id);
      // write the updated users array to the store
      await fs
        .writeFile(USER_STORE, JSON.stringify(users))
        .then(() => {
          message = "success";
        })
        .catch((err) => {
          if (err) {
            console.log("Error writing users", err);
          }
        });
      // set the updated user array to the return data
      data = users;
    } else {
      return;
    }
  });
  return { message };
};

export const addCompletedChallanges = async (id, completedChallenges) => {
  let message = "";
  let data = [];
  await jsonReader(USER_STORE, async (err, users) => {
    if (err) {
      console.log("Error reading users", err);
      return;
    }
    if (users === undefined) {
      users = [];
    }
    if (id) {
      const userIndex = users.findIndex((user) => user.id === id);
      const alreadyCompletedChallenges = users[userIndex].completedChallenges;
      users[userIndex].completedChallenges = [
        ...alreadyCompletedChallenges,
        ...completedChallenges,
      ];
      // write the updated users array to the store
      await fs
        .writeFile(USER_STORE, JSON.stringify(users))
        .then(() => {
          message = "success";
        })
        .catch((err) => {
          if (err) {
            console.log("Error writing users", err);
          }
        });
      // set the updated user array to the return data
      data = [users[noteIndex]];
    } else {
      return;
    }
  });
  return { data: data, message };
};
