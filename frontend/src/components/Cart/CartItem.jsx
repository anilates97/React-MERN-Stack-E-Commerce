import { useCart } from "../../context/CartProvider";

function CartItem({ cartItem }) {
  const { removeFromCart } = useCart();
  return (
    <tr className="cart-item">
      <td></td>
      <td className="cart-image">
        <img src={cartItem.img.singleImage} alt="" />
        <i
          className="bi bi-x delete-cart"
          onClick={() => removeFromCart(cartItem.id)}
        ></i>
      </td>
      <td>{cartItem.name}</td>
      <td>$100.00</td>
      <td className="product-quantity">1</td>
      <td className="product-subtotal">$100.00</td>
    </tr>
  );
}

export default CartItem;
