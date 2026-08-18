import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

const BLUE = "#4fb3c7";
const LINE = "rgba(237,238,232,0.055)";
const LINE_STRONG = "rgba(237,238,232,0.22)";

const MotionBox = motion.create(Box);

export default function ProductsBackground({ gridX, gridY }) {
  return (
    <>
      {/* Grid */}
      <MotionBox
        position="absolute"
        inset="0"
        opacity={0.65}
        pointerEvents="none"
        style={{
          backgroundPosition: `${gridX}px ${gridY}px`,
        }}
        backgroundImage={`
          linear-gradient(
            ${LINE} 1px,
            transparent 1px
          ),
          linear-gradient(
            90deg,
            ${LINE} 1px,
            transparent 1px
          )
        `}
        backgroundSize="44px 44px"
        maskImage="
          radial-gradient(
            ellipse 90% 75% at 50% 35%,
            black 25%,
            transparent 80%
          )
        "
      />

      {/* Blue Glow */}
      <Box
        position="absolute"
        top="-15%"
        right="-8%"
        w={{ base: "350px", md: "600px" }}
        h={{ base: "350px", md: "600px" }}
        borderRadius="full"
        bg="rgba(79,179,199,0.10)"
        filter="blur(150px)"
        pointerEvents="none"
      />

      {/* Orange Glow */}
      <Box
        position="absolute"
        bottom="-20%"
        left="-10%"
        w={{ base: "300px", md: "550px" }}
        h={{ base: "300px", md: "550px" }}
        borderRadius="full"
        bg="rgba(232,98,44,0.045)"
        filter="blur(150px)"
        pointerEvents="none"
      />

      {/* Moving Line */}
      <MotionBox
        position="absolute"
        top="18%"
        left="0"
        w={{ base: "120px", md: "260px" }}
        h="1px"
        bgGradient={`linear(to-r, transparent, ${BLUE})`}
        animate={{
          x: ["-100%", "100%"],
          opacity: [0, 0.5, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "linear",
        }}
        pointerEvents="none"
      />

      <MotionBox
        position="absolute"
        bottom="22%"
        right="0"
        w={{ base: "100px", md: "240px" }}
        h="1px"
        bgGradient={`linear(to-l, transparent, ${BLUE})`}
        animate={{
          x: ["100%", "-100%"],
          opacity: [0, 0.4, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "linear",
          delay: 2,
        }}
        pointerEvents="none"
      />

      {/* Frame */}
      <Box
        position="absolute"
        inset={{ base: "10px", md: "20px" }}
        border="1px solid"
        borderColor={LINE_STRONG}
        pointerEvents="none"
        zIndex={1}
      />
    </>
  );
}
