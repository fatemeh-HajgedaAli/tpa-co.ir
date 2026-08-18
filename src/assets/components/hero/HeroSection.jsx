import { Box, Container, Flex } from "@chakra-ui/react";

import { useScroll, useTransform } from "framer-motion";

import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroMetrics from "./HeroMetrics";
import TechnicalSchematic from "./TechnicalSchematic";

export default function HeroSection() {
  const { scrollYProgress } = useScroll();

  const gridX = useTransform(scrollYProgress, [0, 1], [0, -440]);

  const gridY = useTransform(scrollYProgress, [0, 1], [0, -440]);

  return (
    <Box
      as="section"
      position="relative"
      minH="100vh"
      bg="#0e1216"
      color="#edeee8"
      overflow="hidden"
      dir="rtl"
      fontFamily="'Vazirmatn', sans-serif"
    >
      {/* Background */}

      <HeroBackground gridX={gridX} gridY={gridY} />

      {/* Main Content */}

      <Container
        maxW="1500px"
        position="relative"
        zIndex={6}
        display="flex"
        alignItems="center"
        py={{ base: 10, md: 10 }}
        px={{ base: 4, md: 14 }}
      >
        <Flex
          w="100%"
          direction={{
            base: "column",
            lg: "row",
          }}
          align="center"
          justify="space-between"
        >
          <HeroContent />

          <TechnicalSchematic />
        </Flex>
      </Container>

      {/* Metrics */}

      <Container
        maxW="1500px"
        position="relative"
        zIndex={6}
        px={{ base: 4, md: 14 }}
        pb={{ base: 8, md: 10 }}
        mt={{ base: 6, md: 0 }}
      >
        <HeroMetrics />
      </Container>
    </Box>
  );
}
