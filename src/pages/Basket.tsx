import { Link } from "react-router";
import { useProduct } from "../assets/Context/useProduct";

const Basket = () => {
  const { products, changeAmount, handleSizeClick } = useProduct();

  const basketItems = products.filter((product) => product.amount > 0);
  return (
    <div className="basket">
      <div className="container">
        <div className="basket__top">
          <Link to="/" className="logo">
            pizzashop
          </Link>

        </div>
        <div className="basket__bottom">
          {basketItems.map((product) => (
            <div key={product.id} className="basket__card">
              <div className="card__left">
                <img
                  src={product.img}
                  alt="basket__product--images"
                  className="card__img"
                />
                <div className="card__box">
                  <h3 className="card__title">{product.title}</h3>
                  <p className="card__desc">{product.text}</p>
                  <p className="card__price">{product.price}</p>
                </div>
              </div>
              <div className="card__right">
                <button
                  className="card__btn"
                  onClick={() => changeAmount(product.id, "minus")}
                >
                  -
                </button>
                <p className="card__amount">{product.amount}</p>
                <button
                  className="card__btn"
                  onClick={() => changeAmount(product.id, "plus")}
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Basket;
