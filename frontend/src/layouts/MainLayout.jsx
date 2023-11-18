import { useState } from "react";
import Footer from "../components/Layout/Footer/Footer";
import Header from "../components/Layout/Header/Header";
import Search from "../components/Modals/Search/Search";

function MainLayout({ children }) {
  const [isSearchShow, setIsSearchShow] = useState(false);

  return (
    <div className="main-layout">
      <Header setIsSearchShow={setIsSearchShow} />
      <Search isSearchShow={isSearchShow} setIsSearchShow={setIsSearchShow} />
      {children}
      <Footer />
    </div>
  );
}

export default MainLayout;