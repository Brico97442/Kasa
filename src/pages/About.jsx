import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Collapse from "../components/Collapse";
import imgaboutbanner from "../assets/img-banner2.jpg";

function About() {
  return (
    <div className="app-container">
      <div className="app-container-about">
        <Header />
        <Banner imgsrc={imgaboutbanner} />
        <div className="app-container-about-collapse">
          <Collapse
            collapseTitle="Fiabilité"
            collapseContent="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
          />
          <Collapse
            collapseTitle="Respect"
            collapseContent="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
          />
          <Collapse
            collapseTitle="Service"
            collapseContent="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
          />
          <Collapse
            collapseTitle="Sécurité"
            collapseContent="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité "
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default About;
