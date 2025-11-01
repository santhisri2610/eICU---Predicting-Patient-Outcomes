import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginImg from "../assets/login.jpg";

export default function Login({ users }) {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // ✅ add this

  const handleLogin = () => {
    const foundUser = Object.values(users).find(
      (u) =>
        (u.username === identifier || u.email === identifier) &&
        u.password === password
    );

    if (!foundUser) {
      setError("Invalid username/email or password");
      return;
    }

    alert(`Welcome back, ${foundUser.username}!`);
    navigate("/"); // ✅ Go to home after login (or wherever you want)
  };

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        background: "#f8f9fa",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      {/* LEFT IMAGE SECTION */}
      <div
        style={{
          flex: 1,
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={LoginImg}
          alt="Login Visual"
          style={{
            width: "100%",
            height: "100vh",
            objectFit: "cover",
            filter: "brightness(100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "60px",
            left: "50%",
            transform: "translateX(-50%)",
            color: "black",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              fontSize: "50px",
              fontWeight: "600",
              margin: 0,
              textShadow: "0px 3px 6px rgba(0,0,0,0.3)",
              letterSpacing: "1px",
              whiteSpace: "nowrap",
            }}
          >
            Your Health, Our Priority
          </h1>
          <p
            style={{
              fontSize: "20px",
              lineHeight: "1.5",
              color: "black",
              marginTop: "12px",
            }}
          >
            Take the first step towards a healthier, happier you. <br />
            Login to manage your wellness journey.
          </p>
        </div>
      </div>

      {/* RIGHT LOGIN FORM */}
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "40px",
        }}
      >
        <div
          style={{
            backgroundColor: "#fff",
            padding: "50px",
            borderRadius: "16px",
            boxShadow: "0 4px 18px rgba(0,0,0,0.15)",
            width: "460px",
            fontSize: "18px",
          }}
        >
          <h3
            style={{
              marginBottom: "10px",
              textAlign: "center",
              fontSize: "32px",
              fontWeight: "700",
              color: "#1b4480ff",
            }}
          >
            Welcome Back!
          </h3>
          <p
            style={{
              textAlign: "center",
              marginBottom: "25px",
              color: "#555",
              fontSize: "16px",
            }}
          >
            Please login to continue your health management.
          </p>

          {error && <p style={{ color: "red", marginBottom: "15px" }}>{error}</p>}

          <input
            placeholder="Username or Email"
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
            style={{
              width: "100%",
              padding: "14px",
              marginBottom: "15px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              fontSize: "17px",
            }}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: "100%",
              padding: "14px",
              marginBottom: "10px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              fontSize: "17px",
            }}
          />

          {/* Remember + Forgot Password */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
            <label style={{ fontSize: "15px", color: "#555" }}>
              <input type="checkbox" style={{ marginRight: "8px" }} /> Remember me
            </label>
            <span
              style={{
                color: "#2e72d8ff",
                cursor: "pointer",
                fontSize: "15px",
              }}
            >
              Forgot Password?
            </span>
          </div>

          <button
            onClick={handleLogin}
            style={{
              width: "100%",
              padding: "14px",
              backgroundColor: "#1b5686ff",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              fontSize: "20px",
              cursor: "pointer",
              fontWeight: "600",
              transition: "0.3s",
            }}
          >
            Login
          </button>

          <p
            style={{
              marginTop: "22px",
              fontSize: "17px",
              textAlign: "center",
              color: "#555",
            }}
          >
            New User?{" "}
            <span
              style={{
                color: "#447acbff",
                cursor: "pointer",
                fontWeight: "600",
              }}
              onClick={() => navigate("/register")} // ✅ Use React Router
            >
              Register Here
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
