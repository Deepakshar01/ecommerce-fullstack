import { useEffect, useState } from "react";
import axios from "axios";
import { useCart } from "../context/CartContext.jsx";
import "./HomePage.css";

export default function HomePage() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="container">
      <h1 className="title">🛒 My E-Commerce Store</h1>

      {products.length === 0 ? (
        <p>No products found</p>
      ) : (
        <div className="product-grid">
          {products.map((product) => (
            <div className="card" key={product._id}>
              <img
                src={product.image}
                alt={product.name}
              />

              <h3>{product.name}</h3>
              <p className="price">₹{product.price}</p>

              <button onClick={() => addToCart(product)}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
