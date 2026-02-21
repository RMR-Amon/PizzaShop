import { Fragment, useState } from "react";
import { menu_buttons } from "../assets/store/menu__btns";
import { useProduct } from "../assets/Context/useProduct";

const Menu = () => {
  const [activeBtn, setActiveBtn] = useState<number>(menu_buttons[0].id);
  const { products, changeAmount, handleSizeClick } = useProduct();
  return (
    <section className="menu" id="menu">
      <div className="container">
        <div className="menu__box">
          <h2 className="menu__title title">Menu</h2>

          <div className="menu__filter--box">
            {menu_buttons.map((btn) => (
              <button
                key={btn.id}
                className={`menu__btn ${activeBtn === btn.id ? "active" : ""}`}
                onClick={() => setActiveBtn(btn.id)}
              >
                {btn.name}
              </button>
            ))}
          </div>

          <div className="menu__products--box">
            {products.map((product, index) => (
              <Fragment key={product.id}>
                <div className="menu__product product">
                  <img
                    src={product.img}
                    alt="pizza_image"
                    className="product__img"
                  />

                  <h3 className="product__title">{product.title}</h3>
                  <p className="product__text">{product.text}</p>

                  <div className="product__btns">
                    {product.size.map((btn) => (
                      <button
                        key={btn.id}
                        className={`product__btn ${btn.active ? "active" : ""}`}
                        onClick={() => handleSizeClick(product.id, btn.id)}
                      >
                        {btn.size}
                      </button>
                    ))}
                  </div>

                  <button className="product_addIngridient--btn">
                    <span>+</span> Ingridients
                  </button>

                  <div className="product__purchase">
                    <p className="product__price">
                      {product.amount > 0
                        ? (product.price * product.amount).toFixed(2)
                        : product.price}
                      <span>$</span>
                    </p>

                    <div className="product__amount--box">
                      <button
                        className="amount__btn--minus"
                        onClick={() => changeAmount(product.id, "minus")}
                      >
                        -
                      </button>
                      <p className="product__amount">{product.amount}</p>
                      <button
                        className="amount__btn--plus"
                        onClick={() => changeAmount(product.id, "plus")}
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <button className="product__order--btn">Order Now</button>
                </div>

                {index === 3 && (
                  <h3 className="menu__popular--title">MOST POPULAR PIZZA</h3>
                )}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
