import React from "react";
import { Link } from 'react-router-dom'
// import { useParams } from 'react-router-dom';
function Cart({logement, image, title}) {
  // const params = useParams()
  // console.log(params)
  return (
    <div className="cart">
       <Link className='route_cart' to={`/pages/Article/${logement.id}`}>
      <img src={image} alt="cart_img" className="cart_img"/>
      <p>{title}</p>
      </Link>
    </div>
  );
}
export default Cart;