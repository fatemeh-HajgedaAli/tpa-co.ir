import {
  Box,
  Container,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";

import ContactImagePanel from "./ContactImagePanel";
import ContactInfoPanel from "./ContactInfoPanel";
import { contactInfo } from "./contactData";

// ================= TOKENS =================

const INK = "#edeee8";
const MUTED = "#8a94a3";
const MUTED_DIM = "#5b6472";
const BLUE = "#4fb3c7";
const LINE = "rgba(237,238,232,0.10)";
const MONO = "'JetBrains Mono', monospace";

// ================= MAIN =================

export default function ContactSection() {
  return (
    <Box
      as="section"
      id="contact"
      position="relative"
      overflow="hidden"
      py={{ base: 16, md: 28 }}
      bg="#0e1216"
      dir="rtl"
      fontFamily="'Vazirmatn', sans-serif"
    >
      <ContactBackground />

      <Container maxW="7xl" position="relative" zIndex={2}>
        {/* Sheet */}
        <Flex
          justify="space-between"
          fontFamily={MONO}
          fontSize="11px"
          letterSpacing="2px"
          color={MUTED_DIM}
          mb={{ base: 10, md: 14 }}
        >
          <Text>SHEET 05 / A</Text>
          <Text>CONTACT CONSOLE</Text>
        </Flex>

        {/* Header */}
        <ContactHeader />

        {/* Main */}
        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={6}>
          <ContactImagePanel />

          <ContactInfoPanel contactInfo={contactInfo} />
        </SimpleGrid>
      </Container>

      <style>{`
        @keyframes pulseRing {
          0% {
            transform: scale(1);
            opacity: 0.6;
          }

          100% {
            transform: scale(2.6);
            opacity: 0;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </Box>
  );
}

// ================= HEADER =================

function ContactHeader() {
  return (
    <VStack spacing={4} textAlign="center" mb={{ base: 12, md: 16 }}>
      <HStack spacing={2}>
        <Box
          w="5px"
          h="5px"
          borderRadius="full"
          bg={BLUE}
          boxShadow={`0 0 8px ${BLUE}`}
        />

        <Text
          fontFamily={MONO}
          fontSize="11px"
          letterSpacing="2.5px"
          color={BLUE}
        >
          TPA INDUSTRIAL GROUP
        </Text>
      </HStack>

      <Heading
        color={INK}
        fontSize={{
          base: "3xl",
          md: "5xl",
          lg: "6xl",
        }}
        fontWeight={800}
        letterSpacing="-1px"
      >
        با ما در{" "}
        <Box as="span" color={BLUE}>
          ارتباط باشید
        </Box>
      </Heading>

      <Text
        maxW="680px"
        color={MUTED}
        fontSize={{
          base: "sm",
          md: "md",
        }}
        lineHeight="2"
      >
        برای دریافت مشاوره تخصصی، استعلام قیمت و همکاری در پروژه‌های صنعتی، با
        کارشناسان ما در ارتباط باشید.
      </Text>
    </VStack>
  );
}

// ================= BACKGROUND =================

function ContactBackground() {
  return (
    <>
      {/* Soft ambient light */}
      <Box
        position="absolute"
        inset="0"
        pointerEvents="none"
        background={`
          radial-gradient(
            circle at 15% 20%,
            rgba(79, 179, 199, 0.055),
            transparent 32%
          ),
          radial-gradient(
            circle at 85% 80%,
            rgba(79, 179, 199, 0.025),
            transparent 28%
          )
        `}
      />

      {/* Vertical technical line */}
      <Box
        position="absolute"
        top="0"
        bottom="0"
        left={{ base: "8%", md: "14%" }}
        w="1px"
        bg={LINE}
        opacity={0.35}
        pointerEvents="none"
      />

      {/* Horizontal technical line */}
      <Box
        position="absolute"
        top={{ base: "18%", md: "22%" }}
        left="0"
        right="0"
        h="1px"
        bg={LINE}
        opacity={0.25}
        pointerEvents="none"
      />

      {/* Accent point */}
      <Box
        position="absolute"
        top={{ base: "18%", md: "22%" }}
        left={{ base: "8%", md: "14%" }}
        w="5px"
        h="5px"
        borderRadius="full"
        bg={BLUE}
        boxShadow={`0 0 14px ${BLUE}`}
        pointerEvents="none"
      />

      {/* Bottom ambient glow */}
      <Box
        position="absolute"
        bottom="-180px"
        right="25%"
        w="420px"
        h="260px"
        bg={BLUE}
        opacity={0.025}
        filter="blur(120px)"
        borderRadius="full"
        pointerEvents="none"
      />
    </>
  );
}
