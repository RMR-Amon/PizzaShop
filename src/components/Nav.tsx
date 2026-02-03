import { Link } from "react-router";
import basket from "../assets/images/basket.svg";

const Nav = () => {
  return (
    <nav className="nav" id="home">
      <div className="container">
        <div className="nav__box">
          <a href="#home" className="logo">
            pizzashop
          </a>
          <ul className="nav__list">
            <li>
              <a href="#home" className="nav__link">
                Home{" "}
              </a>
            </li>
            <li>
              <a href="#menu" className="nav__link">
                Menu{" "}
              </a>
            </li>
            <li>
              <a href="#Events" className="nav__link">
                Events{" "}
              </a>
            </li>
            <li>
              <a href="#AboutUs" className="nav__link">
                About us{" "}
              </a>
            </li>
          </ul>
          <div className="nav__pages">
            <Link to="/" aria-label="login_button" className="nav__login--btn">
              Log in
            </Link>
            <Link
              to="/"
              aria-label="basket_button"
              className="nav__basket--btn"
            >
              <img src={basket} alt="" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
