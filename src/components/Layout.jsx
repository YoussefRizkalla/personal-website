import React from 'react';
import Footer from './Footer';
import Nav from './Nav';

const Layout = ({ children }) => (
  <div className="bg-blue-200">
    <Nav />
    {children}
    <Footer />
  </div>
);

export default Layout;
