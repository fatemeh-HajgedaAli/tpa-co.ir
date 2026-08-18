import { Box, Container, SimpleGrid, Button } from "@chakra-ui/react";

import { motion, useScroll, useTransform } from "framer-motion";
import { Link as RouterLink } from "react-router-dom";

import ProductsBackground from "./ProductsBackground";
import ProductsHeader from "./ProductsHeader";
import ProductCard from "./ProductCard";
import { products } from "./productData";

const MotionBox = motion.create(Box);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.35 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const BLUE = "#4fb3c7";

export default function ProductsSection() {
  const { scrollYProgress } = useScroll();

  const gridX = useTransform(scrollYProgress, [0, 1], [0, -440]);

  const gridY = useTransform(scrollYProgress, [0, 1], [0, -440]);

  return (
    <Box
      as="section"
      id="products"
      py={{ base: 20, md: 28 }}
      bg="#0e1216"
      position="relative"
      overflow="hidden"
      dir="rtl"
      fontFamily="'Vazirmatn', sans-serif"
    >
      {/* Background */}
      <ProductsBackground gridX={gridX} gridY={gridY} />

      {/* Content */}
      <Container
        maxW="7xl"
        position="relative"
        zIndex={5}
        as={motion.create("div")}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          margin: "-100px",
        }}
      >
        {/* Header */}
        <ProductsHeader variants={itemVariants} />

        {/* Products */}
        <SimpleGrid
          columns={{
            base: 1,
            md: 2,
            lg: 3,
          }}
          spacing={6}
        >
          {products.map((product) => (
            <ProductCard
              key={product.code}
              product={product}
              variants={itemVariants}
            />
          ))}
        </SimpleGrid>

        {/* CTA */}
        <MotionBox
          variants={itemVariants}
          mt={{ base: 12, md: 16 }}
          textAlign="center"
        >
          <Button
            as={RouterLink}
            to="/products"
            size="lg"
            bg={BLUE}
            color="#06181c"
            borderRadius="4px"
            px={10}
            fontWeight={700}
            boxShadow="0 10px 30px rgba(79,179,199,0.22)"
            _hover={{
              bg: "#63c2d4",
              transform: "translateY(-3px)",
              boxShadow: "0 14px 34px rgba(79,179,199,0.34)",
            }}
            transition="all 0.3s"
          >
            محصولات بیشتر
          </Button>
        </MotionBox>
      </Container>
    </Box>
  );
}
