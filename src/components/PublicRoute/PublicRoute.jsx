import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { getAuth } from '../../redux/auth/auth-selectors';

export const PublicRoute = () => {
  const { isLogin } = useSelector(getAuth);

  if (isLogin) {
    return <Navigate to="/contacts" />;
  }

  return <Outlet />;
};
