import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Collapse from "../components/Collapse";
import imgaboutbanner from "../assets/img-banner2.jpg"

function About () {
  return (
    <div className="app-container">
    <Header />
    <Banner imgsrc={imgaboutbanner}/>
    <Collapse/>
    <Collapse/>
    <Collapse/>
    <Collapse/>
    <Footer />
    </div>
  )
}
export default About