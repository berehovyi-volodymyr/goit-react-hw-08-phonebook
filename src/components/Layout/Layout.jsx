import { Outlet } from 'react-router-dom';

import Navbar from '../Navbar/Navbar';

export const Layout = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
