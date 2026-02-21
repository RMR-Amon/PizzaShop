import { type ReactNode, useState } from "react";
import { menu_products, type IMenu_products } from "../store/products.ts";
import { ProductContext } from "./ProducContext.ts";

export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<IMenu_products[]>(menu_products);

  const handleSizeClick = (productId: number, sizeId: number) => {
    setProducts((prev) =>
      prev.map((product) =>
        product.id === productId
          ? {
              ...product,
              size: product.size.map((s) => ({
                ...s,
                active: s.id === sizeId,
              })),
            }
          : product,
      ),
    );
  };

  const changeAmount = (productId: number, type: "plus" | "minus") => {
    setProducts((prev) =>
      prev.map((product) =>
        product.id === productId
          ? {
              ...product,
              amount:
                type === "plus"
                  ? product.amount + 1
                  : Math.max(0, product.amount - 1),
            }
          : product,
      ),
    );
  };

  return (
    <ProductContext.Provider
      value={{ products, changeAmount, handleSizeClick }}
    >
      {children}
    </ProductContext.Provider>
  );
};
