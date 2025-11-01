import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import WelcomePage from "./pages/WelcomePage";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Navbar from "./pages/Navbar";

function App() {
  // ✅ Store users in App.js (to pass to Register & Login)
  const [users, setUsers] = useState({});

  return (
    <Router>
      {/* ✅ Navbar stays always visible */}
      <Navbar />

      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />

        {/* ✅ Pass users and setUsers to Register & Login */}
        <Route path="/register" element={<Register users={users} setUsers={setUsers} />} />
        <Route path="/login" element={<Login users={users} />} />
      </Routes>
    </Router>
  );
}

export default App;
