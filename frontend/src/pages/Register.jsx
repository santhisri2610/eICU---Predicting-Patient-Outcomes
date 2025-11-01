import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// ✅ Import multiple images for the carousel
import reg1 from "../assets/register1.jpg";
import reg2 from "../assets/register2.jpg";
import reg3 from "../assets/register3.jpg";

export default function Register({ users, setUsers }) {
  const [role, setRole] = useState("");
  const [hospital, setHospital] = useState("");
  const [id, setId] = useState("");
  const [designation, setDesignation] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [otp, setOtp] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);

  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const hospitalOptions = [
    "City Hospital",
    "Green Valley Hospital",
    "Sunrise Clinic",
    "HealthCare Center",
  ];

  const doctorDesignations = [
    "Physician",
    "Neurologist",
    "Cardiologist",
    "Surgeon",
    "Pediatrician",
  ];

  const images = [reg1, reg2, reg3];

  // ✅ Auto image carousel (every 3 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () =>
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  const goToSlide = (index) => setCurrentIndex(index);

  const handleRegister = () => {
    if (
      !role ||
      !hospital ||
      !id ||
      !username ||
      !email ||
      !password ||
      (role === "Doctor" && !designation)
    ) {
      setError("All fields are required!");
      return;
    }

    const exists = Object.values(users).find(
      (u) => u.username === username || u.email === email
    );
    if (exists) {
      setError("Username or Email already exists. Try logging in.");
      return;
    }

    const otpCode = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedOtp(otpCode);
    setIsOtpSent(true);
    setError("");
    console.log("📩 Your OTP is:", otpCode);
    alert("OTP sent! Check console for the code.");
  };

  const verifyOtp = () => {
    if (otp === generatedOtp) {
      setUsers({
        ...users,
        [username]: { role, hospital, id, designation, username, email, password },
      });
      alert("✅ OTP Verified! Registration successful.");
      navigate("/login"); // ✅ fixed (was "/signin")
    } else {
      setError("❌ Incorrect OTP. Please try again.");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #e3f2fd, #f8f9fa)",
        padding: "40px",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "40px",
          maxWidth: "1200px",
          width: "100%",
          boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
          borderRadius: "15px",
          overflow: "hidden",
        }}
      >
        {/* ✅ LEFT FORM */}
        <div
          style={{
            flex: 1,
            backgroundColor: "#fff",
            padding: "50px 40px",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <h2
            style={{
              fontSize: "36px",
              fontWeight: "700",
              color: "#1b5686",
              marginBottom: "10px",
            }}
          >
            Create Your Account
          </h2>
          <p
            style={{
              color: "#555",
              marginBottom: "25px",
              fontSize: "18px",
            }}
          >
            Join our community and manage your health with ease.
          </p>

          {error && (
            <p
              style={{
                color: "red",
                marginBottom: "15px",
                fontWeight: "500",
              }}
            >
              {error}
            </p>
          )}

          {!isOtpSent ? (
            <>
              <div style={{ textAlign: "left", marginBottom: "15px" }}>
                <p
                  style={{
                    fontWeight: "600",
                    fontSize: "18px",
                    marginBottom: "10px",
                  }}
                >
                  Are you a Doctor or Patient?
                </p>
                <label style={{ marginRight: "20px", fontSize: "17px" }}>
                  <input
                    type="radio"
                    name="role"
                    value="Patient"
                    checked={role === "Patient"}
                    onChange={(e) => setRole(e.target.value)}
                    style={{ marginRight: "8px" }}
                  />
                  Patient
                </label>
                <label style={{ fontSize: "17px" }}>
                  <input
                    type="radio"
                    name="role"
                    value="Doctor"
                    checked={role === "Doctor"}
                    onChange={(e) => setRole(e.target.value)}
                    style={{ marginRight: "8px" }}
                  />
                  Doctor
                </label>
              </div>

              <select
                value={hospital}
                onChange={(e) => setHospital(e.target.value)}
                style={{
                  width: "100%",
                  padding: "12px",
                  margin: "10px 0",
                  borderRadius: "8px",
                  border: "1px solid #ccc",
                  fontSize: "16px",
                }}
              >
                <option value="">Select Hospital</option>
                {hospitalOptions.map((hosp) => (
                  <option key={hosp} value={hosp}>
                    {hosp}
                  </option>
                ))}
              </select>

              <input
                placeholder={role === "Doctor" ? "Doctor ID" : "Patient ID"}
                value={id}
                onChange={(e) => setId(e.target.value)}
                style={{
                  width: "100%",
                  padding: "12px",
                  marginBottom: "15px",
                  borderRadius: "8px",
                  border: "1px solid #ccc",
                  fontSize: "16px",
                }}
              />

              {role === "Doctor" && (
                <select
                  value={designation}
                  onChange={(e) => setDesignation(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "12px",
                    marginBottom: "15px",
                    borderRadius: "8px",
                    border: "1px solid #ccc",
                    fontSize: "16px",
                  }}
                >
                  <option value="">Select Designation</option>
                  {doctorDesignations.map((desig) => (
                    <option key={desig} value={desig}>
                      {desig}
                    </option>
                  ))}
                </select>
              )}

              <input
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                style={{
                  width: "100%",
                  padding: "12px",
                  marginBottom: "15px",
                  borderRadius: "8px",
                  border: "1px solid #ccc",
                  fontSize: "16px",
                }}
              />

              <input
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  width: "100%",
                  padding: "12px",
                  marginBottom: "15px",
                  borderRadius: "8px",
                  border: "1px solid #ccc",
                  fontSize: "16px",
                }}
              />

              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{
                  width: "100%",
                  padding: "12px",
                  marginBottom: "20px",
                  borderRadius: "8px",
                  border: "1px solid #ccc",
                  fontSize: "16px",
                }}
              />

              <button
                onClick={handleRegister}
                style={{
                  width: "100%",
                  padding: "14px",
                  backgroundColor: "#1b5686",
                  color: "#fff",
                  border: "none",
                  borderRadius: "8px",
                  fontSize: "18px",
                  cursor: "pointer",
                  fontWeight: "600",
                }}
              >
                Send OTP
              </button>
            </>
          ) : (
            <>
              <input
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                style={{
                  width: "100%",
                  padding: "12px",
                  marginBottom: "20px",
                  borderRadius: "8px",
                  border: "1px solid #ccc",
                  fontSize: "16px",
                }}
              />
              <button
                onClick={verifyOtp}
                style={{
                  width: "100%",
                  padding: "14px",
                  backgroundColor: "#1b5686",
                  color: "#fff",
                  border: "none",
                  borderRadius: "8px",
                  fontSize: "18px",
                  cursor: "pointer",
                  fontWeight: "600",
                }}
              >
                Verify OTP
              </button>
            </>
          )}

          <p style={{ marginTop: "20px", fontSize: "18px" }}>
            Already have an account?{" "}
            <span
              style={{ color: "blue", cursor: "pointer", fontWeight: "500" }}
              onClick={() => navigate("/login")} // ✅ fixed (was "/signin")
            >
              Login
            </span>
          </p>
        </div>

        {/* ✅ RIGHT SLIDER */}
        <div style={styles.sliderContainer}>
          <div style={styles.arrowLeft} onClick={prevSlide}>
            ❮
          </div>

          <img src={images[currentIndex]} alt="slide" style={styles.sliderImage} />

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
                fontWeight: "550",
                margin: 0,
                textShadow: "0px 3px 6px rgba(0,0,0,0.3)",
                letterSpacing: "1px",
                whiteSpace: "nowrap",
              }}
            >
              Predict. Prevent. Protect
            </h1>
          </div>

          <div style={styles.arrowRight} onClick={nextSlide}>
            ❯
          </div>

          <div style={styles.dots}>
            {images.map((_, index) => (
              <span
                key={index}
                style={index === currentIndex ? styles.dotActive : styles.dot}
                onClick={() => goToSlide(index)}
              >
                ●
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  sliderContainer: {
    width: "50%",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  sliderImage: {
    width: "80%",
    height: "65%",
    objectFit: "cover",
    borderRadius: "10px",
    marginTop: "60px",
  },
  arrowLeft: {
    position: "absolute",
    top: "50%",
    left: "12%",
    fontSize: "35px",
    cursor: "pointer",
    transform: "translateY(-50%)",
    background: "rgba(255,255,255,0.8)",
    borderRadius: "50%",
    padding: "6px 10px",
  },
  arrowRight: {
    position: "absolute",
    top: "50%",
    right: "12%",
    fontSize: "35px",
    cursor: "pointer",
    transform: "translateY(-50%)",
    background: "rgba(255,255,255,0.8)",
    borderRadius: "50%",
    padding: "6px 10px",
  },
  dots: { marginTop: "12px" },
  dot: { cursor: "pointer", margin: "0 5px", color: "gray", fontSize: 18 },
  dotActive: { cursor: "pointer", margin: "0 5px", color: "black", fontSize: 18 },
};
