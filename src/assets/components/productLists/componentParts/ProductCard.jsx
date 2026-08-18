import { Box, Heading, HStack, Image, Stack, Text } from "@chakra-ui/react";

import { CATEGORIES, TOKENS, codeFor } from "../productsConfig";

import { MotionBox, itemVariants } from "../styles/productsAnimations";

export default function ProductCard({ product }) {
  const category = CATEGORIES[product.cat];

  return (
    <MotionBox
      variants={itemVariants}
      role="group"
      position="relative"
      bg="rgba(255,255,255,0.02)"
      overflow="hidden"
      border="1px solid"
      borderColor={TOKENS.LINE_STRONG}
      transition="all 0.3s"
      _hover={{
        borderColor: category.color,
        transform: "translateY(-5px)",
        boxShadow: "0 18px 34px rgba(0,0,0,0.45)",
      }}
    >
      <Rivets />

      <ProductImage product={product} color={category.color} />

      <Stack p={6} spacing={3}>
        <Heading
          size="sm"
          color={TOKENS.INK}
          fontWeight={700}
          transition="0.3s"
          _groupHover={{
            color: category.color,
          }}
        >
          {product.name}
        </Heading>

        <Text
          color={TOKENS.MUTED}
          fontSize="sm"
          noOfLines={2}
          lineHeight="1.85"
        >
          {product.description}
        </Text>

        <Specifications specs={product.specs} color={category.color} />
      </Stack>
    </MotionBox>
  );
}

function Rivets() {
  const positions = [
    {
      top: "8px",
      insetInlineStart: "8px",
    },
    {
      top: "8px",
      insetInlineEnd: "8px",
    },
    {
      bottom: "8px",
      insetInlineStart: "8px",
    },
    {
      bottom: "8px",
      insetInlineEnd: "8px",
    },
  ];

  return positions.map((position, index) => (
    <Box
      key={index}
      position="absolute"
      zIndex={3}
      w="5px"
      h="5px"
      borderRadius="full"
      border="1px solid"
      borderColor={TOKENS.LINE_STRONG}
      opacity={0.6}
      {...position}
    />
  ));
}

function ProductImage({ product, color }) {
  return (
    <Box h="210px" w="full" overflow="hidden" position="relative">
      <Image
        src={product.image}
        alt={product.name}
        w="full"
        h="full"
        objectFit="cover"
        filter="saturate(0.85) contrast(1.05)"
        transition="0.6s"
        _groupHover={{
          transform: "scale(1.07)",
        }}
      />

      <Box
        position="absolute"
        inset="0"
        bgGradient="
          linear(
            to-t,
            rgba(14,18,22,0.95),
            transparent 55%
          )
        "
      />

      <Text
        position="absolute"
        top={3}
        insetInlineStart={4}
        fontFamily={TOKENS.MONO}
        fontSize="10px"
        color={TOKENS.MUTED}
      >
        {codeFor(product.id)}
      </Text>

      <HStack
        position="absolute"
        top={3}
        insetInlineEnd={4}
        spacing={1.5}
        bg="rgba(14,18,22,0.75)"
        border="1px solid"
        borderColor={TOKENS.LINE_STRONG}
        px={2}
        py={0.5}
      >
        <Box w="5px" h="5px" borderRadius="full" bg={color} />

        <Text fontFamily={TOKENS.MONO} fontSize="9px" color={TOKENS.INK}>
          {product.cat}
        </Text>
      </HStack>
    </Box>
  );
}

function Specifications({ specs, color }) {
  return (
    <Box pt={3} borderTop="1px solid" borderColor={TOKENS.LINE}>
      <Text
        fontFamily={TOKENS.MONO}
        fontSize="9px"
        letterSpacing="1.5px"
        color={TOKENS.MUTED_DIM}
        mb={2}
      >
        SPEC
      </Text>

      <HStack spacing={4} flexWrap="wrap">
        {specs.map((spec) => (
          <HStack key={spec} spacing={1.5}>
            <Box w="4px" h="4px" borderRadius="full" bg={color} />

            <Text fontSize="xs" color={TOKENS.INK}>
              {spec}
            </Text>
          </HStack>
        ))}
      </HStack>
    </Box>
  );
}
