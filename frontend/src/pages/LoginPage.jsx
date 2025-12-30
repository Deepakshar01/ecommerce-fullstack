import { useState } from "react";
import { useAuth } from "../context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate("/");
    } catch {
      alert("Invalid credentials");
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <h2>Login</h2>
      <form onSubmit={submit}>
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /><br/><br/>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /><br/><br/>
        <button>Login</button>
      </form>
    </div>
  );
}
