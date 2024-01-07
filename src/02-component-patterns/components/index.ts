import { ProductCard as ProductCardHOC } from "./ProductCard";

import { ProductImage } from ".";
import { ProductDescription } from ".";
import { ProductButtons } from ".";
import { ProductTitle } from ".";
import { ProductCardHOCProps } from "../interfaces/interfaces";

export { ProductButtons } from "./ProductButtons";
export { ProductDescription } from "./ProductDescription";
export { ProductImage } from "./ProductImage";
export { ProductTitle } from "./ProductTitle";

export const ProductCard: ProductCardHOCProps = Object.assign(ProductCardHOC, {
  Title: ProductTitle,
  Description: ProductDescription,
  Image: ProductImage,
  Buttons: ProductButtons,
});

export default ProductCard;
