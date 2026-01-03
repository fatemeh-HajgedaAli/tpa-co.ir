import React from "react";
import HeroSection from "../assets/components/HeroSection";
import Navbar from "../assets/components/Navbar";
import AboutSection from "../assets/components/AboutSection";
import ProductsSection from "../assets/components/Production";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProductsSection />
    </div>
  );
}
