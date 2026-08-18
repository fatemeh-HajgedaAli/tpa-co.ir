import { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useDisclosure } from "@chakra-ui/react";

import NavbarLogo from "./NavbarLogo";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import MobileMenuButton from "./MobileMenuButton";

const MotionBox = motion.create(Box);

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  const { isOpen, onToggle, onClose } = useDisclosure();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box
      as="header"
      position="fixed"
      top={4}
      left={0}
      right={0}
      zIndex={1000}
      px={{ base: 3, md: 6 }}
      pt={{ base: 3, md: 4 }}
      dir="rtl"
      fontFamily="'Vazirmatn', sans-serif"
    >
      <MotionBox
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
        }}
        maxW="1400px"
        mx="auto"
        px={{ base: 3, md: 6 }}
        py={2}
        bg={isScrolled ? "rgba(5, 5, 5, 0.78)" : "rgba(5, 5, 5, 0.35)"}
        backdropFilter="blur(18px) saturate(180%)"
        border="1px solid"
        borderColor={
          isScrolled ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.08)"
        }
        borderRadius="2xl"
        boxShadow={
          isScrolled
            ? "0 15px 50px rgba(0,0,0,0.35)"
            : "0 10px 30px rgba(0,0,0,0.15)"
        }
        transition="all 0.35s ease"
      >
        {/* Desktop / Main */}
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <NavbarLogo />

          <DesktopMenu />

          <MobileMenuButton isOpen={isOpen} onToggle={onToggle} />
        </Box>

        {/* Mobile */}
        <MobileMenu isOpen={isOpen} onClose={onClose} />
      </MotionBox>
    </Box>
  );
}
