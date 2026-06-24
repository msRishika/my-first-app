import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email && password) {
      localStorage.setItem("user", email);
      navigate("/dashboard");
    } else {
      alert("Please enter email and password");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #4f46e5, #7c3aed)",
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: "40px",
          borderRadius: "20px",
          width: "400px",
          boxShadow: "0 15px 35px rgba(0,0,0,0.2)",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <h1 style={{ color: "#4f46e5" }}>TaskFlow</h1>
          <p style={{ color: "#666" }}>
            Your Personal Productivity Manager
          </p>
        </div>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "25px",
            borderRadius: "10px",
            border: "1px solid #ddd",
          }}
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "15px",
            borderRadius: "10px",
            border: "1px solid #ddd",
          }}
        />

        <button
          onClick={handleLogin}
          style={{
            width: "100%",
            padding: "14px",
            marginTop: "20px",
            border: "none",
            borderRadius: "10px",
            background: "#4f46e5",
            color: "#fff",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Login;