import React, { useState, useEffect } from "react";
import Link from "next/link";
import NavLinks from "./NavLinks";

// Navbar link name & path
const navBarLinks = [
  { title: "home", path: "/" },
  { title: "products", path: "/product/products" },
  { title: "about us", path: "/about" },
  { title: "contact us", path: "/contact" },
];

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [offset, setOffset] = useState(false);

  // Open or close navbar menu
  const menuToggle = () => {
    setMenu(false);
  };

  // fixed navbar on scroll
  useEffect(() => {
    window.onscroll = () => {
      window.scrollY > 300 ? setOffset(true) : setOffset(false);
    };
  });

  return (
    <header
      className={`w-full top-0 h-20 flex justify-between items-center px-4 md:px-10 transition z-50 ${
        offset ? "fixed shadow-md bg-gray-800" : "bg-gray-900"
      }`}
    >
      <Link href="/">
        <a
          className="uppercase text-3xl lg:text-5xl text-blue-800 font-bold"
          onClick={() => setMenu(false)}
        >
          Cool <span className="text-red-700">clothing</span>
        </a>
      </Link>
      <nav>
        <button className="md:hidden" onClick={() => setMenu(!menu)}>
          <span className="">
            {menu ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-red-800 transition-colors"
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
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-blue-800 transition-colors"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </span>
        </button>
        <ul
          className={`fixed left-0 right-0 min-h-screen bg-gray-900 text-white transform ${
            !menu && "translate-x-full"
          } transition duration-200 md:relative md:bg-transparent md:flex md:space-x-4 md:p-0 md:min-h-0 md:translate-x-0 z-50`}
        >
          {navBarLinks.map((link, index) => (
            <NavLinks action={menuToggle} key={index} link={link} />
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
