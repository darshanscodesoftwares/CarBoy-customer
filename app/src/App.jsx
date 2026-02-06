// App.js
import React, { useState } from "react";
import "./App.css";

import { Routes, Route, Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

import Home from "./pages/Home";
import Services from "./pages/Services";
import PDI from "./pages/PDI";
import UCI from "./pages/UCI";
import VSH from "./pages/VSH";
import Contact from "./pages/Contact";
import About from "./pages/About";
import BookInspection from "./pages/BookInspection";
import BookingSuccess from "./pages/BookingSuccess";

export default function App() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [locked, setLocked] = useState(false);

  // Close dropdown when clicking a link
  const closeDropdown = (e) => {
    e.stopPropagation();
    setLocked(false);
    setServicesOpen(false);
  };

  const toggleDropdown = () => {
    const newLockState = !locked;
    setLocked(newLockState);
    setServicesOpen(newLockState);
  };

  return (
    <div className="app-container">
      {/* NAVBAR */}
      <nav className="navbar">
        <h1 className="logo">CARBOY</h1>

        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>

          {/* CLICK + HOVER DROPDOWN */}
          <li
            className={`dropdown-wrapper ${servicesOpen ? "force-open" : ""}`}
            onMouseEnter={() => {
              if (!locked) setServicesOpen(true);
            }}
            onMouseLeave={() => {
              if (!locked) setServicesOpen(false);
            }}
            onClick={toggleDropdown}
          >
            Services{" "}
            <span className={`arrow ${locked ? "down" : "up"}`}></span>

            <ul
              className={`services-dropdown ${servicesOpen ? "open" : ""}`}
              onClick={(e) => e.stopPropagation()}
            >
              
              <Link to="/services/pdi" onClick={closeDropdown}>
                <li>
                  Pre-Delivery Inspection (PDI)
                </li>
              </Link>

              <Link to="/services/uci" onClick={closeDropdown}>
                <li>
                  Used-Car Inspection (UCI)
                </li>
              </Link>

              <Link to="/services/vsh" onClick={closeDropdown}>
                <li>
                  Vehicle Service History (VSH)
                </li>
              </Link>

              <Link className="view-services" to="/services" onClick={closeDropdown}>
                <li className="view-services-link">
                  View all services <FaArrowRightLong />
                </li>
              </Link>

            </ul>
          </li>

          <li>
            <Link to="/contact">Contact</Link>
          </li>

          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>

      {/* ROUTES */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/pdi" element={<PDI />} />
        <Route path="/services/uci" element={<UCI />} />
        <Route path="/services/vsh" element={<VSH />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/book-inspection" element={<BookInspection />} />
        <Route path="/booking-success" element={<BookingSuccess />} />
      </Routes>
    </div>
  );
}
