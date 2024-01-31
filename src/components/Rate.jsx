import React from "react";

import starEmpty from "../assets/star_empty.png";
import starFull from "../assets/star_full.png";

export default function Rate({ rating }) {
  const totalStars = 5;
  const filledStars = parseInt(rating);
  const stars = new Array(totalStars).fill(0).map((star, i) => {
    if (i < filledStars) {
      return <img key={i} src={starFull} alt="starFull" />;
    }

    return <img key={i} src={starEmpty} alt="starEmpty" />;
  });
  

  return <ul className="rate">{stars}</ul>;
}
