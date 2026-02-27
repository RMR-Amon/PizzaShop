import { createContext } from "react";
import type { IMenu_products } from "../store/products";

export interface ProductContextType {
  products: IMenu_products[];
  changeAmount: (productId: number, type: "plus" | "minus") => void;
  handleSizeClick: (productId: number, sizeId: number) => void;
}

export const ProductContext = createContext<ProductContextType | null>(null);
