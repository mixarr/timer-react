import classNames from "classnames";
import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  ReactNode,
  Ref,
  forwardRef,
} from "react";

import "./styles.scss";

interface IconButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  onClick?: () => void;
  icon: ReactNode;
  size?: "large" | "medium" | "small";
  view?: "primary" | "outline" | "ghost";
  className?: string;
}

export const IconButton = forwardRef(
  (
    {
      icon,
      size = "medium",
      view = "primary",
      className,
      onClick,
      ...rest
    }: IconButtonProps,
    ref: Ref<HTMLButtonElement>
  ) => {
    return (
      <button
        className={classNames("icon-button", size, view)}
        onClick={onClick}
        ref={ref}
        {...rest}
      >
        {icon}
      </button>
    );
  }
);
