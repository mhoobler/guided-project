import React from "react";

import ItemCard from "../ItemCard";

import "./style.css";

type ItemContainerProps = {
  itemsList: ItemEntry[];
};

const ItemContainer: React.FC<ItemContainerProps> = ({ itemsList }) => {
  return (
    <div className="items-container">
      {itemsList.map((e: ItemEntry) => {
        return <ItemCard key={e._id} item={e} />;
      })}
    </div>
  );
};

export default ItemContainer;
