import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";
import theme from "./pages/theme";
import Fonts from "./pages/Fonts";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider
      theme={theme}
      toastOptions={{ defaultOptions: { direction: "rtl" } }}
    >
      <Fonts />
      <div dir="rtl" style={{ direction: "rtl" }}>
        <App />
      </div>
    </ChakraProvider>
  </React.StrictMode>
);
