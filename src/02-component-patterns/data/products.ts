import { Product } from "../interfaces/interfaces";

const product1 = {
    id: 1,
    title: "Coffee Mug",
    description: "Coffee Mug",
    price: 100,
    image: "./coffee-mug.png",
    stock: 10,
  };
  const product2 = {
    id: 2,
    title: "Coffee Mug 2",
    description: "Coffee Mug 2",
    price: 100,
    image: "./coffee-mug2.png",
    stock: 10,
  };
  
  export const products: Product[] = [product1, product2]; //* We export the products array