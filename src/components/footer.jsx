import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-6">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left Section */}
          <div className="mb-4 md:mb-0">
            <h1 className="text-2xl font-bold">Sweep</h1>
            <p className="text-sm mt-1">
              &copy; {new Date().getFullYear()} All Rights Reserved.
            </p>
          </div>
          {/* Center Section */}
          <div className="mb-4 md:mb-0">
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          {/* Right Section: Social Icons */}
          <div className="flex space-x-4">
            <a
              href="#"
              className="bg-white text-blue-600 p-3 rounded-full hover:bg-blue-700 hover:text-white transition"
              aria-label="Facebook"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a
              href="#"
              className="bg-white text-blue-600 p-3 rounded-full hover:bg-blue-700 hover:text-white transition"
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a
              href="#"
              className="bg-white text-blue-600 p-3 rounded-full hover:bg-blue-700 hover:text-white transition"
              aria-label="GitHub"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
