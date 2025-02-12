import React from 'react';
import { NavLink, Outlet } from 'react-router';

const MainLayout: React.FC = () => {
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start"></div>
        <div className="navbar-center">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to="/" end>
                Basic
              </NavLink>
            </li>
            <li>
              <NavLink to="/fetch">Fetch</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-[1024px] pt-16 m-auto min-h-screen">
        <Outlet />
      </div>
    </>
  );
};

export default MainLayout;
