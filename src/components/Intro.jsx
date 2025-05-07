import React, { useRef, useEffect, useState } from "react";
import "./Intro.css";
import Lottie from "lottie-react";
import animationData from "./IntroAnimation.json";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import ClickSpark from './ClickSpark';

function HeroSection() {
  const lottieRef = useRef(null);
  const navigate = useNavigate();
  const [isExiting, setIsExiting] = useState(false);
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (lottieRef.current) {
        lottieRef.current.setDirection(1);
        lottieRef.current.play();
      }
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Scroll listener to show the "scroll to top" button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleGetStartedClick = (e) => {
    e.preventDefault();
    setIsExiting(true);
    setTimeout(() => {
      navigate("/model");
    }, 500); // match animation duration
  };

  // Function to scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <ClickSpark
      sparkColor="#fff"
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >
      <motion.section
        className="language-feature"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
        style={{ pointerEvents: isExiting ? "none" : "auto" }}
      >
        <div className="feature-left">
          <h2>
            🌍 Smart & Fast <br />
            <span className="highlight">Language Detection</span>
          </h2>
          <p>
            Instantly detect and translate text with cutting-edge AI.
            Build smarter, multilingual-ready applications effortlessly.
          </p>
          <ul className="feature-list">
            <li>✅ 100+ Languages Detected</li>
            <li>⚡ Ultra-fast & Lightweight</li>
            <li>🔗 Seamless API Integration</li>
            <li>🧠 Powered by NLP & Machine Learning</li>
          </ul>
          <div className="feature-buttons">
            <a href="/model" className="btn" onClick={handleGetStartedClick}>
              Get Started
            </a>
          </div>
        </div>

        <div className="feature-right">
          <div className="image-wrapper">
            <Lottie
              lottieRef={lottieRef}
              animationData={animationData}
              loop={true}
              autoplay={true}
              style={{ width: "550px", height: "550px" }}
            />
          </div>
        </div>
      </motion.section>

      {/* Scroll to top button */}
      {showScrollToTop && (
        <button 
          className="scroll-to-top" 
          onClick={scrollToTop}
        >
          ↑ Back to Top
        </button>
      )}
    </ClickSpark>
  );
}

export default HeroSection;
