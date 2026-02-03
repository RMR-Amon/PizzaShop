import { Link } from "react-router";

import burito from "../assets/images/buritto.png";
import coffee from "../assets/images/cofee.png";
import eggAndBacon from "../assets/images/egg and bacon.png";
const Events = () => {
  return (
    <section className="events" id="Events">
      <div className="container">
        <div className="events__box">
          <div className="events__card card">
            <h3 className="card__title">HOW WE COOKING</h3>
            <Link to="/" className="card__link">
              More
            </Link>
          </div>
          <div className="events__card card">
            <h3 className="card__title">OUR BLOG</h3>
            <Link to="/" className="card__link">
              More
            </Link>
          </div>
          <div className="events__info">
            <h2 className="events__title title">Events</h2>
            <p className="events__text">
              There are regular events in our pizzeria that will allow you to
              eat delicious food for a lower price!
            </p>
          </div>
          <div className="events__card card">
            <h3 className="card__title">TWO PIZZA FOR 1 PRICE</h3>
            <Link to="/" className="card__link">
              More
            </Link>
          </div>
          <div className="events__card card">
            <h3 className="card__title">KITCHEN TOUR</h3>
            <Link to="/" className="card__link">
              More
            </Link>
          </div>
          <div className="events__card card">
            <h3 className="card__title">FREE COFFEE FOR 3 PIZZA</h3>
            <Link to="/" className="card__link">
              More
            </Link>
          </div>
          <div className="events__card card">
            <h3 className="card__title">OUR INSTAGRAM</h3>
            <Link to="/" className="card__link">
              More
            </Link>
          </div>
          <div className="events__card card">
            <h3 className="card__title">WHERE ARE YOU CHOOSE US?</h3>
            <Link to="/" className="card__link">
              More
            </Link>
          </div>
          <img src={burito} alt="burito__image" className="events__burito"/>
          <img src={coffee} alt="coffee__image" className="events__coffee"/>
          <img src={eggAndBacon} alt="egg_and_bacon_image" className="events__eggandbacon"/>
        </div>
      </div>
    </section>
  );
};

export default Events;
