import React from "react";
import { FaBars } from "react-icons/fa";

const Header = ({ toggleSidebar }) => {
  return (
    <header className="mb-6 flex items-center justify-between">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <button className="lg:hidden" onClick={toggleSidebar}>
        <FaBars />
      </button>
    </header>
  );
};

export default Header;
