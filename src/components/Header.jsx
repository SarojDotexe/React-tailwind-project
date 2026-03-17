import React, { useState } from "react";
import { Search } from "lucide-react";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full absolute top-0 left-0 z-50">
      <div className="flex items-center justify-between px-10 py-4 bg-black/80 backdrop-blur-md text-white">

        {/* Logo */}
        <div className="text-2xl font-semibold flex items-center gap-2">
          <span className="text-pink-400">Royal</span>
          <span>Bakers</span>
        </div>

        {/* Nav Links */}
        <nav className="flex items-center gap-8 relative">

          {/* Home */}
          <a href="#" className="relative group">
            Home
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-pink-400 transition-all duration-300 group-hover:w-full"></span>
          </a>

          {/* Pages with dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <span className="cursor-pointer flex items-center gap-1">
              Pages
              <span className="w-[2px] h-5 bg-pink-400 ml-2"></span>
            </span>

            {/* Dropdown */}
            <div
              className={`absolute top-8 left-0 bg-pink-400 text-white w-40 transition-all duration-300 ${
                open ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
              }`}
            >
              <a href="#" className="block px-4 py-3 hover:bg-pink-500">About Us</a>
              <a href="#" className="block px-4 py-3 hover:bg-pink-500">Services</a>
              <a href="#" className="block px-4 py-3 hover:bg-pink-500">Gallery</a>
            </div>
          </div>

          {/* Other links */}
          {["Features", "Portfolio", "Blog", "Contact"].map((item, i) => (
            <a key={i} href="#" className="relative group">
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-pink-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
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