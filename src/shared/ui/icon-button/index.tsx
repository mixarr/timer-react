import classNames from "classnames";
import {
  ButtonHTMLAttributes,
  CSSProperties,
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
  /**
   * Icon the button.
   */
  icon: ReactNode;

  /**
   * Set disabled attribute.
   */
  disabled?: boolean;

  /**
   * Set button type.
   */
  type?: "button" | "submit" | "reset";

  /**
   * Set button size.
   */
  size?: "large" | "medium" | "small";

  /**
   * Set button view.
   */
  view?: "primary" | "outline" | "ghost";

  /**
   * Set button shape.
   */
  shape?: "geometric" | "rounded" | "circular";

  /**
   * Set additional classes.
   */
  className?: string;

  /**
   * Set additional styles.
   */
  styles?: CSSProperties;

  /**
   * Callback function, called when the button is clicked.
   */
  onClick?: () => void;
}

export const IconButton = forwardRef(
  (
    {
      icon,
      size = "medium",
      view = "primary",
      shape = "rounded",
      className,
      onClick,
      ...rest
    }: IconButtonProps,
    ref: Ref<HTMLButtonElement>
  ) => {
    return (
      <button
        className={classNames("icon-button", size, view, shape)}
        onClick={onClick}
        ref={ref}
        {...rest}
      >
        {icon}
      </button>
    );
  }
);
