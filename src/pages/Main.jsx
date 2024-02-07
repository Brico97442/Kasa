import React from "react";

import Header from "../components/Header";
import Banner from "../components/Banner";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";
import "../styles/style.css";
import imghomebanner from "../assets/img-banner.png";

function Main() {
  return (
    <div className="app-container">
      <div className="app-container-main">
        <Header />
        <Banner imgsrc={imghomebanner} title="Chez vous, partout et ailleurs" />
        <Gallery />
      </div>
      <Footer />
    </div>
  );
}

export default Main;
