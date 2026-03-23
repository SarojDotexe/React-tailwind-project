import { useState } from "react";

const CATEGORIES = ["All", "Cakes", "Pastries", "Breads", "Cupcakes", "Seasonal"];

const ITEMS = [
  {
    id: 1,
    title: "Cream Berry Delight",
    desc: "A light sponge layered with fresh cream and seasonal berries.",
    category: "Cakes",
    img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=80",
  },
  {
    id: 2,
    title: "Velvet Dream Cake",
    desc: "Classic red velvet with a smooth cream cheese frosting.",
    category: "Cakes",
    img: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=600&q=80",
  },
  {
    id: 3,
    title: "Butter Croissant",
    desc: "Flaky, golden croissants baked fresh every morning.",
    category: "Pastries",
    img: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600&q=80",
  },
  {
    id: 4,
    title: "Chocolate Ganache Tart",
    desc: "Dark chocolate ganache on a crisp shortcrust pastry base.",
    category: "Pastries",
    img: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&q=80",
  },
  {
    id: 5,
    title: "Sourdough Loaf",
    desc: "Slow-fermented sourdough with a perfectly crackly crust.",
    category: "Breads",
    img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80",
  },
  {
    id: 6,
    title: "Artisan Rye Bread",
    desc: "Dense, hearty rye bread with caraway seeds.",
    category: "Breads",
    img: "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=600&q=80",
  },
  {
    id: 7,
    title: "Rose Petal Cupcake",
    desc: "Vanilla cupcake topped with rose buttercream and edible petals.",
    category: "Cupcakes",
    img: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=600&q=80",
  },
  {
    id: 8,
    title: "Lemon Zest Cupcake",
    desc: "Light lemon sponge with tangy lemon curd filling.",
    category: "Cupcakes",
    img: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=600&q=80",
  },
  {
    id: 9,
    title: "Festive Yule Log",
    desc: "Seasonal chocolate roulade dusted with icing sugar.",
    category: "Seasonal",
    img: "https://images.unsplash.com/photo-1542826438-bd32f43d626f?w=600&q=80",
  },
  {
    id: 10,
    title: "Spring Strawberry Cake",
    desc: "Fresh strawberries folded into a light chiffon cake.",
    category: "Seasonal",
    img: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=600&q=80",
  },
  {
    id: 11,
    title: "Éclair au Chocolat",
    desc: "Choux pastry filled with crème pâtissière and topped with dark chocolate.",
    category: "Pastries",
    img: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&q=80",
  },
  {
    id: 12,
    title: "Opera Cake",
    desc: "Layers of almond sponge, coffee buttercream, and chocolate ganache.",
    category: "Cakes",
    img: "https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?w=600&q=80",
  },
];

const ITEMS_PER_PAGE = 9;

const s = {
  brown: "#7b3f1e",
  lightBrown: "#a05a2c",
  accent: "#c47e45",
  gold: "#f5c87a",
  cream: "#fdf8f3",
  creamDark: "#f7ece0",
  border: "#e8d5c0",
  text: "#2c1a0e",
  muted: "#6b4226",
  label: "#b08060",
};

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [lightbox, setLightbox] = useState(null);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const filtered =
    activeCategory === "All"
      ? ITEMS
      : ITEMS.filter((i) => i.category === activeCategory);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated = filtered.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    setCurrentPage(1);
  };

  return (
    <div
      style={{
        fontFamily: "'Georgia','Times New Roman',serif",
        backgroundColor: s.cream,
        color: s.text,
      }}
    >
      {/* ── Hero Banner ── */}
      <div
        style={{
          background: `linear-gradient(135deg, ${s.brown} 0%, ${s.lightBrown} 50%, ${s.accent} 100%)`,
          color: s.cream,
          minHeight: "220px",
        }}
        className="flex flex-col items-center justify-center text-center py-16 px-6 relative overflow-hidden"
      >
        <div
          className="absolute"
          style={{ width: "400px", height: "400px", borderRadius: "50%", border: "1px solid rgba(255,255,255,0.1)", top: "-150px", right: "-100px" }}
        />
        <div
          className="absolute"
          style={{ width: "250px", height: "250px", borderRadius: "50%", border: "1px solid rgba(255,255,255,0.08)", bottom: "-100px", left: "-50px" }}
        />
        <p style={{ letterSpacing: "0.3em", fontSize: "0.75rem", opacity: 0.7, marginBottom: "0.5rem" }}>
          OUR CREATIONS
        </p>
        <h1 style={{ fontSize: "clamp(2rem,5vw,3.5rem)", fontWeight: "bold" }}>Portfolio</h1>
        <div style={{ width: "60px", height: "2px", backgroundColor: s.gold, marginTop: "1rem", borderRadius: "2px" }} />
        <div className="absolute bottom-4 right-6 text-xs opacity-60 flex gap-2">
          <span>Home</span><span>/</span><span>Portfolio</span>
        </div>
      </div>

      {/* ── Filter Tabs ── */}
      <section className="max-w-6xl mx-auto px-6 pt-14 pb-4">
        <div className="flex flex-wrap justify-center gap-3">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              style={{
                padding: "0.5rem 1.4rem",
                backgroundColor: activeCategory === cat ? s.brown : s.creamDark,
                color: activeCategory === cat ? s.cream : s.muted,
                border: `1px solid ${activeCategory === cat ? s.brown : s.border}`,
                borderRadius: "4px",
                cursor: "pointer",
                fontFamily: "inherit",
                fontSize: "0.85rem",
                letterSpacing: "0.08em",
                fontWeight: activeCategory === cat ? "bold" : "normal",
                transition: "all 200ms",
              }}
              onMouseEnter={(e) => {
                if (activeCategory !== cat) {
                  e.currentTarget.style.backgroundColor = s.border;
                }
              }}
              onMouseLeave={(e) => {
                if (activeCategory !== cat) {
                  e.currentTarget.style.backgroundColor = s.creamDark;
                }
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* ── Gallery Grid ── */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        {paginated.length === 0 ? (
          <p className="text-center" style={{ color: s.muted }}>
            No items in this category.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginated.map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden cursor-pointer"
                style={{
                  borderRadius: "4px",
                  border: `1px solid ${s.border}`,
                  boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                  transition: "transform 300ms, box-shadow 300ms",
                }}
                onClick={() => setLightbox(item)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow = "0 12px 28px rgba(123,63,30,0.18)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.06)";
                }}
              >
                {/* Image */}
                <div className="overflow-hidden" style={{ height: "240px" }}>
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Hover overlay */}
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundColor: "rgba(123,63,30,0.82)" }}
                >
                  <span style={{ color: s.gold, fontSize: "2rem", marginBottom: "0.5rem" }}>🔍</span>
                  <p style={{ color: s.cream, fontWeight: "bold", fontSize: "1rem", letterSpacing: "0.05em" }}>
                    View
                  </p>
                </div>

                {/* Card footer */}
                <div
                  style={{
                    padding: "1rem 1.25rem",
                    backgroundColor: s.cream,
                    borderTop: `1px solid ${s.border}`,
                  }}
                >
                  {/* Category tag */}
                  <span
                    style={{
                      fontSize: "0.7rem",
                      letterSpacing: "0.15em",
                      color: s.accent,
                      fontWeight: "bold",
                      display: "block",
                      marginBottom: "0.3rem",
                    }}
                  >
                    {item.category.toUpperCase()}
                  </span>
                  <h3
                    style={{
                      color: s.text,
                      fontWeight: "bold",
                      fontSize: "1rem",
                      marginBottom: "0.3rem",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p style={{ color: s.muted, fontSize: "0.83rem", lineHeight: "1.6" }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ── Pagination ── */}
        {totalPages > 1 && (
          <div className="flex justify-center gap-2 mt-12">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
              <button
                key={n}
                onClick={() => { setCurrentPage(n); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                style={{
                  width: "38px", height: "38px", borderRadius: "4px",
                  backgroundColor: currentPage === n ? s.brown : s.creamDark,
                  color: currentPage === n ? s.cream : s.muted,
                  border: `1px solid ${currentPage === n ? s.brown : s.border}`,
                  cursor: "pointer", fontFamily: "inherit", fontSize: "0.9rem",
                  transition: "all 200ms",
                }}
              >
                {n}
              </button>
            ))}
          </div>
        )}
      </section>

      {/* ── Lightbox ── */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          style={{ backgroundColor: "rgba(0,0,0,0.85)" }}
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative max-w-2xl w-full"
            style={{ borderRadius: "4px", overflow: "hidden", backgroundColor: s.cream }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightbox.img}
              alt={lightbox.title}
              className="w-full object-cover"
              style={{ maxHeight: "420px" }}
            />
            <div style={{ padding: "1.25rem 1.5rem" }}>
              <span style={{ fontSize: "0.72rem", letterSpacing: "0.15em", color: s.accent, fontWeight: "bold" }}>
                {lightbox.category.toUpperCase()}
              </span>
              <h3 style={{ color: s.text, fontWeight: "bold", fontSize: "1.2rem", margin: "0.3rem 0" }}>
                {lightbox.title}
              </h3>
              <p style={{ color: s.muted, fontSize: "0.9rem", lineHeight: "1.7" }}>
                {lightbox.desc}
              </p>
            </div>
            {/* Close button */}
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-3 right-3 flex items-center justify-center"
              style={{
                width: "32px", height: "32px", borderRadius: "50%",
                backgroundColor: s.brown, color: s.cream,
                border: "none", cursor: "pointer", fontSize: "1rem",
                fontWeight: "bold",
              }}
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* ── Newsletter ── */}
      <section
        style={{ backgroundColor: s.creamDark, borderTop: `1px solid ${s.border}` }}
        className="py-16 px-6 text-center"
      >
        <p style={{ color: s.label, letterSpacing: "0.25em", fontSize: "0.75rem", marginBottom: "0.5rem" }}>
          STAY IN THE LOOP
        </p>
        <h2 style={{ fontSize: "clamp(1.5rem,3vw,2.2rem)", color: s.text, marginBottom: "0.5rem" }}>
          Subscribe to Our Newsletter
        </h2>
        <p style={{ color: s.muted, marginBottom: "2rem", fontSize: "0.95rem" }}>
          Fresh recipes, seasonal specials, and sweet offers — straight to your inbox.
        </p>
        {subscribed ? (
          <div style={{ display: "inline-block", padding: "0.75rem 2rem", backgroundColor: s.brown, color: s.cream, borderRadius: "4px" }}>
            🎉 Thank you for subscribing!
          </div>
        ) : (
          <div className="flex justify-center max-w-md mx-auto">
            <input
              type="email"
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              placeholder="Your email address..."
              style={{
                flex: 1, padding: "0.85rem 1.25rem",
                border: `1px solid ${s.border}`, borderRight: "none",
                borderRadius: "4px 0 0 4px", backgroundColor: s.cream,
                color: s.text, fontSize: "0.9rem", outline: "none",
              }}
            />
            <button
              onClick={() => newsletterEmail && setSubscribed(true)}
              style={{
                padding: "0.85rem 1.75rem", backgroundColor: s.brown,
                color: s.cream, border: "none", borderRadius: "0 4px 4px 0",
                cursor: "pointer", fontFamily: "inherit", fontSize: "0.85rem", letterSpacing: "0.1em",
              }}
            >
              SUBSCRIBE
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

export default Portfolio;