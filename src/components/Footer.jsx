import logo from "../assets/logo-white.png";

function Footer() {
  return (
    <footer>
        <img src={logo} alt="logo kasa" className="logo-kasa" />
        <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;