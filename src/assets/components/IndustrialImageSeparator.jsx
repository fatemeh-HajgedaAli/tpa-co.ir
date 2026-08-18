import React from "react";
import {
  Box,
  Image,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import ImageSection from "../image/HeroImage2.jpg";

const MotionBox = motion.create(Box);

export default function IndustrialImageSeparator() {
  return (
    <Box
      position="relative"
      h={{ base: "400px", md: "600px" }}
      overflow="hidden"
      bg="#0a0a0a"
    >
      {/* IMAGE */}
      <Image
        src={ImageSection}
        alt="Industrial Engineering"
        position="absolute"
        inset={0}
        w="full"
        h="full"
        objectFit="cover"
        filter="grayscale(30%) brightness(0.65)"
        zIndex={0}
      />

      {/* OVERLAY */}
      <Box
        position="absolute"
        inset={0}
        zIndex={1}
        bgGradient="linear(to-b, #0a0a0a, transparent 40%, #0a0a0a)"
        opacity="0.85"
      />


      {/* EXPERIENCE BADGE */}
      <Box
        position="absolute"
        bottom="12%"
        left="6%"
        zIndex={2}
        borderRight="3px solid"
        borderColor="blue.500"
        pr={4}
      >
        <Text color="white" fontWeight="900" fontSize="4xl" opacity="0.45">
          15+
        </Text>
        <Text color="whiteAlpha.800" fontSize="xs" letterSpacing="2px">
          سال سابقه درخشان
        </Text>
      </Box>
    </Box>
  );
}
