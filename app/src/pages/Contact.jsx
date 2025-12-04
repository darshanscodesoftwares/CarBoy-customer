import "./Contact.css";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="contact-page">

      {/* ================= HERO / HEADER ================= */}
      <section className="contact-hero">
        <h1>Contact</h1>
        <p>Get in touch with us for any questions or enquiry</p>
      </section>

      {/* ================= MAIN LAYOUT ================= */}
      <section className="contact-container">

        {/* ---------- LEFT : CONTACT INFO ---------- */}
        <div className="contact-left">

          <div className="contact-box">
            <div className="contact-icon">
              <FaPhoneAlt />
            </div>
            <div>
              <h4>Our Workshop</h4>
              <p>+91 70106 82247</p>
            </div>
          </div>

          <div className="contact-box">
            <div className="contact-icon">
              <FaMapMarkerAlt />
            </div>
            <div>
              <h4>Our Address</h4>
              <p>Coimbatore, Tamil Nadu 641001</p>
            </div>
          </div>

        </div>

        {/* ---------- RIGHT : CONTACT FORM ---------- */}
        <div className="contact-right">
          <h3>Send us a Message</h3>

          <form className="contact-form">
            <label>
              FULL NAME <span>*</span>
              <input type="text" placeholder="Full Name" />
            </label>

            <label>
              PHONE NUMBER <span>*</span>
              <input type="text" placeholder="Phone Number" />
            </label>

            <label>
              EMAIL ID <span>*</span>
              <input type="text" placeholder="Email ID" />
            </label>

            <label>
              MESSAGE <span>*</span>
              <textarea placeholder="How can we help you?"></textarea>
            </label>

            <button className="contact-submit">Send Message</button>
          </form>
        </div>
      </section>

    </div>
  );
}
