import React, { useEffect, useRef, useState } from "react";
import "./Mission.css";

const RevealOnScroll = ({ children, direction = "left" }) => {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "visible" : ""} ${direction}`}
    >
      {children}
    </div>
  );
};

function MissionSection() {
  return (
    <section id="mission" className="mission">
      <RevealOnScroll>
        <div className="mission-header">
          <h3><button className="mission-tag">Our Mission</button></h3>
          <h2 className="mission-title">
          We provide a fast, accurate, and intelligent language detection platform
          </h2>
          <p className="mission-desc">
          We believe in a connected world where language is no longer a barrier to understanding and communication.
          </p>
        </div>
      </RevealOnScroll>

      <RevealOnScroll direction="left">
        <div className="mission-card">
          <img src="/misi1.png" alt="Secure wallet"/>
          <div className="mission-info">
            <h4>📖Understand Every Word, Instantly</h4>
            <p>Real-time language detection built for speed, accuracy, and scalability.</p>
          </div>
        </div>
      </RevealOnScroll>

      <RevealOnScroll direction="right">
        <div className="mission-card">
          <div className="mission-info">
            <h4>🗝️Cross-Cultural Communication</h4>
            <p>To improve communication across platforms and cultures.</p>
          </div>
          <img src="/misi2.png" alt="Ownership" />
        </div>
      </RevealOnScroll>


      <RevealOnScroll direction="left">
        <div className="mission-card">
          <img src="/misi3.png" alt="Secure wallet" />
          <div className="mission-info">
            <h4>🧠Know the Language, Know the World</h4>
            <p>Powerful language detection that identifies any language in milliseconds — fast, precise, and built to grow with you.</p>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}

export default MissionSection;
