import fs from "fs/promises";

export const jsonReader = async (filePath, cb) => {
  await fs
    .readFile(filePath)
    .then((fileData) => {
      try {
        const data = fileData.toString();
        const parsedData = data ? JSON.parse(data) : [];
        return cb && cb(null, parsedData);
      } catch (err) {
        return cb && cb(err);
      }
    })
    .catch((err) => {
      return cb && cb(err);
    });
};