import { useState } from "react";
import { Product, ProductInCart } from "../interfaces/interfaces";

//* We create a custom hook to manage the shoppingCart
export const useShoppingCart = () => {

    const [shoppingCart, setShoppingCart] = useState<{[key: string]: ProductInCart}>({});

    const handleProductChange = ({ count, product}: {count: number; product: Product;}) => {
      setShoppingCart((prevState) => {
  
        const productInCart: ProductInCart = prevState[product.id] || { ...product, count: 0 }; //* If the product is not in the shoppingCart, then we create a new product with count 0
  
        if(Math.max(productInCart.count + count, 0) > 0 ) { //* If the productInCart.count + count is greater than 0, then we add the count to the productInCart.count
          productInCart.count += count;
          return{
            ...prevState,
            [product.id]: productInCart
          }
        }
        const { [product.id]: _, ...rest } = prevState; //* rest is the new object without the product, _ is the product that was removed
        return rest;
  
      });
    };

    return {
        shoppingCart,
        handleProductChange
    }
}