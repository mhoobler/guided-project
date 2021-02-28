import React from "react";

import "./Button.css";

type ButtonProps = {
  align?: "left" | "right";
};

const Button: React.FC<ButtonProps> = ({ align, children }) => {
  return (
    <div className={`button-container ${align ? `align-${align}` : ''}`}>
      <div>{children}</div>
    </div>
  );
};

export default Button;
