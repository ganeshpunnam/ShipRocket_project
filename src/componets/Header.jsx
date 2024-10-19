import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Hamburger and close icons from react-icons

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    "Products",
    "Platform",
    "Pricing",
    "Partners",
    "Track Order",
    "Resources",
    "Quick",
  ];

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-white container mx-auto px-4 py-4 flex items-center justify-between sticky z-50">
      <div className="flex items-center gap-20 justify-between w-full">
        {/* Logo */}
        <img
          src="https://sr-website.shiprocket.in/wp-content/uploads/2023/01/shiprocket_logo.svg"
          alt="Shiprocket Logo"
          className="w-[150px] h-[40px] mr-8"
        />

        {/* Navigation Links for Desktop */}
        <nav className="hidden md:flex md:items-center md:whitespace-nowrap space-x-6">
          {navItems.map((item) => (
            <a key={item} className="text-gray-600 hover:text-gray-900" href="#">
              {item}
            </a>
          ))}
        </nav>
      </div>

      {/* Right side buttons */}
      <div className="flex items-center space-x-4">
        <button className="px-4 py-2 text-gray-600 whitespace-nowrap hover:text-gray-900">
          Log In
        </button>
        {/* Hide "Try for Free" button in mobile view */}
        <button className="hidden md:block px-4 py-2 bg-purple-400 whitespace-nowrap text-white rounded-xl text-lg hover:bg-white hover:text-black hover:border-solid hover:border-2 hover:border-purple-600">
          Try for Free
        </button>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="absolute top-16 left-0 w-full bg-white shadow-lg md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-4">
            {navItems.map((item) => (
              <li key={item}>
                <a className="text-gray-600 hover:text-gray-900" href="#">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
