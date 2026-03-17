import React from "react";
import { Mail, Phone, MapPin, Twitter, Linkedin, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full text-white">

      {/* Newsletter Section */}
      <div className="bg-cyan-500 py-10 px-6 flex flex-col md:flex-row items-center justify-center gap-6">
        <h2 className="text-xl md:text-2xl font-semibold tracking-wide text-center">
          SUBSCRIBE TO OUR <br /> NEWSLETTER
        </h2>

        <div className="flex items-center gap-3">
          <div className="flex items-center bg-white px-4 py-3 rounded">
            <input
              type="email"
              placeholder="Your Email Here"
              className="outline-none text-black w-56"
            />
            <Mail className="text-gray-500" />
          </div>

          <button className="bg-black px-6 py-3 font-semibold hover:bg-gray-800 transition">
            SUBSCRIBE
          </button>
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-black px-10 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Recent Posts */}
        <div>
          <h3 className="font-semibold mb-6">RECENT POSTS</h3>
          <ul className="space-y-3 text-gray-400">
            {[
              "Come aboard were expecting.",
              "No phone no lights no motor car.",
              "Movie star the professor and Mary Ann.",
              "Its pilot Captain William Buck Rogers.",
              "The voyages of the Starship Enterprise.",
            ].map((item, i) => (
              <li key={i} className="hover:text-white cursor-pointer">
                » {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Info Links */}
        <div>
          <h3 className="font-semibold mb-6 uppercase">Information Links</h3>
          <ul className="space-y-3 text-gray-400">
            {[
              "About",
              "Services",
              "Features",
              "Portfolio",
              "24/7 Support",
              "Blog",
              "Contact",
            ].map((item, i) => (
              <li key={i} className="hover:text-white cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold mb-6">CONTACT INFO</h3>
          <div className="space-y-4 text-gray-400">

            <div className="flex items-center gap-3">
              <Mail size={18} className="text-cyan-400" />
              <span>info@anous.com</span>
            </div>

            <div className="flex items-center gap-3">
              <Phone size={18} className="text-cyan-400" />
              <span>P : 1-800-23-456-7890</span>
            </div>

            <div className="flex items-start gap-3">
              <MapPin size={18} className="text-cyan-400 mt-1" />
              <span>
                99 Barnard St - Suite 111 <br />
                United States - GA 22222
              </span>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 pt-3">
              <Twitter className="cursor-pointer hover:text-cyan-400" />
              <Linkedin className="cursor-pointer hover:text-cyan-400" />
              <Facebook className="cursor-pointer hover:text-cyan-400" />
            </div>
          </div>
        </div>

        {/* Quick Contact */}
        <div>
          <h3 className="font-semibold mb-6">QUICK CONTACT</h3>

          <div className="space-y-3">
            <input
              type="text"
              placeholder="Name"
              className="w-full bg-[#0a0a0a] px-3 py-2 outline-none"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-[#0a0a0a] px-3 py-2 outline-none"
            />
            <textarea
              placeholder="Message"
              rows="4"
              className="w-full bg-[#0a0a0a] px-3 py-2 outline-none"
            ></textarea>

            <button className="bg-cyan-500 px-5 py-2 font-semibold hover:bg-cyan-600 transition">
              SEND
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-black border-t border-gray-800 text-center py-6 text-gray-500 text-sm">
        COPYRIGHTS © 2016 ROYALBAKERS. ALL RIGHTS RESERVED
      </div>
    </footer>
  );
};

export default Footer;