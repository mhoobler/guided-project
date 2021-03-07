import React from "react";

import "./PageController.css";

type PageControllerProps = {
  handlePage: (n: number) => void;
  page: number;
  isLast: boolean;
  isFirst: boolean;
};

const PageController: React.FC<PageControllerProps> = ({
  handlePage,
  page,
  isFirst,
  isLast,
}) => {
  return (
    <div className="page-controller-container row">
      {isFirst ? (
        <div className="page-input-group row justify-center">&nbsp;</div>
      ) : (
        <div className="page-input-group row justify-center">
          {/* <button onClick={() => handlePage(0)}>First</button> */}
          <button onClick={() => handlePage(-1)}>&#60;</button>
        </div>
      )}
      <div className="page-input-group">{page + 1}</div>
      {isLast ? (
        <div className="page-input-group row justify-center">&nbsp;</div>
      ) : (
        <div className="page-input-group row justify-center">
          <button onClick={() => handlePage(1)}>&#62;</button>
          {/* <button onClick={() => console.log("last")}>Last</button> */}
        </div>
      )}
    </div>
  );
};

export default PageController;
