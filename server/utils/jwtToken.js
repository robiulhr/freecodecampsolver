import jwt from "jsonwebtoken";

export function generateJWT(data, privateKey, algorithm) {
  return new Promise((resolve, reject) => {
    jwt.sign(
      { exp: Math.floor(Date.now() / 1000) + 60 * 60, data },
      privateKey,
      /**
       * if i use algorithms like ES256 or ER256
       * faces this Error: secretOrPrivateKey must be an asymmetric key when using ES256
       */
    //   { algorithm },
      function (err, token) {
        if (err) reject(err);
        resolve(token);
      }
    );
  });
}

export function verifyJWT(token, privateKey) {
  return new Promise((resolve, reject) => {
    // verify a token symmetric
    jwt.verify(token, privateKey, function (err, decoded) {
      if (err) {
        reject(err);
      }
      resolve(decoded);
    });
  });
}
