import { ProductContext } from "./ProductCard";
import { useContext } from "react";
import styles from "../styles/styles.module.css";

export interface Props {
  className?: string;
  title?: string;
  style?: React.CSSProperties;
}

export const ProductTitle = ({ title, className, style }: Props) => {
  const { product } = useContext(ProductContext);

  return (
    <h5
      className={className ? className : `${styles.productDescription}`}
      style={style}
    >
      {title ? title : product.title}
    </h5>
  );
};
