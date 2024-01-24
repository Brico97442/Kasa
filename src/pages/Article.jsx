import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Carrousel from "../components/Carrousel";
import Collapse from "../components/Collapse";


function Article () {
  return (
    <div className="app-container">
    <Header />
    <Carrousel/>
    <div className="collapse_container">
      <Collapse/>
      <Collapse/>
    </div>
    <Footer />
    </div>
  )
}
export default Article