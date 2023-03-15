import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { getAuth } from '../../redux/auth/auth-selectors';

export const PrivateRoute = () => {
  const { isLogin, token } = useSelector(getAuth);

  if (!isLogin && !token) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};
