import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

// Placeholder pages for routes not yet built
const Services  = () => <div className="pt-32 text-center text-2xl">Services — Coming Soon</div>;
const Gallery   = () => <div className="pt-32 text-center text-2xl">Gallery — Coming Soon</div>;
const Features  = () => <div className="pt-32 text-center text-2xl">Features — Coming Soon</div>;
const Portfolio = () => <div className="pt-32 text-center text-2xl">Portfolio — Coming Soon</div>;
const Blog      = () => <div className="pt-32 text-center text-2xl">Blog — Coming Soon</div>;

const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/"          element={<Home />} />
        <Route path="/about"     element={<About />} />
        <Route path="/contact"   element={<Contact />} />
        <Route path="/services"  element={<Services />} />
        <Route path="/gallery"   element={<Gallery />} />
        <Route path="/features"  element={<Features />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog"      element={<Blog />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;