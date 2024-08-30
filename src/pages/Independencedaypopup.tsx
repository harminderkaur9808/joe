// IndependenceDayPopup.tsx
import React from 'react';
import '../components/IndependenceDayPopup.css';

interface IndependenceDayPopupProps {
  show: boolean;
  onClose: () => void; // Add onClose prop for handling close action
}

const IndependenceDayPopup: React.FC<IndependenceDayPopupProps> = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-container">
        <button className="popup-close-button" onClick={onClose}>×</button>
        <div className="popup-image">
          <img src="/images/Popups/MainIndependencepop.svg" alt="Independence Day Sale" />
        </div>
        <div className="popup-content">
          <h2 className="popup-title">Independence Day Sale</h2>
          <h2 className="popup-subtitle">Up To OFF & Special Deals</h2>
          <input type="text" placeholder="Please enter" className="popup-input" />
          <button className="popup-button">Unlock Offer</button>
          <p className="popup-disclaimer">
            You agree to Terms of use and Privacy Policy by subscribing - You may receive emails with useful tips, promotions, and offerings.
          </p>
        </div>
      </div>
    </div>
  );
};

export default IndependenceDayPopup;
