import { Link } from 'gatsby';
import React from 'react';
import NavLink from './NavLink';

const Nav = () => (
  <nav className="bg-blue-500">
    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div className="relative flex items-center justify-between h-16">
        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
          <div className="flex-shrink-0 flex items-center sm:mr-6">
            <Link to="/" className="text-white text-2xl font-fancy">
              Youssef Rizkalla
            </Link>
          </div>
          <div className="hidden sm:block sm:ml-6">
            <div className="flex space-x-4">
              <NavLink>Home</NavLink>
              <NavLink>Projects</NavLink>
              <NavLink>Contact Me</NavLink>
              <NavLink>Resume</NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="sm:hidden" id="mobile-menu">
      <div className="px-2 pt-2 pb-3 space-y-1">
        <NavLink>Projects</NavLink>
        <NavLink>Contact Me</NavLink>
        <NavLink>Resume</NavLink>
      </div>
    </div>
  </nav>
);

export default Nav;
