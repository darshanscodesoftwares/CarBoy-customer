import TiltedCard from "../animation/TiltedCard";
import "./Services.css";

import img1 from "../assets/4309.jpg";
import img2 from "../assets/20980.jpg";
import img3 from "../assets/6496.jpg";
import img4 from "../assets/1309.jpg";
import img5 from "../assets/16351.jpg";
import img6 from "../assets/21186.jpg";

export default function Services() {
  return (
    <>
      <section className="services1">
        <h3 className="services-title1">Our Inspection Services</h3>

        <div className="service-grid1">

          <div className="service-card1">
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
              A complete new-car inspection done before delivery to ensure everything is fit, safe, and working perfectly. Includes checks on exterior, interior, electronics, and a full OBD scan to detect hidden system issues.
            </p>
            <button
              className="service-readmore"
              onClick={() => (window.location.href = "/services/pdi")}
            >
              Read More →
            </button>
          </div>


          <div className="service-card1">
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
              A detailed used-car inspection covering mechanical, electrical, and structural health. Includes a full OBD scan to reveal engine faults or hidden problems so you can buy confidently and avoid costly surprises.
            </p>
            <button
              className="service-readmore"
              onClick={() => (window.location.href = "/services/uci")}
            >
              Read More →
            </button>
          </div>


          <div className="service-card1">
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
              A verified report of a vehicle’s past services, maintenance records, mileage accuracy, and background checks to ensure the car is legally clean and properly maintained.
            </p>
            <button
              className="service-readmore-vsh"
              onClick={() => (window.location.href = "/services/vsh")}
            >
              Read More →
            </button>
          </div>


          <div className="service-card1">
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


          <div className="service-card1">
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


          <div className="service-card1">
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

      <footer className="footer">
        © {new Date().getFullYear()} CarBoy — All Rights Reserved.
      </footer>

    </>
  );
}