import BlogItem from "./BlogItem";
import "./Blogs.css";

function Blogs() {
  return (
    <section className="blogs">
      <div className="container">
        <div className="section-title">
          <h2>From Our Blog</h2>
          <p>Summer Collection New Morden Design</p>
        </div>
        <ul className="blog-list">
          <BlogItem />
        </ul>
      </div>
    </section>
  );
}

export default Blogs;
