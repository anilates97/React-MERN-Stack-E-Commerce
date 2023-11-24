import HomePage from "./pages/HomePage";
import "./App.css";
import ShopPage from "./pages/ShopPage";
import ContactPage from "./pages/ContactPage";
import AuthPage from "./pages/AuthPage";
import CartPage from "./pages/CartPage";
import BlogDetailsPage from "./pages/BlogDetailsPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import MainLayout from "./layouts/MainLayout.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BlogPage from "./pages/BlogPage.jsx";
import AdminLayout from "./layouts/AdminLayout.jsx";
import UserPage from "./pages/Admin/UserPage.jsx";
import CategoryPage from "./pages/Admin/Categories/CategoryPage.jsx";
import UpdateCategoryPage from "./pages/Admin/Categories/UpdateCategoryPage.jsx";
import CreateCategoryPage from "./pages/Admin/Categories/CreateCategoryPage.jsx";
import CreateProductPage from "./pages/Admin/Products/CreateProductPage.jsx";
import ProductPage from "./pages/Admin/Products/ProductPage.jsx";
import UpdateProductPage from "./pages/Admin/Products/UpdateProductPage.jsx";
import CouponPage from "./pages/Admin/Coupons/CouponPage.jsx";
import CreateCouponPage from "./pages/Admin/Coupons/CreateCouponPage.jsx";
import UpdateCouponPage from "./pages/Admin/Coupons/UpdateCouponPage.jsx";
import Success from "./pages/Success.jsx";
import OrderPage from "./pages/Admin/OrderPage.jsx";
import DashboardPage from "./pages/Admin/DashboardPage.jsx";
function App() {
  // const isAdmin = window.location.pathname.startsWith("/admin");

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          {/* <Route index element={<Navigate replace to="/" />} /> */}
          <Route path="/" element={<HomePage />} />
          <Route path="shop" element={<ShopPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="auth" element={<AuthPage />} />
          <Route path="product/:id" element={<ProductDetailsPage />} />
          <Route path="blog/:id" element={<BlogDetailsPage />} />
          <Route path="success" element={<Success />} />
        </Route>

        {/* <Route path="admin" element={<AdminLayout />} /> */}

        {/* Admin yönlendirmeleri */}
        <Route path="admin" element={<AdminLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path="users" element={<UserPage />} />
          <Route path="categories" element={<CategoryPage />} />
          <Route path="categories/create" element={<CreateCategoryPage />} />
          <Route
            path="categories/update/:id"
            element={<UpdateCategoryPage />}
          />
          <Route path="products/create" element={<CreateProductPage />} />
          <Route path="products" element={<ProductPage />} />
          <Route path="products/update/:id" element={<UpdateProductPage />} />
          <Route path="coupons" element={<CouponPage />} />
          <Route path="coupons/create" element={<CreateCouponPage />} />
          <Route path="coupons/update/:id" element={<UpdateCouponPage />} />

          <Route path="orders" element={<OrderPage />} />
          {/* Diğer admin sayfaları */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
