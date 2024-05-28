import React from "react";
import PropTypes from "prop-types";

const Text = ({ variant, children }) => {
  const getHeading = () => {
    switch (variant) {
      case "h2":
        return <h2>{children}</h2>;
      default:
        return <p>{children}</p>;
    }
  };

  return getHeading();
};

Text.propTypes = {
  variant: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6", "p"]),
  children: PropTypes.node.isRequired,
};

export default Text;
