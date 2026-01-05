import React from "react";
import {
  Box,
  Image,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import ImageSection from "../image/HeroImage2.jpg";

const MotionBox = motion.create(Box);

export default function IndustrialImageSeparator() {
  return (
    <Box
      position="relative"
      h={{ base: "400px", md: "600px" }}
      overflow="hidden"
      bg="#0a0a0a"
    >
      {/* IMAGE */}
      <Image
        src={ImageSection}
        alt="Industrial Engineering"
        position="absolute"
        inset={0}
        w="full"
        h="full"
        objectFit="cover"
        filter="grayscale(30%) brightness(0.65)"
        zIndex={0}
      />

      {/* OVERLAY */}
      <Box
        position="absolute"
        inset={0}
        zIndex={1}
        bgGradient="linear(to-b, #0a0a0a, transparent 40%, #0a0a0a)"
        opacity="0.85"
      />

      {/* CONTENT
      <Container
        maxW="7xl"
        h="full"
        position="relative"
        zIndex={2}
        display="flex"
        alignItems="center"
        dir="rtl"
      >
        <VStack align="start" spacing={4} maxW="2xl" p={8} color="white">
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <HStack mb={4}>
              <Box w="60px" h="2px" bg="blue.500" />
              <Text
                fontSize="sm"
                fontWeight="900"
                letterSpacing="3px"
                color="blue.400"
              >
                TPA COMPANY
              </Text>
            </HStack>

            <Heading size="2xl" mb={4} fontWeight="900" lineHeight="1.2">
              دقت مهندسی در{" "}
              <Box as="span" color="blue.500">
                خدمات صنعتی
              </Box>
            </Heading>

            <Text color="gray.300" fontSize="lg" lineHeight="tall">
              ما با ترکیب تجربه ۲۰ ساله و تکنولوژی‌های روز دنیا، پروژه‌های ذوب و
              ریخته‌گری را از مشاوره تا بهره‌برداری کامل هدایت می‌کنیم.
            </Text>
          </MotionBox>
        </VStack>
      </Container> */}

      {/* EXPERIENCE BADGE */}
      <Box
        position="absolute"
        bottom="12%"
        left="6%"
        zIndex={2}
        borderRight="3px solid"
        borderColor="blue.500"
        pr={4}
      >
        <Text color="white" fontWeight="900" fontSize="4xl" opacity="0.45">
          15+
        </Text>
        <Text color="whiteAlpha.800" fontSize="xs" letterSpacing="2px">
          سال سابقه درخشان
        </Text>
      </Box>
    </Box>
  );
}
