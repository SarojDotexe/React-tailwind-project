import { useState, useEffect } from "react";
import profileImg from "../assets/picofme (4).png";

const MISSIONS = [
  {
    icon: "🎂",
    title: "Our Mission",
    text: "To craft pastries that turn every occasion into a cherished memory, using only the finest local ingredients.",
  },
  {
    icon: "✨",
    title: "Our Vision",
    text: "To be the most beloved bakery in the city — a place where artistry, warmth, and flavour meet every day.",
  },
  {
    icon: "🥐",
    title: "What We Do",
    text: "From wedding cakes to morning croissants, we bake everything by hand with patience, skill, and heart.",
  },
];

const TEAM_MEMBERS = [
  {
    name: "Sagnik Saha",
    role: "Head Pastry Chef",
    email: "info@domain.com",
    phone: "1-800-23-456-7890",
    img: profileImg,
  },
  {
    name: "Marie Fontaine",
    role: "Cake Artisan",
    email: "marie@domain.com",
    phone: "1-800-23-456-7891",
    img: "https://i.pravatar.cc/150?img=47",
  },
  {
    name: "Luca Bellini",
    role: "Bread Specialist",
    email: "luca@domain.com",
    phone: "1-800-23-456-7892",
    img: "https://i.pravatar.cc/150?img=15",
  },
];

const TESTIMONIALS = [
  {
    text: "The most exquisite cakes we have ever tasted. Every bite is a masterpiece crafted with love and passion.",
    author: "Emily Carter",
    img: "https://i.pravatar.cc/60?img=5",
  },
  {
    text: "Royal Bakers made our wedding unforgettable. The attention to detail and flavour were simply beyond compare.",
    author: "James & Sofia",
    img: "https://i.pravatar.cc/60?img=9",
  },
  {
    text: "We order from here every week. Their pastries have become a treasured part of our family mornings.",
    author: "Rachel Nguyen",
    img: "https://i.pravatar.cc/60?img=20",
  },
];

const About = () => {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 50);
  }, []);

  const handleSubscribe = () => {
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <div
      style={{
        fontFamily: "'Georgia', 'Times New Roman', serif",
        backgroundColor: "#fdf8f3",
        color: "#2c1a0e",
      }}
    >
      {/* ── Hero Banner ── */}
      <div
        style={{
          background: "linear-gradient(135deg, #7b3f1e 0%, #a05a2c 50%, #c47e45 100%)",
          color: "#fdf8f3",
          minHeight: "220px",
        }}
        className="flex flex-col items-center justify-center text-center py-16 px-6 relative overflow-hidden"
      >
        <div
          className="absolute"
          style={{
            width: "400px", height: "400px", borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.1)", top: "-150px", right: "-100px",
          }}
        />
        <div
          className="absolute"
          style={{
            width: "250px", height: "250px", borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.08)", bottom: "-100px", left: "-50px",
          }}
        />
        <p style={{ letterSpacing: "0.3em", fontSize: "0.75rem", opacity: 0.7, marginBottom: "0.5rem" }}>
          OUR STORY
        </p>
        <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: "bold" }}>About Us</h1>
        <div style={{ width: "60px", height: "2px", backgroundColor: "#f5c87a", marginTop: "1rem", borderRadius: "2px" }} />
        <div className="absolute bottom-4 right-6 text-xs opacity-60 flex gap-2">
          <span>Home</span><span>/</span><span>About</span>
        </div>
      </div>

      {/* ── Welcome / Our Story ── */}
      <section
        className={`max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16 items-center transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div>
          <p style={{ color: "#b08060", letterSpacing: "0.25em", fontSize: "0.75rem", marginBottom: "0.5rem" }}>
            WELCOME TO CAKE
          </p>
          <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", color: "#2c1a0e", lineHeight: 1.2, marginBottom: "1rem" }}>
            Our Story
          </h2>
          <div className="flex items-center gap-3 mb-6">
            <div style={{ height: "1px", width: "40px", backgroundColor: "#c47e45" }} />
            <span style={{ color: "#c47e45", fontSize: "1.2rem" }}>✦</span>
            <div style={{ height: "1px", width: "40px", backgroundColor: "#c47e45" }} />
          </div>
          <p style={{ color: "#6b4226", lineHeight: "1.9", fontSize: "1.05rem" }}>
            Born from a love of flour, butter, and the joy of feeding people, Royal Bakers began in
            a small kitchen with a single recipe and a big dream. Over the decades, our passion has
            grown into a full bakery where every loaf tells a story and every cake holds a celebration.
          </p>
          <p style={{ color: "#6b4226", lineHeight: "1.9", marginTop: "1rem", fontSize: "1.05rem" }}>
            We believe baking is an art — a daily ritual of warmth, precision, and love. From sunrise
            to sunset, our ovens never rest.
          </p>
        </div>

        <div className="relative">
          <div
            style={{
              background: "linear-gradient(135deg, #f5dfc0, #e8c49a)",
              borderRadius: "4px", height: "380px",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "5rem", boxShadow: "8px 8px 0px #e0c4a0", border: "1px solid #dbc8b0",
            }}
          >
            🎂
          </div>
          <div
            className="absolute -bottom-5 -left-5 px-5 py-3 text-center"
            style={{
              backgroundColor: "#7b3f1e", color: "#fdf8f3",
              borderRadius: "4px", boxShadow: "4px 4px 12px rgba(0,0,0,0.15)",
            }}
          >
            <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>30+</div>
            <div style={{ fontSize: "0.7rem", letterSpacing: "0.15em", opacity: 0.8 }}>YEARS BAKING</div>
          </div>
        </div>
      </section>

      {/* ── Mission / Vision / What We Do ── */}
      <section style={{ backgroundColor: "#f7ece0" }} className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {MISSIONS.map((m, i) => (
            <div
              key={i}
              className="p-8 text-center hover:-translate-y-1 transition-transform duration-300"
              style={{
                backgroundColor: "#fff9f4", border: "1px solid #e8d5c0",
                borderRadius: "4px", boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
              }}
            >
              <div style={{ fontSize: "2.8rem", marginBottom: "1rem" }}>{m.icon}</div>
              <h3 style={{ color: "#7b3f1e", fontSize: "1.15rem", fontWeight: "bold", marginBottom: "0.75rem" }}>
                {m.title}
              </h3>
              <div className="flex justify-center items-center gap-2 mb-4">
                <div style={{ height: "1px", width: "24px", backgroundColor: "#c47e45" }} />
                <span style={{ color: "#c47e45", fontSize: "0.7rem" }}>✦</span>
                <div style={{ height: "1px", width: "24px", backgroundColor: "#c47e45" }} />
              </div>
              <p style={{ color: "#6b4226", lineHeight: "1.8", fontSize: "0.95rem" }}>{m.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Meet Our Team ── */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <p style={{ color: "#b08060", letterSpacing: "0.25em", fontSize: "0.75rem", marginBottom: "0.5rem" }}>
            CHEFS
          </p>
          <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", color: "#2c1a0e" }}>Meet Our Team</h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div style={{ height: "1px", width: "50px", backgroundColor: "#c47e45" }} />
            <span style={{ color: "#c47e45" }}>✦</span>
            <div style={{ height: "1px", width: "50px", backgroundColor: "#c47e45" }} />
          </div>
          <p style={{ color: "#6b4226", maxWidth: "600px", margin: "1.5rem auto 0", lineHeight: "1.8" }}>
            Our dedicated artisan bakers and pastry chefs bring decades of craft and creativity
            to every creation that leaves our kitchen.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TEAM_MEMBERS.map((member, i) => (
            <div
              key={i}
              style={{
                backgroundColor: "#fff9f4", border: "1px solid #e8d5c0",
                borderRadius: "4px", overflow: "hidden",
                boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
                transition: "transform 300ms, box-shadow 300ms",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 8px 24px rgba(123,63,30,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.05)";
              }}
            >
              <div style={{ background: "linear-gradient(135deg, #f5dfc0, #e0c4a0)", padding: "2rem 2rem 0" }}>
                <img
                  src={member.img} alt={member.name}
                  style={{
                    width: "110px", height: "110px", borderRadius: "50%",
                    border: "4px solid #fff9f4", margin: "0 auto", display: "block", objectFit: "cover",
                  }}
                />
              </div>
              <div className="p-6 text-center">
                <h4 style={{ color: "#2c1a0e", fontWeight: "bold", fontSize: "1.1rem", marginBottom: "0.25rem" }}>
                  {member.name}
                </h4>
                <p style={{ color: "#c47e45", fontSize: "0.8rem", letterSpacing: "0.1em", marginBottom: "1rem" }}>
                  {member.role.toUpperCase()}
                </p>
                <div className="flex justify-center gap-3 mb-4">
                  {["f", "in", "tw"].map((s) => (
                    <div
                      key={s}
                      style={{
                        width: "32px", height: "32px", borderRadius: "50%",
                        backgroundColor: "#7b3f1e", color: "#fdf8f3",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: "0.7rem", cursor: "pointer",
                      }}
                    >
                      {s}
                    </div>
                  ))}
                </div>
                <div style={{ borderTop: "1px solid #e8d5c0", paddingTop: "0.75rem", color: "#6b4226", fontSize: "0.82rem" }}>
                  <p>✉ {member.email}</p>
                  <p className="mt-1">📞 {member.phone}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section
        style={{ background: "linear-gradient(135deg, #7b3f1e 0%, #a05a2c 100%)", color: "#fdf8f3" }}
        className="py-20 px-6"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p style={{ letterSpacing: "0.25em", fontSize: "0.75rem", opacity: 0.7, marginBottom: "0.5rem" }}>
              OUR CLIENTS
            </p>
            <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}>Talk About Us</h2>
            <div className="flex items-center justify-center gap-3 mt-4">
              <div style={{ height: "1px", width: "50px", backgroundColor: "#f5c87a" }} />
              <span style={{ color: "#f5c87a" }}>✦</span>
              <div style={{ height: "1px", width: "50px", backgroundColor: "#f5c87a" }} />
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <div
                key={i}
                className="p-8"
                style={{
                  backgroundColor: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.15)", borderRadius: "4px",
                }}
              >
                <div style={{ fontSize: "4rem", color: "#f5c87a", lineHeight: 1, marginBottom: "0.5rem", opacity: 0.4 }}>
                  "
                </div>
                <p style={{ lineHeight: "1.8", marginBottom: "1.5rem", opacity: 0.9, fontSize: "0.95rem" }}>
                  {t.text}
                </p>
                <div className="flex items-center gap-3">
                  <img src={t.img} alt={t.author}
                    style={{ width: "44px", height: "44px", borderRadius: "50%", objectFit: "cover" }} />
                  <div>
                    <div style={{ fontWeight: "bold", fontSize: "0.9rem" }}>{t.author}</div>
                    <div style={{ fontSize: "0.75rem", color: "#f5c87a" }}>Valued Customer</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Newsletter ── */}
      <section
        style={{ backgroundColor: "#f7ece0", borderTop: "1px solid #e8d5c0" }}
        className="py-16 px-6 text-center"
      >
        <p style={{ color: "#b08060", letterSpacing: "0.25em", fontSize: "0.75rem", marginBottom: "0.5rem" }}>
          STAY IN THE LOOP
        </p>
        <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)", color: "#2c1a0e", marginBottom: "0.5rem" }}>
          Subscribe to Our Newsletter
        </h2>
        <p style={{ color: "#6b4226", marginBottom: "2rem", fontSize: "0.95rem" }}>
          Fresh recipes, seasonal specials, and sweet offers — straight to your inbox.
        </p>

        {subscribed ? (
          <div style={{
            display: "inline-block", padding: "0.75rem 2rem",
            backgroundColor: "#7b3f1e", color: "#fdf8f3", borderRadius: "4px",
          }}>
            🎉 Thank you for subscribing!
          </div>
        ) : (
          <div className="flex justify-center max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address..."
              style={{
                flex: 1, padding: "0.85rem 1.25rem",
                border: "1px solid #d4b896", borderRight: "none",
                borderRadius: "4px 0 0 4px", backgroundColor: "#fff9f4",
                color: "#2c1a0e", fontSize: "0.9rem", outline: "none",
              }}
            />
            <button
              onClick={handleSubscribe}
              style={{
                padding: "0.85rem 1.75rem", backgroundColor: "#7b3f1e",
                color: "#fdf8f3", border: "none", borderRadius: "0 4px 4px 0",
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

export default About;