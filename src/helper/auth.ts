import { keyLocalStorage } from "./environment";
const isLogin = () => {
  const getData = localStorage.getItem(keyLocalStorage);
  return getData ? true : false;
};

export { isLogin };
