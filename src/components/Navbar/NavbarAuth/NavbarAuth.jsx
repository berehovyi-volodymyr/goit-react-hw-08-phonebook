import { NavLink } from 'react-router-dom';
import styles from './navbarAuth.module.css';

const NavbarAuth = () => {
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>Phonebook</h1>
      <div className={styles.navbar}>
        <NavLink className={styles.link} to="/register">
          Register
        </NavLink>
        <NavLink className={styles.link} to="/login">
          Login
        </NavLink>
      </div>
    </div>
  );
};

export default NavbarAuth;
