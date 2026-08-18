import { Box } from "@chakra-ui/react";
import { REGISTRATION_MARKS } from "./heroData";

export default function HeroFrame() {
  return (
    <>
      {/* Frame */}
      <Box
        display={{ base: "none", md: "block" }}
        position="absolute"
        inset="20px"
        border="1px solid"
        borderColor="rgba(237,238,232,0.18)"
        pointerEvents="none"
        zIndex={3}
      />

      {/* Registration marks */}
      {REGISTRATION_MARKS.map((position, index) => (
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
    </>
  );
}
