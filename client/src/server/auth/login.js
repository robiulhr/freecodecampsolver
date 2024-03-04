import { postReqHandler } from "../common/post";

export async function loginHandler(formData, settersObj) {
  await postReqHandler("/login", formData, settersObj);
}
