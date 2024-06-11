import React from "react";
import "./Heading.css";

interface HeadingProps {
  variant: "h1" | "h2" | "h3" | "h4";
  children?: React.ReactNode;
}

const Heading = ({ variant, children }: HeadingProps) => {
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
