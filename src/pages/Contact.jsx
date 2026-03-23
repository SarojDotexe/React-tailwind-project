import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
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
        {/* Decorative rings */}
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
          REACH OUT
        </p>
        <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: "bold" }}>Contact</h1>
        <div
          style={{
            width: "60px", height: "2px", backgroundColor: "#f5c87a",
            marginTop: "1rem", borderRadius: "2px",
          }}
        />

        {/* Breadcrumb */}
        <div className="absolute bottom-4 right-6 text-xs opacity-60 flex gap-2">
          <span>Home</span><span>/</span><span>Contact</span>
        </div>
      </div>

      {/* ── Get In Touch ── */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16">

        {/* Left — Info */}
        <div>
          <p style={{ color: "#b08060", letterSpacing: "0.25em", fontSize: "0.75rem", marginBottom: "0.5rem" }}>
            CONTACT
          </p>
          <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", color: "#2c1a0e", lineHeight: 1.2, marginBottom: "1rem" }}>
            Get In Touch
          </h2>

          {/* Divider */}
          <div className="flex items-center gap-3 mb-6">
            <div style={{ height: "1px", width: "40px", backgroundColor: "#c47e45" }} />
            <span style={{ color: "#c47e45", fontSize: "1.2rem" }}>✦</span>
            <div style={{ height: "1px", width: "40px", backgroundColor: "#c47e45" }} />
          </div>

          <p style={{ color: "#6b4226", lineHeight: "1.9", fontSize: "1rem", marginBottom: "2rem" }}>
            We would love to hear from you. Whether you have a question about our products,
            want to place a custom order, or just want to say hello — our team is here for you.
          </p>

          {/* Branch Address */}
          <div
            className="mb-6 p-6"
            style={{
              backgroundColor: "#fff9f4", border: "1px solid #e8d5c0",
              borderLeft: "4px solid #c47e45", borderRadius: "4px",
            }}
          >
            <h4
              style={{
                color: "#7b3f1e", fontWeight: "bold", fontSize: "0.85rem",
                letterSpacing: "0.15em", marginBottom: "0.75rem",
              }}
            >
              📍 BRANCH ADDRESS
            </h4>
            <p style={{ color: "#6b4226", lineHeight: "1.9", fontSize: "0.95rem" }}>
              1905A, Brook Downtown,<br />
              North California, CA 19A34<br />
              United States
            </p>
          </div>

          {/* Contact Info */}
          <div
            className="p-6"
            style={{
              backgroundColor: "#fff9f4", border: "1px solid #e8d5c0",
              borderLeft: "4px solid #c47e45", borderRadius: "4px",
            }}
          >
            <h4
              style={{
                color: "#7b3f1e", fontWeight: "bold", fontSize: "0.85rem",
                letterSpacing: "0.15em", marginBottom: "0.75rem",
              }}
            >
              📞 CONTACT INFO
            </h4>
            <div style={{ color: "#6b4226", lineHeight: "2", fontSize: "0.95rem" }}>
              <p>
                <a href="tel:18002345678" style={{ color: "#7b3f1e", textDecoration: "none" }}>
                  ☎ 1-800-23-456-7890
                </a>
              </p>
              <p>
                <a href="mailto:info@domain.com" style={{ color: "#7b3f1e", textDecoration: "none" }}>
                  ✉ info@domain.com
                </a>
              </p>
              <p>
                <a href="mailto:xyz@royalbakers.com" style={{ color: "#7b3f1e", textDecoration: "none" }}>
                  ✉ xyz@royalbakers.com
                </a>
              </p>
            </div>
          </div>

          {/* Opening Hours */}
          <div
            className="mt-6 p-6"
            style={{
              backgroundColor: "#fff9f4", border: "1px solid #e8d5c0",
              borderLeft: "4px solid #c47e45", borderRadius: "4px",
            }}
          >
            <h4
              style={{
                color: "#7b3f1e", fontWeight: "bold", fontSize: "0.85rem",
                letterSpacing: "0.15em", marginBottom: "0.75rem",
              }}
            >
              🕐 OPENING HOURS
            </h4>
            <div style={{ color: "#6b4226", fontSize: "0.92rem" }}>
              {[
                { day: "Mon – Fri", time: "7:00 AM – 8:00 PM" },
                { day: "Saturday", time: "8:00 AM – 6:00 PM" },
                { day: "Sunday", time: "9:00 AM – 4:00 PM" },
              ].map((h, i) => (
                <div
                  key={i}
                  className="flex justify-between py-2"
                  style={{ borderBottom: i < 2 ? "1px dashed #e8d5c0" : "none" }}
                >
                  <span style={{ fontWeight: "bold" }}>{h.day}</span>
                  <span style={{ color: "#c47e45" }}>{h.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right — Contact Form */}
        <div>
          <div
            className="p-8"
            style={{
              backgroundColor: "#fff9f4", border: "1px solid #e8d5c0",
              borderRadius: "4px", boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
            }}
          >
            <h3
              style={{
                color: "#7b3f1e", fontSize: "1.4rem", fontWeight: "bold",
                marginBottom: "0.5rem", letterSpacing: "0.03em",
              }}
            >
              Send Us a Message
            </h3>
            <div className="flex items-center gap-3 mb-6">
              <div style={{ height: "1px", width: "30px", backgroundColor: "#c47e45" }} />
              <span style={{ color: "#c47e45", fontSize: "0.9rem" }}>✦</span>
              <div style={{ height: "1px", width: "30px", backgroundColor: "#c47e45" }} />
            </div>

            {submitted ? (
              <div
                className="text-center py-12"
                style={{ color: "#7b3f1e" }}
              >
                <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🎂</div>
                <h4 style={{ fontSize: "1.3rem", fontWeight: "bold", marginBottom: "0.5rem" }}>
                  Message Sent!
                </h4>
                <p style={{ color: "#6b4226", fontSize: "0.95rem" }}>
                  Thank you for reaching out. We'll get back to you shortly.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setFormData({ name: "", email: "", phone: "", subject: "", message: "" }); }}
                  style={{
                    marginTop: "1.5rem", padding: "0.65rem 1.75rem",
                    backgroundColor: "#7b3f1e", color: "#fdf8f3",
                    border: "none", borderRadius: "4px", cursor: "pointer",
                    fontFamily: "inherit", fontSize: "0.85rem", letterSpacing: "0.1em",
                  }}
                >
                  SEND ANOTHER
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {/* Name & Phone */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1">
                    <label style={{ fontSize: "0.78rem", color: "#7b3f1e", letterSpacing: "0.1em", fontWeight: "bold" }}>
                      YOUR NAME *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Sexy Saroj"
                      required
                      style={{
                        padding: "0.75rem 1rem", border: "1px solid #d4b896",
                        borderRadius: "4px", backgroundColor: "#fdf8f3",
                        color: "#2c1a0e", fontSize: "0.9rem", outline: "none",
                        fontFamily: "inherit",
                      }}
                      onFocus={(e) => e.target.style.borderColor = "#c47e45"}
                      onBlur={(e) => e.target.style.borderColor = "#d4b896"}
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label style={{ fontSize: "0.78rem", color: "#7b3f1e", letterSpacing: "0.1em", fontWeight: "bold" }}>
                      PHONE
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 800 000 0000"
                      style={{
                        padding: "0.75rem 1rem", border: "1px solid #d4b896",
                        borderRadius: "4px", backgroundColor: "#fdf8f3",
                        color: "#2c1a0e", fontSize: "0.9rem", outline: "none",
                        fontFamily: "inherit",
                      }}
                      onFocus={(e) => e.target.style.borderColor = "#c47e45"}
                      onBlur={(e) => e.target.style.borderColor = "#d4b896"}
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1">
                  <label style={{ fontSize: "0.78rem", color: "#7b3f1e", letterSpacing: "0.1em", fontWeight: "bold" }}>
                    EMAIL ADDRESS *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                    style={{
                      padding: "0.75rem 1rem", border: "1px solid #d4b896",
                      borderRadius: "4px", backgroundColor: "#fdf8f3",
                      color: "#2c1a0e", fontSize: "0.9rem", outline: "none",
                      fontFamily: "inherit",
                    }}
                    onFocus={(e) => e.target.style.borderColor = "#c47e45"}
                    onBlur={(e) => e.target.style.borderColor = "#d4b896"}
                  />
                </div>

                {/* Subject */}
                <div className="flex flex-col gap-1">
                  <label style={{ fontSize: "0.78rem", color: "#7b3f1e", letterSpacing: "0.1em", fontWeight: "bold" }}>
                    SUBJECT
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Custom cake order, general enquiry..."
                    style={{
                      padding: "0.75rem 1rem", border: "1px solid #d4b896",
                      borderRadius: "4px", backgroundColor: "#fdf8f3",
                      color: "#2c1a0e", fontSize: "0.9rem", outline: "none",
                      fontFamily: "inherit",
                    }}
                    onFocus={(e) => e.target.style.borderColor = "#c47e45"}
                    onBlur={(e) => e.target.style.borderColor = "#d4b896"}
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1">
                  <label style={{ fontSize: "0.78rem", color: "#7b3f1e", letterSpacing: "0.1em", fontWeight: "bold" }}>
                    MESSAGE *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us how we can help you..."
                    required
                    rows={5}
                    style={{
                      padding: "0.75rem 1rem", border: "1px solid #d4b896",
                      borderRadius: "4px", backgroundColor: "#fdf8f3",
                      color: "#2c1a0e", fontSize: "0.9rem", outline: "none",
                      fontFamily: "inherit", resize: "vertical",
                    }}
                    onFocus={(e) => e.target.style.borderColor = "#c47e45"}
                    onBlur={(e) => e.target.style.borderColor = "#d4b896"}
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    padding: "0.9rem 2rem", backgroundColor: "#7b3f1e",
                    color: "#fdf8f3", border: "none", borderRadius: "4px",
                    cursor: "pointer", fontFamily: "inherit",
                    fontSize: "0.88rem", letterSpacing: "0.15em",
                    fontWeight: "bold", marginTop: "0.5rem",
                    transition: "background-color 200ms",
                  }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = "#5c2e14"}
                  onMouseLeave={(e) => e.target.style.backgroundColor = "#7b3f1e"}
                >
                  SEND MESSAGE ✦
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ── Map placeholder ── */}
      <section className="w-full px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <div
            style={{
              height: "300px", borderRadius: "4px", overflow: "hidden",
              border: "1px solid #e8d5c0",
              background: "linear-gradient(135deg, #f5dfc0 0%, #e8c49a 100%)",
              display: "flex", alignItems: "center", justifyContent: "center",
              flexDirection: "column", gap: "1rem",
            }}
          >
            <span style={{ fontSize: "3rem" }}>📍</span>
            <p style={{ color: "#7b3f1e", fontWeight: "bold", letterSpacing: "0.1em", fontSize: "0.9rem" }}>
              1905A BROOK DOWNTOWN, NORTH CALIFORNIA
            </p>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noreferrer"
              style={{
                padding: "0.55rem 1.5rem", backgroundColor: "#7b3f1e",
                color: "#fdf8f3", borderRadius: "4px", fontSize: "0.8rem",
                letterSpacing: "0.1em", textDecoration: "none",
              }}
            >
              VIEW ON GOOGLE MAPS
            </a>
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
        <div className="flex justify-center max-w-md mx-auto">
          <input
            type="email"
            placeholder="Your email address..."
            style={{
              flex: 1, padding: "0.85rem 1.25rem",
              border: "1px solid #d4b896", borderRight: "none",
              borderRadius: "4px 0 0 4px", backgroundColor: "#fff9f4",
              color: "#2c1a0e", fontSize: "0.9rem", outline: "none",
            }}
          />
          <button
            style={{
              padding: "0.85rem 1.75rem", backgroundColor: "#7b3f1e",
              color: "#fdf8f3", border: "none", borderRadius: "0 4px 4px 0",
              cursor: "pointer", fontFamily: "inherit",
              fontSize: "0.85rem", letterSpacing: "0.1em",
            }}
          >
            SUBSCRIBE
          </button>
        </div>
      </section>
    </div>
  );
};

export default Contact;