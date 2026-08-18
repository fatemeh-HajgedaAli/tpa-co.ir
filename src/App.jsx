import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

import HomePage from "./pages/Home";
import ProductsPage from "./assets/components/productLists/ProductPages";
import WebsiteAdFloating from "./assets/components/websiteAd/WebsiteAdFloating";

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
        </Routes>

        {/* تبلیغ در تمام صفحات */}
        <WebsiteAdFloating />
      </Router>
    </ChakraProvider>
  );
}

export default App;
