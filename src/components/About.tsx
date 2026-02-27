import about__pizzas from "../assets/images/about__pizzas.png";
import about_main_pizza from "../assets/images/about__pizza.png";

const About = () => {
  return (
    <section className="about" id="aboutus">
      <div className="container">
        <div className="about__box">
          <div className="about__info--box">
            <h2 className="about__title title">About us</h2>
            <p className="about__text">
              In just a couple of years, we have opened 6 outlets in different
              cities: Kazan, Chelyabinsk, Ufa, Samara, Izhevsk, and in the
              future we plan to develop the network in other major cities of
              Russia.
            </p>
            <img
              src={about__pizzas}
              alt="five_pizzas"
              className="about__pizzas__image"
            />
            <p className="about__text">
              The kitchen of each point is at least: 400-500 sq. m. meters,
              hundreds of employees, smoothly performing work in order to
              receive / prepare / form / deliver customer orders on time.
            </p>
          </div>
          <img src={about_main_pizza} alt="about__main_pizza_image" className="about__main--pizza"/>
        </div>
      </div>
    </section>
  );
};

export default About;
