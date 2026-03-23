import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Services = () => {
  return (
    <>
      <Header />

      {/* HERO with zoom + overlay */}
      <section className="relative w-full h-[320px] md:h-[420px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1505252585461-04db1eb84625"
          className="w-full h-full object-cover scale-110 hover:scale-125 transition duration-700"
          alt=""
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-6xl italic font-serif tracking-wide">
            Services
          </h1>
        </div>
      </section>

      {/* 30 YEARS SECTION */}
      <section className="py-20 px-6 md:px-16 bg-white grid md:grid-cols-2 items-center gap-12">
        
        {/* image hover effect */}
        <div className="overflow-hidden rounded-xl shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
            className="w-full hover:scale-110 transition duration-500"
            alt=""
          />
        </div>

        <div>
          <h2 className="text-6xl font-bold text-pink-400 drop-shadow">
            30
          </h2>
          <h3 className="text-2xl font-semibold tracking-widest">
            YEARS OF EXCELLENCE
          </h3>

          <h4 className="text-pink-400 italic text-2xl mt-6">
            About Us
          </h4>

          <p className="text-gray-500 mt-4 leading-relaxed">
            The day for a three hour tour a three hour tour then one day he was
            shooting at some food and up through the ground came oil that is a
            beautiful day.
          </p>

          {/* subtle button */}
          <button className="mt-6 px-6 py-2 border border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-white transition">
            Learn More
          </button>
        </div>
      </section>

      {/* ORDER SECTION (glass effect) */}
      <section className="relative py-24 px-6 text-white">
        <img
          src="https://images.unsplash.com/photo-1559620192-032c4bc4674e"
          className="absolute inset-0 w-full h-full object-cover"
          alt=""
        />
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative max-w-5xl mx-auto text-center backdrop-blur-sm bg-white/10 p-10 rounded-xl border border-white/20">
          
          <h2 className="text-pink-400 italic text-3xl">
            Choose your Flavour
          </h2>
          <h3 className="text-xl font-semibold mt-2 tracking-wide">
            ORDER ONLINE
          </h3>

          <p className="mt-6 text-sm md:text-base text-gray-200">
            THE DAY FOR A THREE HOUR TOUR A THREE HOUR TOUR THEN ONE DAY HE WAS
            SHOOTING AT SOME FOOD AND UP THROUGH THE GROUND CAME A OIL THAT IS
            ITS A BEAUTIFUL DAY.
          </p>

          {/* FORM with focus glow */}
          <div className="grid md:grid-cols-3 gap-4 mt-10">
            <input
              type="text"
              placeholder="NAME *"
              className="bg-transparent border border-white px-4 py-3 outline-none focus:border-pink-400 focus:ring-1 focus:ring-pink-400"
            />
            <input
              type="text"
              placeholder="PHONE NUMBER *"
              className="bg-transparent border border-white px-4 py-3 outline-none focus:border-pink-400 focus:ring-1 focus:ring-pink-400"
            />
            <select className="bg-transparent border border-white px-4 py-3 outline-none text-gray-300 focus:border-pink-400">
              <option>FLAVOURS</option>
              <option>Chocolate</option>
              <option>Vanilla</option>
              <option>Strawberry</option>
            </select>
          </div>

          <input
            type="text"
            placeholder="YOUR ADDRESS *"
            className="w-full mt-4 bg-transparent border border-white px-4 py-3 outline-none focus:border-pink-400 focus:ring-1 focus:ring-pink-400"
          />

          {/* animated button */}
          <button className="mt-6 bg-pink-400 px-10 py-3 rounded-full hover:scale-105 hover:bg-pink-500 transition duration-300 shadow-lg">
            ORDER NOW
          </button>
        </div>
      </section>

      {/* NEWSLETTER (better spacing + hover) */}
      <section className="bg-gradient-to-r from-orange-300 to-orange-400 py-12 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between gap-6">
        <h3 className="text-white font-semibold text-lg tracking-wide">
          SUBSCRIBE TO OUR NEWSLETTER
        </h3>

        <div className="flex w-full md:w-auto shadow-lg">
          <input
            type="email"
            placeholder="Your Email Here"
            className="px-4 py-3 w-full md:w-80 outline-none"
          />
          <button className="bg-black text-white px-6 hover:bg-gray-800 transition">
            SUBSCRIBE
          </button>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Services;