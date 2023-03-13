import NavbarAuth from './components/NavbarAuth/NavbarAuth';
import Register from './pages/Register/Register';
import { Routes, Route } from 'react-router-dom';
import ContactsPage from './pages/ContactsPage/ContactsPage';
import UserMenu from './components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { isUserLogin } from './redux/auth/auth-selectors';
import LoginPage from './pages/LoginPage/LoginPage';

export const App = () => {
  const isLogin = useSelector(isUserLogin);
  return (
    <>
      {!isLogin && <NavbarAuth />}
      {isLogin && <UserMenu />}

      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <ContactsPage />
    </>
  );
};
