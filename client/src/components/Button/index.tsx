import React from "react";

import "./Button.css";

type Props = {};

const Button: React.FC<Props> = ({ children }) => {
  return (
    <div className="button-container">
      <div>{children}</div>
    </div>
  );
};

export default Button;
