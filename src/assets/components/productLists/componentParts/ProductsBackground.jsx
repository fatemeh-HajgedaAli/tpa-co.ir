import { Box } from "@chakra-ui/react";
import { TOKENS } from "../productsConfig";

export default function ProductsBackground() {
  const { BLUE, HEAT, LINE } = TOKENS;

  return (
    <>
      <Box
        position="absolute"
        inset={0}
        opacity={0.35}
        pointerEvents="none"
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
            ellipse 90% 60% at 50% 0%,
            black 20%,
            transparent 75%
          )
        "
      />

      <Box
        position="absolute"
        top="-10%"
        left="15%"
        w="500px"
        h="500px"
        bg={BLUE}
        opacity="0.06"
        filter="blur(160px)"
        borderRadius="full"
        pointerEvents="none"
      />

      <Box
        position="absolute"
        bottom="0%"
        right="10%"
        w="420px"
        h="420px"
        bg={HEAT}
        opacity="0.04"
        filter="blur(160px)"
        borderRadius="full"
        pointerEvents="none"
      />
    </>
  );
}
