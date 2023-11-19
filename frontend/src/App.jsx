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
function App() {
  return (
    <MainLayout>
      {
        // <HomePage />
        /* <ShopPage />*/
        /* <ContactPage />*/
        /* <AuthPage />*/
        /* <CartPage />*/
        /*   <BlogDetailsPage />*/
        <ProductDetailsPage />
      }
    </MainLayout>
  );
}

export default App;
