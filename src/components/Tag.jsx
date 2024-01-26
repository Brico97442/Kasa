import React from "react";

function Tags({ tags }) {
  return (
    <div>
      <ul  className="tags">
        {tags.map((tag, index) => (
          <li key={index} className="tag">{tag}</li>
        ))}
      </ul>
    </div>
  );
}

export default Tags;
