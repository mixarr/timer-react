import { MouseEventHandler, ReactNode } from "react";
import { createPortal } from "react-dom";

interface PopupProps {
  id?: string;
  isVisible: boolean;
  children: ReactNode;
  onClick?: MouseEventHandler;
}

export const Popup = ({ id, isVisible, onClick, children }: PopupProps) => {
  if (!isVisible) {
    return null;
  }

  return createPortal(
    <div className="popup" id={id} onClick={onClick}>
      {children}
    </div>,
    document.body
  );
};
