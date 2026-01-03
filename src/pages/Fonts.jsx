import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'Vazirmatn';
        src: url('/fonts/Vazirmatn-Bold.ttf') format('truetype');
        font-weight: 300;
        font-style: normal;
        font-display: swap;
       
      }
      @font-face {
        font-family: 'Vazirmatn';
        src: url('/fonts/Vazirmatn-Regular.ttf') format('truetype');
        font-weight: 500;
        font-style: normal;
        font-display: swap;
      }
      @font-face {
        font-family: 'Vazirmatn';
        src: url('/fonts/Vazirmatn-Light.ttf') format('truetype');
        font-weight: 800;
        font-style: normal;
        font-display: swap;
      }
       * {
        font-family: 'Vazirmatn', sans-serif !important;
      }
    `}
  />
);
export default Fonts;
