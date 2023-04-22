import { ReactNode, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

interface PopupProps {
  id?: string;
  isVisible: boolean;
  closePopup: () => void;
  children: ReactNode;
}

export const Popup = ({ id, isVisible, closePopup, children }: PopupProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isVisible &&
        ref.current &&
        !ref.current.contains(event.target as Node)
      ) {
        closePopup();
      }
    };

    if (isVisible) {
      document.addEventListener("dblclick", handleClickOutside);
    } else {
      document.removeEventListener("dblclick", handleClickOutside);
    }

    return () => {
      document.removeEventListener("dblclick", handleClickOutside);
    };
  }, [isVisible]);

  if (!isVisible) {
    return null;
  }

  return createPortal(
    <div className="popup" id={id} ref={ref}>
      {children}
    </div>,
    document.body
  );
};
