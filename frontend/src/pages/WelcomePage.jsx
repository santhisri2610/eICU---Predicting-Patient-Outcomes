import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../pages/Navbar";
import Login from "./Login";

// Images
import HomePageImg from "../assets/home_page.jpg";
import AIPoweredImg from "../assets/ai_powered.jpg";
import RealTimeImg from "../assets/real_time.jpg";
import SecureImg from "../assets/secure.jpg";
import OurMissionImg from "../assets/our_mission.jpg";

export default function WelcomePage({ users, onLoginSuccess }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    if (location.state?.openLogin) setShowLogin(true);
  }, [location.state]);

  const handleStartDemo = () => navigate("/demo");
  const handleAboutUs = () => navigate("/aboutus");

  const features = [
    {
      title: "AI-Powered Analysis",
      desc: "Our AI reviews patient data and highlights what matters most. Doctors get clear insights, making decisions faster and simpler.",
      img: AIPoweredImg,
    },
    {
      title: "Real-Time Insights",
      desc: "Patient data is monitored continuously, instantly alerting doctors to changes. Timely care ensures better patient outcomes.",
      img: RealTimeImg,
    },
    {
      title: "Secure & Reliable",
      desc: "All patient data is protected with top-level security and privacy. Doctors focus on care while data stays confidential.",
      img: SecureImg,
    },
  ];

  return (
    <div style={{ fontFamily: "'Inter', sans-serif" }}>
      

      {/* Hero Section */}
      <section
        style={{
          marginTop: "70px",
          minHeight: "85vh",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "60px 100px",
          background: "linear-gradient(to right, #e3f2fd, #ffffff)",
        }}
      >
        {/* Left Hero Text */}
        <div style={{ flex: "1 1 500px", maxWidth: "550px" }}>
          <h1 style={{ fontSize: "42px", fontWeight: "700", color: "#0d47a1", lineHeight: "1.3" }}>
            Empowering Healthcare with Predictive Intelligence
          </h1>
          <p style={{ fontSize: "20px", marginTop: "20px" }}>
            Welcome to the <b>Patient Outcome Prediction System</b> — an advanced AI platform
            designed to assist healthcare professionals in predicting ICU patient outcomes.
          </p>
          <button
            onClick={handleStartDemo}
            style={{
              marginTop: "30px",
              padding: "12px 32px",
              fontSize: "16px",
              borderRadius: "30px",
              border: "none",
              backgroundColor: "#4caf50",
              color: "white",
              cursor: "pointer",
              boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
              transition: "all 0.3s ease",
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = "#43a047";
              e.target.style.transform = "scale(1.05)";
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = "#4caf50";
              e.target.style.transform = "scale(1)";
            }}
          >
            Start Demo →
          </button>

          {showLogin && (
            <div style={{ marginTop: "40px", maxWidth: "400px" }}>
              <Login users={users} onLoginSuccess={onLoginSuccess} />
            </div>
          )}
        </div>

        {/* Right Hero Image */}
        <div
          style={{
            flex: "1 1 400px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingLeft: "50px",
          }}
        >
          <img
            src={HomePageImg}
            alt="Healthcare AI"
            style={{
              width: "100%",
              maxWidth: "450px",
              borderRadius: "30px",
              objectFit: "cover",
              aspectRatio: "9/12",
              boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
            }}
          />
        </div>
      </section>

      {/* Features Section */}
      <section style={{ backgroundColor: "#f8f9fa", padding: "60px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "32px", color: "#0d47a1" }}>Why Choose Our System?</h2>
        <p style={{ fontSize: "18px", maxWidth: "800px", margin: "20px auto" }}>
          Our AI helps doctors make ICU care easier, faster, and safer, giving every patient the attention they deserve.
        </p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "30px",
            marginTop: "40px",
          }}
        >
          {features.map((item, i) => (
            <div
              key={i}
              style={{
                flex: "1 1 300px",
                maxWidth: "340px",
                backgroundColor: "white",
                borderRadius: "16px",
                boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                cursor: "pointer",
                transition: "all 0.3s ease",
                display: "flex",
                flexDirection: "column",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-10px)";
                e.currentTarget.style.boxShadow = "0 12px 25px rgba(0,0,0,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 15px rgba(0,0,0,0.1)";
              }}
            >
              <img
                src={item.img}
                alt={item.title}
                style={{
                  width: "100%",
                  height: "180px",
                  objectFit: "cover",
                  borderTopLeftRadius: "16px",
                  borderTopRightRadius: "16px",
                }}
              />
              <div style={{ padding: "20px" }}>
                <h3 style={{ color: "#0d47a1", fontWeight: "600", marginBottom: "12px" }}>{item.title}</h3>
                <p style={{ fontSize: "16px", textAlign: "justify" }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Mission Section */}
      <section
        style={{
          background: "linear-gradient(to bottom, #2d80bbff, #ffffff)",
          padding: "80px 20px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "22px",
            boxShadow: "0 8px 22px rgba(0,0,0,0.15)",
            padding: "50px",
            maxWidth: "950px",
            width: "100%",
            display: "flex",
            flexWrap: "wrap",
            gap: "40px",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Text */}
          <div style={{ flex: "1 1 500px" }}>
            <h2 style={{ color: "#0d47a1", fontSize: "36px", fontWeight: "700" }}>Our Mission</h2>
            <p style={{ fontSize: "19px", marginTop: "18px", lineHeight: "1.7", color: "#333" }}>
              We believe technology should make healthcare simpler and more caring. Our
              goal is to support doctors with quick, clear insights so they can focus on
              what matters most — saving lives. With smart AI, we help patients get faster
              decisions, better care, and a safer recovery.
            </p>
            <div style={{ textAlign: "center", marginTop: "35px" }}>
              <button
                onClick={handleAboutUs}
                style={{
                  backgroundColor: "#1976a8ff",
                  color: "white",
                  border: "none",
                  padding: "14px 42px",
                  fontSize: "18px",
                  borderRadius: "30px",
                  cursor: "pointer",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
                  transition: "all 0.3s ease",
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = "#6a9db6ff";
                  e.target.style.transform = "scale(1.07)";
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = "#97c5ddff";
                  e.target.style.transform = "scale(1)";
                }}
              >
                About Us →
              </button>
            </div>
          </div>

          {/* Image */}
          <div style={{ flex: "1 1 300px", textAlign: "center" }}>
            <img
              src={OurMissionImg}
              alt="Mission"
              style={{
                width: "270px",
                height: "270px",
                borderRadius: "50%",
                objectFit: "cover",
                boxShadow: "0 6px 18px rgba(0,0,0,0.18)",
              }}
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          backgroundColor: "#2c2f35ff",
          color: "white",
          padding: "35px 20px",
          textAlign: "center",
        }}
      >
        <p style={{ fontSize: "18px", marginBottom: "12px" }}>
          Together, we care. Together, we save lives.
        </p>
        <div style={{ marginBottom: "10px" }}>
          <a href="/" style={{ color: "white", margin: "0 12px", textDecoration: "none" }}>Home</a>
          <a href="/aboutus" style={{ color: "white", margin: "0 12px", textDecoration: "none" }}>About</a>
          <a href="/contactus" style={{ color: "white", margin: "0 12px", textDecoration: "none" }}>Contact</a>
          <a href="/demo" style={{ color: "white", margin: "0 12px", textDecoration: "none" }}>Demo</a>
        </div>
        <p style={{ fontSize: "15px", marginBottom: "8px" }}>📩 Contact: support@patientpredict.com</p>
        <p style={{ fontSize: "14px", opacity: "0.85" }}>© 2025 Patient Outcome Predictor | Made with ❤️ by Your Team</p>
      </footer>
    </div>
  );
}
