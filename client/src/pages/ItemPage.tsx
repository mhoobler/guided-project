import React from "react";
import { useParams } from "react-router-dom";

type Params = {
  id: string;
};

const ItemPage: React.FC = () => {
  let params: Params = useParams();

  return <div>ItemPage: {params.id};</div>;
};

export default ItemPage;
