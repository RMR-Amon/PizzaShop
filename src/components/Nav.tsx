import basket from "../assets/images/basket.svg";

const Nav = () => {
    return (
        <nav className="nav" id="home">
            <div className="nav__box">
                <a href="/" className="nav__logo">pizzashop</a>
                <ul className="nav__list">
                    <li><a href="/" className="nav__link">Home </a></li>
                    <li><a href="#menu" className="nav__link">Menu </a></li>
                    <li><a href="#!" className="nav__link">Events </a></li>
                    <li><a href="#!" className="nav__link">About us </a></li>
                </ul>
                <div className="nav__btns">
                    <button className="nav__login--btn"><a href="/login">Log in</a></button>
                    <button className="nav__basket--btn"><img src={basket} alt="" /></button>
                </div>
            </div>
        </nav>
    )
}

export default Nav