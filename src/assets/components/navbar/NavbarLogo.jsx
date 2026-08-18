import { Box, Image, Link } from "@chakra-ui/react";

export default function NavbarLogo() {
  return (
    <Link
      href="#"
      display="flex"
      alignItems="center"
      _hover={{
        textDecoration: "none",
      }}
    >
      <Box
        w={{ base: "85px", md: "105px" }}
        transition="transform 0.3s"
        _hover={{
          transform: "scale(1.04)",
        }}
      >
        <Image
          src="/Logo.png"
          alt="لوگو تجارت پرگاس آینده"
          w="100%"
          h="auto"
          objectFit="contain"
        />
      </Box>
    </Link>
  );
}
