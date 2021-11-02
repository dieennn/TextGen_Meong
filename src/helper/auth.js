import { keyLocalStorage } from "./environment.js";
const isLogin = () => {
  const getData = localStorage.getItem(keyLocalStorage);
  return getData ? true : false;
};

export { isLogin };
