import { Box, Button } from "@chakra-ui/react";
import WebsiteAdIcon from "./WebsiteAdIcon";

const BLUE = "#4fb3c7";

export default function WebsiteAdTrigger({ onClick }) {
  return (
    <Button
      onClick={onClick}
      aria-label="مشاهده خدمات ASK.DEV"
      position="relative"
      w="56px"
      h="56px"
      minW="56px"
      p={0}
      borderRadius="18px"
      bg="#111820"
      color={BLUE}
      boxShadow="0 18px 40px rgba(0,0,0,0.3)"
      overflow="visible"
      _hover={{
        transform: "translateY(-4px) scale(1.05)",
        bg: "#151e27",
      }}
      _active={{
        transform: "scale(0.95)",
      }}
      transition="all 0.3s ease"
    >
      {/* Glow */}
      <Box
        position="absolute"
        inset="-4px"
        borderRadius="20px"
        bg={BLUE}
        opacity={0.12}
        filter="blur(8px)"
        animation="pulse 2s infinite"
      />

      {/* Inner glow */}
      <Box position="absolute" inset={0} borderRadius="18px" bg={`${BLUE}12`} />

      <Box position="relative" zIndex={2}>
        <WebsiteAdIcon />
      </Box>

      {/* Online indicator */}
      <Box
        position="absolute"
        top="-4px"
        right="-4px"
        w="14px"
        h="14px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        zIndex={5}
      >
        <Box
          position="absolute"
          w="100%"
          h="100%"
          borderRadius="full"
          bg="#48BB78"
          opacity={0.7}
          animation="ping 1.5s infinite"
        />

        <Box
          position="relative"
          w="9px"
          h="9px"
          borderRadius="full"
          bg="#48BB78"
          border="2px solid"
          borderColor="#111820"
        />
      </Box>

      <style jsx global>{`
        @keyframes pulse {
          0%,
          100% {
            opacity: 0.08;
          }
          50% {
            opacity: 0.18;
          }
        }

        @keyframes ping {
          0% {
            transform: scale(1);
            opacity: 0.7;
          }
          75%,
          100% {
            transform: scale(1.7);
            opacity: 0;
          }
        }
      `}</style>
    </Button>
  );
}
