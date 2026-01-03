import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import HomePage from "./pages/Home";
import ProductsPage from "./pages/ProductsPage";

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}
export default App;
