function CartItem() {
  return (
    <tr className="cart-item">
      <td></td>
      <td className="cart-image">
        <img src="img/products/product2/1.png" alt="" />
        <i className="bi bi-x delete-cart"></i>
      </td>
      <td>Ridley High Waist</td>
      <td>$100.00</td>
      <td className="product-quantity">1</td>
      <td className="product-subtotal">$100.00</td>
    </tr>
  );
}

export default CartItem;
