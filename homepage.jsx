// frontend/src/pages/HomePage.jsx
import { useEffect, useState } from "react";
import axios from "axios";
import { useCart } from "../context/CartContext.jsx";

export default function HomePage() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    axios.get("http://localhost:5000/api/products").then((res) => {
      setProducts(res.data);
    });
  }, []);

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Products</h2>
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        {products.map((p) => (
          <div
            key={p._id}
            style={{
              border: "1px solid #ccc",
              padding: "1rem",
              width: "220px",
              borderRadius: "8px",
            }}
          >
            <img
              src={p.image}
              alt={p.name}
              style={{ width: "100%", height: "140px", objectFit: "cover" }}
            />
            <h3>{p.name}</h3>
            <p>₹{p.price}</p>
            <button onClick={() => addToCart(p)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}
