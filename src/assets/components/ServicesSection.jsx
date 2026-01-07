import React, { useState } from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Circle,
  Icon,
} from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { servicesData as initialData } from "../../pages/servicesData";
import { Cpu } from "lucide-react";

const MotionBox = motion.create(Box);

export default function ServicesSection() {
  const [cards, setCards] = useState(initialData);

  const sendToBack = (index) => {
    setCards((prev) => {
      const newCards = [...prev];
      const movedCard = newCards.splice(index, 1)[0];
      newCards.push(movedCard);
      return newCards;
    });
  };

  return (
    <Box
      py={{ base: 16, md: 24 }}
      bg="#050505"
      minH="100vh"
      position="relative"
      overflow="hidden"
      dir="rtl"
    >
      {/* ===== BACKGROUND ELEMENTS (BEHIND CARDS) ===== */}
      <MotionBox
        position="absolute"
        top={{ base: "20%", md: "15%", xl: "10%" }}
        left={{ base: "-20%", md: "-25%", xl: "15%" }}
        w={{ base: "100vw", md: "50vw", xl: "35vw" }}
        h={{ base: "100vw", md: "50vw", xl: "35vw" }}
        bg="blue.800"
        filter="blur(160px)"
        opacity={{ base: 0.80, md: 0.50 }}
        borderRadius="full"
        zIndex={0}
        animate={{
          scale: [1, 1.15, 1],
          x: [0, 60, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      {/* orbit Part */}
      <MotionBox
        position="absolute"
        bottom={{ base: "5%", md: "8%", xl: "10%" }}
        right={{ base: "-5%", md: "-20%", xl: "20%" }}
        w={{ base: "70vw", md: "35vw", xl: "22vw" }}
        h={{ base: "70vw", md: "35vw", xl: "22vw" }}
        border="2px solid"
        borderColor="blue.500"
        borderRadius="full"
        opacity={{ base: 0.3, md: 0.5 }}
        zIndex={0}
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        sx={{
          "&::after": {
            content: '""',
            position: "absolute",
            top: "50%",
            left: "-10px",
            width: "14px",
            height: "14px",
            bg: "cyan.400",
            borderRadius: "full",
            boxShadow: "0 0 20px #4FD1C5",
            "@media (min-width: 768px)": {
              width: "18px",
              height: "18px",
            },
          },
        }}
      />

      {/* Grid Background */}
      <Box
        position="absolute"
        inset={0}
        bgImage="radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)"
        bgSize={{ base: "40px 40px", md: "32px 32px", xl: "28px 28px" }}
        pointerEvents="none"
        zIndex={0}
      />

      {/* ===== CONTENT ===== */}
      <Container maxW="container.lg" position="relative" zIndex={1}>
        <VStack spacing={4} mb={20} textAlign="center">
          <MotionBox
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Text
              fontSize={{ base: "xs", md: "sm" }}
              fontWeight="900"
              color="blue.400"
              letterSpacing="5px"
            >
              TPA INTERACTIVE DEPARTMENTS
            </Text>
            <Heading
              size={{ base: "xl", md: "2xl" }}
              color="white"
              mt={4}
              fontWeight="900"
            >
              دپارتمان‌های{" "}
              <Text
                as="span"
                bgGradient="linear(to-l, blue.400, cyan.300)"
                bgClip="text"
              >
                فوق تخصصی
              </Text>
            </Heading>
            <Text
              color="gray.500"
              mt={4}
              fontWeight="300"
              fontSize={{ base: "sm", md: "md" }}
            >
              برای مشاهده دپارتمان بعدی، کارت را به سمت بالا پرتاب کنید
            </Text>
          </MotionBox>
        </VStack>

        {/* ===== CARDS STACK (RESPONSIVE + BETTER OVERLAP) ===== */}
        <Box
          position="relative"
          h={{ base: "520px", md: "650px" }}
          maxW="480px"
          mx="auto"
        >
          <AnimatePresence>
            {cards.map((service, index) => {
              if (index > 3) return null;

              return (
                <MotionBox
                  key={service.category}
                  position="absolute"
                  width="100%"
                  height={{ base: "460px", md: "520px" }}
                  cursor="grab"
                  _active={{ cursor: "grabbing" }}
                  animate={{
                    scale: 1 - index * 0.05,
                    y: index * 35,
                    opacity: 1 - index * 0.2,
                    zIndex: cards.length - index + 1, // کارت‌ها روی background
                  }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  drag="y"
                  dragConstraints={{ top: 0, bottom: 0 }}
                  onDragEnd={(e, info) => {
                    if (info.offset.y < -120) {
                      sendToBack(index);
                    }
                  }}
                  exit={{
                    y: -600,
                    opacity: 0,
                    scale: 0.8,
                    rotate: -10,
                    transition: { duration: 0.4 },
                  }}
                >
                  <ServiceCardContent service={service} />
                </MotionBox>
              );
            })}
          </AnimatePresence>
        </Box>
      </Container>
    </Box>
  );
}

function ServiceCardContent({ service }) {
  return (
    <Box
      bg="rgba(15, 15, 20, 0.85)"
      borderRadius="40px"
      p={{ base: 6, md: 10 }}
      h="full"
      color="white"
      boxShadow="0 25px 50px -12px rgba(0,0,0,0.7)"
      border="1px solid"
      borderColor="whiteAlpha.200"
      backdropFilter="blur(15px)"
      position="relative"
      overflow="hidden"
      sx={{
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "2px",
          background: `linear-gradient(to right, transparent, ${service.color}, transparent)`,
        },
      }}
    >
      <VStack align="start" spacing={10} h="full" justify="space-between">
        <VStack align="start" spacing={6} w="full">
          <HStack w="full" justify="space-between">
            <Circle
              size={{ base: "60px", md: "70px" }}
              bg="whiteAlpha.50"
              border="1px solid"
              borderColor="whiteAlpha.200"
              boxShadow={`0 0 30px ${service.color}33`}
            >
              <Icon
                as={service.icon}
                w={{ base: 6, md: 8 }}
                h={{ base: 6, md: 8 }}
                color={service.color}
              />
            </Circle>
            <Box textAlign="left">
              <Text
                fontSize="10px"
                fontWeight="black"
                color="whiteAlpha.400"
                letterSpacing="2px"
              >
                EST. 2024
              </Text>
            </Box>
          </HStack>

          <Heading
            size={{ base: "md", md: "lg" }}
            fontWeight="800"
            letterSpacing="-1px"
          >
            {service.category}
          </Heading>

          <VStack align="start" spacing={4} w="full">
            {service.services.slice(0, 4).map((item, i) => (
              <HStack key={i} w="full" group="list">
                <MotionBox
                  w="12px"
                  h="2px"
                  bg={service.color}
                  initial={{ width: 0 }}
                  whileInView={{ width: "12px" }}
                />
                <Text
                  fontSize="sm"
                  color="gray.400"
                  transition="0.3s"
                  _hover={{ color: "white", transform: "translateX(-5px)" }}
                >
                  {item}
                </Text>
              </HStack>
            ))}
          </VStack>
        </VStack>

        <HStack
          w="full"
          justify="space-between"
          pt={6}
          borderTop="1px solid"
          borderColor="whiteAlpha.100"
        >
          <VStack align="start" spacing={0}>
            <Text fontSize="10px" fontWeight="black" color={service.color}>
              OFFICIAL ACCESS
            </Text>
            <Text fontSize="xs" fontWeight="bold">
              TPA-CO.IR
            </Text>
          </VStack>
          <Icon as={Cpu} w={6} h={6} color="whiteAlpha.300" />
        </HStack>
      </VStack>
    </Box>
  );
}
