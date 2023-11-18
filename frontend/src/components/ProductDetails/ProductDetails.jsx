import BreadCrumb from "./Breadcrumb/BreadCrumb";
import Gallery from "./Gallery/Gallery";
import Info from "./Info/Info";
import "./ProductDetails.css";
import Tabs from "./Tabs/Tabs";

function ProductDetails() {
  return (
    <section className="single-product">
      <div className="container">
        <div className="single-product-wrapper">
          <BreadCrumb />

          <div className="single-content">
            <main className="site-main">
              <Gallery />
              <Info />
            </main>
          </div>

          <Tabs />
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;
