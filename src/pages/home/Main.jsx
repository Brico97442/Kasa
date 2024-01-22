import React from 'react';
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import Gallery from "../../components/Gallery";
import Footer from "../../components/Footer";
import "../../styles/style.css";
import imghomebanner from "../../assets/img-banner.png"

function Main() {
  return (
    <div className="app-container">
      <Header />
      <Banner imgsrc={imghomebanner} title="Chez vous, partout et ailleurs"/>
      <Gallery />
      <Footer />
    </div>
  );
}

export default Main;
