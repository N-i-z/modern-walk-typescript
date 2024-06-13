import React from "react";
import "./Heading.component.css";
import { HeadingProps } from "./Heading.types";

const Heading: React.FC<HeadingProps> = ({
  variant,
  children,
}: HeadingProps) => {
  switch (variant) {
    case "h1":
      return <h1>{children}</h1>;
    case "h2":
      return <h2>{children}</h2>;
    case "h3":
      return <h3>{children}</h3>;
    case "h4":
      return <h4>{children}</h4>;
    default:
      return <h1>{children}</h1>;
  }
};

export default Heading;
