// Modal.js
import React from 'react';
import './css/Modal.css'; // You will create this file next

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null; // Conditional rendering: render nothing if not open

  // Handle clicks on the backdrop to close the modal, but prevent clicks on the modal content from closing it
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleBackdropClick}>
      <div className="modal-content">
        <button className="modal-close-button" onClick={onClose}>
          &times; {/* This renders a multiplication sign (X) for closing */}
        </button>
        {children} {/* This renders dynamic content passed from the parent component */}
      </div>
    </div>
  );
};

export default Modal;
