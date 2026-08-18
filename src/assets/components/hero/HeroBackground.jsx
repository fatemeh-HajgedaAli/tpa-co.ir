import { Box, Flex, HStack, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

import { HERO_COLORS, HERO_DATA } from "./heroData";

const MotionBox = motion.create(Box);

export default function HeroBackground({ gridX, gridY }) {
  const { ink, muted, blue } = HERO_COLORS;
  const { topBar } = HERO_DATA;

  return (
    <>
      {/* ================= GRID ================= */}

      <MotionBox
        position="absolute"
        inset="0"
        opacity={0.7}
        pointerEvents="none"
        style={{
          backgroundPosition: `${gridX}px ${gridY}px`,
        }}
        backgroundImage={`
          linear-gradient(
            rgba(237,238,232,0.07) 1px,
            transparent 1px
          ),
          linear-gradient(
            90deg,
            rgba(237,238,232,0.07) 1px,
            transparent 1px
          )
        `}
        backgroundSize="44px 44px"
        maskImage="radial-gradient(
          ellipse 90% 80% at 50% 40%,
          black 30%,
          transparent 78%
        )"
      />

      {/* ================= GLOW ================= */}

      <Box
        position="absolute"
        top="-15%"
        left="-10%"
        w={{ base: "300px", md: "620px" }}
        h={{ base: "300px", md: "620px" }}
        borderRadius="full"
        bg="rgba(79,179,199,0.14)"
        filter="blur(120px)"
        pointerEvents="none"
      />

      {/* ================= FRAME ================= */}

      <Box
        display={{ base: "none", md: "block" }}
        position="absolute"
        inset="20px"
        border="1px solid"
        borderColor="rgba(237,238,232,0.18)"
        pointerEvents="none"
        zIndex={3}
      />

      {/* ================= REGISTRATION MARKS ================= */}

      {[
        { top: "12px", left: "12px" },
        { top: "12px", right: "12px" },
        { bottom: "12px", left: "12px" },
        { bottom: "12px", right: "12px" },
      ].map((position, index) => (
        <Box
          key={index}
          display={{ base: "none", md: "block" }}
          position="absolute"
          {...position}
          w="22px"
          h="22px"
          zIndex={4}
          opacity={0.5}
          pointerEvents="none"
        >
          <Box
            position="absolute"
            top="10px"
            left="0"
            right="0"
            h="1px"
            bg="whiteAlpha.700"
          />

          <Box
            position="absolute"
            left="10px"
            top="0"
            bottom="0"
            w="1px"
            bg="whiteAlpha.700"
          />
        </Box>
      ))}

      {/* ================= TOP BAR ================= */}

      <Flex
        position="relative"
        zIndex={6}
        justify="space-between"
        align="center"
        px={{ base: 4, md: 14 }}
        pt={{ base: 32, md: 32 }}
        color={muted}
        fontSize="10px"
        letterSpacing="2px"
        fontFamily="monospace"
      >
        <HStack spacing={4}>
          <HStack spacing={2}>
            <Box
              w="6px"
              h="6px"
              borderRadius="full"
              bg={blue}
              boxShadow={`0 0 10px ${blue}`}
            />

            <Text mt={30}>{topBar.code}</Text>
          </HStack>

          <Text display={{ base: "none", md: "block" }}>{topBar.sheet}</Text>
        </HStack>

        <HStack spacing={6}>
          <Text display={{ base: "none", md: "block" }}>{topBar.scale}</Text>

          <Text>{topBar.revision}</Text>
        </HStack>
      </Flex>
    </>
  );
}
