import { useState } from "react";

const POSTS = [
  {
    id: 1,
    date: "25 Jan",
    title: "The Art of Creamy Waves & Layered Frosting",
    excerpt:
      "Mastering the swirl is one of the most rewarding skills a baker can learn. From chilled bowls to the perfect piping bag angle, we walk you through every step of achieving those beautiful, towering cream peaks on your cakes.",
    likes: 10,
    comments: 15,
    author: "Admin",
    category: "Creamy Flavour",
    img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&q=80",
  },
  {
    id: 2,
    date: "04 Feb",
    title: "Behind the Counter: A Day at the Bakery",
    excerpt:
      "Ever wondered what 4 AM looks like in a professional bakery? We pull back the curtain on the early mornings, fresh dough, and the quiet rituals that make every loaf and pastry something special.",
    likes: 18,
    comments: 22,
    author: "Admin",
    category: "Velvet Cake Recipes",
    img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80",
  },
  {
    id: 3,
    date: "03 Mar",
    title: "Happy Days Begin with a Warm Croissant",
    excerpt:
      "The croissant is a study in patience — dozens of layers of butter folded and rested overnight. We share our classic recipe and the small tricks that separate a good croissant from a truly great one.",
    likes: 14,
    comments: 9,
    author: "Admin",
    category: "Black Forest",
    img: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&q=80",
  },
  {
    id: 4,
    date: "30 Apr",
    title: "Chocolate & Berry: A Match Made in the Oven",
    excerpt:
      "Dark chocolate ganache meets fresh seasonal berries in this showstopper of a tart. We explore why this pairing works so well and how to build the flavours from the base up for maximum impact.",
    likes: 21,
    comments: 17,
    author: "Admin",
    category: "Delicious Berry Cakes",
    img: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&q=80",
  },
];

const CATEGORIES = [
  { name: "Creamy Flavour", count: 125 },
  { name: "Velvet Cake Recipes", count: 97 },
  { name: "Black Forest", count: 56 },
  { name: "Chocolate Flavour", count: 24 },
  { name: "Delicious Berry Cakes", count: 13 },
];

const POPULAR = [
  { title: "How to make the perfect choux pastry", date: "05 Jan, 2016" },
  { title: "5 tips for a fluffier sponge cake", date: "25 Feb, 2016" },
  { title: "The secret to a glossy chocolate glaze", date: "14 Mar, 2016" },
];

const RECENT = [
  { title: "Spring edition: floral sugar decorations", date: "05 Jan, 2016" },
  { title: "Meet our new head pastry chef", date: "25 Feb, 2016" },
  { title: "Behind the scenes: our kitchen upgrade", date: "14 Mar, 2016" },
];

const GALLERY_IMGS = [
  "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=200&q=70",
  "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=200&q=70",
  "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=200&q=70",
  "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=200&q=70",
  "https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=200&q=70",
  "https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?w=200&q=70",
  "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=200&q=70",
  "https://images.unsplash.com/photo-1542826438-bd32f43d626f?w=200&q=70",
];

const CALENDAR_DAYS = [
  [null, null, null, null, null, null, 1],
  [2, 3, 4, 5, 6, 7, 8],
  [9, 10, 11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20, 21, 22],
  [23, 24, 25, 26, 27, 28, 29],
  [30, 31, null, null, null, null, null],
];

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

const Blog = () => {
  const [activeTab, setActiveTab] = useState("popular");
  const [currentPage, setCurrentPage] = useState(1);
  const [activeCategory, setActiveCategory] = useState(null);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const filteredPosts = activeCategory
    ? POSTS.filter((p) => p.category === activeCategory)
    : POSTS;

  return (
    <div style={{ fontFamily: "'Georgia','Times New Roman',serif", backgroundColor: s.cream, color: s.text }}>

      {/* ── Hero Banner ── */}
      <div
        style={{ background: `linear-gradient(135deg, ${s.brown} 0%, ${s.lightBrown} 50%, ${s.accent} 100%)`, color: s.cream, minHeight: "220px" }}
        className="flex flex-col items-center justify-center text-center py-16 px-6 relative overflow-hidden"
      >
        <div className="absolute" style={{ width: "400px", height: "400px", borderRadius: "50%", border: "1px solid rgba(255,255,255,0.1)", top: "-150px", right: "-100px" }} />
        <div className="absolute" style={{ width: "250px", height: "250px", borderRadius: "50%", border: "1px solid rgba(255,255,255,0.08)", bottom: "-100px", left: "-50px" }} />
        <p style={{ letterSpacing: "0.3em", fontSize: "0.75rem", opacity: 0.7, marginBottom: "0.5rem" }}>LATEST NEWS</p>
        <h1 style={{ fontSize: "clamp(2rem,5vw,3.5rem)", fontWeight: "bold" }}>Blog</h1>
        <div style={{ width: "60px", height: "2px", backgroundColor: s.gold, marginTop: "1rem", borderRadius: "2px" }} />
        <div className="absolute bottom-4 right-6 text-xs opacity-60 flex gap-2">
          <span>Home</span><span>/</span><span>Blog</span>
        </div>
      </div>

      {/* ── Main Content ── */}
      <div className="max-w-6xl mx-auto px-6 py-16 flex flex-col lg:flex-row gap-12">

        {/* ── LEFT: Posts ── */}
        <main className="flex-1">
          {filteredPosts.length === 0 ? (
            <p style={{ color: s.muted }}>No posts in this category.</p>
          ) : (
            filteredPosts.map((post) => (
              <article
                key={post.id}
                className="mb-12"
                style={{ borderBottom: `1px solid ${s.border}`, paddingBottom: "3rem" }}
              >
                {/* Thumbnail */}
                <div className="relative overflow-hidden mb-5" style={{ borderRadius: "4px" }}>
                  <img
                    src={post.img}
                    alt={post.title}
                    className="w-full object-cover transition-transform duration-500 hover:scale-105"
                    style={{ height: "280px" }}
                  />
                  {/* Date badge */}
                  <div
                    className="absolute top-4 left-4 text-center px-3 py-2"
                    style={{ backgroundColor: s.brown, color: s.cream, borderRadius: "4px", minWidth: "54px" }}
                  >
                    <div style={{ fontSize: "1.3rem", fontWeight: "bold", lineHeight: 1 }}>
                      {post.date.split(" ")[0]}
                    </div>
                    <div style={{ fontSize: "0.7rem", letterSpacing: "0.1em", opacity: 0.85 }}>
                      {post.date.split(" ")[1]}
                    </div>
                  </div>
                </div>

                {/* Meta */}
                <div className="flex items-center gap-4 mb-3" style={{ fontSize: "0.8rem", color: s.label }}>
                  <span>❤ {post.likes} Likes</span>
                  <span>💬 {post.comments} Comments</span>
                  <span>✍ {post.author}</span>
                  <span
                    className="px-2 py-0.5 rounded"
                    style={{ backgroundColor: s.creamDark, color: s.brown, border: `1px solid ${s.border}` }}
                  >
                    {post.category}
                  </span>
                </div>

                {/* Title */}
                <h2
                  className="mb-3 hover:opacity-70 cursor-pointer transition-opacity"
                  style={{ fontSize: "clamp(1.2rem,2.5vw,1.6rem)", color: s.text, fontWeight: "bold", lineHeight: 1.3 }}
                >
                  {post.title}
                </h2>

                {/* Excerpt */}
                <p style={{ color: s.muted, lineHeight: "1.85", fontSize: "0.97rem", marginBottom: "1.25rem" }}>
                  {post.excerpt}
                </p>

                {/* Read More */}
                <a
                  href="#"
                  className="inline-flex items-center gap-2 transition-colors duration-200"
                  style={{
                    padding: "0.55rem 1.5rem",
                    backgroundColor: s.brown,
                    color: s.cream,
                    borderRadius: "4px",
                    fontSize: "0.82rem",
                    letterSpacing: "0.12em",
                    textDecoration: "none",
                    fontWeight: "bold",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#5c2e14")}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = s.brown)}
                >
                  READ MORE ✦
                </a>
              </article>
            ))
          )}

          {/* Pagination */}
          {!activeCategory && (
            <div className="flex items-center gap-2 mt-2">
              {[1, 2, 3].map((n) => (
                <button
                  key={n}
                  onClick={() => setCurrentPage(n)}
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
        </main>

        {/* ── RIGHT: Sidebar ── */}
        <aside className="w-full lg:w-72 flex flex-col gap-8 shrink-0">

          {/* Search */}
          <div>
            <h4 style={{ color: s.brown, fontWeight: "bold", letterSpacing: "0.1em", fontSize: "0.85rem", marginBottom: "0.75rem", borderBottom: `2px solid ${s.accent}`, paddingBottom: "0.5rem" }}>
              SEARCH
            </h4>
            <div className="flex">
              <input
                type="text"
                placeholder="Search posts..."
                style={{
                  flex: 1, padding: "0.65rem 1rem", border: `1px solid ${s.border}`,
                  borderRight: "none", borderRadius: "4px 0 0 4px",
                  backgroundColor: s.cream, color: s.text, fontSize: "0.88rem", outline: "none",
                }}
              />
              <button
                style={{
                  padding: "0.65rem 1rem", backgroundColor: s.brown, color: s.cream,
                  border: "none", borderRadius: "0 4px 4px 0", cursor: "pointer",
                  fontSize: "0.85rem",
                }}
              >
                🔍
              </button>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h4 style={{ color: s.brown, fontWeight: "bold", letterSpacing: "0.1em", fontSize: "0.85rem", marginBottom: "0.75rem", borderBottom: `2px solid ${s.accent}`, paddingBottom: "0.5rem" }}>
              CATEGORIES
            </h4>
            <ul>
              {CATEGORIES.map((cat, i) => (
                <li key={i}>
                  <button
                    onClick={() => setActiveCategory(activeCategory === cat.name ? null : cat.name)}
                    className="w-full flex justify-between items-center text-left transition-colors duration-200"
                    style={{
                      color: activeCategory === cat.name ? s.brown : s.muted,
                      fontWeight: activeCategory === cat.name ? "bold" : "normal",
                      backgroundColor: "transparent",
                      border: "none",
                      borderBottom: `1px dashed ${s.border}`,
                      cursor: "pointer",
                      fontFamily: "inherit",
                      fontSize: "0.92rem",
                      padding: "0.6rem 0",
                      width: "100%",
                    }}
                  >
                    <span>▸ {cat.name}</span>
                    <span
                      style={{
                        backgroundColor: activeCategory === cat.name ? s.brown : s.creamDark,
                        color: activeCategory === cat.name ? s.cream : s.muted,
                        borderRadius: "12px", fontSize: "0.75rem",
                        padding: "0.1rem 0.6rem", border: `1px solid ${s.border}`,
                      }}
                    >
                      {cat.count}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular / Recent Tabs */}
          <div>
            <div className="flex mb-4" style={{ borderBottom: `2px solid ${s.accent}` }}>
              {["popular", "recent"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  style={{
                    flex: 1, padding: "0.55rem", border: "none", cursor: "pointer",
                    backgroundColor: activeTab === tab ? s.brown : s.creamDark,
                    color: activeTab === tab ? s.cream : s.muted,
                    fontFamily: "inherit", fontSize: "0.8rem",
                    letterSpacing: "0.1em", fontWeight: "bold",
                    transition: "all 200ms",
                    textTransform: "uppercase",
                  }}
                >
                  {tab}
                </button>
              ))}
            </div>
            <ul className="flex flex-col gap-4">
              {(activeTab === "popular" ? POPULAR : RECENT).map((item, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <div
                    style={{
                      width: "28px", height: "28px", borderRadius: "50%",
                      backgroundColor: s.accent, color: s.cream,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: "0.75rem", fontWeight: "bold", flexShrink: 0, marginTop: "2px",
                    }}
                  >
                    {i + 1}
                  </div>
                  <div>
                    <p style={{ color: s.text, fontSize: "0.88rem", lineHeight: 1.4, marginBottom: "0.2rem" }}>
                      {item.title}
                    </p>
                    <p style={{ color: s.label, fontSize: "0.75rem" }}>📅 {item.date}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* From Gallery */}
          <div>
            <h4 style={{ color: s.brown, fontWeight: "bold", letterSpacing: "0.1em", fontSize: "0.85rem", marginBottom: "0.75rem", borderBottom: `2px solid ${s.accent}`, paddingBottom: "0.5rem" }}>
              FROM GALLERY
            </h4>
            <div className="grid grid-cols-4 gap-1">
              {GALLERY_IMGS.map((src, i) => (
                <div
                  key={i}
                  className="overflow-hidden"
                  style={{ borderRadius: "4px", aspectRatio: "1/1" }}
                >
                  <img
                    src={src}
                    alt="gallery"
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110 cursor-pointer"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Mini Calendar */}
          <div>
            <h4 style={{ color: s.brown, fontWeight: "bold", letterSpacing: "0.1em", fontSize: "0.85rem", marginBottom: "0.75rem", borderBottom: `2px solid ${s.accent}`, paddingBottom: "0.5rem" }}>
              ARCHIVES — APRIL 2016
            </h4>
            <table className="w-full text-center" style={{ fontSize: "0.82rem", color: s.muted }}>
              <thead>
                <tr>
                  {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
                    <th key={i} style={{ padding: "4px 0", color: s.brown, fontWeight: "bold" }}>{d}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {CALENDAR_DAYS.map((week, wi) => (
                  <tr key={wi}>
                    {week.map((day, di) => (
                      <td
                        key={di}
                        style={{
                          padding: "5px 0",
                          color: day === 18 ? s.cream : day ? s.muted : "transparent",
                          backgroundColor: day === 18 ? s.brown : "transparent",
                          borderRadius: day === 18 ? "50%" : "0",
                          fontWeight: day === 18 ? "bold" : "normal",
                          cursor: day ? "pointer" : "default",
                        }}
                      >
                        {day ?? ""}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Customer Reviews */}
          <div>
            <h4 style={{ color: s.brown, fontWeight: "bold", letterSpacing: "0.1em", fontSize: "0.85rem", marginBottom: "0.75rem", borderBottom: `2px solid ${s.accent}`, paddingBottom: "0.5rem" }}>
              CUSTOMER REVIEWS
            </h4>
            {[1, 2].map((_, i) => (
              <div
                key={i}
                className="mb-4 p-4"
                style={{ backgroundColor: s.creamDark, border: `1px solid ${s.border}`, borderLeft: `3px solid ${s.accent}`, borderRadius: "4px" }}
              >
                <p style={{ color: s.muted, fontSize: "0.88rem", lineHeight: "1.7", marginBottom: "0.5rem" }}>
                  "Absolutely delightful — every pastry is made with such care and the flavours are genuinely extraordinary."
                </p>
                <p style={{ color: s.brown, fontWeight: "bold", fontSize: "0.8rem", letterSpacing: "0.1em" }}>
                  — MARK ANTONY
                </p>
              </div>
            ))}
          </div>

          {/* Text Widget */}
          <div
            style={{ backgroundColor: s.creamDark, border: `1px solid ${s.border}`, borderRadius: "4px", padding: "1.25rem" }}
          >
            <h4 style={{ color: s.brown, fontWeight: "bold", letterSpacing: "0.1em", fontSize: "0.85rem", marginBottom: "0.6rem" }}>
              TEXT WIDGET
            </h4>
            <p style={{ color: s.muted, fontSize: "0.88rem", lineHeight: "1.7", marginBottom: "0.75rem" }}>
              Visit us every morning for freshly baked bread, pastries, and seasonal specials made right here in our kitchen.
            </p>
            <a
              href="#"
              style={{
                fontSize: "0.8rem", color: s.brown,
                borderBottom: `1px solid ${s.accent}`,
                textDecoration: "none", letterSpacing: "0.08em", fontWeight: "bold",
              }}
            >
              VIEW MORE ✦
            </a>
          </div>
        </aside>
      </div>

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

export default Blog;