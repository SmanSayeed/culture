import React, { useEffect } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  // Listen for clicks outside the modal
  const modalRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div ref={modalRef} className="relative w-full max-w-lg p-5 mx-4 bg-white rounded-lg shadow-lg">
        <button
          className="absolute top-0 right-0 mt-4 mr-4 text-gray-500 hover:text-gray-800 focus:outline-none"
          onClick={onClose}
        >
          &times;
        </button>
        <div className="mt-5">{children}</div>
      </div>
    </div>
  );
};

export default Modal;