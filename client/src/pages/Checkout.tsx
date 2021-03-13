import React from "react";
import { Link } from "react-router-dom";

import ButtonContainer from "../components/ButtonContainer";

const Checkout: React.FC = () => {
  return (
    <div className="page-wrapper" id="Checkout">
      <h1 className="center-text">Thank you for shopping at Super Store!</h1>
      <ButtonContainer>
        <Link to={"/home"}> Return Home </Link>
      </ButtonContainer>
    </div>
  );
};

export default Checkout;
