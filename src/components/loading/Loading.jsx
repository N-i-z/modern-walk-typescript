import React from "react";
import PropTypes from "prop-types";
import "./Loading.css";

const Loading = ({ message }) => {
  return (
    <div className="Loading">
      <h1>{message}</h1>
    </div>
  );
};

Loading.propTypes = {
  message: PropTypes.string,
};

Loading.defaultProps = {
  message: "Loading...",
};

export default Loading;
