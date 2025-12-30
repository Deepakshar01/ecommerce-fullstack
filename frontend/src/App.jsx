import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import CartPage from "./pages/CartPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import Navbar from "./components/Navbar.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";

export default function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </CartProvider>
    </AuthProvider>
  );
}
