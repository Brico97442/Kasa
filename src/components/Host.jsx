import React from "react";

function Host({ photo, name }) {
  return (
    <div className="host">
      <img src={photo} alt="host_picture" className="host_picture" />
      <div className="host_name">
        <p>{name}</p>
      </div>
    </div>
  );
}
export default Host;
