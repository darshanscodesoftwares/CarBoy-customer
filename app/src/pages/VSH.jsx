import "./VSH.css";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

import heroImg from "../assets/1309.jpg";
import img1 from "../assets/16351.jpg";
import img2 from "../assets/21186.jpg";

export default function VSH() {
  return (
    <div className="vsh-page">

      {/* -------------------- HERO SECTION -------------------- */}
      <section className="vsh-hero">
        <img src={heroImg} className="vsh-hero-img" alt="Used Car Inspection" />

        <div className="vsh-hero-content">
          <button className="vsh-back-btn" onClick={() => window.history.back()}>
            <FaArrowLeft /> Back
          </button>

          <h1 className="vsh-title">Pre-Delivery Inspection</h1>
          <p className="vsh-subtitle">
            Ensure your brand-new car is delivered in perfect condition with our 150+ checkpoint inspection.
          </p>

          <button className="vsh-book-btn">Book Inspection Now →</button>

        </div>
      </section>

      {/* -------------------- MAIN CONTENT -------------------- */}
      <section className="vsh-content">

        {/* LEFT SIDE DESCRIPTION */}
        <div className="vsh-left">
          <h2>VEHICLE SERVICE HISTORY CHECK</h2>

          <p className="vsh-sub">
            Know the vehicle’s past before making a decision — avoid tampered odometers, hidden accidents,
            or unpaid loans.
          </p>

          <p className="vsh-desc">
            This service does not require physical inspection. Our expert admin team collects verified
            service history directly from OEMs, dealerships, previous owners, insurance portals,
            and government records to prepare a complete background report for you.
          </p>

          <h3>What We Check</h3>
          <ul>
            <li>Authorized service center history</li>
            <li>Mileage verification & odometer fraud check</li>
            <li>Insurance claim history</li>
            <li>Accident & flood damage verification</li>
            <li>RC, loan, hypothecation status</li>
            <li>Previous owner details (when available)</li>
            <li>Pending challans & legal issues</li>
          </ul>

          <h3>How You Receive the Report</h3>
          <ul>
            <li>WhatsApp PDF</li>
            <li>Email Delivery</li>
            <li>Both (recommended)</li>
          </ul>
        </div>

        {/* RIGHT SUMMARY CARD + IMAGES */}
        <div className="vsh-right">
          <div className="vsh-card">
            <h4>Report Preparation Time:</h4>
            <p>4–12 hours</p>

            <h4>Data Sources:</h4>
            <p>Dealerships, OEM, Insurance, Govt Portals</p>

            <h4>Delivery Method:</h4>
            <p>Email / WhatsApp / Both</p>

            <button
              className="vsh-book-btn"
              onClick={() => (window.location.href = "/contact")}
            >
              Request Report
            </button>
          </div>

          <img src={img1} alt="Report Sample" className="vsh-side-img" />
          <img src={img2} alt="Verification Process" className="vsh-side-img" />
        </div>

      </section>

      {/* -------------------- FAQ SECTION -------------------- */}
      <section className="vsh-faq">
        <h2>Frequently Asked Questions</h2>

        <details>
          <summary>Where do you get the service history from?</summary>
          <p>From authorized dealerships, OEM databases, and verified owner records.</p>
        </details>

        <details>
          <summary>Do you need the car physically?</summary>
          <p>No physical inspection is required for this service.</p>
        </details>

        <details>
          <summary>Is the report guaranteed to be accurate?</summary>
          <p>We only use verified data sources; however, some older records may not be fully available.</p>
        </details>

        <details>
          <summary>How will I receive the final report?</summary>
          <p>Via Email, WhatsApp, or both — as per your preference.</p>
        </details>
      </section>

      <footer className="footer">
        © {new Date().getFullYear()} CarBoy — All Rights Reserved.
      </footer>
    </div>
  );
}
