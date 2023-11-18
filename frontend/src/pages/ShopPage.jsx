import CampaignSingle from "../components/CampaignSingle/CampaignSingle";
import Categories from "../components/Categories/Categories";
import Footer from "../components/Layout/Footer/Footer";
import Header from "../components/Layout/Header/Header";
import Products from "../components/Products/Products";

function ShopPage() {
  return (
    <>
      <Categories />
      <Products />
      <CampaignSingle />
      <Products />
    </>
  );
}

export default ShopPage;
