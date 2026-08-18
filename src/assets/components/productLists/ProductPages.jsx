import { useEffect, useMemo, useState } from "react";

import { Box, Container } from "@chakra-ui/react";

import { motion } from "framer-motion";

import ProductsBackground from "./componentParts/ProductsBackground";
import ProductsTicker from "./componentParts/ProductsTicker";
import ProductsHeader from "./componentParts/ProductsHeader";
import ProductsFilter from "./componentParts/ProductsFilter";
import ProductGrid from "./componentParts/ProductGrid";

import { products } from "./productsData";

import { TOKENS } from "./productsConfig";

import { containerVariants } from "./styles/productsAnimations";

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const [activeCategory, setActiveCategory] = useState("ALL");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesTerm =
        product.name.includes(searchTerm) ||
        product.description.includes(searchTerm);

      const matchesCategory =
        activeCategory === "ALL" || product.cat === activeCategory;

      return matchesTerm && matchesCategory;
    });
  }, [searchTerm, activeCategory]);

  return (
    <Box
      bg="#0e1216"
      minH="100vh"
      position="relative"
      overflow="hidden"
      dir="rtl"
      fontFamily="'Vazirmatn', sans-serif"
    >
      <ProductsBackground />

      <ProductsTicker products={products} />

      <Container
        maxW="7xl"
        position="relative"
        py={8}
        as={motion.div}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <ProductsHeader
          totalProducts={products.length}
          filteredCount={filteredProducts.length}
        />

        <ProductsFilter
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />

        <ProductGrid products={filteredProducts} />
      </Container>

      <style>{`
        @keyframes tickerScroll {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(50%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            animation: none !important;
          }
        }
      `}</style>
    </Box>
  );
}
