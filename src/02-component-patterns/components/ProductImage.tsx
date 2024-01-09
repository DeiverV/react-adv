import styles from "../styles/styles.module.css";

import { useContext } from "react";
import { ProductsContext } from "./ProductCard";
import noImage from "../assets/no-image.jpg";

export const ProductImage = ({ img = "" }) => {
  const { product } = useContext(ProductsContext);
  let imgToShow: string = img ? img : product.img ? product.img : noImage;

  return <img className={styles.productImg} src={imgToShow} alt="Product" />;
};
