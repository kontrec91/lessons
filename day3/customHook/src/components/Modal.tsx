// import { useEffect } from "react";
// import "./../App.css";
// import { createPortal } from "react-dom";
// import useClickOutside from "../hook/useClickOutside";

// export const Modal = ({
//   isOpen,
//   onClose,
//   children,
//   ref,
// }: {
//   isOpen: boolean;
//   onClose: () => void;
//   children: React.ReactNode;
//   ref: React.RefObject<HTMLDivElement | null>;
// }) => {
//   useClickOutside(ref, () => onClose());

//   const handleCloseKey = (event: KeyboardEvent) => {
//     if (event.key === "Escape") onClose();
//   };

//   // const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
//   //   if (event.target === event.currentTarget) onClose();
//   // };

//   useEffect(() => {
//     if (!isOpen) return;

//     document.addEventListener("keydown", handleCloseKey);
//     document.body.style.overflow = "hidden";

//     return () => {
//       document.removeEventListener("keydown", handleCloseKey);
//       document.body.style.overflow = "";
//     };
//   }, [children, isOpen, onClose]);

//   if (!isOpen) return null;

//   return createPortal(
//     // <div className="modal-overlay" onClick={handleOverlayClick}>
//     <div
//       className="modal-overlay"
//       id="modal-overlay"
//       // onClick={(event: MouseEvent) => setTarget(event.target)}
//     >
//       <div
//         className="modal-window"
//         onClick={(e) => e.stopPropagation()}
//         role="dialog"
//         arial-modal="true"
//         ref={ref}
//       >
//         {children}
//       </div>
//     </div>,
//     document.body
//   );
// };

// Modal.Content = ({ children }: { children: React.ReactNode }) => {
//   return <div>{children}</div>;
// };

// Modal.Header = ({ children }: { children: React.ReactNode }) => {
//   return <div className="modal-header">{children}</div>;
// };

// Modal.Body = ({ children }: { children: React.ReactNode }) => {
//   return <div className="modal-body">{children}</div>;
// };

// Modal.Footer = ({ children }: { children: React.ReactNode }) => {
//   return <div>{children}</div>;
// };

import { useEffect, forwardRef } from "react";
import "./../App.css";
import useClickOutside from "../hook/useClickOutside";
import { createPortal } from "react-dom";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

// export const Modal = forwardRef<HTMLElement, ModalProps>(
//   ({ isOpen, onClose, children }, ref) => {
//     useClickOutside(ref as React.RefObject<HTMLElement>, onClose);

//     useEffect(() => {
//       if (!isOpen) return;

//       const handleCloseKey = (event: KeyboardEvent) => {
//         if (event.key === "Escape") onClose();
//       };

//       document.addEventListener("keydown", handleCloseKey);
//       document.body.style.overflow = "hidden";

//       return () => {
//         document.removeEventListener("keydown", handleCloseKey);
//         document.body.style.overflow = "";
//       };
//     }, [children, isOpen, onClose]);

//     if (!isOpen) return null;

//     return createPortal(
//       <div className="modal-overlay">
//         <div
//           ref={ref}
//           className="modal-window"
//           onClick={(e) => e.stopPropagation()}
//           role="dialog"
//           arial-modal="true"
//         >
//           {children}
//         </div>
//       </div>,
//       document.body
//     );
//   }
// );
/////////////////////////////////
export const Modal = forwardRef<HTMLElement, ModalProps>(
  ({ isOpen, onClose, children }, ref) => {
    useClickOutside(ref as React.RefObject<HTMLDivElement>, onClose);

    useEffect(() => {
      if (!isOpen) return;

      const handleCloseKey = (event: KeyboardEvent) => {
        if (event.key === "Escape") onClose();
      };

      document.addEventListener("keydown", handleCloseKey);
      document.body.style.overflow = "hidden";

      return () => {
        document.removeEventListener("keydown", handleCloseKey);
        document.body.style.overflow = "";
      };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return createPortal(
      <div className="modal-overlay">
        <div
          ref={ref}
          className="modal-window"
          onClick={(event) => event.stopPropagation()}
          role="dialog"
          aria-modal="true"
        >
          {children}
        </div>
      </div>,
      document.body
    );
  }
);

(Modal as any).Content = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

(Modal as any).Header = ({ children }: { children: React.ReactNode }) => {
  return <div className="modal-header">{children}</div>;
};

(Modal as any).Body = ({ children }: { children: React.ReactNode }) => {
  return <div className="modal-body">{children}</div>;
};

(Modal as any).Footer = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};
