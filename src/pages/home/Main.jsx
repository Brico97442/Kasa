import Header from "../../components/Header";
import Banner from "../../components/Banner";
import Gallery from "../../components/Gallery";
import Footer from "../../components/Footer";
import "../../styles/style.css";


function Main() {
  return (
    <div className="app-container">
      <Header />
      <Banner />
      <Gallery />
      <Footer />
    </div>
  );
}

export default Main;
