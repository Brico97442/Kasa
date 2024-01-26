import React from "react";
import Header from "../components/Header";
import Carrousel from "../components/Carrousel";
import Collapse from "../components/Collapse";
import Footer from "../components/Footer";
import { useParams } from 'react-router-dom';
import logements from "../logements.json";
import ArticleTitle from "../components/ArticleTitle";
import ArticleLocation from "../components/ArticleLocation"
import Tags from "../components/Tag";

function Article () {
  
  const { id } = useParams();
  const logement = logements.find(logement => logement.id === id);

  return (
    <div className="app-container">
    <Header />
    <Carrousel pictures={logement.pictures} />
    <div className="flex-between">
    <div >
      <ArticleTitle title={logement.title}/>
      <ArticleLocation location={logement.location}/>
      <Tags tags={logement.tags} />
    </div>
    <div >
     
    </div>
    </div>
    <div className="collapse_container">
      <Collapse/>
      <Collapse/>
    </div>
    <Footer />
    </div>
  )
}
export default Article