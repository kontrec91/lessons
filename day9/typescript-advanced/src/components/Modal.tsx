
import { useEffect, forwardRef, type ForwardRefExoticComponent, type RefAttributes, type ReactNode, type PropsWithChildren } from "react";
import "./../App.css";
import useClickOutside from "../hook/useClickOutside";
import { createPortal } from "react-dom";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

type ModalSubcomponentType = PropsWithChildren<{children: ReactNode}>

type ModalSubcomponentName = 'Content' | 'Header' | 'Body' | 'Footer';

type ModalComponentType = ForwardRefExoticComponent<ModalProps & RefAttributes<HTMLDivElement>> & {
  [K in ModalSubcomponentName]: ({children}: ModalSubcomponentType) => ReactNode;
}

// interface ModaComponentType extends ForwardRefExoticComponent<ModalProps & RefAttributes<HTMLDivElement>>{
//   // Content: ({ children } : ModalSubcomponentType) => ReactNode;
//   // Header: ({ children } : ModalSubcomponentType) => ReactNode;
//   // Body: ({ children } : ModalSubcomponentType) => ReactNode;
//   // Footer: ({ children }: ModalSubcomponentType) => ReactNode;
// }


 export const Modal = forwardRef<HTMLDivElement, ModalProps>(
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
) as ModalComponentType;


Modal.Content = ({ children }) => {
  return <div>{children}</div>;
};

Modal.Header = ({ children }) => {
  return <div className="modal-header">{children}</div>;
};

Modal.Body = ({ children }) => {
  return <div className="modal-body">{children}</div>;
};

Modal.Footer = ({ children }) => {
  return <div>{children}</div>;
};
