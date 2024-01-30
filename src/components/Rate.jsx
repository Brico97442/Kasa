import React from "react";

import starEmpty from "../assets/star_empty.png";
import starFull from "../assets/star_full.png";

export default function Rate({ rating }) {
  const totalStars = 5;
  const fullStars = parseInt(rating);

  const stars = [];

  for (let i = 0; i < totalStars; i++) {
    if (i < fullStars) {
      stars.push(<img key={i} src={starFull} alt="star" />);
    } else {
      stars.push(<img key={i} src={starEmpty} alt="star" />);
    }
  }

  return <ul className="rate">{stars}</ul>;
}
