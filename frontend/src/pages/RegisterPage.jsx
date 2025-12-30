import { useState } from "react";
import { useAuth } from "../context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    try {
      await register(name, email, password);
      navigate("/");
    } catch {
      alert("Registration failed");
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <h2>Register</h2>
      <form onSubmit={submit}>
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        /><br/><br/>
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
        <button>Register</button>
      </form>
    </div>
  );
}
