import React from "react";

import "./Button.css";

type ButtonContainerProps = {
  variant?: "danger"
  align?: "left" | "right";
};

// All functionality in this component should be handled by {children} components
const ButtonContainer: React.FC<ButtonContainerProps> = ({
  align,
  variant,
  children,
}) => {
  return (
    <div className={`button-container ${align ? `align-${align}` : ""} ${variant ? variant : ""}`}>
      <div>{children}</div>
    </div>
  );
};

export default ButtonContainer;
