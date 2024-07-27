// src/components/Modal.js
import { FaTimes } from 'react-icons/fa';
import './Modal.css'; // Import your custom styles for the modal here.

const Modal = ({ isOpen, content, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content relative">
          <FaTimes  className="modal-close"  onClick={onClose}/>
        <div className="modal-body" >
          {/* <h2>{title}</h2> */}
          {/* <p>{content}</p> */}
          <ul style={{
            listStyle: 'inside',
            overflow: 'scroll'
          }}>
            {content.map((item , i) => (
              <li key={i}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Modal;
