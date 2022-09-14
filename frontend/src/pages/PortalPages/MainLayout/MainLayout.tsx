import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

function MainLayout() {
  return (
    <div>
      <h1>Bookkeeper!</h1>
      <nav
        style={{
          borderBottom: 'solid 1px',
          paddingBottom: '1rem',
        }}
      >
        <NavLink to="/about">About Us</NavLink> | <NavLink to="/contacts">Contacts</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}

export default MainLayout;
