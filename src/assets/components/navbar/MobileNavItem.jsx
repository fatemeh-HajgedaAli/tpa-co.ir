import { Box, Flex, Link } from "@chakra-ui/react";

export default function MobileNavItem({ href, label, onClick }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      px={4}
      py={3}
      borderRadius="lg"
      color="gray.300"
      fontSize="md"
      fontWeight={600}
      transition="all 0.25s"
      _hover={{
        color: "white",
        bg: "whiteAlpha.100",
        textDecoration: "none",
        transform: "translateX(-4px)",
      }}
    >
      <Flex align="center" justify="space-between">
        <Box>{label}</Box>

        <Box w="6px" h="6px" borderRadius="full" bg="blue.400" opacity={0.7} />
      </Flex>
    </Link>
  );
}
