import React from 'react';
import { NavLink, Outlet } from 'react-router';

const MainLayout: React.FC = () => {
  return (
    <>
      <div className="navbar bg-base-300">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/" end>
              Basic
            </NavLink>
          </li>
          <li>
            <NavLink to="/fetch" end>
              Fetch
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="m-auto min-h-screen w-[1024px] pt-8">
        <Outlet />
      </div>
    </>
  );
};

export default MainLayout;
