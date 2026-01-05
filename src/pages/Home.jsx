import React from "react";
import HeroSection from "../assets/components/HeroSection";
import Navbar from "../assets/components/Navbar";
import AboutSection from "../assets/components/AboutSection";
import ProductsSection from "../assets/components/Production";
import PortfolioSection from "../assets/components/PortfolioSection";
import ServicesSection from "../assets/components/ServicesSection";
import IndustrialImageSeparator from "../assets/components/IndustrialImageSeparator";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <ServicesSection />
      <IndustrialImageSeparator />
      <PortfolioSection />
    </div>
  );
}
