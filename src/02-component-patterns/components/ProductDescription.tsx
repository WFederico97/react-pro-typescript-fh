import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from "../styles/styles.module.css";

export const ProductDescription = ({ description = "" }: { description?: string }) => {
    const {product} = useContext(ProductContext)

  return <span className={styles.productDescription}>{description ? description : product.title}</span>;
};