import { Link } from "@chakra-ui/react";

export default function NavItem({ href, label }) {
  return (
    <Link
      href={href}
      position="relative"
      color="gray.300"
      fontSize="sm"
      fontWeight={600}
      py={2}
      transition="color 0.25s"
      _hover={{
        color: "white",
        textDecoration: "none",

        _after: {
          width: "100%",
        },
      }}
      _after={{
        content: '""',
        position: "absolute",
        right: 0,
        bottom: 0,
        width: "0%",
        height: "2px",
        borderRadius: "full",
        bgGradient: "linear(to-l, blue.400, cyan.400)",
        transition: "width 0.3s ease",
      }}
    >
      {label}
    </Link>
  );
}
