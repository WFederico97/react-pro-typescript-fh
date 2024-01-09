import { useContext } from "react";
import noImage from "../assets/no-image.jpg";
import styles from "../styles/styles.module.css";
import { ProductContext } from "./ProductCard";

export interface Props {
  image?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const ProductImage = ({ image, className, style }: Props) => {
  const { product } = useContext(ProductContext);
  let imgToShow: string;
  if (image) {
    imgToShow = image;
  } else if (product.image) {
    imgToShow = product.image;
  } else {
    imgToShow = noImage;
  }

  return (
    <img
      className={`${styles.productImg} ${className}`}
      style={style}
      src={imgToShow}
      alt="Product"
    /> //*En un ternario , un string vacio es false
  );
};
