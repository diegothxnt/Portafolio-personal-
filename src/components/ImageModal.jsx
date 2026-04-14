import React from 'react';
import './ImageModal.css';

const ImageModal = ({ image, alt, onClose }) => {
  if (!image) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>
        <img src={image} alt={alt} className="modal-image" />
      </div>
    </div>
  );
};

export default ImageModal;