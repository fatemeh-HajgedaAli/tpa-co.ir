import { Box, Container, Divider, Flex, HStack, Text } from "@chakra-ui/react";

import FooterBrand from "./FooterBrand";
import FooterLinks from "./FooterLinks";
import FooterContact from "./FooterContact";

const INK = "#edeee8";
const MUTED_DIM = "#5b6472";
const BLUE = "#4fb3c7";
const LINE = "rgba(237,238,232,0.09)";
const MONO = "'JetBrains Mono', monospace";

export default function Footer() {
  return (
    <Box
      as="footer"
      position="relative"
      overflow="hidden"
      bg="#090d11"
      color={INK}
      dir="rtl"
      fontFamily="'Vazirmatn', sans-serif"
      pt={{ base: 12, md: 18 }}
      pb={{ base: 5, md: 7 }}
    >
      {/* ================= BACKGROUND ================= */}

      {/* Soft grid */}
      <Box
        position="absolute"
        inset="0"
        pointerEvents="none"
        opacity={0.22}
        backgroundImage={`
          linear-gradient(
            rgba(237,238,232,0.045) 1px,
            transparent 1px
          ),
          linear-gradient(
            90deg,
            rgba(237,238,232,0.045) 1px,
            transparent 1px
          )
        `}
        backgroundSize="80px 80px"
        maskImage="
          linear-gradient(
            to bottom,
            transparent 0%,
            black 18%,
            black 82%,
            transparent 100%
          )
        "
      />

      {/* Top blue atmosphere */}
      <Box
        position="absolute"
        top="-260px"
        left="50%"
        transform="translateX(-50%)"
        w={{ base: "420px", md: "700px" }}
        h={{ base: "420px", md: "700px" }}
        borderRadius="full"
        bg={BLUE}
        opacity={0.045}
        filter="blur(150px)"
        pointerEvents="none"
      />

      {/* Right glow */}
      <Box
        position="absolute"
        top="20%"
        right="-100px"
        w="280px"
        h="280px"
        borderRadius="full"
        bg={BLUE}
        opacity={0.025}
        filter="blur(120px)"
        pointerEvents="none"
      />

      {/* Bottom glow */}
      <Box
        position="absolute"
        bottom="-180px"
        left="-100px"
        w="380px"
        h="380px"
        borderRadius="full"
        bg={BLUE}
        opacity={0.025}
        filter="blur(130px)"
        pointerEvents="none"
      />

      {/* Technical vertical lines */}
      <Box
        position="absolute"
        top="0"
        bottom="0"
        left={{ base: "7%", md: "calc(50% - 430px)" }}
        w="1px"
        bg="rgba(79,179,199,0.045)"
        pointerEvents="none"
      />

      <Box
        position="absolute"
        top="0"
        bottom="0"
        right={{ base: "7%", md: "calc(50% - 430px)" }}
        w="1px"
        bg="rgba(79,179,199,0.045)"
        pointerEvents="none"
      />

      {/* Technical corner marks */}

      <TechnicalCorner position="top-left" />
      <TechnicalCorner position="top-right" />
      <TechnicalCorner position="bottom-left" />
      <TechnicalCorner position="bottom-right" />

      {/* ================= CONTENT ================= */}

      <Container
        maxW="7xl"
        position="relative"
        zIndex={2}
        px={{ base: 5, md: 8, lg: 10 }}
      >
        {/* Header */}

        <Flex
          justify="space-between"
          align="center"
          mb={{ base: 9, md: 12 }}
          pb={5}
          borderBottom="1px solid"
          borderColor={LINE}
          gap={4}
        >
          <HStack spacing={2}>
            <Box
              w="6px"
              h="6px"
              flexShrink={0}
              borderRadius="full"
              bg={BLUE}
              boxShadow={`0 0 12px ${BLUE}`}
            />

            <Text
              fontFamily={MONO}
              fontSize={{ base: "9px", md: "10px" }}
              letterSpacing="2px"
              color={BLUE}
              whiteSpace="nowrap"
            >
              TPA INDUSTRIAL GROUP
            </Text>
          </HStack>

          <Text
            fontFamily={MONO}
            fontSize="9px"
            letterSpacing="1.5px"
            color={MUTED_DIM}
            display={{ base: "none", md: "block" }}
            whiteSpace="nowrap"
          >
            FOOTER / 01
          </Text>
        </Flex>

        {/* Main content */}

        <Box
          display="grid"
          gridTemplateColumns={{
            base: "1fr",
            md: "1.35fr 0.8fr 1.25fr",
          }}
          gap={{ base: 10, md: 14, lg: 20 }}
          alignItems="start"
        >
          <FooterBrand />

          <FooterLinks />

          <FooterContact />
        </Box>

        {/* Bottom divider */}

        <Divider my={{ base: 9, md: 12 }} borderColor={LINE} />

        {/* Bottom bar */}

        <Flex
          justify="space-between"
          align="center"
          gap={5}
          direction={{ base: "column", md: "row" }}
          textAlign="center"
        >
          <Text
            fontSize="xs"
            color={MUTED_DIM}
            lineHeight="1.8"
            whiteSpace="nowrap"
          >
            © {new Date().getFullYear()} TPA-CO.IR — کلیه حقوق محفوظ است
          </Text>

          <HStack spacing={3} justify="center" flexShrink={0}>
            <Box w="22px" h="1px" bg="rgba(237,238,232,0.12)" />

            <Text
              fontFamily={MONO}
              fontSize="9px"
              letterSpacing="1.5px"
              color={MUTED_DIM}
              whiteSpace="nowrap"
            >
              ENGINEERED FOR INDUSTRY
            </Text>

            <Box
              w="5px"
              h="5px"
              flexShrink={0}
              bg={BLUE}
              borderRadius="full"
              boxShadow={`0 0 8px ${BLUE}`}
            />
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
}

/* ================= TECHNICAL CORNER ================= */

function TechnicalCorner({ position }) {
  const styles = {
    "top-left": {
      top: "20px",
      left: "20px",
      borderTop: "1px solid",
      borderLeft: "1px solid",
    },

    "top-right": {
      top: "20px",
      right: "20px",
      borderTop: "1px solid",
      borderRight: "1px solid",
    },

    "bottom-left": {
      bottom: "20px",
      left: "20px",
      borderBottom: "1px solid",
      borderLeft: "1px solid",
    },

    "bottom-right": {
      bottom: "20px",
      right: "20px",
      borderBottom: "1px solid",
      borderRight: "1px solid",
    },
  };

  return (
    <Box
      position="absolute"
      {...styles[position]}
      w="28px"
      h="28px"
      borderColor="rgba(79,179,199,0.20)"
      pointerEvents="none"
    />
  );
}
