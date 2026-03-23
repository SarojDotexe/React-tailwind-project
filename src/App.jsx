import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Features from "./pages/Features";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Blog from "./pages/Blog";
import Portfolio from "./pages/Portfolio";

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