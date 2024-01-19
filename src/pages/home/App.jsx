import Header from "../../components/Header";
import Banner from "../../components/Banner";
import Gallery from "../../components/Gallery";

import "../../styles/style.css";
import Footer from "../../components/Footer";

function App() {
  return (
    <div className="app-container">
      <Header />
      <Banner />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
