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
  Text,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";

const MotionBox = motion.create(Box);

const navLinks = [
  { href: "#about", label: "درباره ما" },
  { href: "#products", label: "محصولات" },
  { href: "#portfolio", label: "سوابق" },
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

  const bgGlass = useColorModeValue(
    "rgba(255,255,255,0.15)",
    "rgba(0,0,0,0.25)"
  );
  const shadowGlass = "0 8px 25px rgba(0,0,0,0.2)";

  return (
    <Box as="header" position="fixed" top={0} left={0} right={0} zIndex={50}>
      <MotionBox
        initial={{ y: -120 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        bg={isScrolled ? bgGlass : "transparent"}
        boxShadow={isScrolled ? shadowGlass : "none"}
        backdropFilter={isScrolled ? "blur(15px) saturate(180%)" : "none"}
        borderBottom={isScrolled ? "1px solid rgba(255,255,255,0.2)" : "none"}
        transition="all 0.4s"
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
            <Box
              p={2}
              rounded="full"
              transition="all 0.3s"
              // _hover={{
              //   transform: "rotate(-10deg) scale(1.15)",
              //   boxShadow: "0 10px 25px rgba(59,130,246,0.5)",
              // }}
            >
              <Image
                src="/لوگو.png"
                alt="لوگو تجارت پرگاس آینده"
                boxSize="50px"
                objectFit="cover"
              />
            </Box>
            <Text
              fontSize="xl"
              fontWeight="black"
              bgGradient="linear(to-r, #ffff, blue.400)"
              bgClip="text"
              transition="all 0.3s"
            >
              تجارت پرگاس آینده
            </Text>
          </HStack>

          {/* Desktop Menu */}
          <HStack spacing={10} display={{ base: "none", md: "flex" }}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                fontWeight="semibold"
                color="whiteAlpha.900"
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
                  color: "cyan.400",
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
              py={2}
              _hover={{
                transform: "scale(1.1) rotate(-1deg)",
                boxShadow: "0 8px 25px rgba(59,130,246,0.6)",
              }}
              transition="all 0.3s"
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
            color="white"
            _hover={{ bg: "whiteAlpha.200" }}
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
            backdropFilter="blur(15px) saturate(180%)"
            borderRadius="xl"
          >
            <Flex direction="column" gap={4}>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onToggle}
                  fontSize="lg"
                  fontWeight="medium"
                  color="whiteAlpha.900"
                  _hover={{ color: "cyan.400" }}
                  transition="color 0.2s"
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
                _hover={{
                  // transform: "scale(1.1) rotate(-1deg)",
                  boxShadow: "0 8px 12px rgba(26, 42, 67, 0.6)",
                }}
                transition="all 0.3s"
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
