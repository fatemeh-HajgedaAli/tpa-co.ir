import { PORTFOLIO_TOKENS } from "./portfolioConstants";

export const portfolioStyles = `
  .log-swiper {
    padding-bottom: 56px !important;
  }

  .log-swiper .swiper-pagination-bullet {
    background: rgba(255, 255, 255, 0.18) !important;
    opacity: 1;
    border-radius: 0;
    width: 14px;
    height: 3px;
  }

  .log-swiper .swiper-pagination-bullet-active {
    background: ${PORTFOLIO_TOKENS.HEAT} !important;
    width: 26px !important;
    transition: 0.3s;
  }
`;
