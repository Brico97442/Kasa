import { Link } from 'react-router-dom'

function Cart({image, title}) {
  return (
    <div className="cart">
       <Link className='route_cart' to="/pages/">
      <img src={image} alt="logo kasa" className="logo-kasa"/>
      <p>{title}</p>
      </Link>
    </div>
  );
}
export default Cart;