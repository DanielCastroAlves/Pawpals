import React from "react";
import Header from "../componets/Header";
import Hero from "./Hero";
import Testimonial from "./Testimonial";
import Contact from "./Contact";
import Footer from "../componets/Footer";

function Home() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
