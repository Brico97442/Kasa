import React from "react";

import Header from "../components/Header";
import Carrousel from "../components/Carrousel";
import Collapse from "../components/Collapse";
import Footer from "../components/Footer";
import { Navigate, useParams } from "react-router-dom";
import logements from "../logements.json";
import ApartmentTitle from "../components/ApartmentTitle";
import ApartmentLocation from "../components/ApartmentLocation";
import Tags from "../components/Tag";
import Host from "../components/Host";
import Rate from "../components/Rate";

function Apartment() {
  const { id } = useParams();
  const logement = logements.find((logement) => logement.id === id);
  if (!logement) {
    return <Navigate to="*" />;
  }
  return (
    <div className="app-container">
      <div className="app-container-apartment">
        <Header />
        <Carrousel pictures={logement.pictures} />
        <div className="app-container-description">
          <div className="logement">
            <ApartmentTitle title={logement.title} />
            <ApartmentLocation location={logement.location} />
            <Tags tags={logement.tags} />
          </div>
          <div className="host-container">
            <Host photo={logement.host.picture} name={logement.host.name} />
            <Rate rating={logement.rating} />
          </div>
        </div>
        <div className="collapse_container">
          <Collapse
            collapseContent={logement.description}
            collapseTitle="Description"
          />
          <Collapse
            collapseContent={logement.equipments}
            collapseTitle="Équipements"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Apartment;
