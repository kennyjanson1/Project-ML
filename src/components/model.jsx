import React, { useState } from 'react';
import './model.css';
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function LanguageDetector() {
  const [text, setText] = useState('');
  const [result, setResult] = useState({ language: '--', score: '--' });
  const [isExiting, setIsExiting] = useState(false);
  const navigate = useNavigate();

  const handleAnalyze = () => {
    if (!text.trim()) return;

    // Dummy logic - replace with actual API call
    setResult({
      language: 'English',
      score: '98.5',
    });
  };

  const handleClear = () => {
    setText('');
    setResult({ language: '--', score: '--' });
  };

  const handleBackClick = (e) => {
    e.preventDefault();
    setIsExiting(true);
    setTimeout(() => {
      navigate("/");
    }, 500); // match animation duration
  };

  return (
    <motion.div
      className="detector-container"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.5 }}
      style={{ pointerEvents: isExiting ? "none" : "auto" }}
    >
      <a href="/" className="back-circle" onClick={handleBackClick} aria-label="Back to Intro">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="arrow-left"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          width="24"
          height="24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </a>
      <h1 className="title">Language Detector Tool</h1>
      <p className="subtitle">Quickly detect the language of your text</p>

      <div className="input-result-container">
        <div className="text-section">
          <h2 className="input-label">Write a text:</h2>
          <textarea
            className="text-input"
            placeholder="Type here..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button className="clear-btn" onClick={handleClear}>✖</button>
        </div>

        <div className="result-box">
          <div>
            <strong>🌐 Language</strong><br />
            {result.language}
          </div>
          <div>
            <strong>% Score</strong><br />
            {result.score}
          </div>
        </div>
      </div>

      <div className="button-wrapper">
        <button className="analyze-btn" onClick={handleAnalyze}>Analyze Text</button>
      </div>
    </motion.div>
  );
}

export default LanguageDetector;
