import React from "react";
import Home from "../pages/Home/Home.jsx";
import { Routes, Route } from "react-router";
import Product from "../pages/Product/Product.jsx";
import ProductDetail from "../pages/ProductDetail/ProductDetail.jsx";
import Checkout from "../pages/Checkout/Checkout.jsx";
import CartPage from "../pages/Cart/CartPage.jsx";
import LoginForm from "../components/section/auth/LoginForm.jsx";
import RegisterForm from "../components/section/auth/RegisterForm.jsx";
import About from "../pages/About.jsx";
import MenProduct from "../pages/Product/MenProduct.jsx";
import WomenProduct from "../pages/Product/WomenProduct.jsx";
import ProfilePage from "../pages/Profile/ProfilePage.jsx";
import FavoritesPage from "../pages/Favourite/FavoritesPage.jsx";
import WarrantyPolicy from "../pages/CustomerServicePages/WarrantyPolicy.jsx";
import ReturnPolicy from "../pages/CustomerServicePages/ReturnPolicy.jsx";
import FAQ from "../pages/CustomerServicePages/FAQ.jsx";

export default function AppRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cua-hang" element={<Product />} />
        <Route path="/cua-hang-do-nam" element={<MenProduct />} />
        <Route path="/cua-hang-do-nu" element={<WomenProduct />} />
        <Route path="/yeu-thich" element={<FavoritesPage />} />
        <Route path="/ve-chung-toi" element={<About />} />

        <Route path="/cua-hang/:slug" element={<ProductDetail />} />
        <Route path="/thanh-toan" element={<Checkout />} />
        <Route path="/gio-hang" element={<CartPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/dang-nhap" element={<LoginForm />} />
        <Route path="/dang-ky" element={<RegisterForm />} />

        <Route path="/chinh-sach-bao-hanh" element={<WarrantyPolicy />} />
        <Route path="/chinh-sach-doi-tra" element={<ReturnPolicy />} />
        <Route path="/cau-hoi-thuong-gap" element={<FAQ />} />
      </Routes>
    </div>
  );
}
