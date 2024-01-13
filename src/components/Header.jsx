import logo from "../assets/logo.png";

function Header() {
  return (
    <header>
      <nav>
        <img src={logo} alt="logo kasa" className="logo-kasa" />
        <ul>
          <li>Accueil</li>
          <li>A Propos</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
