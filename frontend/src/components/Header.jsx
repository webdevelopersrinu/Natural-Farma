import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/shopContext";

const Header = () => {
  const { totalQuantity } = useContext(CartContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-[#F3FAF2] p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-[#29A060] text-2xl font-bold">
          <Link to="/">Natural Farms</Link>
        </div>
        <nav className="hidden md:flex space-x-6 text-white">
          <Link
            to="/products"
            className="hover:text-[#E8F9E9] hover:bg-[#299e60] text-[#299E60] bg-[#D3EBC0] px-3 py-2 rounded-full font-bold"
          >
            Products
          </Link>
          <Link
            to="/contact"
            className="hover:text-[#E8F9E9] hover:bg-[#299e60] text-[#299E60] bg-[#D3EBC0] px-3 py-2 rounded-full font-bold"
          >
            Contact Us
          </Link>
          <Link
            to="/about"
            className="hover:text-[#E8F9E9] hover:bg-[#299e60] text-[#299E60] bg-[#D3EBC0] px-3 py-2 rounded-full font-bold"
          >
            About
          </Link>
          <Link
            to="/login"
            className="hover:text-[#E8F9E9] hover:bg-[#299e60] text-[#299E60] bg-[#D3EBC0] px-3 py-2 rounded-full font-bold"
          >
            Login
          </Link>
          <div className="flex items-center justify-center relative">
            <Link
              to="/cart"
              className="hover:text-[#E8F9E9] hover:bg-[#299e60] text-[#299E60] bg-[#D3EBC0] px-3 py-2 rounded-full font-bold"
            >
              Cart
            </Link>
            {totalQuantity > 0 && (
              <span className=" absolute left-10 bottom-5 hover:text-[#E8F9E9] hover:bg-[#299e60] text-[#299E60] bg-[#D3EBC0] px-1 py-1 rounded-full font-bold border-white">
                {totalQuantity}
              </span>
            )}
          </div>
        </nav>
        <button
          className="md:hidden text-white focus:outline-none"
          aria-label="Open Menu"
          onClick={toggleMobileMenu}
        >
          <svg
            className="w-6 h-6 text-[#29A060]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#F3FAF2] text-black p-4">
          <nav className="flex flex-col space-y-4">
            <Link
              to="/"
              className="hover:text-[#299e60]"
              onClick={toggleMobileMenu}
            >
              Home
            </Link>
            <Link
              to="/products"
              className="hover:text-[#299e60]"
              onClick={toggleMobileMenu}
            >
              Products
            </Link>
            <Link
              to="/contact"
              className="hover:text-[#299e60]"
              onClick={toggleMobileMenu}
            >
              Contact Us
            </Link>
            <Link
              to="/about"
              className="hover:text-[#299e60]"
              onClick={toggleMobileMenu}
            >
              About
            </Link>
            <Link
              to="/login"
              className="hover:text-[#299e60]"
              onClick={toggleMobileMenu}
            >
              Login
            </Link>
            <Link
              to="/cart"
              className="hover:text-[#299e60]"
              onClick={toggleMobileMenu}
            >
              Cart
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
