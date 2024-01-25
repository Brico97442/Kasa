import React from "react";
import Header from "../components/Header";
import Carrousel from "../components/Carrousel";
import Collapse from "../components/Collapse";
import Footer from "../components/Footer";
import { useParams } from 'react-router-dom';
import logements from "../logements.json";

function Article () {
  let { id } = useParams();
  let logement = logements.find(logement => logement.id === id);
  return (
    <div className="app-container">
    <Header />
    <Carrousel pictures={logement.pictures} />
    <div className="collapse_container">
      <Collapse/>
      <Collapse/>
    </div>
    <Footer />
    </div>
  )
}
export default Article