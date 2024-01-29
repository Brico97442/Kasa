import React from "react";

function Banner({ imgsrc, title }) {
  return (
    <div className="banner">
      <img src={imgsrc} alt="img-banner " className="img-banner" />
      <h1>{title}</h1>
    </div>
  );
}
export default Banner;
