import { Box } from "@chakra-ui/react";

const BLUE = "#4fb3c7";
const MUTED_DIM = "#5b6472";

export default function StatusDot({ live = false }) {
  return (
    <Box position="relative" w="7px" h="7px" flexShrink={0}>
      <Box
        w="7px"
        h="7px"
        borderRadius="full"
        bg={live ? BLUE : MUTED_DIM}
        boxShadow={live ? `0 0 8px ${BLUE}` : "none"}
      />

      {live && (
        <Box
          position="absolute"
          inset={0}
          borderRadius="full"
          bg={BLUE}
          animation="pulseRing 2s ease-out infinite"
        />
      )}
    </Box>
  );
}
