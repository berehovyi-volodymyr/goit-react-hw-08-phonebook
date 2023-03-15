import { useDispatch } from 'react-redux';
import { logout } from '../../../redux/auth/auth-operation';

const UserMenu = () => {
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
  };
  return (
    <div>
      <p>mango@mail.com</p>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};

export default UserMenu;
