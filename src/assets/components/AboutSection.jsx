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
  Badge,
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
      py={{ base: 20, md: 32 }}
      bg="#020817"
      position="relative"
      overflow="hidden"
      dir="rtl"
      fontFamily="'Vazirmatn', sans-serif"
    >
      {/* بک‌گراند ثابت با درخشش ملایم */}
      <Box
        position="absolute"
        top="5%"
        left="5%"
        w="600px"
        h="600px"
        bg="blue.600"
        filter="blur(20px)"
        opacity="0.15"
        pointerEvents="none"
      />

      <Container maxW="7xl" position="relative">
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 12, lg: 20 }}
          alignItems="center"
        >
          <MotionBox
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Badge
              colorScheme="blue"
              variant="outline"
              px={4}
              py={1}
              mb={6}
              borderRadius="full"
              letterSpacing="1px"
            >
              درباره ما
            </Badge>
            <Heading
              as="h2"
              fontSize={{ base: "4xl", md: "6xl" }}
              color="white"
              mb={8}
              fontWeight="900"
              lineHeight="1.2"
            >
              تخصص ما، <br />
              <chakra.span
                bgGradient="linear(to-l, blue.400, cyan.400)"
                bgClip="text"
              >
                تأمین آینده صنعت
              </chakra.span>
            </Heading>
            <Text
              color="gray.400"
              fontSize="lg"
              lineHeight="2.2"
              textAlign="justify"
              borderRight="4px solid"
              borderColor="blue.500"
              pr={6}
            >
              شرکت پرگاس تجارت آینده فعالیت خود را از سال ۱۳۸۹ در زمینه تامین
              مواد اولیه و مصرفی، تجهیزات و قطعات یدکی مورد نیاز در صنعت فولاد،
              نفت، گاز، پتروشیمی، سیمان و دیگر صنایع آغاز نمود. ما با شناسایی
              نیازمندیهای مشتریان و با بهره مندی از تجربه نیروهای متخصص و شرکای
              تجاری بین المللی و تراز اول در جهت رضایت شما گام بر میداریم. محور
              فعالیت های پرگاس تجارت آینده در حوزه فولادها ومواد نسوز، مصرفی و
              همچنین تامین تجهیزات مورد نیاز صنعت فولاد ، نفت، گاز و پتروشیمی و
              سایر صنایع می باشد.{" "}
            </Text>
          </MotionBox>

          {/* Image Section */}
          <Box>
            <SimpleGrid columns={2} spacing={4}>
              <VStack spacing={4}>
                <MotionBox
                  initial={{ opacity: 0, scale: 0.8, y: 40 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.03 }}
                  borderRadius="2xl"
                  overflow="hidden"
                  h={{ base: "40", md: "72" }}
                  w="full"
                  boxShadow="1px 1px 10px rgba(255, 255, 255, 0.31)"
                  border="1px solid"
                  borderColor="whiteAlpha.200"
                >
                  <Image
                    src={aboutImage1}
                    objectFit="cover"
                    w="full"
                    h="full"
                  />
                </MotionBox>
                <MotionBox
                  initial={{ opacity: 0, scale: 0.8, y: 40 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.03 }}
                  borderRadius="2xl"
                  overflow="hidden"
                  h={{ base: "40", md: "72" }}
                  w="full"
                  boxShadow="1px 1px 10px rgba(255, 255, 255, 0.31)"
                  border="1px solid"
                  borderColor="whiteAlpha.200"
                >
                  <Image
                    src={aboutImage2}
                    objectFit="cover"
                    w="full"
                    h="full"
                  />
                </MotionBox>
              </VStack>

              <VStack spacing={4} pt={12}>
                <MotionBox
                  initial={{ opacity: 0, scale: 0.8, y: -40 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.03 }}
                  borderRadius="2xl"
                  overflow="hidden"
                  h={{ base: "40", md: "72" }}
                  w="full"
                  boxShadow="1px 1px 10px rgba(255, 255, 255, 0.31)"
                  border="1px solid"
                  borderColor="whiteAlpha.200"
                >
                  <Image
                    src={aboutImage3}
                    objectFit="cover"
                    w="full"
                    h="full"
                  />
                </MotionBox>
                <MotionBox
                  initial={{ opacity: 0, scale: 0.8, y: -40 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.03 }}
                  borderRadius="2xl"
                  overflow="hidden"
                  h={{ base: "40", md: "72" }}
                  w="full"
                  boxShadow="1px 1px 10px rgba(23, 91, 121, 0.31)"
                  border="1px solid"
                  borderColor="whiteAlpha.200"
                >
                  <Image
                    src={aboutImage4}
                    objectFit="cover"
                    w="full"
                    h="full"
                  />
                </MotionBox>
              </VStack>
            </SimpleGrid>
          </Box>
        </SimpleGrid>

        {/* ---  (Modern Cards) --- */}
        <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} spacing={8} mt={24}>
          {features.map((feature, index) => (
            <MotionBox
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              p={8}
              bg="rgba(255, 255, 255, 0.03)"
              backdropFilter="blur(12px)"
              borderRadius="3xl"
              border="1px solid"
              borderColor="whiteAlpha.100"
              textAlign="right"
              role="group"
              cursor="pointer"
              transition="all 0.3s ease"
              _hover={{
                bg: "whiteAlpha.100",
                borderColor: "blue.400",
                boxShadow: "0 0 20px rgba(66, 153, 225, 0.2)",
              }}
            >
              <Box
                mb={6}
                display="inline-flex"
                p={4}
                borderRadius="2xl"
                bg="blue.500"
                color="white"
                boxShadow="0 10px 20px rgba(49, 130, 206, 0.3)"
                _groupHover={{
                  bg: "blue.400",
                  transform: "rotateY(180deg)",
                }}
                transition="0.6s"
              >
                <Icon as={feature.icon} w={6} h={6} />
              </Box>
              <Text color="white" fontWeight="800" fontSize="xl" mb={4}>
                {feature.title}
              </Text>
              <Text color="gray.500" fontSize="sm" lineHeight="1.8">
                {feature.description}
              </Text>
            </MotionBox>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
