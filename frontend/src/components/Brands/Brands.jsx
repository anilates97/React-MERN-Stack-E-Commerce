import BrandItem from "./BrandItem";
import "./Brands.css";
function Brands() {
  return (
    <section className="brands">
      <div className="container">
        <ul className="brand-list">
          <BrandItem />
        </ul>
      </div>
    </section>
  );
}

export default Brands;
