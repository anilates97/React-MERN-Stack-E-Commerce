import { useCart } from "../../context/CartProvider";
import "./Cart.css";
import CartCoupon from "./CartCoupon";
import CartProgress from "./CartProgress";
import CartTable from "./CartTable";
import CartTotals from "./CartTotals";

function Cart() {
  const { cartItems } = useCart();
  return (
    <section className="cart-page">
      <div className="container">
        {cartItems.length > 0 ? (
          <div className="cart-page-wrapper">
            <form className="cart-form">
              <CartProgress />

              <div className="shop-table-wrapper">
                <CartTable />
                <div className="actions-wrapper">
                  <CartCoupon />
                  <div className="update-cart">
                    <button className="btn">Update Cart</button>
                  </div>
                </div>
              </div>
            </form>
            <div className="cart-collaterals">
              <CartTotals />
            </div>
          </div>
        ) : (
          <h2>Sepette hiç ürün yok</h2>
        )}
      </div>
    </section>
  );
}

export default Cart;
