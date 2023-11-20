import HomePage from "./pages/HomePage";
import "./App.css";
import ShopPage from "./pages/ShopPage";
import ContactPage from "./pages/ContactPage";
import Auth from "./components/Auth/Auth";
import AuthPage from "./pages/AuthPage";
import CartPage from "./pages/CartPage";
import BlogDetailsPage from "./pages/BlogDetailsPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import MainLayout from "./layouts/MainLayout.jsx";
import Header from "./components/Layout/Header/Header.jsx";
import Footer from "./components/Layout/Footer/Footer.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BlogPage from "./pages/BlogPage.jsx";
import AdminLayout from "./layouts/AdminLayout.jsx";
function App() {
  const isAdmin = window.location.pathname.startsWith("/admin");

  return (
    <BrowserRouter>
      <Routes>
        <Route element={isAdmin ? <AdminLayout /> : <MainLayout />}>
          {/* <Route index element={<Navigate replace to="/" />} /> */}
          <Route path="/" element={<HomePage />} />
          <Route path="shop" element={<ShopPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="auth" element={<AuthPage />} />
          <Route path="product/:id" element={<ProductDetailsPage />} />
          <Route path="blog/:id" element={<BlogDetailsPage />} />
          <Route path="admin" element={<AdminLayout />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
