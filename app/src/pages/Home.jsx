import "./Home.css";

import TiltedCard from "../animation/TiltedCard"
import HeroCarousel from "../animation/HeroCarousel";

import people from "../assets/people.png"
import img1 from "../assets/4309.jpg"
import img2 from "../assets/20980.jpg"
import img3 from "../assets/6496.jpg"
import img4 from "../assets/1309.jpg"
import img5 from "../assets/16351.jpg"
import img6 from "../assets/21186.jpg"

const slides = [
  {
    title: "Get A Complete",
    highlight: "Pre-Delivery Inspection",
    description:
      "Get peace of mind knowing your new vehicle meets the highest standards before taking it home.",
    image: img6,
  },
  {
    title: "Thorough",
    highlight: "Used-Car Inspection",
    description:
      "Detect hidden mechanical or electrical issues before buying a used car. Includes full OBD scan and Service History as add-on.",
    image: img1,
  },
  {
    title: "Verified",
    highlight: "Service History",
    description:
      "Access real past service records, mileage verification, and background checks.",
    image: img3,
  },
];

export default function Home() {
  return (
    <>

      <section className="hero">
        <HeroCarousel slides={slides} />
      </section>


      <section className="about">
        <h3 className="about-title">Why Choose CarBoy?</h3>

        <p className="about-short">
          CarBoy.in is where trust meets the road. We eliminate the fear of buying a used car and the guesswork of purchasing a new one by delivering smart, expert inspections that dig deep-from engine health and electronics to hidden accident damage.
          {/* You receive a 100% unbiased, detailed report you can rely on, personally reviewed with the founder’s meticulous attention.  */}
          Stop worrying about unexpected repairs, mitigate your risks, and drive away with complete confidence.
          <br /><br />
          Our goal is simple: to ensure no one gets scammed or misled when buying a vehicle.
          By combining technical expertise with honest, transparent reporting, we empower customers to make smarter, safer, and more informed decisions.
        </p>

        <button
          className="about-readmore"
          onClick={() => (window.location.href = "/about")}
        >
          Read More →
        </button>
      </section>

      <div className="services-bgc">
        <section className="services">
          <h3 className="services-title">Our Inspection Services</h3>

          <div className="service-grid">

            {/* -------- PDI -------- */}
            <div className="service-card">
              <TiltedCard
                imageSrc={img6}
                containerHeight="300px"
                containerWidth="300px"
                imageHeight="300px"
                imageWidth="300px"
                rotateAmplitude={3}
                scaleOnHover={1.06}
                showMobileWarning={false}
                showTooltip={false}
                displayOverlayContent={true}
              />

              <h4>Pre-Delivery Inspection (PDI)</h4>
              <p>
                A complete new-car inspection done before delivery to ensure everything is fit,
                safe, and working perfectly.
              </p>

              <button
                className="service-readmore"
                onClick={() => (window.location.href = "/services/pdi")}
              >
                Read More →
              </button>
            </div>

            {/* -------- UCI -------- */}
            <div className="service-card">
              <TiltedCard
                imageSrc={img1}
                containerHeight="300px"
                containerWidth="300px"
                imageHeight="300px"
                imageWidth="300px"
                rotateAmplitude={3}
                scaleOnHover={1.06}
                showMobileWarning={false}
                showTooltip={false}
                displayOverlayContent={true}
              />

              <h4>Used-Car Inspection (UCI)</h4>
              <p>
                A detailed used-car inspection covering mechanical, electrical, and structural
                health including full OBD scan.
              </p>

              <button
                className="service-readmore"
                onClick={() => (window.location.href = "/services/uci")}
              >
                Read More →
              </button>
            </div>

            {/* -------- VSH -------- */}
            <div className="service-card">
              <TiltedCard
                imageSrc={img3}
                containerHeight="300px"
                containerWidth="300px"
                imageHeight="300px"
                imageWidth="300px"
                rotateAmplitude={3}
                scaleOnHover={1.06}
                showMobileWarning={false}
                showTooltip={false}
                displayOverlayContent={true}
              />

              <h4>Vehicle Service History (VSH)</h4>
              <p>
                A verified report of a vehicle’s past services, mileage accuracy, background
                checks & more.
              </p>

              <button
                className="service-readmore"
                onClick={() => (window.location.href = "/services/vsh")}
              >
                Read More →
              </button>
            </div>

            {/* -------- COMING SOON 1 -------- */}
            <div className="service-card">
              <TiltedCard
                imageSrc={img2}
                containerHeight="300px"
                containerWidth="300px"
                imageHeight="300px"
                imageWidth="300px"
                rotateAmplitude={3}
                scaleOnHover={1.06}
                showMobileWarning={false}
                showTooltip={false}
                displayOverlayContent={true}
              />
              <h4>Buy Used Car (BUC)</h4>
              <p>Service coming soon...</p>
            </div>

            {/* -------- COMING SOON 2 -------- */}
            <div className="service-card">
              <TiltedCard
                imageSrc={img5}
                containerHeight="300px"
                containerWidth="300px"
                imageHeight="300px"
                imageWidth="300px"
                rotateAmplitude={3}
                scaleOnHover={1.06}
                showMobileWarning={false}
                showTooltip={false}
                displayOverlayContent={true}
              />
              <h4>Sell Your Car (SYC)</h4>
              <p>Service coming soon...</p>
            </div>

            {/* -------- COMING SOON 3 -------- */}
            <div className="service-card">
              <TiltedCard
                imageSrc={img4}
                containerHeight="300px"
                containerWidth="300px"
                imageHeight="300px"
                imageWidth="300px"
                rotateAmplitude={3}
                scaleOnHover={1.06}
                showMobileWarning={false}
                showTooltip={false}
                displayOverlayContent={true}
              />
              <h4>B2B Inspection (B2B)</h4>
              <p>Service coming soon...</p>
            </div>

          </div>
        </section>
      </div>


      {/* ------------------------------
          VISION + MISSION
      ------------------------------ */}
      <section className="vm-section">
        <div className="vm-card">
          <h4 className="vm-title">Our Vision</h4>
          <p>
            To eliminate fraud in the used car market by ensuring every buyer knows
            exactly what they’re purchasing.
          </p>
        </div>

        <div className="vm-card">
          <h4 className="vm-title">Our Mission</h4>
          <p>
            To safeguard used-car buyers with accurate, transparent inspections that
            build trust and enable confident decisions.
          </p>
        </div>
      </section>


      {/* ------------------------------
          WHY CHOOSE CARBOY?
      ------------------------------ */}
      <section className="why-section">
        <h3 className="why-title">Why Choose CARBOY?</h3>

        <div className="why-grid">
          <div className="why-box">
            <span className="why-icon">🔍</span>
            <h4>ON-SITE INSPECTION</h4>
            <p>We inspect every car on-site so you know exactly what you’re buying.</p>
          </div>

          <div className="why-box">
            <span className="why-icon">⏱</span>
            <h4>30–45 MINUTES</h4>
            <p>Complete inspection done efficiently without compromising quality.</p>
          </div>

          <div className="why-box">
            <span className="why-icon">📄</span>
            <h4>DETAILED PDF REPORT</h4>
            <p>
              Includes photos, a detailed checklist, and expert findings — right on your phone.
            </p>
          </div>

          <div className="why-box">
            <span className="why-icon">🤝</span>
            <h4>NO TIE-UP WITH DEALERS</h4>
            <p>
              100% honest, unbiased inspection. No seller influence. Ever.
            </p>
          </div>
        </div>
      </section>


      {/* ------------------------------
          TESTIMONIALS
      ------------------------------ */}
      <section className="testimonials">
        <h3 className="testimonial-title">What Our Customers Say</h3>

        <div className="testimonial-box">
          <p className="testimonial-text">
            “I recently used CarBoy for a used-car inspection, and I couldn't be
            happier. Extremely professional team, detailed report, and complete
            peace of mind. Highly recommended!”
          </p>

          <div className="testimonial-person">
            <img
              src={people}
              alt="Customer"
              className="testimonial-img"
            />
            <div>
              <h4>Kabilan</h4>
              <span>Chennai</span>
            </div>
          </div>
        </div>

        {/* Dots — static placeholder */}
        <div className="testimonial-dots">
          <span className="t-dot active"></span>
          <span className="t-dot"></span>
          <span className="t-dot"></span>
        </div>
      </section>


      {/* ------------------------------
          READY TO INSPECT CTA
      ------------------------------ */}
      <section className="cta-banner">
        <h2>Ready to Inspect Your Car?</h2>
        <p>
          Book your comprehensive car inspection today and drive with confidence.
        </p>
        <button className="cta-banner-btn">Book Your Inspection Now →</button>
      </section>


      <footer className="footer">
        © {new Date().getFullYear()} CarBoy — All Rights Reserved.
      </footer>
    </>
  );
}
