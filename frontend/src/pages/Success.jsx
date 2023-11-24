import { Button, Result } from "antd";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartProvider";
import { useEffect } from "react";
function Success() {
  const { setCartItems } = useCart();

  useEffect(() => {
    setCartItems([]);
  }, [setCartItems]);

  return (
    <div className="success-page">
      <div className="container">
        <Result
          status="success"
          title="Ödeme Başarılı"
          subTitle="Siparişiniz başarıyla tamamlandı"
          extra={[
            <Link to="/" key="home">
              <Button type="primary">Ana Sayfa</Button>
            </Link>,
            <a href="admin/orders" key="orders">
              <Button>Siparişlerim</Button>
            </a>,
          ]}
        />
      </div>
    </div>
  );
}

export default Success;
