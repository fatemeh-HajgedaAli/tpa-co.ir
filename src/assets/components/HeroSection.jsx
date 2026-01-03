import { Box, Flex, Heading, Text, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";

import HeroImage from "../image/HeroImage3.jpg";

const MotionBox = motion(Box);

export default function HeroSection() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Box position="relative" minH="auto" overflow="hidden">
      {/* Background */}
      <Box
        position="absolute"
        inset={0}
        zIndex={0}
        bgImage={`url(${HeroImage})`}
        bgRepeat="no-repeat"
        bgSize={{ base: "cover", md: "cover" }}
        bgPosition={{ base: "top center", md: "center" }}
        _before={{
          content: '""',
          position: "absolute",
          inset: 0,
          bgGradient: "linear(to-br, blackAlpha.700, blue.900)",
        }}
      />

      {/* Main Content */}
      <Flex
        position="relative"
        zIndex={1}
        direction="column"
        align="center"
        justify="center"
        textAlign="center"
        px={6}
        py={20}
        minH="auto"
      >
        <MotionBox
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Text
            color="blue.300"
            bg="orange.400Alpha.200"
            px={4}
            py={2}
            rounded="full"
            fontSize="sm"
            mb={6}
            display="inline-block"
            fontWeight={800}
          >
            پیشرو در صنعت فولاد
          </Text>

          <Heading
            size="3xl"
            color="white"
            mb={6}
            fontWeight={800}
            lineHeight="shorter"
          >
            شرکت <br />
            <Text as="span" color="blue.300">
              تجارت پرگاس آینده
            </Text>
          </Heading>

          <Text
            fontSize={{ base: "lg", md: "xl" }}
            color="gray.300"
            maxW="3xl"
            mb={10}
          >
            تولیدکننده محصولات فولادی با بیش از ۲۰ سال تجربه در صنعت ساختمان
          </Text>

          <Flex gap={4} justify="center" wrap="wrap">
            <Button
              variant="outline"
              color="blue.300"
              size="lg"
              onClick={() => scrollToSection("products")}
              _hover={{
                bg: "blue.300",
                color: "white",
                transform: "scale(1.06)",
                boxShadow: "0 6px 18px rgba(59,130,246,0.45)",
              }}
              transition="all 0.3s"
            >
              مشاهده محصولات
            </Button>
          </Flex>
        </MotionBox>
      </Flex>
    </Box>
  );
}
