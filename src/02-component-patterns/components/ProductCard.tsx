import { useProduct } from "../hooks";

import styles from "../styles/styles.module.css";
import { createContext } from "react";
import {
  ProductContextProps,
  ProductCardProps,
} from "../interfaces/interfaces";

export const ProductsContext = createContext({} as ProductContextProps);
const { Provider } = ProductsContext;

export const ProductCard = ({
  product,
  children,
  className,
}: ProductCardProps) => {
  const { counter, increaseBy } = useProduct();

  return (
    <Provider value={{ counter, increaseBy, product }}>
      <div className={`${styles.productCard} ${className}`}>{children}</div>
    </Provider>
  );
};
