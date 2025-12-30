// frontend/src/App.jsx
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import CartPage from "./pages/CartPage.jsx";
import AdminAddProductPage from "./pages/AdminAddProductPage.jsx";
import Navbar from "./components/Navbar.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/admin/product/new" element={<AdminAddProductPage />} />
      </Routes>
    </>
  );
}
