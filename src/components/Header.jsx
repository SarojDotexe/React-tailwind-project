import React, { useState } from "react";
import { Search } from "lucide-react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);

  const linkClass =
    "relative group transition-colors duration-200 hover:text-pink-400";

  const underline =
    "absolute left-0 -bottom-1 w-0 h-[2px] bg-pink-400 transition-all duration-300 group-hover:w-full";

  return (
    <header className="w-full absolute top-0 left-0 z-50">
      <div className="flex items-center justify-between px-10 py-4 bg-black/80 backdrop-blur-md text-white">

        {/* Logo */}
        <NavLink to="/" className="text-2xl font-semibold flex items-center gap-2">
          <span className="text-pink-400">Royal</span>
          <span>Bakers</span>
        </NavLink>

        {/* Nav Links */}
        <nav className="flex items-center gap-8 relative">

          {/* Home */}
          <NavLink
            to="/"
            className={({ isActive }) =>
              `relative group ${isActive ? "text-pink-400" : ""}`
            }
          >
            Home
            <span className={underline}></span>
          </NavLink>

          {/* Pages Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <span className="cursor-pointer flex items-center gap-1 hover:text-pink-400 transition-colors duration-200">
              Pages
              <span className="w-[2px] h-5 bg-pink-400 ml-2"></span>
            </span>

            <div
              className={`absolute top-8 left-0 bg-pink-400 text-white w-40 transition-all duration-300 ${
                open
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible -translate-y-2"
              }`}
            >
              <NavLink
                to="/about"
                className="block px-4 py-3 hover:bg-pink-500"
                onClick={() => setOpen(false)}
              >
                About Us
              </NavLink>
              <NavLink
                to="/services"
                className="block px-4 py-3 hover:bg-pink-500"
                onClick={() => setOpen(false)}
              >
                Services
              </NavLink>
              <NavLink
                to="/gallery"
                className="block px-4 py-3 hover:bg-pink-500"
                onClick={() => setOpen(false)}
              >
                Gallery
              </NavLink>
            </div>
          </div>

          {/* Features, Portfolio, Blog, Contact */}
          {[
            { label: "Features", path: "/features" },
            { label: "Portfolio", path: "/portfolio" },
            { label: "Blog", path: "/blog" },
            { label: "Contact", path: "/contact" },
          ].map((item) => (
            <NavLink
              key={item.label}
              to={item.path}
              className={({ isActive }) =>
                `relative group ${isActive ? "text-pink-400" : ""}`
              }
            >
              {item.label}
              <span className={underline}></span>
            </NavLink>
          ))}

          {/* Search Icon */}
          <Search className="cursor-pointer hover:text-pink-400 transition" />
        </nav>

        {/* Button */}
        <button className="bg-pink-400 px-6 py-2 text-white font-semibold hover:bg-pink-500 transition">
          ORDER ONLINE
        </button>
      </div>
    </header>
  );
};

export default Header;