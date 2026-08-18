import { Box, Container } from "@chakra-ui/react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import PortfolioHeader from "./PortfolioHeader";
import PortfolioControls from "./PortfolioControls";
import PortfolioCard from "./PortfolioCard";

import { EXPERIENCE_DATA } from "./portfolioData";

import { portfolioStyles } from "./portfolioStyles";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const LINE = "rgba(237,238,232,0.10)";
const HEAT = "#e8622c";

export default function PortfolioSection() {
  return (
    <Box
      as="section"
      position="relative"
      overflow="hidden"
      py={{ base: 16, md: 28 }}
      bg="#120f0d"
      dir="rtl"
      fontFamily="'Vazirmatn', sans-serif"
    >
      <PortfolioBackground />

      <Container maxW="7xl" position="relative" zIndex={2}>
        <PortfolioHeader />

        <PortfolioControls />

        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
          navigation={{
            nextEl: "#n-btn",
            prevEl: "#p-btn",
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Navigation, Pagination]}
          className="log-swiper"
        >
          {EXPERIENCE_DATA.map((item) => (
            <SwiperSlide key={item.id}>
              <PortfolioCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>

      <style>{portfolioStyles}</style>
    </Box>
  );
}

function PortfolioBackground() {
  return (
    <>
      <Box
        position="absolute"
        inset={0}
        opacity={0.5}
        pointerEvents="none"
        backgroundImage={`
          linear-gradient(
            ${LINE} 1px,
            transparent 1px
          )
        `}
        backgroundSize="100% 48px"
        maskImage="
          linear-gradient(
            180deg,
            transparent,
            black 15%,
            black 85%,
            transparent
          )
        "
      />

      <Box
        position="absolute"
        top="-10%"
        left="-8%"
        w="520px"
        h="520px"
        bg={HEAT}
        filter="blur(160px)"
        opacity={0.07}
        pointerEvents="none"
        borderRadius="full"
      />
    </>
  );
}
