import instagram from "../assets/images/footer_instagram.svg";
import twitter from "../assets/images/footer_twitter.svg";
import facebook from "../assets/images/footer_facebook.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__box">
          <div className="footer__box--top">
            <a href="#home" className="logo">
              pizzashop
            </a>
            <ul className="footer__list">
              <h3 className="footer__title">Home</h3>
              <li>
                <a href="#menu" className="footer__link">
                  To Order
                </a>
              </li>
              <li>
                <a href="#aboutus" className="footer__link">
                  About us
                </a>
              </li>
              <li>
                <a href="#events" className="footer__link">
                  Events
                </a>
              </li>
              <li>
                <a href="#menu" className="footer__link">
                  Menu
                </a>
              </li>
            </ul>
            <ul className="footer__list">
              <h3 className="footer__title">Events</h3>
              <li>
                <a href="#events" className="footer__link">
                  3 Pizza 1 Free Coffee
                </a>
              </li>
              <li>
                <a href="#events" className="footer__link">
                  2 Pizza for 1 Price
                </a>
              </li>
              <li>
                <a href="#events" className="footer__link">
                  Kitchen Tour
                </a>
              </li>
            </ul>
            <ul className="footer__list">
              <h3 className="footer__title">Menu</h3>
              <li>
                <a href="#menu" className="footer__link">
                  Show All
                </a>
              </li>
              <li>
                <a href="#menu" className="footer__link">
                  Seaproducts
                </a>
              </li>
              <li>
                <a href="#menu" className="footer__link">
                  Vegan
                </a>
              </li>
              <li>
                <a href="#menu" className="footer__link">
                  Meat
                </a>
              </li>
            </ul>
            <ul className="footer__list">
              <h3 className="footer__title">About Us</h3>
              <li>
                <a href="#aboutus" className="footer__link">
                  Our History
                </a>
              </li>
              <li>
                <a href="#aboutus" className="footer__link">
                  Why We?
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__box--bottom">
            <a href="tel:+7 (937) 333-55-33" className="footer__phone">
              <span>+</span>7 <span>(</span>937<span>)</span> 333-55-33
            </a>
            <div className="foooter__bottom--images">
              <img src={instagram} alt="instagram" />
              <img src={twitter} alt="twitter" />
              <img src={facebook} alt="facebook" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
