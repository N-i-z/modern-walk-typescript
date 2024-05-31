import React from "react";
import PropTypes from "prop-types";
import "./Heading.css";

const Heading = ({ variant, children }) => {
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

Heading.propTypes = {
  variant: PropTypes.oneOf(["h1", "h2", "h3", "h4"]),
  children: PropTypes.node.isRequired,
};

export default Heading;
