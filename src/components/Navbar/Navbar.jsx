import { useSelector } from 'react-redux';

import NavbarAuth from './NavbarAuth/NavbarAuth';
import UserMenu from './UserMenu/UserMenu';

import { isUserLogin } from '../../redux/auth/auth-selectors';

const Navbar = () => {
  const isLogin = useSelector(isUserLogin);
  return (
    <>
      {!isLogin && <NavbarAuth />}
      {isLogin && <UserMenu />}
    </>
  );
};

export default Navbar;
