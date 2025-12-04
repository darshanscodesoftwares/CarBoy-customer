import { useState, useEffect, useRef } from "react";
import "./HeroCarousel.css";

export default function HeroCarousel({ slides }) {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    startAutoPlay();
    return stopAutoPlay;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]); // you purposely wanted restart on index change

  const startAutoPlay = () => {
    stopAutoPlay();
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 2700); // slightly slower for nicer transitions
  };

  const stopAutoPlay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  return (
    <div
      className="hero-carousel">

      <div className="hero-content"
        onMouseEnter={stopAutoPlay}
      onMouseLeave={startAutoPlay}
      >
        <h1 className="hero-heading">
          {slides[index].title}{" "}
          <span className="hero-highlight">{slides[index].highlight}</span>
        </h1>

        <p className="hero-description">{slides[index].description}</p>

        <div className="hero-buttons">
          <button className="primary-btn">Book Inspection Now →</button>
          <button className="outline-btn">View All Services</button>
        </div>
      </div>

      <div className="hero-image-wrapper" aria-hidden={false}>
        {/* key changes on index so the img mounts fresh and animation runs */}
        <img
          key={index}
          src={slides[index].image}
          className="hero-image slide-in-right"
          alt="service"
          draggable={false}
        />
      </div>

      <div className="hero-dots">
        {slides.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === index ? "active" : ""}`}
            onClick={() => setIndex(i)}
            role="button"
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
