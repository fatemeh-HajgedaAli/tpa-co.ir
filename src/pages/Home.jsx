import React from "react";
import HeroSection from "../assets/components/HeroSection";
import Navbar from "../assets/components/Navbar";
import AboutSection from "../assets/components/AboutSection";
import ProductsSection from "../assets/components/Production";
import PortfolioSection from "../assets/components/PortfolioSection";
import ServicesSection from "../assets/components/ServicesSection";
import IndustrialImageSeparator from "../assets/components/IndustrialImageSeparator";
import { Box } from "@chakra-ui/react";
import Footer from "../assets/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <HeroSection />

      <Box id="about">
        <AboutSection />
      </Box>

      <Box id="products">
        <ProductsSection />
      </Box>

      <Box id="services">
        <ServicesSection />
      </Box>

      <IndustrialImageSeparator />

      <Box id="portfolio">
        <PortfolioSection />
      </Box>

      <Footer />
    </>
  );
}
