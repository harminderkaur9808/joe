import React, { ReactNode, MouseEvent } from 'react';
import '../styles/modal.css';

type ModalProps = {
  show: boolean;
  handleClose: () => void;
  children: ReactNode;
};

const Modal: React.FC<ModalProps> = ({ show, handleClose, children }) => {
  const handleBackgroundClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  return (
    <div className={`modal ${show ? 'show' : ''}`} onClick={handleBackgroundClick}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close-button" onClick={handleClose}>
          &times;
        </span>
        {children}
      </div>
    </div>
  );
};

export default Modal;
