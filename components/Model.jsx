// components/Modal.js
import { useEffect } from "react";

const Modal = ({ onClose, children }) => {
  // Prevent scrolling when the modal is open
  useEffect(() => {
    const handleKeyDown = (event) => {
      // Close modal on Escape key press
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div className="fixed top-0 left-0 w-full h-full z-50 flex bg-black bg-opacity-60 backdrop-blur-sm">
      {/* Modal Content with Glassmorphism */}
      <div className="relative bg-black  max-w-full h-full flex flex-col transition-transform transform duration-900 overflow-hidden">
        {/* Close Button */}
    
        {/* Modal Children */}
        <div className="w-full h-full flex overflow-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
