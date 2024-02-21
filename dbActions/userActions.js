import fs from "fs/promises";
import rootDir from "app-root-path";
import { v4 as uuidv4 } from "uuid";
import { jsonReader } from "./utils";

const USER_STORE = rootDir.resolve("/store/user.js");

export const insertUserData = async (user) => {
  const userCustomId = uuidv4();
  user.id = userCustomId;
  let message = "";
  await jsonReader(USER_STORE, async (err, users ) => {
    if (err) {
      console.log("Error reading users", err);
      return;
    }
    // insert new user
    if (users === undefined) {
      users = [];
    }
    users.push(user);
    // write the updated users array to the store
    await fs
      .writeFile(USER_STORE, JSON.stringify(users))
      .then(() => {
        message = "success";
      })
      .catch((err) => {
        if (err) {
          console.log("Error writing notes", err);
        }
      });
  });
  return message;
};



export const readUserData = async (id) => {
  let message = "";
  let data;
  if(!id) throw Error("please, provide user id.")
  await jsonReader(USER_STORE, async (err, users) => {
    if (err) {
      console.log("Error reading users", err);
      return;
    }
    if (users === undefined) {
      users = [];
    }
    if (id) {
      data = users.filter((user) => user.id === id);
    }
    message = "success";
  });
  return { data: data, message };
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
    if (id ) {
      const userIndex = users.findIndex((user) => user.id === id);
      const alreadyCompletedChallenges = users[userIndex].completedChallenges;
      users[userIndex].completedChallenges = [...alreadyCompletedChallenges,...completedChallenges];
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
