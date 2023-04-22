import classNames from "classnames";
import {
  CSSProperties,
  DetailedHTMLProps,
  DetailsHTMLAttributes,
  ReactNode,
} from "react";

import "./styles.scss";

interface ButtonProps
  extends DetailedHTMLProps<
    DetailsHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  /**
   * Set disabled attribute.
   */
  disabled?: boolean;

  /**
   * Set button type.
   */
  type?: "button" | "submit" | "reset";

  /**
   * Button text.
   */
  children?: ReactNode;

  /**
   * Icon left position.
   */
  iconLeft?: ReactNode;

  /**
   * Icon right position.
   */
  iconRight?: ReactNode;

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

// Button test
export const Button = ({
  disabled,
  children,
  onClick,
  iconLeft,
  iconRight,
  type = "button",
  size = "medium",
  view = "primary",
  shape = "rounded",
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={classNames("button", size, view, shape)}
      type={type}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {iconLeft ? iconLeft : null}
      <span>{children}</span>
      {iconRight ? iconRight : null}
    </button>
  );
};
