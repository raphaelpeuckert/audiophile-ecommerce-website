import { Link } from "react-router-dom";
import iconCart from "../assets/shared/desktop/icon-cart.svg";
import logo from "../assets/shared/desktop/logo.svg";
import '../styles/Header.css'

export default function Header() {
  return (
    <header>
      <Link to="/" className="header-logo">
        <img src={logo} alt="audiophile" />
      </Link>
      <nav className="nav">
        <ul className="nav__list">
            <li className="nav__item">
                <Link className="nav__link" to="/">HOME</Link>
            </li>
            <li className="nav__item">
                <Link className="nav__link" to="/headphones">HEADPHONES</Link>
            </li>
            <li className="nav__item">
                <Link className="nav__link" to="/speakers">SPEAKERS</Link>
            </li>
            <li className="nav__item">
                <Link className="nav__link" to="/earphones">EARPHONES</Link>
            </li>
        </ul>
      </nav>
      <button id="cart-btn">
        <img src={iconCart} alt="cart" />
      </button>
    </header>
  );
}
