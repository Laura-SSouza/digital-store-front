import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import ProductListingPage from "./pages/ProductListingPage";
import ProductViewPage from "./pages/ProductViewPage";
import NotFound from "./pages/NotFound";

const App = () => {
  return(
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<ProductListingPage />} />
      <Route path="/products/:id" element={<ProductViewPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;