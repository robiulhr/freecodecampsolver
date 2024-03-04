import { FCCSolverAxios } from "../axios";
export function postReqHandler(url, formData, settersObj) {
  const { loadingSetter, errorSetter, dataSetter } = settersObj;
  loadingSetter(true);
  return new Promise((resolve, reject) => {
    FCCSolverAxios.post("/login", formData)
      .then((resp) => {
        console.log(resp);
        resolve(resp);
      })
      .catch((err) => {
        console.log(err);
        errorSetter(err);
        reject(err);
      });
  });
}
