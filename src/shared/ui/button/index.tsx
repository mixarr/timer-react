import { DetailedHTMLProps, DetailsHTMLAttributes, ReactNode } from "react";

import classNames from "classnames";

import "./styles.scss";

interface ButtonProps
  extends DetailedHTMLProps<
    DetailsHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  disabled?: boolean;
  onClick?: () => void;
  children?: ReactNode;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  size?: "large" | "medium" | "small";
  view?: "primary" | "outline" | "ghost";
  shape?: "geometric" | "rounded" | "circular";
}

export const Button = ({
  disabled,
  children,
  onClick,
  iconLeft,
  iconRight,
  size = "medium",
  view = "primary",
  shape = "rounded",
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={classNames("button", size, view, shape)}
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
