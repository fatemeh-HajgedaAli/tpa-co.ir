import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Image,
  Badge,
  Stack,
  Flex,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  chakra,
  shouldForwardProp,
} from "@chakra-ui/react";
import { ChevronLeft, CheckCircle2, Search } from "lucide-react";
import { motion, isValidMotionProp } from "framer-motion";
import { Link as RouterLink } from "react-router-dom";

// images
import productImg1 from "../assets/image/آهن.jpg";
import productImg2 from "../assets/image/کک.jpg";
import productImg3 from "../assets/image/فرو منگز.jpg";
import productImg4 from "../assets/image/فرو سیلیس.jpg";
import productImg5 from "../assets/image/سیلیکو.jpg";
import productImg6 from "../assets/image/انواع خاک.jpg";
import productImg7 from "../assets/image/نازل افشانک.jpg";
import productImg8 from "../assets/image/شمش.jpg";
import productImg9 from "../assets/image/بریکتهای.jpg";
import productImg10 from "../assets/image/شلاکه.jpg";
import productImg11 from "../assets/image/ترموکوپل.jpg";
import productImg12 from "../assets/image/پودر ریخته گری.jpg";
import productImg13 from "../assets/image/نازل تاندیش.jpg";
import productImg14 from "../assets/image/سیستم اسلاید گیت.jpg";
import productImg15 from "../assets/image/شیلنگ فری کربن.jpg";
import productImg16 from "../assets/image/نوار ابریشمی نسوز.jpg";
import productImg17 from "../assets/image/انواع سیم.jpg";
import productImg18 from "../assets/image/دسته لنس اکسیژن.jpg";

const MotionBox = chakra(motion.create("div"), {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const allProducts = [
    {
      id: 1,
      name: "آهن اسفنجی، گندله و کنسانتره",
      description:
        "تامین مواد اولیه زنجیره فولاد با خلوص بالا جهت واحدهای ذوب و احیا.",
      image: productImg1,
      specs: ["خلوص بالا", "تامین مستمر"],
    },
    {
      id: 2,
      name: "کک متالوژی",
      description:
        "کک متالوژی در دانه‌بندی‌ها و گریدهای مختلف صنعتی و متالوژیکی.",
      image: productImg2,
      specs: ["دانه‌بندی دقیق", "کربن بهینه"],
    },
    {
      id: 3,
      name: "فرو منگنز (پرکربن و کم‌کربن)",
      description:
        "فرو منگنز ۶۰-۱۰ در انواع مختلف جهت اصلاح خواص مکانیکی فولاد.",
      image: productImg3,
      specs: ["آنالیز ۶۰-۱۰", "کیفیت تضمینی"],
    },
    {
      id: 4,
      name: "فرو سیلیس و پودر فرو سیلیس",
      description:
        "تامین فرو سیلیس با دانه‌بندی متنوع برای صنایع ریخته‌گری و فولادسازی.",
      image: productImg4,
      specs: ["دانه بندی متنوع", "خلوص استاندارد"],
    },
    {
      id: 5,
      name: "سیلیکو منگنز",
      description:
        "ترکیب سیلیکو منگنز ۶۰-۱۰ جهت اکسیژن‌زدایی موثر در پاتیل مذاب.",
      image: productImg5,
      specs: ["آنالیز دقیق", "ارسال فوری"],
    },
    {
      id: 6,
      name: "خاک و جرم‌های نسوز",
      description:
        "انواع جرم‌های نسوز کوبیدنی و ریختنی برای جداره کوره‌ها و پاتیل‌ها.",
      image: productImg6,
      specs: ["تحمل دمایی بالا", "مقاومت به خوردگی"],
    },
    {
      id: 7,
      name: "نازل افشانک",
      description:
        "انواع نازل‌های افشانک با پاشش دقیق جهت سیستم‌های خنک‌کننده صنعتی.",
      image: productImg7,
      specs: ["پاشش یکنواخت", "استیل ضد زنگ"],
    },
    {
      id: 8,
      name: "شمش‌های فولادی",
      description: "شمش در سایزها و گریدهای متنوع (3SP, 5SP) برای تولید مقاطع.",
      image: productImg8,
      specs: ["گرید ساختمانی", "ابعاد استاندارد"],
    },
    {
      id: 9,
      name: "بریکت سرد و گرم",
      description:
        "بریکت‌های متراکم جهت جایگزینی قراضه در کوره‌های القایی و قوس.",
      image: productImg9,
      specs: ["چگالی بالا", "شارژ بهینه"],
    },
    {
      id: 10,
      name: "شلاکه، خرسک و تاندیش",
      description: "بازیافت و تامین انواع خرسک و شلاکه فلزی با آنالیز مشخص.",
      image: productImg10,
      specs: ["صرفه اقتصادی", "تصفیه شده"],
    },
    {
      id: 11,
      name: "ترموکوپل و تجهیزات اندازه‌گیری",
      description:
        "ترموکوپل و سمپلر جهت اندازه‌گیری دقیق دمای مذاب در سایزهای مختلف.",
      image: productImg11,
      specs: ["دقت سنسور بالا", "پاسخ سریع"],
    },
    {
      id: 12,
      name: "پودر ریخته‌گری و ماسه کرومیتی",
      description:
        "مواد مصرفی ریخته‌گری مداوم و ماسه کرومیتی با درصدهای متفاوت خلوص.",
      image: productImg12,
      specs: ["گریدهای متنوع", "خلوص بالا"],
    },
    {
      id: 13,
      name: "نازل تاندیش و صفحه نازل پاتیل",
      description: "قطعات ویژه نسوز جهت کنترل جریان خروجی ذوب در ریخته‌گری.",
      image: productImg13,
      specs: ["مقاومت فرسایشی", "سایزبندی متنوع"],
    },
    {
      id: 14,
      name: "سیستم اسلاید گیت و متعلقات",
      description: "مکانیزم اسلاید گیت و تمامی قطعات یدکی و مکانیکی مربوطه.",
      image: productImg14,
      specs: ["عملکرد ایمن", "قطعات اورجینال"],
    },
    {
      id: 15,
      name: "شیلنگ فری کربن",
      description:
        "شیلنگ‌های بدون کربن جهت انتقال آب در کوره‌های القایی با عایق الکتریکی.",
      image: productImg15,
      specs: ["عایق برق", "انعطاف پذیر"],
    },
    {
      id: 16,
      name: "نوار ابریشمی نسوز (فایبر گلاس)",
      description:
        "نوار ابریشمی نسوز فایبرگلاس در اندازه‌های مختلف جهت عایق‌بندی حرارتی و آب‌بندی صنعتی.",
      image: productImg16,
      specs: ["مقاومت حرارتی بالا", "عایق الکتریکی"],
    },
    {
      id: 17,
      name: "عایق‌های نسوز و کابل سیلیکونی",
      description:
        "نوار فایبرگلاس و سیم و کابل‌های نسوز سیلیکونی برای محیط‌های با دمای بالا.",
      image: productImg17,
      specs: ["ضد حریق", "تحمل حرارتی بالا"],
    },
    {
      id: 18,
      name: "لنس اکسیژن و لوله‌های اسیدشویی",
      description:
        "دسته لنس و لوله‌های لنس اکسیژن اسیدشویی شده جهت برش و ذوب‌ریزی.",
      image: productImg18,
      specs: ["ایمنی عملیاتی", "سایز بندی کامل"],
    },
  ];

  const filteredProducts = allProducts.filter(
    (p) => p.name.includes(searchTerm) || p.description.includes(searchTerm)
  );

  return (
    <Box bg="gray.950" minH="100vh" py={20} dir="rtl">
      <Container
        maxW="7xl"
        as={motion.create("div")}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Breadcrumb */}
        <MotionBox variants={itemVariants} mb={10}>
          <Breadcrumb
            spacing="8px"
            separator={<ChevronLeft size={14} color="gray" />}
            color="gray.500"
          >
            <BreadcrumbItem>
              <BreadcrumbLink as={RouterLink} to="/">
                خانه
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink color="blue.600">محصولات</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </MotionBox>

        {/* Header Section */}
        <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align={{ md: "flex-end" }}
          mb={16}
          gap={8}
        >
          <MotionBox variants={itemVariants}>
            <Heading
              fontWeight="900"
              color="blue.600"
              fontSize={{ base: "4xl", md: "6xl" }}
              lineHeight="1.2"
              mb={4}
            >
              {" "}
              محبوب ترین محصولات
              <Box
                as="span"
                display="block"
                position="relative"
                bgGradient="linear(to-r,blue.300, blue.500, blue.400)"
                bgClip="text"
                sx={{
                  WebkitTextFillColor: "transparent",
                  animation: "shine 3s linear infinite",
                  backgroundSize: "200% auto",
                }}
                style={{
                  backgroundImage:
                    "linear-gradient(to-right, #5ecef6ff 0%, #8236edff 50%, #5e8cf6ff 100%)",
                }}
              >
                <MotionBox
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.8, duration: 1 }}
                  height="4px"
                  bg="blue.500"
                  borderRadius="full"
                  mt={2}
                  boxShadow="0 0 15px rgba(54, 97, 237, 0.6)"
                />
              </Box>
            </Heading>
            <Text color="gray.500" fontSize="lg" maxW="xl" fontWeight="500">
              تامین کامل ملزومات و مواد اولیه زنجیره فولاد با استانداردهای
              بین‌المللی
            </Text>
          </MotionBox>

          <MotionBox variants={itemVariants} w="full" maxW={{ md: "350px" }}>
            <InputGroup size="lg">
              <InputLeftElement pointerEvents="none">
                <Icon as={Search} color="orange.400" />
              </InputLeftElement>
              <Input
                placeholder="جستجوی در لیست متریال..."
                bg="gray.900"
                border="1px solid"
                borderColor="gray.800"
                color="white"
                _focus={{
                  borderColor: "orange.500",
                  boxShadow: "0 0 10px rgba(54, 152, 237, 0.2)",
                }}
                borderRadius="xl"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </InputGroup>
          </MotionBox>
        </Flex>

        {/* Products Grid */}
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          {filteredProducts.map((product) => (
            <MotionBox
              key={product.id}
              variants={itemVariants}
              role="group"
              bg="gray.900"
              borderRadius="2xl"
              overflow="hidden"
              border="1px solid"
              borderColor="gray.800"
              transition="all 0.3s"
              _hover={{
                borderColor: "orange.500",
                transform: "translateY(-5px)",
                boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
              }}
            >
              <Box h="240px" w="full" overflow="hidden" position="relative">
                <Image
                  src={product.image}
                  alt={product.name}
                  w="full"
                  h="full"
                  objectFit="cover"
                  transition="0.6s cubic-bezier(0.4, 0, 0.2, 1)"
                  _groupHover={{ transform: "scale(1.1)" }}
                />
                <Box
                  position="absolute"
                  inset="0"
                  bgGradient="linear(to-t, gray.950, transparent)"
                  opacity="0.6"
                />
              </Box>

              <Stack p={6} spacing={4}>
                <Heading
                  size="md"
                  color="white"
                  transition="0.3s"
                  _groupHover={{ color: "blue.600" }}
                >
                  {product.name}
                </Heading>
                <Text color="gray.400" fontSize="sm" noOfLines={3} h="60px">
                  {product.description}
                </Text>
                <Flex wrap="wrap" gap={2}>
                  {product.specs.map((s) => (
                    <Badge
                      key={s}
                      variant="outline"
                      color="orange.200"
                      borderColor="gray.700"
                      px={2}
                      py={1}
                      display="flex"
                      alignItems="center"
                      fontSize="xs"
                      textTransform="none"
                    >
                      <Icon
                        as={CheckCircle2}
                        size={10}
                        ml={1}
                        color="orange.500"
                      />{" "}
                      {s}
                    </Badge>
                  ))}
                </Flex>
              </Stack>
            </MotionBox>
          ))}
        </SimpleGrid>

        {filteredProducts.length === 0 && (
          <Flex direction="column" align="center" py={20}>
            <Text color="gray.500" fontSize="xl">
              محصولی با این مشخصات یافت نشد.
            </Text>
          </Flex>
        )}
      </Container>
    </Box>
  );
}
