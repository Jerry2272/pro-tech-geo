// src/components/Modal.js
import './Modal.css'; // Import your custom styles for the modal here.

const Modal = ({ isOpen, content, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>X</button>
        <div className="modal-body">
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
