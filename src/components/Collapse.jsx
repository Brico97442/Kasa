import React, { useState } from "react";
import chevron from "../assets/chevron.png";

function Collapse({ collapseContent, collapseTitle }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`collapse ${isOpen ? "isOpen" : ""}`}>
      <div className="collapse_header">
        <p className="collapse_title">{collapseTitle}</p>

        <button
          className={`collapse_header_button ${isOpen ? "isOpen" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <img
            src={chevron}
            alt="chevron-img"
            className={`collapse_header_button_img ${isOpen ? "isOpen" : ""}`}
          />
        </button>
      </div>
      <div className={`collapse_content ${isOpen ? "isOpen" : ""}`}>
        {/* Si collapse title est égale a "Equipements" affiche moi le contenu sous forme de liste  */}
        {collapseTitle === "Équipements" && (
          <ul>
            {collapseContent.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
        )}
        {/* Si collapse title est différend de "Equipements" affiche moi collapse content */}
        {collapseTitle !== "Équipements" && <p>{collapseContent}</p>}
      </div>
    </div>
  );
}

export default Collapse;
