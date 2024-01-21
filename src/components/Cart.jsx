function Cart({image, title}) {
  return (
    <div className="cart">
      <img src={image} alt="logo kasa" className="logo-kasa"/>
      <p>{title}</p>
    </div>
  );
}
export default Cart;