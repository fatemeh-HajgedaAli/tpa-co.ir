import { IconButton } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

export default function MobileMenuButton({ isOpen, onToggle }) {
  return (
    <IconButton
      aria-label="باز کردن منو"
      icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
      display={{
        base: "flex",
        md: "none",
      }}
      size="md"
      borderRadius="xl"
      color="white"
      bg="whiteAlpha.100"
      border="1px solid"
      borderColor="whiteAlpha.200"
      _hover={{
        bg: "blue.500",
      }}
      onClick={onToggle}
    />
  );
}
