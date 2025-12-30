import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";
import { useAuth } from "../context/AuthContext.jsx";

export default function Navbar() {
  const { cartItems } = useCart();
  const { user, logout } = useAuth();

  const totalItems = cartItems.reduce((sum, i) => sum + i.qty, 0);

  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      padding: "15px",
      background: "#2874f0",
      color: "white"
    }}>
      <Link to="/" style={{ color: "white", textDecoration: "none" }}>
        <h2>🛍 MyStore</h2>
      </Link>

      <div>
        <Link to="/cart" style={{ color: "white", marginRight: "15px" }}>
          🛒 ({totalItems})
        </Link>

        {user ? (
          <>
            <span style={{ marginRight: "10px" }}>{user.name}</span>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" style={{ color: "white", marginRight: "10px" }}>
              Login
            </Link>
            <Link to="/register" style={{ color: "white" }}>
              Register
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
