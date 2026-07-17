import React from 'react';
import { Link, Outlet } from 'react-router-dom';
const Header: React.FC = () => {
  return (
    <nav>
      <Link to="/home">Home</Link> |
      <Link to="/about">About Us</Link> |
      <Link to="/contact">Contact Us</Link>
      <Outlet />
    </nav>
  );
};
export default Header;
