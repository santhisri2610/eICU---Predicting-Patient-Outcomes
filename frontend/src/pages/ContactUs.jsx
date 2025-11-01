import React, { useState } from "react";
import contactImg from "../assets/contact_us.jpg"; // ✅ Add your own image here

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all required fields.");
      return;
    }
    setSubmitted(true);
    console.log("📩 Contact Form Data:", formData);
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        background: "linear-gradient(135deg, #f8f9fa, #e3f2fd)",
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
          src={contactImg}
          alt="Contact Us"
          style={{
            width: "100%",
            height: "100vh",
            objectFit: "cover",
            filter: "brightness(95%)",
          }}
        />

        {/* Text overlay */}
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
              fontSize: "48px",
              fontWeight: "600",
              margin: 0,
              textShadow: "0 2px 5px rgba(0,0,0,0.2)",
              letterSpacing: "1px",
            }}
          >
            Get in Touch With Us
          </h1>
          <p
            style={{
              fontSize: "20px",
              marginTop: "10px",
              color: "#222",
            }}
          >
            We’re here to help you — reach out anytime!
          </p>
        </div>
      </div>

      {/* RIGHT FORM SECTION */}
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "50px",
        }}
      >
        <div
          style={{
            backgroundColor: "#fff",
            padding: "50px",
            borderRadius: "16px",
            boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
            width: "460px",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              fontSize: "32px",
              fontWeight: "700",
              color: "#1b5686",
              marginBottom: "10px",
            }}
          >
            Contact Us
          </h2>
          <p
            style={{
              textAlign: "center",
              color: "#555",
              fontSize: "16px",
              marginBottom: "25px",
            }}
          >
            Fill out the form below and we’ll get back to you shortly.
          </p>

          {submitted && (
            <p
              style={{
                color: "green",
                fontWeight: "600",
                marginBottom: "15px",
                textAlign: "center",
              }}
            >
              ✅ Thank you! Your message has been sent.
            </p>
          )}

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Full Name *"
              value={formData.name}
              onChange={handleChange}
              style={inputStyle}
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address *"
              value={formData.email}
              onChange={handleChange}
              style={inputStyle}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              style={inputStyle}
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              style={inputStyle}
            />
            <textarea
              name="message"
              placeholder="Your Message *"
              value={formData.message}
              onChange={handleChange}
              style={{
                ...inputStyle,
                height: "120px",
                resize: "none",
              }}
            />
            <button type="submit" style={buttonStyle}>
              Send Message
            </button>
          </form>

          {/* Contact Details */}
          <div style={{ marginTop: "35px", textAlign: "center" }}>
            <h3 style={{ color: "#1b5686", marginBottom: "10px" }}>
              Contact Details
            </h3>
            <p style={{ color: "#555", fontSize: "16px" }}>
              📧 contact@yourapp.com <br />
              📞 +91 98765 43210 <br />
              🕒 Mon–Sat: 9:00 AM – 6:00 PM
            </p>

            {/* Social Links */}
            <div style={{ marginTop: "15px", fontSize: "22px" }}>
              <a
                href="#"
                style={{ color: "#1b5686", margin: "0 10px", textDecoration: "none" }}
              >
                🌐
              </a>
              <a
                href="#"
                style={{ color: "#1b5686", margin: "0 10px", textDecoration: "none" }}
              >
                📸
              </a>
              <a
                href="#"
                style={{ color: "#1b5686", margin: "0 10px", textDecoration: "none" }}
              >
                💼
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginBottom: "15px",
  borderRadius: "8px",
  border: "1px solid #ccc",
  fontSize: "16px",
  outline: "none",
};

const buttonStyle = {
  width: "100%",
  padding: "14px",
  backgroundColor: "#1b5686",
  color: "#fff",
  border: "none",
  borderRadius: "8px",
  fontSize: "18px",
  cursor: "pointer",
  fontWeight: "600",
  transition: "0.3s",
};
