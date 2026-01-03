import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: "'Vazirmatn', sans-serif",
    body: "'Vazirmatn', sans-serif",
  },
  styles: {
    global: {
      body: {
        bg: "#050505",
        color: "white",
        direction: "rtl",
        fontVariantNumeric: "proportional-nums",
      },
    },
  },
});
export default theme;
