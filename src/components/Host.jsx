import React from "react";

function Host({ photo, name }) {
  return (
    <div className="host">
      <img src={photo} alt="host_picture" className="host_picture" />
      <p className="host_name">{name}</p>
    </div>
  );
}
export default Host;
