// ModalTutorial.js
import React from "react";
import "./Tutorial.css"; // styling opsional

const ModalTutorial = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>How to Use the Language Detector Tool</h2>
        <p><strong>Quick steps to detect the language of your text:</strong></p>
        <ol>
          <li>
            <strong>Write or paste a text:</strong> Type directly or paste any sentence or paragraph into the input box labeled <em>“Write a text”</em>.
          </li>
          <li>
            <strong>Click the “Analyze Text” button:</strong> The tool will process the input using language detection models.
          </li>
          <li>
            <strong>View the detected language:</strong> On the right panel, you'll see the predicted language and the confidence score.
          </li>
          <li>
            <strong>Clear and try again:</strong> Use the “X” icon to reset the input and analyze new text.
          </li>
        </ol>
        <button className="modal-close" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default ModalTutorial;
