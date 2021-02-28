import React from "react";

import "./QuantitySelect.css";

type QuantitySelectProps = {
  value: number;
  handleChange: (n: number) => void;
};

const QuantitySelect: React.FC<QuantitySelectProps> = ({
  handleChange,
  value,
}) => {
  return (
    <div className="quantity-select-container">
      <form>
        <label htmlFor="quantity"> Quantity: </label>
        <input
          value={value}
          onChange={(evt) => {
            handleChange(parseInt(evt.currentTarget.value));
          }}
          name="quantity"
          type="number"
        />
      </form>
    </div>
  );
};

export default QuantitySelect;
