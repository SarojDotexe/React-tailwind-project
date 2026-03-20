import { useState, useEffect } from "react";

// =========================================
// STEP 1 DATA — Slides
// =========================================

const slides = [
  {
    id: 1,
    tag: "Artisan Bakery · Est. 2004",
    headline: "Cake for Later,",
    sub: "Cake as a Way of Life.",
    desc: "Handcrafted with love, baked fresh every morning — because every moment deserves something extraordinary.",
    bg: "https://demoxml.com/html/royalbakery/images/slider-4.jpg",
  },
  {
    id: 2,
    tag: "Signature Collection",
    headline: "Love is Like",
    sub: "a Good Cake.",
    desc: "Rich, layered, and worth every bite. Discover flavours that tell a story with every slice.",
    bg: "https://demoxml.com/html/royalbakery/images/slider-5.jpg",
  },
  {
    id: 3,
    tag: "Celebrations · Weddings · Birthdays",
    headline: "Cakes are Special",
    sub: "with Everyone's Happiness.",
    desc: "From birthdays to weddings, let us make your celebration unforgettable — one perfect cake at a time.",
    bg: "https://demoxml.com/html/royalbakery/images/slider-6.jpg",
  },
];

// =========================================
// STEP 2 DATA — Welcome Cards
// =========================================

const welcomeCards = [
  {
    icon: "🎯",
    title: "Our Mission",
    desc: "To craft extraordinary baked goods using the finest ingredients, delivered with heartfelt care.",
  },
  {
    icon: "👁️",
    title: "Our Vision",
    desc: "A world where every celebration is elevated by the perfect, handcrafted cake experience.",
  },
  {
    icon: "🎂",
    title: "What We Do",
    desc: "From custom cakes to daily pastries, we bake memories that last a lifetime.",
  },
];

// =========================================
// STEP 1 COMPONENT — Hero Slider
// =========================================

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => goTo((current + 1) % slides.length), 5500);
    return () => clearInterval(timer);
  }, [current]);

  const goTo = (idx) => {
    if (fading) return;
    setFading(true);
    setTimeout(() => {
      setCurrent(idx);
      setFading(false);
    }, 400);
  };

  const slide = slides[current];

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Background image */}
      <div
        className={`absolute inset-0 transition-opacity duration-500 ${
          fading ? "opacity-0" : "opacity-100"
        }`}
        style={{ background: `url(${slide.bg}) center/cover no-repeat` }}
      />

      {/* Dark overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

      {/* Slide content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div
            className={`max-w-2xl transition-all duration-500 ${
              fading ? "opacity-0 translate-y-6" : "opacity-100 translate-y-0"
            }`}
          >
            {/* Tag line */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-px bg-amber-400" />
              <span className="text-amber-400 text-xs tracking-[0.3em] uppercase font-semibold">
                {slide.tag}
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-white leading-tight mb-1">
              {slide.headline}
            </h1>
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-amber-300 leading-tight mb-6">
              {slide.sub}
            </h1>

            {/* Description */}
            <p className="text-white/70 text-lg leading-relaxed mb-10 max-w-lg">
              {slide.desc}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="bg-amber-400 text-stone-900 font-bold tracking-widest uppercase text-sm px-8 py-4 rounded-full hover:bg-amber-300 transition-all duration-300 hover:scale-105">
                Get Started
              </button>
              <button className="border border-white/40 text-white font-medium tracking-widest uppercase text-sm px-8 py-4 rounded-full hover:border-amber-400 hover:text-amber-400 transition-all duration-300">
                Order Online
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Dot indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`rounded-full transition-all duration-300 ${
              i === current
                ? "w-8 h-2 bg-amber-400"
                : "w-2 h-2 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      {/* Slide counter */}
      <div className="absolute bottom-10 right-10 z-10 hidden md:flex items-center gap-2">
        <span className="text-amber-400 font-serif text-3xl font-bold">
          0{current + 1}
        </span>
        <span className="text-white/30 text-lg">/</span>
        <span className="text-white/30 text-lg">0{slides.length}</span>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-10 left-10 z-10 hidden md:flex flex-col items-center gap-2 opacity-40">
        <div className="w-px h-12 bg-white animate-pulse" />
        <span
          className="text-white text-[10px] tracking-widest"
          style={{ writingMode: "vertical-rl" }}
        >
          SCROLL
        </span>
      </div>
    </section>
  );
};

// =========================================
// STEP 2 COMPONENT — Welcome / About
// =========================================

const WelcomeSection = () => {
  return (
    <section id="about" className="py-24 bg-[#fdf8f3]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-amber-500 text-xs tracking-[0.3em] uppercase font-semibold">
            Our Story
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-stone-900 mt-2 mb-4">
            Welcome To Cake
          </h2>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-amber-400" />
            <span className="text-amber-400 text-xl">✦</span>
            <div className="w-8 h-px bg-amber-400" />
          </div>
          <p className="text-stone-500 leading-relaxed">
            Baked with passion, served with love — every creation is a
            celebration of flavour and artistry.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left — Image */}
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-amber-300 rounded-2xl" />
            <img
              src="https://demoxml.com/html/royalbakery/images/welcome-1.png"
              alt="Welcome to Royal Bakery"
              className="relative rounded-2xl w-full object-cover shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-amber-400 rounded-2xl p-6 text-stone-900 text-center shadow-xl">
              <div className="font-serif text-4xl font-bold">20+</div>
              <div className="text-xs tracking-widest uppercase font-bold mt-1">
                Years of Baking
              </div>
            </div>
          </div>

          {/* Right — Cards */}
          <div className="flex flex-col gap-6 md:pl-4">
            {welcomeCards.map((card, i) => (
              <div
                key={i}
                className="flex gap-5 p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 group"
              >
                <div className="flex-shrink-0 w-14 h-14 bg-amber-50 rounded-xl flex items-center justify-center text-2xl group-hover:bg-amber-400 transition-colors duration-300">
                  {card.icon}
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-stone-900 mb-1">
                    {card.title}
                  </h3>
                  <p className="text-stone-500 text-sm leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

// =========================================
// HOME PAGE — Add new sections here below
// =========================================
// =========================================
// STEP 3 DATA — Flavours
// =========================================

const flavours = [
  {
    name: "Velvet Dream",
    emoji: "🍰",
    color: "#b22222",
    bg: "#1a0404",
    border: "#b2222244",
    desc: "Silky red velvet layers with cream cheese frosting and a hint of cocoa.",
  },
  {
    name: "Gold Honey",
    emoji: "🍯",
    color: "#c8860a",
    bg: "#1a1004",
    border: "#c8860a44",
    desc: "Sweet honey sponge with salted caramel buttercream and gold dust finish.",
  },
  {
    name: "Berry Bliss",
    emoji: "🫐",
    color: "#7b2d8b",
    bg: "#120418",
    border: "#7b2d8b44",
    desc: "Fresh blueberry compote folded into light vanilla cream layers.",
  },
  {
    name: "Choco Noir",
    emoji: "🍫",
    color: "#92400e",
    bg: "#100804",
    border: "#92400e44",
    desc: "Dark chocolate ganache with espresso-soaked sponge and cocoa crumble.",
  },
];

const hours = [
  { day: "Mon – Fri", time: "8:30 AM – 10:30 PM" },
  { day: "Saturday", time: "9:00 AM – 10:30 PM" },
  { day: "Sunday", time: "Closed" },
];

// =========================================
// STEP 3 COMPONENT — Choose Your Flavour
// =========================================

const FlavourSection = () => {
  const [active, setActive] = useState(0);
  const current = flavours[active];

  return (
    <section className="py-24 bg-stone-900 relative overflow-hidden">

      {/* Subtle background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 20% 50%, rgba(245,158,11,0.07) 0%, transparent 60%), radial-gradient(ellipse at 80% 50%, rgba(185,28,28,0.07) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <span className="text-amber-500 text-xs tracking-[0.3em] uppercase font-semibold">
            Order Online
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mt-2 mb-4">
            Choose Your Flavour
          </h2>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-amber-400" />
            <span className="text-amber-400 text-xl">✦</span>
            <div className="w-8 h-px bg-amber-400" />
          </div>
          <p className="text-stone-400 leading-relaxed">
            Select from our hand-picked collection of signature flavours, each
            one crafted to perfection.
          </p>
        </div>

        {/* Flavour pill buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {flavours.map((f, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`px-6 py-3 rounded-full text-sm font-bold tracking-widest uppercase transition-all duration-300 ${
                active === i
                  ? "text-white scale-105 shadow-lg"
                  : "bg-white/10 text-white/60 hover:bg-white/20 hover:text-white"
              }`}
              style={active === i ? { backgroundColor: current.color } : {}}
            >
              {f.emoji} {f.name}
            </button>
          ))}
        </div>

        {/* Active flavour card */}
        <div
          className="rounded-3xl p-10 md:p-16 text-center transition-all duration-500"
          style={{ backgroundColor: current.bg, border: `1px solid ${current.border}` }}
        >
          <div className="text-8xl mb-5">{current.emoji}</div>
          <h3 className="font-serif text-3xl md:text-5xl font-bold text-white mb-3">
            {current.name}
          </h3>
          <p className="text-white/60 max-w-sm mx-auto text-base leading-relaxed mb-10">
            {current.desc}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              className="font-bold tracking-widest uppercase text-sm px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 text-white"
              style={{ backgroundColor: current.color }}
            >
              Order Now
            </button>
            <button className="border border-white/30 text-white font-medium tracking-widest uppercase text-sm px-8 py-4 rounded-full hover:border-amber-400 hover:text-amber-400 transition-all duration-300">
              🚚 Free Delivery
            </button>
          </div>
        </div>

        {/* Working hours */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {hours.map((h, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center">
              <div className="text-amber-400 text-xs tracking-widest uppercase font-bold mb-1">
                {h.day}
              </div>
              <div className="text-white font-medium">{h.time}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
    
  );
  
};
// =========================================
// STEP 4 DATA — Menu Items
// =========================================

const menuTabs = [
  "Party Cakes",
  "Wedding Cakes",
  "Birthday Cakes",
  "Christmas Cakes",
  "New Year Cakes",
];

const menuItems = [
  {
    name: "Velvet Cake",
    price: "$30.00",
    isNew: true,
    desc: "Silky red velvet layers with cream cheese frosting.",
    img: "https://demoxml.com/html/royalbakery/images/menu-7.jpg",
  },
  {
    name: "Flowered Cake",
    price: "$34.00",
    isNew: false,
    desc: "Floral fondant art on moist vanilla sponge.",
    img: "https://demoxml.com/html/royalbakery/images/menu-8.jpg",
  },
  {
    name: "Roseberry Cake",
    price: "$41.00",
    isNew: false,
    desc: "Fresh berries with rose-water cream filling.",
    img: "https://demoxml.com/html/royalbakery/images/menu-9.jpg",
  },
  {
    name: "Choco Berry Cake",
    price: "$48.00",
    isNew: true,
    desc: "Dark chocolate ganache with seasonal berries.",
    img: "https://demoxml.com/html/royalbakery/images/menu-10.jpg",
  },
  {
    name: "White Creamy",
    price: "$20.00",
    isNew: false,
    desc: "Classic white velvet with whipped cloud frosting.",
    img: "https://demoxml.com/html/royalbakery/images/menu-11.jpg",
  },
  {
    name: "Rose Creamy",
    price: "$25.00",
    isNew: true,
    desc: "Rosewater buttercream on light almond sponge.",
    img: "https://demoxml.com/html/royalbakery/images/menu-12.jpg",
  },
];

// =========================================
// STEP 4 COMPONENT — Our Menu
// =========================================

const MenuSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="menu" className="py-24 bg-[#fdf8f3]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <span className="text-amber-500 text-xs tracking-[0.3em] uppercase font-semibold">
            Creamy Dishes
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-stone-900 mt-2 mb-4">
            Our Menu
          </h2>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-amber-400" />
            <span className="text-amber-400 text-xl">✦</span>
            <div className="w-8 h-px bg-amber-400" />
          </div>
          <p className="text-stone-500 leading-relaxed">
            Every cake tells a story. Browse our seasonal selection and find
            your perfect match.
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {menuTabs.map((tab, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 ${
                activeTab === i
                  ? "bg-amber-400 text-stone-900 shadow-md"
                  : "bg-white text-stone-500 hover:bg-amber-50 border border-stone-200"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Menu cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-52">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* New badge */}
                {item.isNew && (
                  <span className="absolute top-3 right-3 bg-amber-400 text-stone-900 text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full">
                    New
                  </span>
                )}
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Card body */}
              <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-serif text-lg font-bold text-stone-900">
                    {item.name}
                  </h3>
                  <span className="text-amber-500 font-bold text-sm">
                    {item.price}
                  </span>
                </div>
                <p className="text-stone-500 text-sm leading-relaxed mb-4">
                  {item.desc}
                </p>
                <button className="w-full py-2 border border-amber-400 text-amber-600 text-xs font-bold tracking-widest uppercase rounded-full hover:bg-amber-400 hover:text-stone-900 transition-all duration-300">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View full menu button */}
        <div className="text-center mt-12">
          <button className="bg-stone-900 text-white font-bold tracking-widest uppercase text-sm px-10 py-4 rounded-full hover:bg-amber-400 hover:text-stone-900 transition-all duration-300">
            View Full Menu →
          </button>
        </div>

      </div>
    </section>
  );
};
// =========================================
// STEP 5 DATA — Gallery
// =========================================

const galleryItems = [
  {
    img: "https://demoxml.com/html/royalbakery/images/gallery-1.jpg",
    title: "Cream Berry",
  },
  {
    img: "https://demoxml.com/html/royalbakery/images/gallery-2.jpg",
    title: "Rose Delight",
  },
  {
    img: "https://demoxml.com/html/royalbakery/images/gallery-3.jpg",
    title: "Velvet Dream",
  },
  {
    img: "https://demoxml.com/html/royalbakery/images/gallery-4.jpg",
    title: "Choco Bliss",
  },
  {
    img: "https://demoxml.com/html/royalbakery/images/gallery-5.jpg",
    title: "Gold Layer",
  },
  {
    img: "https://demoxml.com/html/royalbakery/images/gallery-6.jpg",
    title: "Berry Cloud",
  },
];

// =========================================
// STEP 5 COMPONENT — Our Gallery
// =========================================

const GallerySection = () => {
  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <span className="text-amber-500 text-xs tracking-[0.3em] uppercase font-semibold">
            Gallery
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-stone-900 mt-2 mb-4">
            Our Portfolio
          </h2>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-amber-400" />
            <span className="text-amber-400 text-xl">✦</span>
            <div className="w-8 h-px bg-amber-400" />
          </div>
          <p className="text-stone-500 leading-relaxed">
            A glimpse into the artistry that goes into every single creation
            we produce.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryItems.map((item, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-2xl group cursor-pointer ${
                i === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
              style={{ minHeight: i === 0 ? "420px" : "200px" }}
            >
              {/* Image */}
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                style={{ position: "absolute", inset: 0 }}
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Hover text */}
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <h3 className="text-white font-serif font-bold text-lg">
                  {item.title}
                </h3>
                <p className="text-white/70 text-sm mt-1">View Details →</p>
              </div>
            </div>
          ))}
        </div>

        {/* View more button */}
        <div className="text-center mt-10">
          <button className="border-2 border-stone-900 text-stone-900 font-bold tracking-widest uppercase text-sm px-10 py-4 rounded-full hover:bg-stone-900 hover:text-white transition-all duration-300">
            View More →
          </button>
        </div>

      </div>
    </section>
  );
};
// =========================================
// STEP 6 DATA — Testimonials
// =========================================

const testimonials = [
  {
    name: "Emily Rose",
    role: "Bride",
    text: "Our wedding cake was absolutely breathtaking. Guests are still talking about how it tasted!",
    img: "https://demoxml.com/html/royalbakery/images/testimonial.jpg",
  },
  {
    name: "Marco Chen",
    role: "Event Planner",
    text: "I order from Royal Bakery for every corporate event. Consistently exceptional, beautiful, and delicious.",
    img: "https://demoxml.com/html/royalbakery/images/testimonial.jpg",
  },
  {
    name: "Sarah Johnson",
    role: "Regular Customer",
    text: "The velvet cake is life-changing. I drive 45 minutes just to get my weekly slice. Worth every mile.",
    img: "https://demoxml.com/html/royalbakery/images/testimonial.jpg",
  },
];

// =========================================
// STEP 6 COMPONENT — Testimonials
// =========================================

const TestimonialsSection = () => {
  const [active, setActive] = useState(0);

  // Auto-rotate every 4 seconds
  useEffect(() => {
    const timer = setInterval(
      () => setActive((prev) => (prev + 1) % testimonials.length),
      4000
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-[#fdf8f3]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <span className="text-amber-500 text-xs tracking-[0.3em] uppercase font-semibold">
            Our Clients
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-stone-900 mt-2 mb-4">
            Talk About Us
          </h2>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-amber-400" />
            <span className="text-amber-400 text-xl">✦</span>
            <div className="w-8 h-px bg-amber-400" />
          </div>
          <p className="text-stone-500 leading-relaxed">
            Hear what our happy customers have to say about their experience
            with Royal Bakery.
          </p>
        </div>

        {/* Testimonial card */}
        <div className="max-w-3xl mx-auto">
          <div className="relative" style={{ minHeight: "260px" }}>
            {testimonials.map((t, i) => (
              <div
                key={i}
                className={`transition-all duration-500 ${
                  i === active
                    ? "opacity-100 translate-y-0 relative"
                    : "opacity-0 translate-y-4 absolute inset-0"
                }`}
              >
                <div className="bg-white rounded-3xl p-10 md:p-14 text-center shadow-md">

                  {/* Quote mark */}
                  <div className="text-amber-400 text-6xl font-serif leading-none mb-4">
                    "
                  </div>

                  {/* Quote text */}
                  <p className="text-stone-600 text-lg leading-relaxed italic mb-8">
                    {t.text}
                  </p>

                  {/* Author */}
                  <div className="flex items-center justify-center gap-4">
                    <img
                      src={t.img}
                      alt={t.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-amber-300"
                    />
                    <div className="text-left">
                      <div className="font-serif font-bold text-stone-900">
                        {t.name}
                      </div>
                      <div className="text-amber-500 text-sm">{t.role}</div>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === active
                    ? "w-8 h-2 bg-amber-400"
                    : "w-2 h-2 bg-stone-300 hover:bg-stone-400"
                }`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
// =========================================
// STEP 7 COMPONENT — Newsletter
// =========================================

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!email) return;
    setSubmitted(true);
    setEmail("");
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="py-20 bg-stone-900 relative overflow-hidden">

      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(245,158,11,0.1) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-xl mx-auto px-6 text-center">

        {/* Icon */}
        <div className="text-5xl mb-4">🎂</div>

        {/* Heading */}
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-2">
          Get Sweet Deals
        </h2>
        <p className="text-stone-400 mb-8">
          Subscribe for weekly offers, new flavours, and baking tips.
        </p>

        {/* Success message */}
        {submitted ? (
          <div className="bg-amber-400 text-stone-900 font-bold px-8 py-4 rounded-full text-sm tracking-widest uppercase">
            ✓ You're subscribed!
          </div>
        ) : (
          <div className="flex gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="flex-1 bg-white/10 border border-white/20 text-white placeholder-stone-500 rounded-full px-6 py-4 text-sm focus:outline-none focus:border-amber-400 transition-colors"
            />
            <button
              onClick={handleSubmit}
              className="bg-amber-400 text-stone-900 font-bold text-xs tracking-widest uppercase px-7 py-4 rounded-full hover:bg-amber-300 transition-all duration-300"
            >
              Subscribe
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
const Home = () => {
  return (
    <div>
      <HeroSlider />
      <WelcomeSection />
        <FlavourSection /> 
        <MenuSection />  
         <GallerySection />
           <TestimonialsSection />
              <NewsletterSection /> 
    </div>
  );
};

export default Home;