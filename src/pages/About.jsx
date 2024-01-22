import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import imgaboutbanner from "../assets/img-banner2.jpg"

function About () {
  return (
    <div className="app-container">
    <Header />
    <Banner imgsrc={imgaboutbanner}/>
    <Footer />
    </div>
  )
}
export default About