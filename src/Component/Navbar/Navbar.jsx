import React from 'react';

const Navbar = () => {
    return (
<div className="navbar bg-base-100 shadow-sm">
      <div className="w-full max-w-[1800px] mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex-1">
          <a className="btn btn-ghost text-xl font-bold">CS — Ticket System</a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-4">
          <ul className="menu menu-horizontal px-1">
            <li><a>Home</a></li>
            <li><a>FAQ</a></li>
            <li><a>Changelog</a></li>
            <li><a>Blog</a></li>
            <li><a>Download</a></li>
            <li><a>Contact</a></li>
          </ul>
          <button className="btn bg-gradient-to-r from-[#632ee3] to-[#9f62f2] text-white">
            + New Ticket
          </button>
        </div>

        {/* Mobile Dropdown */}
        <div className="dropdown dropdown-end md:hidden">
          <label tabIndex={0} className="btn btn-ghost">
            {/* Hamburger Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li><a>Home</a></li>
            <li><a>FAQ</a></li>
            <li><a>Changelog</a></li>
            <li><a>Blog</a></li>
            <li><a>Download</a></li>
            <li><a>Contact</a></li>
            <li>
              <button className="btn bg-gradient-to-r from-[#632ee3] to-[#9f62f2] text-white mt-2 w-full">
                + New Ticket
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    );
};

export default Navbar;