import { Box, Container, SimpleGrid } from "@chakra-ui/react";

import AboutBackground from "./AboutBackground";
import AboutHeader from "./AboutHeader";
import AboutGallery from "./AboutGallery";
import AboutContent from "./AboutContent";
import AboutCapabilities from "./AboutCapabilities";

export default function AboutSection() {
  return (
    <Box
      as="section"
      id="about"
      position="relative"
      overflow="hidden"
      bg="#080b0e"
      color="white"
      py={{
        base: 20,
        md: 28,
        lg: 36,
      }}
      dir="rtl"
      fontFamily="'Vazirmatn', sans-serif"
    >
      <AboutBackground />

      <Container maxW="7xl" position="relative" zIndex={2}>
        <AboutHeader />

        <SimpleGrid
          columns={{
            base: 1,
            lg: 2,
          }}
          spacing={{
            base: 10,
            lg: 20,
          }}
          alignItems="center"
        >
          <AboutGallery />

          <AboutContent />
        </SimpleGrid>

        <AboutCapabilities />
      </Container>
    </Box>
  );
}
