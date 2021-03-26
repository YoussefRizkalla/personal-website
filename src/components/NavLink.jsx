import { Link } from 'gatsby';
import React from 'react';

const NavLink = ({ children, to = '/' }) => (
  <Link
    className="active:bg-blue-400 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none block"
    to={to}
  >
    {children}
  </Link>
);

export default NavLink;
