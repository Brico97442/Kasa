
import imgBanner from "../assets/img-banner.png";

function Banner(image) {
  return (
    <div className="banner">
      <img src={imgBanner} alt="img-banner " className="img-banner" />
      <h1>Chez vous,partout et ailleurs</h1>
    </div>
  );
}
export default Banner;
