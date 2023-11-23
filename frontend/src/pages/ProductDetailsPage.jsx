import { useParams } from "react-router-dom";
import ProductDetails from "../components/ProductDetails/ProductDetails";
import { useEffect, useState } from "react";

function ProductDetailsPage() {
  const [singleProduct, setSingleProduct] = useState(null);
  const { id: productId } = useParams();
  const apiUrl = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const fetchSingleProduct = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/products/${productId}`);

        if (!response.ok) {
          throw new Error("Verileri getirme hatası");
        }
        const data = await response.json();
        setSingleProduct(data);
      } catch (err) {
        console.log("Veri hatası:", err);
      }
    };

    fetchSingleProduct();
  }, [apiUrl, productId]);

  return singleProduct ? (
    <ProductDetails
      singleProduct={singleProduct}
      setSingleProduct={setSingleProduct}
    />
  ) : (
    <p>Ürün yükleniyor...</p>
  );
}

export default ProductDetailsPage;
