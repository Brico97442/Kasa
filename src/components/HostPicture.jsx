import React from "react";

function HostPicture({ photo }) {
  return (
    <div className="host_profile">
      <img src={photo} alt="host_picture" className="host_picture" />
    </div>
  );
}
export default HostPicture;
