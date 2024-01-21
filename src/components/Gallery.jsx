import Cart from "./Cart";
import logements from "../logements.json"

function Gallery() {
  return (
    <div className="gallery-container">
      {logements.map (logement => {
        return (<Cart key={logement.id} image={logement.cover}/>)
      }) }
  
    </div>
  );
}
export default Gallery;
