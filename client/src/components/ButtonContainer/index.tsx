import React from "react";

import "./Button.css";

type ButtonContainerProps = {
  align?: "left" | "right";
};

// All functionality in this component should be handled by {children} components
const ButtonContainer: React.FC<ButtonContainerProps> = ({
  align,
  children,
}) => {
  return (
    <div className={`button-container ${align ? `align-${align}` : ""}`}>
      <div>{children}</div>
    </div>
  );
};

export default ButtonContainer;
