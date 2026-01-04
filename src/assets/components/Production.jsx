import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Image,
  Badge,
  Button,
  Stack,
  Flex,
  Icon,
  chakra,
  shouldForwardProp,
} from "@chakra-ui/react";
import { motion, isValidMotionProp } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Link as RouterLink } from "react-router-dom";

// images
import Tir from "../image/شمش های فولادی.jpg";
import navdani from "../image/navdan.jpg";
import milgerd from "../image/milgerd.jpg";

const MotionBox = chakra(motion.create("div"), {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

// ۱. تعریف متغیرهای انیمیشن برای کل سکشن
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4, // فاصله زمانی بین ورود هر بخش (Title -> Text -> Cards)
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function ProductsSection() {
  const products = [
    {
      name: "تیرآهن و ناودانی",
      description:
        "انواع تیرآهن و ناودانی با استانداردهای بین‌المللی برای پروژه‌های صنعتی و ساختمانی",
      image: navdani,
      specs: ["استاندارد DIN", "مقاومت بالا", "ضد خوردگی"],
    },
    {
      name: "میلگرد و آرماتور",
      description:
        "میلگرد آجدار و ساده با کیفیت عالی برای سازه‌های بتنی و ساختمانی",
      image: milgerd,
      specs: ["گرید ۴۰۰ و ۵۰۰", "آجدار استاندارد", "کنترل کیفیت"],
    },
    {
      name: "شمش های فولادی",
      description: "شمش های فولادی در سایز ها و گرید های مختلف",
      image: Tir,
      specs: ["سطح صیقلی", "ضخامت متنوع", "برش دقیق"],
    },
  ];

  return (
    <Box
      as="section"
      id="products"
      py={24}
      bg="gray.950"
      position="relative"
      overflow="hidden"
      dir="rtl"
    >
      {/* Background Glows */}
      <Box
        position="absolute"
        top="0"
        left="25%"
        w="400px"
        h="400px"
        bg="orange.500"
        opacity="0.05"
        filter="blur(100px)"
        borderRadius="full"
      />
      <Box
        position="absolute"
        bottom="0"
        right="25%"
        w="400px"
        h="400px"
        bg="blue.500"
        opacity="0.05"
        filter="blur(100px)"
        borderRadius="full"
      />

      <Container
        maxW="7xl"
        as={motion.create("div")}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* --- بخش اول: Heading (اول وارد می‌شود) --- */}
        <MotionBox variants={itemVariants} mb={6}>
          <Badge
            colorScheme="blue"
            variant="outline"
            px={4}
            py={1}
            mb={6}
            borderRadius="full"
            letterSpacing="1px"
          >
            محصولات ما
          </Badge>
          <Heading
            fontWeight="900"
            color="blue.600"
            fontSize={{ base: "5xl", md: "7xl" }}
            lineHeight="1.2"
          >
            <Box as="span" color="blue.600">
              مهندسی و تامین
            </Box>
            <Box
              as="span"
              display="block"
              position="relative"
              bgGradient="linear(to-r, orange.300, orange.500, yellow.400)"
              bgClip="text"
              sx={{
                WebkitTextFillColor: "transparent",
                animation: "shine 3s linear infinite",
                backgroundSize: "200% auto",
              }}
              style={{
                backgroundImage:
                  "linear-gradient(to-right, #F6E05E 0%, #ED8936 50%, #F6E05E 100%)",
              }}
            >
              متریال استراتژیک فولاد
              {/* underline Text */}
              <MotionBox
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ delay: 0.5, duration: 1 }}
                height="4px"
                bg="orange.500"
                borderRadius="full"
                mt={2}
                boxShadow="0 0 15px rgba(237, 137, 54, 0.6)"
              />
            </Box>
          </Heading>
        </MotionBox>

        {/* --- Text  --- */}
        <MotionBox variants={itemVariants} mb={16}>
          <Text
            color="gray.500"
            fontSize="xl"
            maxW="2xl"
            lineHeight="1.7"
            fontWeight={"400"}
          >
            ما زنجیره تامین شما را با محصولات دارای گواهینامه بین‌المللی و تضمین
            اصالت کالا، به شکلی ناگسستنی تقویت می‌کنیم.
          </Text>
        </MotionBox>

        {/* ---  Cards--- */}
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
          {products.map((product, index) => (
            <MotionBox
              key={index}
              variants={itemVariants}
              role="group"
              bg="gray.900"
              borderRadius="2xl"
              overflow="hidden"
              border="1px solid"
              borderColor="gray.800"
              _hover={{
                borderColor: "orange.500",
                boxShadow: "0 0 20px rgba(237, 137, 54, 0.1)",
              }}
            >
              <Box position="relative" h="240px" overflow="hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  w="full"
                  h="full"
                  objectFit="cover"
                  transition="0.5s all ease-in-out"
                  _groupHover={{ transform: "scale(1.1)" }}
                />
                <Box
                  position="absolute"
                  inset="0"
                  bgGradient="linear(to-t, gray.900, transparent)"
                />
                <Badge
                  position="absolute"
                  top={4}
                  right={4}
                  colorScheme="orange"
                  variant="solid"
                  borderRadius="full"
                >
                  {product.specs[0]}
                </Badge>
              </Box>

              <Stack p={6} spacing={4}>
                <Heading
                  size="md"
                  color="white"
                  _groupHover={{ color: "orange.500" }}
                  transition="0.3s"
                  fontWeight={"700"}
                >
                  {product.name}
                </Heading>
                <Text color="gray.400" fontSize="sm" noOfLines={2}>
                  {product.description}
                </Text>
                <Flex wrap="wrap" gap={2}>
                  {product.specs.map((spec, i) => (
                    <Badge
                      key={i}
                      variant="outline"
                      color="gray.300"
                      borderColor="gray.700"
                      textTransform="none"
                    >
                      <Icon
                        as={CheckCircle2}
                        size={12}
                        ml={1}
                        color="orange.500"
                      />
                      {spec}
                    </Badge>
                  ))}
                </Flex>
              </Stack>
            </MotionBox>
          ))}
        </SimpleGrid>

        {/* --- Button --- */}
        <MotionBox variants={itemVariants} mt={16} textAlign="center">
          <Button
            as={RouterLink}
            to="/products"
            size="lg"
            colorScheme="orange"
            borderRadius="xl"
            px={10}
            boxShadow="0 10px 20px -5px rgba(237, 173, 54, 0.5)"
            _hover={{
              transform: "translateY(-2px)",
              boxShadow: "0 15px 25px -5px rgba(237, 173, 54, 0.5)",
            }}
          >
            محصولات بیشتر
          </Button>
        </MotionBox>
      </Container>
    </Box>
  );
}
