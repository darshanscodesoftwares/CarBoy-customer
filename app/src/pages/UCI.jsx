import "./UCI.css";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

import heroImg from "../assets/4309.jpg";
import img1 from "../assets/1309.jpg";
import img2 from "../assets/20980.jpg";

export default function UCI() {
  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section className="uci-hero">
        <img src={heroImg} className="uci-hero-img" alt="Used Car Inspection" />

        <div className="uci-hero-content">
          <button className="uci-back-btn" onClick={() => window.history.back()}>
            <FaArrowLeft /> Back
          </button>

          <h1 className="uci-title">Used Car Inspection</h1>
          <p className="uci-subtitle">
            Comprehensive 150+ point inspection for pre-owned vehicles
          </p>

          <button className="uci-book-btn">Book Inspection Now →</button>

        </div>
      </section>

      {/* ===== MAIN CONTENT ===== */}
      <section className="uci-body">

        {/* LEFT: Inspection details */}
        <div className="uci-left">
          <h2 className="uci-heading">USED CAR INSPECTION</h2>
          <p className="uci-tagline">
            Never judge a car by its appearance
          </p>

          <p className="uci-text">
            We offer comprehensive on-site used-car inspections.
            Over 200+ checkpoints to give you a complete
            understanding of the vehicle’s condition.
          </p>

          {/* ===== LISTS ===== */}
          <ul className="uci-list">
            <li>Exterior & Interior</li>
            <li>Engine & Transmission</li>
            <li>Air Conditioning System & Test Drive</li>
            <li>Brakes, Clutch & Suspension</li>
            <li>Tyres & Battery</li>
            <li>Accident, Flood & Structural Damage check</li>
          </ul>

          <h3 className="uci-small-head">Onboard Diagnostics (OBD)</h3>
          <ul className="uci-list">
            <li>Engine & Electrical Systems</li>
            <li>Sensors, Actuators & ECM checks</li>
            <li>ABS, Airbags & More</li>
          </ul>

          <h3 className="uci-small-head">Background Verification</h3>
          <ul className="uci-list">
            <li>Challan / Fine Verification</li>
            <li>Blacklist Verification</li>
          </ul>
        </div>

        {/* RIGHT: Summary card + images */}
        <div className="uci-right">
          <div className="uci-card">
            <h4>Service Duration:</h4>
            <p>2–3 hours</p>

            <h4>Report Delivery:</h4>
            <p>Within 24 hours</p>

            <h4>Location:</h4>
            <p>Chennai & Coimbatore</p>

            <button className="uci-book-btn">Book Now</button>
          </div>

          <img src={img1} alt="UCI Side" className="uci-side-img" />
          <img src={img2} alt="UCI Side" className="uci-side-img" />
        </div>
      </section>

      {/* ===== FAQ SECTION ===== */}
      <section className="uci-faq">
        <h2>Frequently Asked Questions</h2>

        <details>
          <summary>What is included in the Used Car Inspection?</summary>
          <p>Over 150+ checks including engine, suspension, electronics, OBD scan, body frame & more.</p>
        </details>

        <details>
          <summary>Do you provide a written report?</summary>
          <p>Yes, a detailed PDF with photos & all findings will be delivered within 24 hours.</p>
        </details>

        <details>
          <summary>Is a test drive included?</summary>
          <p>Yes, test-drive evaluation is included if permitted by the owner.</p>
        </details>

        <details>
          <summary>Can you inspect cars from dealerships?</summary>
          <p>Yes, we perform unbiased inspections for dealers, individuals & marketplaces.</p>
        </details>
      </section>

      <footer className="footer">
        © {new Date().getFullYear()} CarBoy — All Rights Reserved.
      </footer>
    </>
  );
}
