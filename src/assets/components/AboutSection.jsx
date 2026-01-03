import React from "react";
import {
  Box,
  Container,
  SimpleGrid,
  Image,
  chakra,
  shouldForwardProp,
  Heading,
  Text,
  VStack,
  Icon,
  Flex,
} from "@chakra-ui/react";
import { Award, Users, Factory, Globe } from "lucide-react";
import { motion, isValidMotionProp } from "framer-motion";

import aboutImage1 from "../image/aboutSection4.jpg";
import aboutImage2 from "../image/AboutSection.jpg";
import aboutImage3 from "../image/شمش های فولادی.jpg";
import aboutImage4 from "../image/HeroBg.jpg";

const MotionBox = chakra(motion.div, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

const features = [
  {
    icon: Award,
    title: "کیفیت برتر",
    description:
      "دارای استانداردهای بین‌المللی ISO و گواهینامه‌های معتبر صنعتی",
  },
  {
    icon: Users,
    title: "تیم متخصص",
    description: "بیش از ۱۰۰ نیروی متخصص و مجرب در بخش‌های فنی و بازرگانی",
  },
  {
    icon: Factory,
    title: "تجهیزات مدرن",
    description:
      "بهره‌گیری از پیشرفته‌ترین تکنولوژی‌های روز دنیا در خطوط تولید",
  },
  {
    icon: Globe,
    title: "صادرات بین‌المللی",
    description: "صادرات محصولات باکیفیت به بیش از ۱۵ کشور در منطقه",
  },
];

export default function AboutSection() {
  return (
    <Box
      as="section"
      id="about"
      py={{ base: 16, md: 28 }}
      bg="#0a0f18"
      position="relative"
      overflow="hidden"
      dir="rtl"
    >
      {/* BACKGROUND DECORATION */}
      <Box
        position="absolute"
        inset={0}
        opacity={0.07}
        pointerEvents="none"
        style={{
          backgroundImage:
            "radial-gradient(circle, #3182ce 1px, transparent 1px)",
          backgroundSize: "45px 45px",
        }}
      />
      <Box
        position="absolute"
        top="-10%"
        left="-5%"
        w="500px"
        h="500px"
        bg="blue.800"
        filter="blur(140px)"
        opacity="0.15"
        borderRadius="full"
      />

      <Container maxW="7xl" position="relative">
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 12, lg: 20 }}
          alignItems="center"
        >
          {/* RIGHT SIDE: CONTENT & FEATURES */}
          <Box>
            <MotionBox
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <Text
                color="blue.400"
                fontWeight="extrabold"
                fontSize="sm"
                mb={3}
                letterSpacing="wider"
              >
                آشنایی با ما
              </Text>
              <Heading
                as="h2"
                fontSize={{ base: "3xl", md: "5xl" }}
                color="white"
                mb={6}
                lineHeight="1.3"
              >
                پیشرو در تحول <br />
                <chakra.span color="blue.400">صنعت فولاد ایران</chakra.span>
              </Heading>
              <Text
                color="gray.400"
                fontSize="lg"
                mb={10}
                textAlign="justify"
                lineHeight="1.8"
              >
                شرکت پرگاس تجارت آینده فعالیت خود را از سال ۱۳۸۹ در زمینه تامین
                مواد اولیه و مصرفی، تجهیزات و قطعات یدکی مورد نیاز در صنعت
                فولاد، نفت، گاز، پتروشیمی، سیمان و دیگر صنایع آغاز نمود. ما با
                شناسایی نیازمندیهای مشتریان و با بهره مندی از تجربه نیروهای
                متخصص و شرکای تجاری بین المللی و تراز اول در جهت رضایت شما گام
                بر میداریم. محور فعالیت های پرگاس تجارت آینده در حوزه فولادها
                ومواد نسوز، مصرفی و همچنین تامین تجهیزات مورد نیاز صنعت فولاد ،
                نفت، گاز و پتروشیمی و سایر صنایع می باشد.{" "}
              </Text>
            </MotionBox>

            {/* FEATURES GRID WITH STAGGER ANIMATION */}
            <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={5}>
              {features.map((feature, index) => (
                <MotionBox
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  p={5}
                  bg="whiteAlpha.50"
                  borderRadius="2xl"
                  border="1px solid"
                  borderColor="whiteAlpha.100"
                  _hover={{ borderColor: "blue.500", bg: "whiteAlpha.100" }}
                  role="group"
                >
                  <Icon
                    as={feature.icon}
                    color="blue.400"
                    w={7}
                    h={7}
                    mb={3}
                    _groupHover={{ color: "blue.300", transform: "scale(1.1)" }}
                    transition="0.3s"
                  />
                  <Text color="white" fontWeight="bold" fontSize="md" mb={2}>
                    {feature.title}
                  </Text>
                  <Text color="gray.500" fontSize="xs" lineHeight="1.6">
                    {feature.description}
                  </Text>
                </MotionBox>
              ))}
            </SimpleGrid>
          </Box>

          {/* LEFT SIDE: ANIMATED IMAGE GRID */}
          <MotionBox
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            position="relative"
          >
            <SimpleGrid columns={2} spacing={4}>
              <VStack spacing={4}>
                <MotionBox
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  whileHover={{ scale: 1.03 }}
                  borderRadius="3xl"
                  overflow="hidden"
                  h={{ base: "48", md: "72" }}
                  w="full"
                  boxShadow="2xl"
                >
                  <Image
                    src={aboutImage1}
                    objectFit="cover"
                    w="full"
                    h="full"
                    filter="brightness(0.9)"
                  />
                </MotionBox>
                <MotionBox
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  whileHover={{ scale: 1.03 }}
                  borderRadius="3xl"
                  overflow="hidden"
                  h={{ base: "40", md: "52" }}
                  w="full"
                  boxShadow="2xl"
                >
                  <Image
                    src={aboutImage2}
                    objectFit="cover"
                    w="full"
                    h="full"
                    filter="brightness(0.9)"
                  />
                </MotionBox>
              </VStack>

              <VStack spacing={4} pt={10}>
                <MotionBox
                  initial={{ y: -30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  whileHover={{ scale: 1.03 }}
                  borderRadius="3xl"
                  overflow="hidden"
                  h={{ base: "48", md: "52" }}
                  w="full"
                  boxShadow="2xl"
                >
                  <Image
                    src={aboutImage3}
                    objectFit="cover"
                    w="full"
                    h="full"
                    filter="brightness(0.9)"
                  />
                </MotionBox>
                <MotionBox
                  initial={{ y: -30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  whileHover={{ scale: 1.03 }}
                  borderRadius="3xl"
                  overflow="hidden"
                  h={{ base: "48", md: "72" }}
                  w="full"
                  boxShadow="2xl"
                >
                  <Image
                    src={aboutImage4}
                    objectFit="cover"
                    w="full"
                    h="full"
                    filter="brightness(0.9)"
                  />
                </MotionBox>
              </VStack>
            </SimpleGrid>

            {/* FLOATING BADGE */}
            <MotionBox
              animate={{ y: [0, -12, 0] }}
              //   transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              position="absolute"
              top="1"
              left="1"
              bg="blue.600"
              color="white"
              p={6}
              borderRadius="100%"
              boxShadow="0 20px 40px rgba(85, 154, 218, 0.31)"
              zIndex={10}
              textAlign="center"
              border="2px solid"
              borderColor="blue.300"
            >
              <Text fontSize="2xl" fontWeight="800" lineHeight="1">
                +۱۵ سال
              </Text>
              <Text fontSize="xs" fontWeight="light" whiteSpace="nowrap">
                تجربه درخشان
              </Text>
            </MotionBox>
          </MotionBox>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
