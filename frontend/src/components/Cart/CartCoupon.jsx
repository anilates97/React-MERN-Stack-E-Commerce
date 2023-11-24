import { useState } from "react";
import { message } from "antd";
import { useCart } from "../../context/CartProvider";

function CartCoupon() {
  const [couponCode, setCouponCode] = useState("");
  const { cartItems, setCartItems } = useCart();
  const apiUrl = import.meta.env.VITE_API_BASE_URL;
  const applyCoupon = async () => {
    if (couponCode.trim().length === 0)
      message.warning("Boş kupon kodu girilemez");

    try {
      const res = await fetch(`${apiUrl}/api/coupons/code/${couponCode}`);

      if (!res.ok) return message.warning("Girdiğiniz kupon kodu yanlış");

      const data = await res.json();
      const discountPercent = data.discountPercent;

      const updatedCartItems = cartItems.map((item) => {
        const updatedPrice = item.price * (1 - discountPercent / 100);
        return { ...item, price: updatedPrice };
      });
      setCartItems(updatedCartItems);
      message.success(`${couponCode} kupon kodu başarıyla uygulandı`);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="coupon">
      <input
        value={couponCode}
        onChange={(e) => setCouponCode(e.target.value)}
        type="text"
        className="input-text"
        placeholder="Coupon code"
      />
      <button type="button" className="btn" onClick={applyCoupon}>
        Apply Coupon
      </button>
    </div>
  );
}

export default CartCoupon;
