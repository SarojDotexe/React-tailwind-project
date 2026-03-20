// ============================================================
//  Features.jsx  –  Royal Bakery "Features / Menu" section
//  Stack: React + Tailwind CSS (no extra packages needed)
//
//  DROP THIS FILE into:  src/pages/Features.jsx
//  (replace whatever was there before – the file was empty)
//
//  Then add this ONE line to your tailwind.config.js (see Step 2 below)
// ============================================================

import { useState, useEffect, useRef } from "react";

// ── All real images from the original site ──────────────────
const IMG = {
  sep:         "https://demoxml.com/html/royalbakery/images/section-seprator.png",
  sepAlt:      "https://demoxml.com/html/royalbakery/images/section-seprator-1.png",
  menuBanner:  "https://demoxml.com/html/royalbakery/images/menu-1.png",
  menu2:       "https://demoxml.com/html/royalbakery/images/menu-2.png",
  menu3:       "https://demoxml.com/html/royalbakery/images/menu-3.png",
  menu4:       "https://demoxml.com/html/royalbakery/images/menu-4.png",
  menu5:       "https://demoxml.com/html/royalbakery/images/menu-5.png",
  menu6:       "https://demoxml.com/html/royalbakery/images/menu-6.png",
  orderOnline: "https://demoxml.com/html/royalbakery/images/order-online.png",
};

// ── Data ────────────────────────────────────────────────────
const MENU_ITEMS = [
  { id: 1, img: IMG.menu2, title: "ROSE CREAMY",          price: 25 },
  { id: 2, img: IMG.menu3, title: "VELVET CAKE",          price: 32 },
  { id: 3, img: IMG.menu4, title: "FLOWERED CAKE",        price: 38 },
  { id: 4, img: IMG.menu5, title: "ROSEBERRY CAKE",       price: 48 },
  { id: 5, img: IMG.menu6, title: "CHOCOLATE BERRY CAKE", price: 54 },
];

const FLAVOURS = [
  { name: "Rose Creamy",          price: 25 },
  { name: "Velvet Cake",          price: 32 },
  { name: "Flowered Cake",        price: 38 },
  { name: "Roseberry Cake",       price: 48 },
  { name: "Chocolate Berry Cake", price: 54 },
];

const STATS = [
  { icon: "😊", target: 4820,  label: "HAPPY CLIENTS" },
  { icon: "☕", target: 12540, label: "COFFEE CUPS"   },
  { icon: "⏱",  target: 9300,  label: "WORKED HOURS"  },
  { icon: "🏪", target: 34,    label: "BRANCHES"      },
];

// ============================================================
//  Shared: Section Heading
// ============================================================
function SectionHeading({ eyebrow, title, sep, desc, light = false }) {
  return (
    <div className="text-center mb-12">
      <p className="text-[11px] tracking-[4px] uppercase font-semibold text-[#c8a951] font-sans mb-2">
        {eyebrow}
      </p>
      <h2
        className={`font-serif text-3xl md:text-4xl font-bold mb-3 ${
          light ? "text-white" : "text-[#2e1503]"
        }`}
      >
        {title}
      </h2>
      <img src={sep} alt="separator" className="mx-auto mb-4" />
      {desc && (
        <p
          className={`max-w-2xl mx-auto text-sm leading-relaxed font-sans ${
            light ? "text-white/60" : "text-gray-400"
          }`}
        >
          {desc}
        </p>
      )}
    </div>
  );
}

// ============================================================
//  SECTION 1 – Our Menu
// ============================================================
function MenuSection() {
  return (
    <section id="menu-section" className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-5">
        <SectionHeading
          eyebrow="Creamy Dishes"
          title="Our Menu"
          sep={IMG.sep}
          desc="The day for a three hour tour a three hour tour then one day he was shooting at some food and up through the ground came a oil that is its a beautiful day."
        />

        {/* Full-width banner */}
        <div className="mb-10">
          <img src={IMG.menuBanner} alt="Menu Banner" className="w-full block" />
        </div>

        {/* 5 cake cards — 3 cols on lg, 2 on md, 1 on sm */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {MENU_ITEMS.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function MenuCard({ item }) {
  return (
    <div className="group bg-white border border-[#e8d8c0] overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl">
      {/* Image with zoom on hover */}
      <div className="overflow-hidden">
        <img
          src={item.img}
          alt={item.title}
          className="w-full block transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Card body */}
      <div className="p-5 pb-6">
        <h3 className="font-serif text-[17px] font-bold text-[#2e1503] mb-2">
          {item.title}{" "}
          <span className="text-[#c8a951] text-sm font-sans font-normal">
            ${item.price}.00
          </span>
        </h3>
        <p className="text-gray-400 text-[13px] leading-relaxed font-sans mb-4">
          The day he wane day he was shooting at some food and up through the
          ground.
        </p>
        <OutlineBtn>Order Now</OutlineBtn>
      </div>
    </div>
  );
}

// ============================================================
//  SECTION 2 – Choose Your Flavour / Order Online
// ============================================================
function FlavourSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [qty, setQty]             = useState(1);
  const [activePill, setActivePill] = useState(0);

  const flavour = FLAVOURS[activeIdx];
  const total   = (flavour.price * qty).toFixed(2);

  const handleFlavour = (i) => {
    setActiveIdx(i);
    setQty(1);
  };

  return (
    <section className="bg-[#2e1503] py-20">
      <div className="max-w-6xl mx-auto px-5">
        <SectionHeading
          eyebrow="Order Online"
          title="Choose your Flavour"
          sep={IMG.sep}
          desc="The day for a three hour tour a three hour tour then one day he was shooting at some food and up through the ground came a oil that is its a beautiful day."
          light
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">

          {/* ── LEFT: flavour list ── */}
          <ul className="col-span-1">
            {FLAVOURS.map((f, i) => (
              <FlavourRow
                key={f.name}
                flavour={f}
                isActive={activeIdx === i}
                onClick={() => handleFlavour(i)}
              />
            ))}
          </ul>

          {/* ── MIDDLE: order box ── */}
          <div className="col-span-1 bg-white/5 border border-white/10 p-8 md:p-10">
            <h3 className="font-serif text-2xl text-white mb-1">{flavour.name}</h3>
            <p className="text-[11px] tracking-[2px] uppercase text-[#c8a951] font-sans mb-6">
              Freshly baked &amp; made to order
            </p>

            {/* Flavour pills */}
            <div className="flex flex-wrap gap-2 mb-6">
              {["Flavours", "Flavours", "Flavours", "Flavours"].map((p, i) => (
                <button
                  key={i}
                  onClick={() => setActivePill(i)}
                  className={`px-4 py-1.5 text-[11px] tracking-[1.5px] uppercase font-sans transition-all duration-200 border cursor-pointer
                    ${activePill === i
                      ? "bg-[#c8a951] border-[#c8a951] text-white"
                      : "bg-transparent border-white/25 text-white/60 hover:bg-[#c8a951] hover:border-[#c8a951] hover:text-white"
                    }`}
                >
                  {p}
                </button>
              ))}
            </div>

            {/* Quantity control */}
            <div className="flex items-center gap-3 mb-5">
              <button
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="w-9 h-9 flex items-center justify-center text-white text-xl border border-white/30 bg-transparent hover:bg-[#c8a951] hover:border-[#c8a951] transition-all duration-200 cursor-pointer"
              >
                −
              </button>
              <span className="font-serif text-3xl text-white min-w-[32px] text-center">
                {qty}
              </span>
              <button
                onClick={() => setQty((q) => q + 1)}
                className="w-9 h-9 flex items-center justify-center text-white text-xl border border-white/30 bg-transparent hover:bg-[#c8a951] hover:border-[#c8a951] transition-all duration-200 cursor-pointer"
              >
                +
              </button>
            </div>

            {/* Live total */}
            <p className="font-serif text-4xl italic text-[#c8a951] mb-6">
              ${total}
            </p>

            <OutlineBtn gold>Order Now</OutlineBtn>

            <p className="mt-4 text-[12px] text-white/40 font-sans">
              For more queries call us at:{" "}
              <a href="tel:18002345678" className="text-[#c8a951] font-semibold">
                1-800-23-456-7890
              </a>
            </p>
          </div>

          {/* ── RIGHT: cake image ── */}
          <div className="col-span-1 hidden lg:flex items-center justify-center">
            <img
              src={IMG.orderOnline}
              alt="Order Online"
              className="max-h-[380px] object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

function FlavourRow({ flavour, isActive, onClick }) {
  return (
    <li
      onClick={onClick}
      className={`flex items-center gap-3 px-3 py-4 border-b border-white/10 cursor-pointer rounded-sm transition-all duration-200
        ${isActive ? "bg-[#c8a951]/15" : "hover:bg-white/5"}`}
    >
      {/* dot */}
      <span
        className={`w-3 h-3 rounded-full border-2 border-[#c8a951] flex-shrink-0 transition-all duration-200
          ${isActive ? "bg-[#c8a951]" : "bg-transparent"}`}
      />
      {/* name */}
      <span
        className={`flex-1 font-serif text-[16px] transition-colors duration-200
          ${isActive ? "text-[#c8a951]" : "text-white/75"}`}
      >
        {flavour.name}
      </span>
      {/* price */}
      <span className="text-[#c8a951] text-[13px] font-bold font-sans">
        ${flavour.price}.00
      </span>
    </li>
  );
}

// ============================================================
//  SECTION 3 – Stats / Counters
// ============================================================
function StatsSection() {
  return (
    <section className="bg-[#9b2335] py-14">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <StatBox key={s.label} stat={s} isLast={i === STATS.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatBox({ stat, isLast }) {
  const [count, setCount]  = useState(0);
  const ref                = useRef(null);
  const animated           = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true;
          const steps    = 60;
          const duration = 1800;
          const inc      = Math.ceil(stat.target / steps);
          let cur        = 0;
          const id = setInterval(() => {
            cur = Math.min(cur + inc, stat.target);
            setCount(cur);
            if (cur >= stat.target) clearInterval(id);
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [stat.target]);

  return (
    <div
      ref={ref}
      className={`text-center py-7 px-4 ${
        !isLast ? "border-r border-white/20" : ""
      }`}
    >
      <span className="text-4xl block mb-3">{stat.icon}</span>
      <h3 className="font-serif text-5xl font-bold text-white leading-none mb-2">
        {count.toLocaleString()}
      </h3>
      <p className="text-[11px] tracking-[3px] uppercase text-white/70 font-sans">
        {stat.label}
      </p>
    </div>
  );
}

// ============================================================
//  Shared: Outline Button
// ============================================================
function OutlineBtn({ children, gold = false }) {
  return (
    <button
      className={`inline-block px-5 py-2 text-[11px] font-bold tracking-[2px] uppercase font-sans border-2 transition-all duration-200 cursor-pointer
        ${gold
          ? "border-[#c8a951] text-white bg-[#c8a951] hover:bg-transparent hover:text-[#c8a951]"
          : "border-[#c8a951] text-[#c8a951] bg-transparent hover:bg-[#c8a951] hover:text-white"
        }`}
    >
      {children}
    </button>
  );
}

// ============================================================
//  DEFAULT EXPORT  ← this is what your router renders
// ============================================================
export default function Features() {
  return (
    <div className="font-sans">
      <MenuSection />
      <FlavourSection />
      <StatsSection />
    </div>
  );
}
