import React from "react";
import PropTypes from "prop-types";
import "./Loading.css";

interface LoadingProps {
  message: string;
}

const Loading = ({ message = "Loading..." }: LoadingProps) => {
  return (
    <div className="Loading">
      <h1>{message}</h1>
    </div>
  );
};

export default Loading;
