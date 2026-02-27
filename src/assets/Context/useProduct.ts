import { useContext } from "react";
import { ProductContext } from "./ProducContext";

export const useProduct = () => {
  const context = useContext(ProductContext);

  if (!context) {
    throw new Error("useProduct must be used inside ProductProvider");
  }

  return context;
};
