import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./FAQ.css";

const data = [
  {
    question: "What is the Language Detection service?",
    answer:
      "The Language Detection service automatically identifies the language of any text you input.",
  },
  {
    question: "Which languages can it detect?",
    answer:
      "Our system can recognize a wide range of languages, including English, Indonesian, Spanish, French, Japanese, Mandarin, Arabic, and many more.",
  },
  {
    question: "Do I need to register to use the service?",
    answer:
      "No. You can use the language detection feature without creating an account.",
  },
  {
    question: "Is the service free?",
    answer: "Yes, this service is completely free to use.",
  },
  {
    question: "What is the maximum length of text I can input?",
    answer:
      "You can input up to 1000 characters per detection. For longer texts, consider breaking them into smaller parts.",
  },
  {
    question: "How accurate is the detection?",
    answer:
      "The detection is generally accurate for most major languages, especially when the input contains clear and well-formed sentences.",
  },
];

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section id="faq" className="faq">
      <h2>Frequently asked questions</h2>
      {data.map((item, index) => (
        <div key={index} className="faq-item">
          <div
            className="faq-question"
            onClick={() => setActiveIndex(index === activeIndex ? null : index)}
          >
            {item.question}
            <motion.span
              className="faq-icon"
              animate={{ rotate: activeIndex === index ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              ▼
            </motion.span>
          </div>

          <AnimatePresence initial={false}>
            {activeIndex === index && (
              <motion.div
                className="faq-answer"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                {item.answer}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </section>
  );
}

export default FAQ;
