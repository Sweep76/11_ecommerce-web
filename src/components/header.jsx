import React from 'react';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <a href="#" className="hover:text-gray-200">
            Sweep
          </a>
        </div>
        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6">
          <a
            href="#"
            className="text-white hover:text-gray-200 transition"
          >
            Home
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-200 transition"
          >
            Shop
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-200 transition"
          >
            About
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-200 transition"
          >
            Contact
          </a>
        </nav>
        {/* Mobile Menu Button */}
        <button className="block md:hidden focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
