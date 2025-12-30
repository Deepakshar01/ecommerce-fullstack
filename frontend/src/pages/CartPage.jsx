import { useCart } from "../context/CartContext.jsx";

export default function CartPage() {
  const { cartItems, removeFromCart } = useCart();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <div style={{ padding: "30px" }}>
      <h1>🛒 Cart</h1>

      {cartItems.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item._id} style={{ marginBottom: "15px" }}>
              <h3>{item.name}</h3>
              <p>₹{item.price} × {item.qty}</p>
              <button onClick={() => removeFromCart(item._id)}>
                Remove
              </button>
            </div>
          ))}
          <h2>Total: ₹{total}</h2>
        </>
      )}
    </div>
  );
}
