import CategoryItem from "./CategoryItem";
import "./Categories.css";

function Categories() {
  return (
    <section className="categories">
      <div className="container">
        <div className="section-title">
          <h2>All Categories</h2>
          <p>Summer Collection New Morden Design</p>
        </div>
        <ul className="category-list">
          <CategoryItem />
        </ul>
      </div>
    </section>
  );
}

export default Categories;
