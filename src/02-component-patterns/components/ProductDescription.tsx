import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from "../styles/styles.module.css";

export interface Props {
  description?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const ProductDescription = ({
  description,
  className,
  style,
}: Props) => {
  const { product } = useContext(ProductContext);

  return (
    <span
      className={className ? className : styles.productDescription}
      style={style}
    >
      {description ? description : product.title}
    </span>
  );
};
