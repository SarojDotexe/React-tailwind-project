import React from "react";

const Hero = () => {
  return (
    <div className="relative h-screen w-full">
      
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1601972599720-36938d4ecd31"
        alt="cake"
        className="w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-orange-400/80 backdrop-blur-sm px-10 py-12 max-w-3xl text-center rounded-md">

          {/* Heading */}
          <h1 className="text-white text-4xl md:text-5xl font-semibold mb-4 font-[cursive]">
            Love is like a Good Cake
          </h1>

          {/* Paragraph */}
          <p className="text-white text-sm md:text-base mb-6">
            the day for a three hour tour a three hour tour then one day he was 
            shooting at some food and up through the ground came a oil...
          </p>

          {/* Buttons */}
          <div className="flex justify-center gap-4">
            <button className="bg-black text-white px-6 py-2 font-semibold">
              GET STARTED
            </button>

            <button className="border border-white text-white px-6 py-2 font-semibold hover:bg-white hover:text-black transition">
              ORDER ONLINE
            </button>
          </div>
        </div>
      </div>

      {/* Optional arrows */}
      <button className="absolute left-5 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full">
        ◀
      </button>
      <button className="absolute right-5 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full">
        ▶
      </button>

    </div>
  );
};

export default Hero;