import { extendTheme } from "@chakra-ui/react";
import { text } from "framer-motion/client";

const theme = extendTheme({
  fonts: {
    heading: `'Vazirmatn', sans-serif`,
    text: `'Vazirmatn', sans-serif`,
    body: `'Vazirmatn', sans-serif`,
  },
  styles: {
    global: {
      body: {
        bg: "#050505",
        color: "white",
        direction: "rtl",
        fontWeight: "500", 
        fontVariantNumeric: "proportional-nums",
        scrollbarWidth: "thin",
        scrollbarColor: "#3182ce #050505",
      },
      "::-webkit-scrollbar": { width: "15px" },
      "::-webkit-scrollbar-track": { background: "#050505" },
      "::-webkit-scrollbar-thumb": {
        background: "linear-gradient(180deg, #3182ce, #2b6cb0)",
        borderRadius: "10px",
        border: "2px solid #050505",
      },
      "::-webkit-scrollbar-thumb:hover": {
        background: "linear-gradient(180deg, #63b3ed, #3182ce)",
      },
    },
  },
});

export default theme;
