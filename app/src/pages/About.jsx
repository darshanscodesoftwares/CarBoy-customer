import "./About.css";
import aboutImg from "../assets/gemini-carboy.png";

export default function About() {
  return (
    <div className="about-page">

      {/* ================= HERO SECTION ================= */}
      <section className="about-hero">
        <h1>About Us</h1>
        <p>Your trusted partner in automotive inspection and services</p>
      </section>

      {/* ================= MAIN CONTENT ================= */}
      <section className="about-container">

        {/* LEFT TEXT */}
        <div className="about-left">
          <h3 className="about-section-title">Who we are</h3>

          <h2 className="about-main-title">
            Your Partner in Confident Car Buying
          </h2>

          <p className="about-desc">
            At CARBOY, we are dedicated to helping car buyers make informed and
            confident decisions. Specializing in comprehensive used car inspections
            and pre-delivery inspections (PDI), our mission is to ensure you drive
            away with a vehicle that meets your expectations and safety standards.
          </p>

          <p className="about-desc">
            With years of expertise in the automotive industry, we provide
            thorough evaluations of a car’s mechanical, electrical, and
            structural components. From checking for hidden issues using
            advanced tools like OBD scanners to assessing the overall condition,
            we leave no detail unchecked.
          </p>

          <p className="about-desc">
            Our commitment to transparency, reliability, and customer
            satisfaction sets us apart. Whether you’re buying a pre-owned car or
            a brand-new vehicle, we’re here to guide you every step of the way.
          </p>

          <p className="about-desc">
            Your trust drives us forward. Choose <strong>CARBOY</strong> for inspections you can rely on.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="about-right">
          <img src={aboutImg} alt="CarBoy Team" className="about-image" />
        </div>
      </section>

    </div>
  );
}