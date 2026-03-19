import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

const cakes = [
  {
    id: 1,
    name: "Cream Berry",
    img: "https://images.unsplash.com/photo-1559622214-7b8f8a64c2c3",
    desc: "Delicious berry cake with cream layers."
  },
  {
    id: 2,
    name: "Strawberry Cake",
    img: "https://images.unsplash.com/photo-1565958011703-44f9829ba187",
    desc: "Soft cake topped with fresh strawberries."
  },
  {
    id: 3,
    name: "Raspberry Delight",
    img: "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e",
    desc: "Fresh raspberry cake with creamy frosting."
  },
  {
    id: 4,
    name: "Wedding Cake",
    img: "https://images.unsplash.com/photo-1535254973040-607b474cb50d",
    desc: "Elegant wedding cake for special occasions."
  }
];

const Gallery = () => {
  const [selectedCake, setSelectedCake] = useState(null);

  return (
    <>
      <Header />

      {/* HERO */}
      <section className="relative w-full h-[300px] md:h-[400px]">
        <img
          src="https://images.unsplash.com/photo-1505252585461-04db1eb84625"
          className="w-full h-full object-cover"
          alt=""
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-white text-5xl italic font-serif">
            Gallery
          </h1>
        </div>
      </section>

      {/* GALLERY GRID */}
      <section className="py-20 px-6 md:px-16 bg-gray-100">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

          {cakes.map((cake) => (
            <div
              key={cake.id}
              className="relative group cursor-pointer overflow-hidden"
              onClick={() => setSelectedCake(cake)}
            >
              {/* IMAGE */}
              <img
                src={cake.img}
                className="w-full h-72 object-cover group-hover:scale-110 transition duration-500"
                alt=""
              />

              {/* HOVER OVERLAY */}
              <div className="absolute inset-0 bg-orange-400/80 opacity-0 group-hover:opacity-100 transition flex flex-col items-center justify-center text-white text-center p-4">
                <h3 className="text-xl font-semibold">
                  {cake.name}
                </h3>
                <p className="text-sm mt-2">
                  {cake.desc}
                </p>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* MODAL (on click) */}
      {selectedCake && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          
          <div className="bg-white rounded-xl max-w-md w-full p-6 relative animate-fadeIn">
            
            {/* CLOSE BUTTON */}
            <button
              className="absolute top-2 right-3 text-xl"
              onClick={() => setSelectedCake(null)}
            >
              ✕
            </button>

            <img
              src={selectedCake.img}
              className="w-full h-60 object-cover rounded-lg"
              alt=""
            />

            <h2 className="text-2xl font-semibold mt-4">
              {selectedCake.name}
            </h2>

            <p className="text-gray-500 mt-2">
              {selectedCake.desc}
            </p>

            <button className="mt-4 bg-pink-400 text-white px-6 py-2 rounded-full hover:bg-pink-500 transition">
              Order Now
            </button>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default Gallery;