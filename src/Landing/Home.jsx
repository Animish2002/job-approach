import React from "react";
import{ GlobeDemo } from "./HeroSection";
import About from "./About";
import Contact from "./Contact";
import ServicesAndProducts from "./ServicesAndProducts";
import Footer from "./Footer";
import { Navbar } from "./Navbar";
import { Globe } from "@/components/ui/globe";

const Home = () => {
  return (
    <div className="dark:bg-zinc-950 bg-zinc-50">
      <Navbar />
      <GlobeDemo />
      {/* <HeroSection /> */}
      {/* <ServicesAndProducts />
      <About />
      <Contact /> */}
      <Footer />
    </div>
  );
};

export default Home;
