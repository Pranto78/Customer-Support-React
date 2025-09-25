import React from 'react';

const Navbar = () => {
    return (
      <div className="navbar bg-base-100 shadow-sm">
        <div className="w-full max-w-[1800px] mx-auto flex justify-between items-center">
          <div className="flex-1">
            <a className="btn btn-ghost text-xl font-bold">CS — Ticket System</a>
          </div>
          <div className="flex-none">
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
        </div>
      </div>
    );
};

export default Navbar;