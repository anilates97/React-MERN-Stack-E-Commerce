import { useState } from "react";
import "./ProductItem.css";
import { useCart } from "../../context/CartProvider";

function ProductItem({ product }) {
  const { addToCart, cartItems } = useCart();

  const filteredCart = cartItems.find((cart) => cart.id === product.id);

  return (
    <li className="product-item glide__slide--clone">
      <div className="product-image">
        <a href="#">
          <img src={product.img.singleImage} alt="" className="img1" />
          <img src={product.img.thumbs[1]} alt="" className="img2" />
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
          <strong className="new-price">
            ${product.price.newPrice.toFixed(2)}
          </strong>
          <span className="old-price">
            ${product.price.oldPrice.toFixed(2)}
          </span>
        </div>
        <span className="product-discount">%{product.discount}</span>
        <div className="product-links">
          <button onClick={() => addToCart(product)} disabled={filteredCart}>
            <i className="bi bi-basket-fill"></i>
          </button>
          <button>
            <i className="bi bi-heart-fill"></i>
          </button>
          <a href="#">
            <i className="bi bi-eye-fill"></i>
          </a>
          <a href="#">
            <i className="bi bi-share-fill"></i>
          </a>
        </div>
      </div>
    </li>
  );
}

export default ProductItem;
