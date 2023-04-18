import { ReactNode } from "react";

import "./styles.scss";

interface ContainerProps {
  children: ReactNode;
}

export const Container = ({ children }: ContainerProps) => {
  return <div className="container">{children}</div>;
};
