import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="app-container">
      <Header />
      <div className="not_found">
        <h1>404</h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <Link className="not_found_link" to="/">
          Retourner sur la page d'accueil
        </Link>
      </div>
      <Footer />
    </div>
  );
}
