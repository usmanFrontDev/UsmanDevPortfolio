import React from "react";
import Hamnav from "./components/Hamnav";
import Header from "./components/Header";
import Home from "./pages/Home";
import {Routes} from 'react-router-dom';
import {Route } from 'react-router-dom';
import About from "./pages/About";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="main">
      <Hamnav />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
