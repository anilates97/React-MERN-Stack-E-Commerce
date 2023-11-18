import Footer from "../components/Layout/Footer/Footer";
import Header from "../components/Layout/Header/Header";

function MainLayout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default MainLayout;
