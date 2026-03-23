import { useState } from "react";

const cakes = [
  {
    id: 1,
    name: "Cream Berry",
    img: "https://images.unsplash.com/photo-1559622214-7b8f8a64c2c3",
    desc: "Delicious berry cake with cream layers.",
  },
  {
    id: 2,
    name: "Strawberry Cake",
    img: "https://images.unsplash.com/photo-1565958011703-44f9829ba187",
    desc: "Soft cake topped with fresh strawberries.",
  },
  {
    id: 3,
    name: "Raspberry Delight",
    img: "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e",
    desc: "Fresh raspberry cake with creamy frosting.",
  },
  {
    id: 4,
    name: "Wedding Cake",
    img: "https://images.unsplash.com/photo-1535254973040-607b474cb50d",
    desc: "Elegant wedding cake for special occasions.",
  },
  {
    id: 5,
    name: "Chocolate Fudge",
    img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587",
    desc: "Rich chocolate fudge cake with ganache drizzle.",
  },
  {
    id: 6,
    name: "Lemon Drizzle",
    img: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3",
    desc: "Zesty lemon cake with a sweet sugar glaze.",
  },
  {
    id: 7,
    name: "Vanilla Dream",
    img: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d",
    desc: "Classic vanilla sponge with whipped buttercream.",
  },
  {
    id: 8,
    name: "Black Forest",
    img: "https://images.unsplash.com/photo-1488477181946-6428a0291777",
    desc: "Dark chocolate layers with cherries and cream.",
  },
];

const Gallery = () => {
  const [selectedCake, setSelectedCake] = useState(null);

  return (
    <div>
      {/* HERO */}
      <section className="relative w-full h-[300px] md:h-[400px]">
        <img
          src="https://images.unsplash.com/photo-1505252585461-04db1eb84625"
          className="w-full h-full object-cover"
          alt="Gallery hero"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center">
          <p className="text-white text-sm tracking-widest opacity-70 mb-2">
            OUR CREATIONS
          </p>
          <h1 className="text-white text-5xl italic font-serif">Gallery</h1>
          <div className="w-14 h-0.5 bg-yellow-300 mt-4 rounded" />
        </div>
        {/* Breadcrumb */}
        <div className="absolute bottom-4 right-6 text-white text-xs opacity-60 flex gap-2">
          <span>Home</span><span>/</span><span>Gallery</span>
        </div>
      </section>

      {/* GALLERY GRID */}
      <section className="py-20 px-6 md:px-16 bg-[#fdf8f3]">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {cakes.map((cake) => (
            <div
              key={cake.id}
              className="relative group cursor-pointer overflow-hidden rounded"
              style={{
                border: "1px solid #e8d5c0",
                boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
                transition: "transform 300ms, box-shadow 300ms",
              }}
              onClick={() => setSelectedCake(cake)}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 10px 24px rgba(123,63,30,0.18)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 2px 10px rgba(0,0,0,0.06)";
              }}
            >
              {/* IMAGE */}
              <img
                src={cake.img}
                className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
                alt={cake.name}
              />

              {/* HOVER OVERLAY */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white text-center p-4"
                style={{ backgroundColor: "rgba(123,63,30,0.82)" }}
              >
                <span className="text-2xl mb-2">🔍</span>
                <h3 className="text-lg font-semibold">{cake.name}</h3>
                <p className="text-sm mt-1 opacity-90">{cake.desc}</p>
              </div>

              {/* CARD LABEL */}
              <div className="p-3" style={{ backgroundColor: "#fff9f4" }}>
                <h4 className="font-bold text-sm" style={{ color: "#2c1a0e" }}>
                  {cake.name}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MODAL */}
      {selectedCake && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 px-4"
          style={{ backgroundColor: "rgba(0,0,0,0.75)" }}
          onClick={() => setSelectedCake(null)}
        >
          <div
            className="bg-white rounded max-w-md w-full p-6 relative"
            style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.4)" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              className="absolute top-3 right-4 text-lg font-bold"
              style={{ color: "#7b3f1e" }}
              onClick={() => setSelectedCake(null)}
            >
              ✕
            </button>

            <img
              src={selectedCake.img}
              className="w-full h-60 object-cover rounded"
              alt={selectedCake.name}
            />

            <h2
              className="text-2xl font-semibold mt-4"
              style={{ color: "#2c1a0e", fontFamily: "Georgia, serif" }}
            >
              {selectedCake.name}
            </h2>

            <p className="mt-2 text-sm" style={{ color: "#6b4226", lineHeight: "1.7" }}>
              {selectedCake.desc}
            </p>

            <button
              className="mt-5 px-6 py-2 text-white text-sm font-semibold rounded transition"
              style={{ backgroundColor: "#7b3f1e" }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#5c2e14")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#7b3f1e")}
              onClick={() => setSelectedCake(null)}
            >
              ORDER NOW
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;