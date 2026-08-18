import React from "react";

import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  Image,
  Stack,
  Flex,
} from "@chakra-ui/react";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link as RouterLink } from "react-router-dom";

import ProfileIcon from "./ProfileIcon";

const INK = "#edeee8";
const MUTED = "#8a94a3";
const MUTED_DIM = "#5b6472";

const BLUE = "#4fb3c7";
const HEAT = "#e8622c";

const LINE = "rgba(237,238,232,0.10)";
const LINE_STRONG = "rgba(237,238,232,0.22)";

const MONO = "'JetBrains Mono', monospace";

const MotionBox = motion.create(Box);

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 26,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export default function ProductCard({ product }) {
  return (
    <MotionBox
      variants={itemVariants}
      role="group"
      position="relative"
      bg="rgba(255,255,255,0.02)"
      border="1px solid"
      borderColor={LINE_STRONG}
      overflow="hidden"
      _hover={{
        borderColor: BLUE,
        boxShadow: "0 0 30px rgba(79,179,199,0.12)",
        transform: "translateY(-5px)",
      }}
      transition="all 0.35s ease"
    >
      {/* TOP LINE */}

      <MotionBox
        position="absolute"
        top="0"
        left="0"
        h="1px"
        bg={BLUE}
        initial={{
          width: "0%",
        }}
        whileHover={{
          width: "100%",
        }}
        transition={{
          duration: 0.5,
        }}
        zIndex={3}
      />

      {/* IMAGE */}

      <Box
        position="relative"
        h={{
          base: "240px",
          md: "220px",
        }}
        overflow="hidden"
      >
        <Image
          src={product.image}
          alt={product.name}
          w="full"
          h="full"
          objectFit="cover"
          filter="saturate(0.85) contrast(1.05)"
          transition="0.6s ease"
          _groupHover={{
            transform: "scale(1.06)",
          }}
        />

        {/* IMAGE OVERLAY */}

        <Box
          position="absolute"
          inset="0"
          bgGradient="
            linear(
              to-t,
              rgba(14,18,22,0.95),
              transparent 60%
            )
          "
        />

        {/* PRODUCT CODE */}

        <Text
          position="absolute"
          top={3}
          insetInlineStart={4}
          fontFamily={MONO}
          fontSize="10px"
          letterSpacing="1.5px"
          color={MUTED}
          opacity={0.9}
        >
          {product.code} / MATERIAL
        </Text>

        {/* PROFILE ICON */}

        <Flex
          position="absolute"
          bottom={3}
          insetInlineStart={4}
          w="42px"
          h="42px"
          align="center"
          justify="center"
          bg="rgba(14,18,22,0.85)"
          border="1px solid"
          borderColor={LINE_STRONG}
          borderRadius="4px"
          _groupHover={{
            borderColor: BLUE,
          }}
          transition="border-color 0.3s ease"
        >
          <ProfileIcon type={product.profile} />
        </Flex>
      </Box>

      {/* CONTENT */}

      <Stack p={6} spacing={4}>
        <Heading
          size="md"
          color={INK}
          fontWeight={700}
          _groupHover={{
            color: BLUE,
          }}
          transition="0.3s"
        >
          {product.name}
        </Heading>

        <Text color={MUTED} fontSize="sm" lineHeight="1.9" noOfLines={2}>
          {product.description}
        </Text>

        {/* SPECS */}

        <SimpleGrid columns={3} borderTop="1px solid" borderColor={LINE} pt={4}>
          {product.spec.map((spec, index) => (
            <Box
              key={index}
              borderInlineEnd={
                index !== product.spec.length - 1 ? "1px solid" : "none"
              }
              borderColor={LINE}
              pe={3}
            >
              <Text
                fontFamily={MONO}
                fontSize="9px"
                letterSpacing="1px"
                color={MUTED_DIM}
                mb={1}
              >
                {spec.label}
              </Text>

              <Text fontSize="xs" color={INK} fontWeight={600} noOfLines={1}>
                {spec.value}
              </Text>
            </Box>
          ))}
        </SimpleGrid>

        {/* LINK */}

        <Flex
          as={RouterLink}
          to="/products"
          align="center"
          gap={2}
          mt={1}
          fontSize="sm"
          color={MUTED}
          _groupHover={{
            color: HEAT,
            gap: "10px",
          }}
          transition="all 0.25s ease"
          w="fit-content"
        >
          <Text>مشاهده مشخصات</Text>

          <ArrowLeft size={14} />
        </Flex>
      </Stack>
    </MotionBox>
  );
}
