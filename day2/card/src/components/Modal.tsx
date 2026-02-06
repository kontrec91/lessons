// import { useEffect } from "react";
// import "./../App.css";

// export const Modal = ({
//   isOpen,
//   onClose,
//   children,
// }: {
//   isOpen: boolean;
//   onClose: () => void;
//   children: React.ReactNode;
// }) => {
//   function handleCloseKey(event: KeyboardEvent) {
//     if (event.key === "Escape") {
//       onClose();
//     }
//     document.removeEventListener("keydown", handleCloseKey);
//   }

//   function handleOverlayClick(event: MouseEvent) {
//     const modalOverlay = document.querySelector(".modal-overlay");
//     if (event.target === modalOverlay) {
//       onClose();
//     }
//     document.removeEventListener("click", handleOverlayClick);
//   }

//   document.addEventListener("keydown", (event) => {
//     handleCloseKey(event);
//   });

//   document.addEventListener("click", (event) => {
//     handleOverlayClick(event);
//   });

//   if (isOpen) {
//     return (
//       <div className="modal-overlay">
//         <div className="modal-window">{children}</div>
//       </div>
//     );
//   }
// };

// Modal.Content = ({ children }: { children: React.ReactNode }) => {
//   return <div>{children}</div>;
// };

// Modal.Header = ({ children }: { children: React.ReactNode }) => {
//   return <div>{children}</div>;
// };

// Modal.Body = ({ children }: { children: React.ReactNode }) => {
//   return <div>{children}</div>;
// };

// Modal.Footer = ({ children }: { children: React.ReactNode }) => {
//   return <div>{children}</div>;
// };

import { useEffect } from "react";
import "./../App.css";
import { createPortal } from "react-dom";

export const Modal = ({
  isOpen,
  onClose,
  children,
}: {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) => {
  const handleCloseKey = (event: KeyboardEvent) => {
    if (event.key === "Escape") onClose();
  };

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) onClose();
  };

  useEffect(() => {
    if (!isOpen) return;

    document.addEventListener("keydown", handleCloseKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleCloseKey);
      document.body.style.overflow = "";
    };
  }, [children, isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div
        className="modal-window"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        arial-modal="true"
      >
        {children}
      </div>
    </div>,
    document.body
  );
};

Modal.Content = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

Modal.Header = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

Modal.Body = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

Modal.Footer = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};
