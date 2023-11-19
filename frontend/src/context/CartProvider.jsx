import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export default function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(
    localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : []
  );

  function addToCart(cartItem) {
    setCartItems((prevCart) => [...prevCart, cartItem]);
  }

  function removeFromCart(id) {
    const filteredCartItems = cartItems.filter((cart) => cart.id !== id);
    setCartItems(filteredCartItems);
  }

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  const context = useContext(CartContext);
  if (context === undefined)
    throw new Error("CartContext was used outside of CartProvider");
  return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { CartProvider, useCart };
