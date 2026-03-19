import React from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

const About = () => {
  return (
    <>
      <Header />

      <div className="w-full">

        {/* HERO SECTION */}
        <section className="relative w-full h-[300px] md:h-[400px]">
          <img
            src="https://images.unsplash.com/photo-1505252585461-04db1eb84625"
            alt="cake"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h1 className="text-white text-4xl md:text-5xl font-serif italic">
              About Us
            </h1>
          </div>
        </section>

        {/* TESTIMONIAL SECTION */}
        <section className="py-16 bg-white text-center px-4">
          <h2 className="text-pink-400 text-3xl italic mb-2">
            Talk About Us
          </h2>
          <h3 className="text-xl font-semibold tracking-wide mb-6">
            OUR CLIENTS
          </h3>

          <div className="max-w-2xl mx-auto">
            <p className="text-gray-500 italic">
              "The day for a three hour tour a three hour tour then one day he
              was shooting at some food and up through the ground came a oil
              that is its a beautiful day."
            </p>

            <div className="mt-8 flex flex-col items-center">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="client"
                className="w-20 h-20 rounded-full object-cover"
              />
              <p className="mt-3 font-semibold tracking-wide">
                BRADSHAW <span className="text-gray-400">/ Co-Founder</span>
              </p>
            </div>
          </div>

          {/* dots */}
          <div className="flex justify-center gap-2 mt-6">
            <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
            <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
            <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
          </div>
        </section>

        {/* STORY SECTION */}
        <section className="py-16 bg-gray-50 px-6 md:px-16">
          <div className="text-center mb-12">
            <h2 className="text-pink-400 text-3xl italic">
              Welcome To Cake
            </h2>
            <h3 className="text-xl font-semibold mt-2">
              OUR STORY
            </h3>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              The day for a three hour tour a three hour tour then one day he
              was shooting at some food and up through the ground came a oil
              that is its a beautiful day.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-center">

            {/* IMAGE */}
            <img
              src="https://images.unsplash.com/photo-1606313564200-e75d5e30476c"
              alt="cake"
              className="w-full max-w-md mx-auto"
            />

            {/* RIGHT CONTENT */}
            <div className="space-y-8">

              <div className="flex gap-4">
                <div className="w-14 h-14 bg-yellow-400 rounded-full flex items-center justify-center text-white text-xl">
                  🧁
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Our Mission</h4>
                  <p className="text-gray-500 text-sm mt-2">
                    The day for a three hour tour a three hour tour then one
                    day he was shooting.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-14 h-14 bg-pink-400 rounded-full flex items-center justify-center text-white text-xl">
                  🎂
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Our Vision</h4>
                  <p className="text-gray-500 text-sm mt-2">
                    The day for a three hour tour a three hour tour then one
                    day he was shooting.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-14 h-14 bg-blue-400 rounded-full flex items-center justify-center text-white text-xl">
                  🍰
                </div>
                <div>
                  <h4 className="text-lg font-semibold">What We Do</h4>
                  <p className="text-gray-500 text-sm mt-2">
                    The day for a three hour tour a three hour tour then one
                    day he was shooting.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

      </div>

      <Footer />
    </>
  );
};

export default About;