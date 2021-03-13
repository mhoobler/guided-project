import React from "react";

import "./PageController.css";

type PageControllerProps = {
  handlePage: (evt: React.MouseEvent) => void;
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

  //Return empty element if page is First and Last
  if(isFirst && isLast) {
    return <div></div>
  }

  return (
    <div className="page-controller-container row">
      {isFirst ? (
        <div className="page-input-group row justify-center">&nbsp;</div>
      ) : (
        <div className="page-input-group row justify-center">
          <button data-value={"FIRST"} onClick={handlePage}>First</button>
          <button data-value={-1} onClick={handlePage}>&#60;</button>
        </div>
      )}
      <div className="page-input-group">{page + 1}</div>
      {isLast ? (
        <div className="page-input-group row justify-center">&nbsp;</div>
      ) : (
        <div className="page-input-group row justify-center">
          <button data-value={1} onClick={handlePage}>&#62;</button>
          <button data-value={"LAST"} onClick={handlePage}>Last</button>
        </div>
      )}
    </div>
  );
};

export default PageController;
