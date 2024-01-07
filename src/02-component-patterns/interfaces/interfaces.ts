import { ReactElement } from "react";

export interface ProductCardProps {
  product: Product;
  children?: ReactElement | ReactElement[]; //?El children es opcional
}

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image?: string;
  stock: number;
}

export interface ProductContextProps {
  counter: number;
  increaseBy: (value: number) => void;
  product: Product;
}

export interface ProductCardHOCProps {
    ({ children, product }: ProductCardProps) : JSX.Element,
    Title: ({ title }: {
        title?: string ;
    }) => JSX.Element;
    Description: ({ description }: {
        description?: string | undefined;
    }) => JSX.Element;
    Image: ({ image }: {
        image?: string | undefined;
    }) => JSX.Element;
    Buttons: () => JSX.Element

}