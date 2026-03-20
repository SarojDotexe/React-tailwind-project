import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from "./pages/Home";

import { Home as HomeIcon } from "lucide-react";
import About from './About';
import Contact from './pages/Contact';

const App = () => {
  return (
    <div>
   <Header />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
