import "./ProductItem.css";
import { useCart } from "../../context/CartProvider";
import { Link } from "react-router-dom";

function ProductItem({ product }) {
  const { addToCart, cartItems } = useCart();

  const filteredCart = cartItems.find((cart) => cart._id === product.id);

  // İndirimli fiyatı hesaplama
  const originalPrice = product.price.current;
  const discountPercentage = product.price.discount;

  const discountedPrice =
    originalPrice - (originalPrice * discountPercentage) / 100;

  return (
    <li className="product-item glide__slide--clone">
      <div className="product-image">
        <a href="#">
          <img src={product.img[0]} alt="" className="img1" />
          <img src={product.img[1]} alt="" className="img2" />
        </a>
      </div>
      <div className="product-info">
        <a href="$" className="product-title">
          {product.name}
        </a>
        <ul className="product-star">
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
          <li>
            <i className="bi bi-star-half"></i>
          </li>
        </ul>
        <div className="product-prices">
          <strong className="new-price">${discountedPrice.toFixed(2)}</strong>
          <span className="old-price">${originalPrice.toFixed(2)}</span>
        </div>
        <span className="product-discount">%{product.price.discount}</span>
        <div className="product-links">
          <button
            onClick={() =>
              addToCart({
                ...product,
                price: discountedPrice,
              })
            }
            disabled={filteredCart}
          >
            <i className="bi bi-basket-fill"></i>
          </button>
          <button>
            <i className="bi bi-heart-fill"></i>
          </button>
          <Link to={`product/${product._id}`}>
            <i className="bi bi-eye-fill"></i>
          </Link>
          <a href="#">
            <i className="bi bi-share-fill"></i>
          </a>
        </div>
      </div>
    </li>
  );
}

export default ProductItem;
