import React, { useState, useEffect } from "react";
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Button,
  Collapse,
  useDisclosure,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const navLinks = [
  { href: "#about", label: "درباره ما" },
  { href: "#products", label: "محصولات" },
  { href: "#portfolio", label: "سوابق" },
  { href: "#services", label: "خدمات ما" },
  { href: "#contact", label: "ارتباط با ما" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { isOpen, onToggle } = useDisclosure();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ===== Theme-aware values ===== */
  const bgGlass = useColorModeValue(
    "rgba(255,255,255,0.75)",
    "rgba(0,0,0,0.35)"
  );

  const linkColor = useColorModeValue("blue.600" , "gray.800", "whiteAlpha.900");
  const linkHoverColor = useColorModeValue("blue.600", "cyan.400");

  const shadowGlass = "0 8px 25px rgba(0,0,0,0.15)";

  return (
    <Box as="header" position="fixed" top={0} left={0} right={0} zIndex={50}>
      <MotionBox
        initial={{ y: -120 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        bg={isScrolled ? bgGlass : "transparent"}
        boxShadow={isScrolled ? shadowGlass : "none"}
        backdropFilter={isScrolled ? "blur(14px) saturate(180%)" : "none"}
        borderBottom={isScrolled ? "1px solid rgba(255,255,255,0.2)" : "none"}
      >
        <Flex
          maxW="7xl"
          mx="auto"
          px={6}
          py={isScrolled ? 3 : 6}
          align="center"
          justify="space-between"
        >
          {/* Logo */}
          <HStack spacing={3}>
            <Box p={2} rounded="full">
              <Image
                src="/لوگو.png"
                alt="لوگو تجارت پرگاس آینده"
                boxSize="48px"
                objectFit="cover"
              />
            </Box>
          </HStack>

          {/* Desktop Menu */}
          <HStack spacing={10} display={{ base: "none", md: "flex" }}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                fontWeight="semibold"
                color={"blue.600"}
                position="relative"
                _after={{
                  content: '""',
                  position: "absolute",
                  width: "0%",
                  height: "2px",
                  bottom: "-4px",
                  left: 0,
                  bgGradient: "linear(to-r, blue.400, cyan.400)",
                  transition: "0.3s",
                  borderRadius: "full",
                }}
                _hover={{
                  color: linkHoverColor,
                  _after: { width: "100%" },
                }}
              >
                {link.label}
              </Link>
            ))}

            <Button
              as="a"
              href="#contact"
              bgGradient="linear(to-r, blue.400, cyan.400)"
              color="white"
              fontWeight="bold"
              rounded="full"
              px={6}
              _hover={{
                transform: "scale(1.05)",
                boxShadow: "lg",
              }}
              transition="all 0.25s"
            >
              تماس با ما
            </Button>
          </HStack>

          {/* Mobile Menu Button */}
          <IconButton
            aria-label="Toggle Menu"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            display={{ md: "none" }}
            onClick={onToggle}
            variant="ghost"
            color={linkColor}
           
          />
        </Flex>

        {/* Mobile Menu */}
        <Collapse in={isOpen} animateOpacity>
          <Box
            bg={bgGlass}
            px={6}
            py={4}
            display={{ md: "none" }}
            shadow={shadowGlass}
            backdropFilter="blur(14px) saturate(180%)"
            borderRadius="xl"
            mx={4}
            mb={4}
          >
            <Flex direction="column" gap={4}>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onToggle}
                  fontSize="lg"
                  fontWeight="medium"
                  color={linkColor}
                  _hover={{ color: linkHoverColor }}
                >
                  {link.label}
                </Link>
              ))}

              <Button
                as="a"
                href="#contact"
                onClick={onToggle}
                bgGradient="linear(to-r, blue.400, cyan.400)"
                color="white"
                fontWeight="bold"
                rounded="full"
                mt={2}
                _hover={{ boxShadow: "lg" }}
              >
                تماس با ما
              </Button>
            </Flex>
          </Box>
        </Collapse>
      </MotionBox>
    </Box>
  );
}
