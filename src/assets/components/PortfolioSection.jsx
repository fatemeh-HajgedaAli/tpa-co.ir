import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  Flex,
  Icon,
  Badge,
  HStack,
  VStack,
  IconButton,
} from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Factory,
  Globe,
  Zap,
  ShieldCheck,
  Settings,
  ChevronRight,
  ChevronLeft,
  Wrench,
  Construction,
  Thermometer,
  Cpu,
  ArrowLeft,
} from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// ... (همان دیتای قبلی خودت بدون تغییر)
const experienceData = [
  {
    id: "01",
    year: "۱۴۰۳",
    title: "مشاوره ذوب هرازدان",
    desc: "قوس ۳۰ تن - ارمنستان. بهینه‌سازی فرآیند ذوب.",
    type: "مشاوره بین‌المللی",
    icon: Globe,
  },
  {
    id: "02",
    year: "۱۴۰۲",
    title: "فولاد موید زنجان",
    desc: "اورهال کوره القایی ۱۲ و ۵ تن و سیستم هیدرولیک.",
    type: "اورهال و تعمیرات",
    icon: Wrench,
  },
  {
    id: "03",
    year: "۱۴۰۱",
    title: "فولاد ذوب الوند",
    desc: "نصب کوره ۲۰ تن و ماشین R8000 همدان.",
    type: "نصب تجهیزات",
    icon: Factory,
  },
  {
    id: "04",
    year: "۱۴۰۰",
    title: "پروژه باکو - آذربایجان",
    desc: "نصب کوره ۱۲ تن و خط CCM دو استرند R6000.",
    type: "نصب بین‌المللی",
    icon: Globe,
  },
  {
    id: "05",
    year: "۱۳۹۹",
    title: "شمش نگین مشهد",
    desc: "مدیر و سرپرست واحد ریخته گری.",
    type: "مدیریت اجرایی",
    icon: ShieldCheck,
  },
  {
    id: "06",
    year: "۹۸-۹۹",
    title: "فولاد اردستان",
    desc: "مدیر تولید (کوره قوس ۷۰ تن و خط ۵ استرند).",
    type: "مدیریت کارخانه",
    icon: Factory,
  },
  {
    id: "07",
    year: "۱۳۹۸",
    title: "فولاد پیروان غدیر یزد",
    desc: "مدیر کارخانه (کوره ۱۰ تن و خط ریخته گری).",
    type: "مدیریت ارشد",
    icon: ShieldCheck,
  },
  {
    id: "08",
    year: "۹۶-۹۷",
    title: "شمش نگین مشهد",
    desc: "مدیر و سرپرست واحد ریخته گری (دوره دوم).",
    type: "سرپرستی",
    icon: Settings,
  },
  {
    id: "09",
    year: "//",
    title: "شمش نگین مشهد",
    desc: "اصلاح و راه اندازی خط CCM (کوره قوس ۵۰ تن).",
    type: "اصلاح فنی",
    icon: Zap,
  },
  {
    id: "10",
    year: "۱۳۹۶",
    title: "سپهر فولاد لنجان",
    desc: "راه اندازی ۴ کوره ۱۰ تن تپکا و بهره برداری.",
    type: "راه اندازی",
    icon: Construction,
  },
  {
    id: "11",
    year: "۹۵-۹۶",
    title: "پرتو صنعت شرق",
    desc: "نصب و راه اندازی ۲ کوره ۱۰ تن الکتروترم.",
    type: "نصب صنعتی",
    icon: Wrench,
  },
  {
    id: "12",
    year: "۹۲-۹۴",
    title: "فولاد فلز ارفع شهرضا",
    desc: "نصب کوره ۶ تن و خط ماشین ریخته گری.",
    type: "نصب و راه اندازی",
    icon: Factory,
  },
  {
    id: "13",
    year: "۹۱-۹۲",
    title: "فولاد سفید دشت",
    desc: "نصب ۲ کوره ۱۰ تن الکتروترم و خط CCM.",
    type: "نصب صنعتی",
    icon: Construction,
  },
  {
    id: "14",
    year: "۹۰-۹۱",
    title: "سپاهان ذوب نجف آباد",
    desc: "نصب ۲ کوره ۶ تن و خط ریخته گری.",
    type: "اجرای فنی",
    icon: Zap,
  },
  {
    id: "15",
    year: "۱۳۹۰",
    title: "ره پویان نوین گرمسار",
    desc: "راه اندازی ۲ عدد کوره ۳ تن دماوند.",
    type: "راه اندازی",
    icon: Thermometer,
  },
  {
    id: "16",
    year: "۸۹-۹۰",
    title: "پارت مثال ارمنستان",
    desc: "نصب و بهره برداری کوره‌های ۵۰۰ کیلو و ۱ تن.",
    type: "پروژه خارجی",
    icon: Globe,
  },
  {
    id: "17",
    year: "۷۰-۹۰",
    title: "ذوب آهن اصفهان",
    desc: "تکنسین ارشد ریخته گری (۲۰ سال سابقه).",
    type: "سابقه کلیدی",
    icon: ShieldCheck,
  },
  {
    id: "18",
    year: "۸۰-۸۳",
    title: "ذوب آهن اصفهان",
    desc: "تکنولوژ پاتیل و بنای ارشد نسوز.",
    type: "تخصص فنی",
    icon: Cpu,
  },
];

const MotionBox = motion.create(Box);

export default function IndustrialPortfolio() {
  const { scrollYProgress } = useScroll();
  const rotateRight = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const rotateLeft = useTransform(scrollYProgress, [0, 1], [0, -360]);

  return (
    <Box
      as="section"
      py={{ base: 16, md: 32 }}
      bg="#090909ff"
      dir="rtl"
      position="relative"
      overflow="hidden"
    >
      {/* 1. Engineering Background Grid */}
      <Box
        position="absolute"
        inset="0"
        opacity="0.15"
        style={{
          backgroundImage: `linear-gradient(#3182ce 1px, transparent 1px), linear-gradient(90deg, #3182ce 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
        sx={{
          maskImage: "radial-gradient(circle, black, transparent 80%)",
        }}
      />

      {/* --- BACKGROUND GEARS  --- */}
      <MotionBox
        position="absolute"
        top="-10%"
        left="-5%"
        color="blue.600"
        opacity="0.1"
        style={{ rotate: rotateRight }}
      >
        <Settings size={500} strokeWidth={1} />
      </MotionBox>

      <MotionBox
        position="absolute"
        bottom="-10%"
        right="-5%"
        color="blue.700"
        opacity="0.1"
        style={{ rotate: rotateLeft }}
      >
        <Settings size={400} strokeWidth={1} />
      </MotionBox>

      <Container maxW="7xl" position="relative" zIndex={2}>
        <Flex justify="space-between" align="flex-end" mb={16} px={4}>
          <VStack align="start" spacing={4}>
            <Badge
              colorScheme="blue"
              variant="solid"
              px={4}
              py={1}
              borderRadius="full"
              letterSpacing="1px"
            >
              INDUSTRIAL RECORDS
            </Badge>
            <Heading
              color="white"
              fontSize={{ base: "3xl", md: "6xl" }}
              fontWeight="900"
              letterSpacing="-1px"
            >
              سوابق{" "}
              <Box as="span" color="blue.500">
                اجرایی
              </Box>
            </Heading>
          </VStack>

          <HStack spacing={4} display={{ base: "none", md: "flex" }}>
            <IconButton
              id="p-btn"
              icon={<ChevronRight />}
              variant="outline"
              color="white"
              borderRadius="full"
              _hover={{ bg: "blue.600", borderColor: "blue.600" }}
            />
            <IconButton
              id="n-btn"
              icon={<ChevronLeft />}
              variant="outline"
              color="white"
              borderRadius="full"
              _hover={{ bg: "blue.600", borderColor: "blue.600" }}
            />
          </HStack>
        </Flex>

        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{ 768: { slidesPerView: 2 } }}
          navigation={{ nextEl: "#n-btn", prevEl: "#p-btn" }}
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination, Autoplay]}
          className="industrial-swiper"
        >
          {experienceData.map((item) => (
            <SwiperSlide key={item.id}>
              <Box
                position="relative"
                bg="rgba(25, 25, 25, 0.7)"
                backdropFilter="blur(15px)"
                border="1px solid"
                borderColor="whiteAlpha.200"
                p={8}
                h={{ base: "auto", md: "320px" }}
                transition="all 0.3s"
                role="group"
                _hover={{
                  borderColor: "blue.500",
                  transform: "translateY(-5px)",
                }}
                clipPath="polygon(0 0, 95% 0, 100% 10%, 100% 100%, 5% 100%, 0 90%)"
              >
                <Box
                  position="absolute"
                  top="60%"
                  left="-10px"
                  opacity="0.05"
                  _groupHover={{ opacity: 0.2, color: "blue.400" }}
                  transition="0.5s"
                >
                  <motion.div style={{ rotate: rotateRight }}>
                    <Settings size={100} />
                  </motion.div>
                </Box>

                <VStack
                  align="start"
                  spacing={5}
                  position="relative"
                  zIndex={2}
                >
                  <HStack w="full" justify="space-between">
                    <HStack>
                      <Box w="12px" h="2px" bg="blue.500" />
                      <Text
                        color="blue.400"
                        fontStyle="italic"
                        fontWeight="bold"
                        fontSize="md"
                      >
                        {item.year}
                      </Text>
                    </HStack>
                    <Icon
                      as={item.icon}
                      w={6}
                      h={6}
                      color="whiteAlpha.500"
                      _groupHover={{
                        color: "blue.400",
                        transform: "scale(1.1)",
                      }}
                      transition="0.3s"
                    />
                  </HStack>

                  <Heading size="md" color="white" fontWeight="800">
                    {item.title}
                  </Heading>
                  <Text
                    color="gray.400"
                    fontSize="sm"
                    lineHeight="1.8"
                    noOfLines={3}
                  >
                    {item.desc}
                  </Text>

                  <HStack mt="auto" w="full" justify="space-between" pt={4}>
                    <Badge
                      variant="subtle"
                      colorScheme="blue"
                      fontSize="xs"
                      px={3}
                    >
                      {item.type}
                    </Badge>
                    <ArrowLeft size={18} color="#3182ce" />
                  </HStack>
                </VStack>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>

      <style
        dangerouslySetInnerHTML={{
          __html: `
          .industrial-swiper { padding-bottom: 60px !important; }
          .swiper-pagination-bullet { background: rgba(255,255,255,0.2) !important; opacity: 1; border-radius: 0; }
          .swiper-pagination-bullet-active { background: #3182ce !important; width: 25px !important; transition: 0.3s; }
        `,
        }}
      />
    </Box>
  );
}
