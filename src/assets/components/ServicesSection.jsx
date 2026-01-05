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
      py={24}
      bg="#050505ff"
      minH="100vh"
      position="relative"
      overflow="hidden"
      dir="rtl"
    >
      {/* --- BACKGROUND ELEMENTS --- */}
      {/* circle */}
      <MotionBox
        position="absolute"
        top="10%"
        left="-10%"
        w="600px"
        h="600px"
        bg="blue.800"
        filter="blur(150px)"
        opacity="0.5"
        borderRadius="full"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/*  (Orbital) */}
      <MotionBox
        position="absolute"
        bottom="5%"
        right="-5%"
        w="400px"
        h="400px"
        border="2px solid"
        borderColor="blue.500"
        borderRadius="full"
        opacity="0.5"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        _after={{
          content: '""',
          position: "absolute",
          top: "50%",
          left: "-10px",
          w: "20px",
          h: "20px",
          bg: "cyan.400",
          borderRadius: "full",
          boxShadow: "0 0 20px #4FD1C5",
        }}
      />

      {/* شبکه مهندسی (Grid) در پس‌زمینه */}
      <Box
        position="absolute"
        inset={0}
        bgImage="radial-gradient(circle, #ffffff1c 1px, transparent 1px)"
        bgSize="30px 30px"
        pointerEvents="none"
      />

      {/* --- CONTENT --- */}
      <Container maxW="container.lg" position="relative" zIndex={1}>
        <VStack spacing={4} mb={20} textAlign="center">
          <MotionBox
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Text
              fontSize="xs"
              fontWeight="900"
              color="blue.400"
              letterSpacing="5px"
            >
              TPA INTERACTIVE DEPARTMENTS
            </Text>
            <Heading size="2xl" color="white" mt={4} fontWeight="900">
              دپارتمان‌های{" "}
              <Text
                as="span"
                bgGradient="linear(to-l, blue.400, cyan.300)"
                bgClip="text"
              >
                فوق تخصصی
              </Text>
            </Heading>
            <Text color="gray.500" mt={4} fontWeight="300">
              برای مشاهده دپارتمان بعدی، کارت را به سمت بالا پرتاب کنید
            </Text>
          </MotionBox>
        </VStack>

        <Box position="relative" h="600px" maxW="450px" mx="auto">
          <AnimatePresence>
            {cards.map((service, index) => {
              if (index > 2) return null;

              return (
                <MotionBox
                  key={service.category}
                  position="absolute"
                  width="100%"
                  height="520px"
                  cursor="grab"
                  _active={{ cursor: "grabbing" }}
                  animate={{
                    scale: 1 - index * 0.06,
                    y: index * 40,
                    opacity: 1 - index * 0.25,
                    zIndex: cards.length - index,
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
      p={10}
      h="full"
      color="white"
      boxShadow="0 25px 50px -12px rgba(0, 0, 0, 0.7)"
      border="1px solid"
      borderColor="whiteAlpha.200"
      backdropFilter="blur(15px)"
      position="relative"
      overflow="hidden"
      _before={{
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        h: "2px",
        bgGradient: `linear(to-r, transparent, ${service.color}, transparent)`,
      }}
    >
      <VStack align="start" spacing={10} h="full" justify="space-between">
        <VStack align="start" spacing={6} w="full">
          <HStack w="full" justify="space-between">
            <Circle
              size="70px"
              bg="whiteAlpha.50"
              border="1px solid"
              borderColor="whiteAlpha.200"
              boxShadow={`0 0 30px ${service.color}33`}
            >
              <Icon as={service.icon} w={8} h={8} color={service.color} />
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

          <Heading size="lg" fontWeight="800" letterSpacing="-1px">
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
