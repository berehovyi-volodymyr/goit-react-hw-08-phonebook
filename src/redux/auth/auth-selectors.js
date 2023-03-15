export const isUserLogin = ({ auth }) => auth.isLogin;

export const gettUser = ({ auth }) => auth.user;

export const getAuth = ({ auth }) => {
  const { isLogin, token } = auth;
  return { isLogin, token };
};
export const getLoading = ({ auth }) => auth.loading;
