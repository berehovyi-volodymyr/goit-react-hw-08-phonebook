import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../../redux/auth/auth-operation';
import styles from './userMenu.module.css';

import { getUser } from '../../../redux/auth/auth-selectors';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { name } = useSelector(getUser);

  const onLogout = () => {
    dispatch(logout());
  };
  return (
    <div className={styles.userMenu}>
      <p className={styles.name}>{name}</p>
      <button onClick={onLogout} className={styles.button}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
