import { useState } from "react";
import info__img from "../assets/images/intro--info__img.png";
import fastest__arrow from "../assets/images/intro__fastest_arrow.png";
import intro__img from "../assets/images/Intro_pizza_img.png";
import info__play from "../assets/images/info__play.png";
import intro__arrow__toMenu from "../assets/images/intro__arrow--toMenu.png";

const Intro = () => {
    const [active, setActive] = useState(false)
    return (
        <div className="intro">
            <div className="intro__box">
                <div className="intro__box--info">
                    <h1 className="intro__title">
                        The Fastest <img src={fastest__arrow} alt="" /> Pizza⚡Delivery
                    </h1>
                    <p className="intro__text">We will deliver juicy pizza
                        for your family in 30 minutes,
                        if the courier is late
                        <span>- pizza is free!</span>
                    </p>
                    <div className="info__box">
                        <h3 className="info__title">
                            Cooking process:
                        </h3>
                        <div className="info__box--images">
                            <img src={info__img} alt="Cooking process image" />
                            <img src={info__play} alt="" className="info__play" />
                        </div>
                    </div>
                    <div className="info__btns">
                        <button
                            className={`info__btn--order ${active ? "" : "active"}`}
                            onClick={() => setActive(false)}
                        >
                            To order
                        </button>
                        <button
                            className={`info__btn--menu ${active ? "active" : ""}`}
                            onClick={() => setActive(true)}
                        >
                            Pizza-Menu
                        </button>
                        <img src={intro__arrow__toMenu} alt="" className="intro__arrow__toMenu"/>
                    </div>
                </div>
                    <img src={intro__img} alt="introduction__image" className="intro__img1" />
            </div>
        </div>
    )
}

export default Intro