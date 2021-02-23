import React from "react";

import Full from "../../resources/star_full.svg";
import Half from "../../resources/star-half.svg";
import Empty from "../../resources/star-empty.svg";

type Props = {
  rating: number;
};

const Ratings: React.FC<Props> = (P) => {
  const getStars = () => {
    let stars: string[] = [];

    if (P.rating % 1 === 0) {
      for (let i = 0; i < 5; i++) {
        i < P.rating ? stars.push(Full) : stars.push(Empty);
      }
    } else {
      let floor = Math.floor(P.rating);
      for (let i = 0; i < 5; i++) {
        i < floor
          ? stars.push(Full)
          : i === floor
          ? stars.push(Half)
          : stars.push(Empty);
      }
    }

    return stars;
  };

  return (
    <div className="item-rating">
      {getStars().map((e: string, i: number) => {
        return (
          <div key={i} className="svg-container">
            <img src={e} alt="" />
          </div>
        );
      })}
    </div>
  );
};

export default Ratings;
