const isLogin = () => {
  const getData = localStorage.getItem("uid");
  return getData ? true : false;
};

export { isLogin };
