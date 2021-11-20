import React from "react";

import Header from "../../components/header/Header";
import Landing from "./landing/Landing";
import Welcome from "./welcome/Welcome";
import Gallery from "./gallery/Gallery";
import About from "./about/About";
import Contact from "./contact/Contact";
import Footer from "../../components/footer/Footer";

function Homepage() {
  return (
    <div className='homepage'>
      <Header />
      <Landing />
      <Welcome />
      <Gallery />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default Homepage;
