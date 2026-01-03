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
      py={{ base: 17, md: 28 }}
      bg="#132444ff"
      position="relative"
      overflow="hidden"
      dir="rtl"
    >
      {/* BACKGROUND DECORATION  */}
      <Box
        position="absolute"
        inset={0}
        pointerEvents="none"
        opacity={{ base: 0.15, md: 0.15 }}
        style={{
          backgroundImage: `
      radial-gradient(circle at center, rgba(0, 125, 241, 0.6) 1px, transparent 1px),
      radial-gradient(circle at center, rgba(255,255,255,0.06) 1px, transparent 1px)
    `,
          backgroundSize: "52px 52px, 26px 26px",
          backgroundPosition: "0 0, 13px 13px",
          maskImage:
            "radial-gradient(ellipse at center, black 42%, transparent 82%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 42%, transparent 82%)",
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
                mb={{ base: 10, lg: 0 }}
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
          </Box>

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
          </MotionBox>
        </SimpleGrid>

        <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} spacing={5} mt={12}>
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
                transition="0.3s"
                _groupHover={{ color: "blue.300", transform: "scale(1.1)" }}
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
      </Container>
    </Box>
  );
}
