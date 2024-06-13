import React from "react";
import "./Loading.component.css";
import type { LoadingProps } from "./Loading.types";

const Loading = ({ message = "Loading..." }: LoadingProps) => {
  return (
    <div className="Loading">
      <h1>{message}</h1>
    </div>
  );
};

export default Loading;
