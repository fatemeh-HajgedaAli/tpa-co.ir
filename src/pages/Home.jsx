import React from "react";
import { Box } from "@chakra-ui/react";
import HeroSection from "../assets/components/hero/HeroSection";
import Navbar from "../assets/components/navbar/Navbar";
import AboutSection from "../assets/components/about/AboutSection";
import ProductsSection from "../assets/components/products/ProductsSection";
import PortfolioSection from "../assets/components/portfolio/PortfolioSection";
import ServicesSection from "../assets/components/ServicesSection";
import IndustrialImageSeparator from "../assets/components/IndustrialImageSeparator";
import Footer from "../assets/components/footer/Footer";
import ContactSection from "../assets/components/contactUs/ContactSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <Box id="hero">
        <HeroSection />
      </Box>

      {/* about */}
      <Box id="about">
        <AboutSection />
      </Box>
      {/* ProductsSection */}
      <Box id="products">
        <ProductsSection />
      </Box>
      {/* ContactSection */}
      <Box id="contact">
        <ContactSection />
      </Box>
      {/* ServicesSection */}
      <Box id="services">
        <ServicesSection />
      </Box>
      {/* Separator */}
      <IndustrialImageSeparator />
      {/* PortfolioSection */}
      <Box id="portfolio">
        <PortfolioSection />
      </Box>

      <Footer />
    </>
  );
}
