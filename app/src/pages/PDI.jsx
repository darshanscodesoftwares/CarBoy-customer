import "./PDI.css";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

import heroImg from "../assets/16351.jpg";
import img1 from "../assets/19596.jpg";
import img2 from "../assets/4309.jpg";

export default function PDI() {
  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section className="pdi-hero">
        <img src={heroImg} className="pdi-hero-img" alt="Used Car Inspection" />

        <div className="pdi-hero-content">
          <button className="pdi-back-btn" onClick={() => window.history.back()}>
            <FaArrowLeft /> Back
          </button>

          <h1 className="pdi-title">Pre-Delivery Inspection</h1>
          <p className="pdi-subtitle">
            Ensure your brand-new car is delivered in perfect condition with our 150+ checkpoint inspection.
          </p>

          <button className="pdi-book-btn">Book Inspection Now →</button>

        </div>
      </section>

      {/* -------------------- MAIN CONTENT -------------------- */}
      <section className="pdi-content">

        {/* LEFT: TEXT DETAILS */}
        <div className="pdi-left">
          <h2>PRE-DELIVERY INSPECTION</h2>
          <p className="pdi-sub">
            Never accept a new car blindly — small issues can cost big money later.
          </p>

          <p className="pdi-desc">
            We offer a comprehensive on-site PDI with over 150+ checkpoints to
            ensure your new vehicle is delivered in perfect mechanical, electrical,
            and cosmetic condition.
          </p>

          <h3>1. Exterior & Interior Inspection</h3>
          <ul>
            <li>Body panels, paint quality & dents</li>
            <li>Glass, lights, wipers & mirrors</li>
            <li>Seats, dashboard, trims & finishing</li>
            <li>Functionality of all interior components</li>
          </ul>

          <h3>2. Engine & Mechanical Check</h3>
          <ul>
            <li>Engine bay condition & fluid levels</li>
            <li>Belts, hoses & leak detection</li>
            <li>Battery health & wiring</li>
            <li>Suspension & underbody inspection</li>
          </ul>

          <h3>3. Electrical & Electronics</h3>
          <ul>
            <li>Infotainment system & sensors</li>
            <li>AC cooling efficiency</li>
            <li>Power windows, buttons, and switches</li>
            <li>All dashboard warnings & indicators</li>
          </ul>

          <h3>4. OBD Diagnostic Scan</h3>
          <ul>
            <li>ECM, BCM, ABS, Airbag error detection</li>
            <li>Live data monitoring</li>
            <li>Hidden system faults</li>
          </ul>
        </div>

        {/* RIGHT: SERVICE DETAILS CARD */}
        <div className="pdi-right">
          <div className="pdi-card">
            <h4>Service Duration:</h4>
            <p>1.5 – 2 hours</p>

            <h4>Report Delivery:</h4>
            <p>Within 12 hours</p>

            <h4>Location:</h4>
            <p>Chennai & Coimbatore</p>

            <button
              className="pdi-book-btn"
              onClick={() => (window.location.href = "/contact")}
            >
              Book Now
            </button>
          </div>

          <img src={img1} alt="PDI Side" className="pdi-side-img" />
          <img src={img2} alt="PDI Side" className="pdi-side-img" />
        </div>
      </section>

      {/* -------------------- FAQ SECTION -------------------- */}
      <section className="pdi-faq">
        <h2>Frequently Asked Questions</h2>

        <details>
          <summary>Is PDI necessary for a new car?</summary>
          <p>Yes. Many new vehicles arrive with transit damage or hidden issues.</p>
        </details>

        <details>
          <summary>Do you inspect at showroom or customer location?</summary>
          <p>Yes, PDI is done at any showroom or delivery point.</p>
        </details>

        <details>
          <summary>Will you join during car delivery?</summary>
          <p>Yes, our expert joins you and verifies the car before signing delivery papers.</p>
        </details>

        <details>
          <summary>Do you provide a report?</summary>
          <p>A detailed PDF report with photos is provided.</p>
        </details>
      </section>

      <footer className="footer">
        © {new Date().getFullYear()} CarBoy — All Rights Reserved.
      </footer>
    </>
  );
}
