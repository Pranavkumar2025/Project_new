import React from "react";
import { FaPlane, FaTrain, FaHotel, FaHome, FaCar } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-[#0F0B0C] text-white p-4 text-xl fixed top-0 w-full z-50 shadow-md">
      <nav className="flex flex-wrap justify-between items-center gap-4 md:justify-center md:gap-8">
        <NavItem to="/" icon={<FaPlane />} text="Flights" />
        <NavItem to="/railway" icon={<FaTrain />} text="Railway / Timetable" />
        <NavItem to="/hotel" icon={<FaHotel />} text="Hotel" />
        <NavItem to="/apartments" icon={<FaHome />} text="Apartments" />
        <NavItem to="/car-rental" icon={<FaCar />} text="Car rental" />
      </nav>
    </header>
  );
};

const NavItem = ({ to, icon, text }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `flex items-center gap-2 cursor-pointer transition-colors duration-300 px-2 py-1 sm:px-4 sm:py-2 rounded-lg ${
        isActive
          ? "text-[#FF4D5A] border-b-4 border-[#FF4D5A] bg-[#1D0E11]"
          : "hover:text-[#FF4D5A]"
      }`
    }
  >
    {icon}
    <span className="text-xs sm:text-sm font-semibold">{text}</span>
  </NavLink>
);

export default Header;