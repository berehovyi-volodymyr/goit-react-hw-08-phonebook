import { Outlet } from 'react-router-dom';
import styles from './layout.module.css';

import Navbar from '../Navbar/Navbar';

export const Layout = () => {
  return (
    <div className={styles.header}>
      <Navbar className={styles.navbar} />
      <Outlet />
    </div>
  );
};
