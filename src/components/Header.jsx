import { Link } from 'react-router-dom'
import logo from "../assets/logo-color.png";

function Header() {
  return (
    <header>
      <nav>
        <img src={logo} alt="logo kasa" className="logo-kasa" />
        <ul>
        <Link to="/">Accueil</Link>
        <Link to="../pages/a_propos">A Propos</Link>
        </ul>  
      </nav>
    </header>
  );
}

export default Header;
