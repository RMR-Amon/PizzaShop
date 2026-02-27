  import { Link } from "react-router";
  import { useProduct } from "../assets/Context/useProduct";

  const Basket = () => {
    const { products, changeAmount, handleSizeClick } = useProduct();

    const basketItems = products.filter((product) => product.amount > 0);
    return (
      <div className="basket">
        <div className="container">
          <div className="basket__top">
            <Link to="/" className="back__link">← Back to the home</Link>
            <h1 className="logo basket__logo">
              pizzashop
            </h1>

          </div>
          <div className="basket__bottom">
            {basketItems.map((product) => (
              <div key={product.id} className="basket__card">
                <div className="card__info">
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
                <div className="card__details">
                  <div className="card__amount--box">

                    <button
                      className="card__amount--btn"
                      onClick={() => changeAmount(product.id, "minus")}
                    >
                      -
                    </button>
                    <p className="card__amount">{product.amount}</p>
                    <button
                      className="card__amount--btn"
                      onClick={() => changeAmount(product.id, "plus")}
                    >
                      +
                    </button>
                  </div>
                  <div className="card__size--box">

                    {product.size.map((btn) => (
                      <button
                        key={btn.id}
                        className={`card__size--btn ${btn.active ? "active" : ""}`}
                        onClick={() => handleSizeClick(product.id, btn.id)}
                      >
                        {btn.size}
                      </button>
                    ))}
                  </div>

                </div>
                <div className="card__total">
                  <h3 className="card__total--title">Total Price</h3>
                  <p className="card__total--price">{(product.price * product.amount).toFixed(2)}<span className="card__total--priceSpan">$</span></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  export default Basket;
