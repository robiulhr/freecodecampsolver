
export function pause(time) {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        resolve();
      }, time);
    } catch (err) {
      reject(err);
    }
  });
}
