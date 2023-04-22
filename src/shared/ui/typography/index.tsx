import { CSSProperties, ReactNode, createElement } from "react";

import "./styles.scss";

interface TypographyProps {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "p" | "span" | "caption";
  variant?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "body1"
    | "body2"
    | "body3"
    | "caption1"
    | "caption2"
    | "caption3";
  className?: string;
  styles?: CSSProperties;
  children: ReactNode;
}

export const Typography = ({
  as = "p",
  variant = "body1",
  className,
  styles,
  children,
}: TypographyProps) => {
  return createElement(
    as,
    { className: `${variant}`, style: styles },
    children
  );
};
