import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Carrousel from "../components/Carrousel";


function Article () {
  return (
    <div className="app-container">
    <Header />
    <Carrousel/>
    <Footer />
    </div>
  )
}
export default Article