import { useState } from "react";
import ProductCard, { ProductButtons, ProductImage } from "../components";
import { Product } from '../interfaces/interfaces';

import "../styles/custom-styles.css";

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

const products: Product[] = [product1, product2];

interface ProductInCart extends Product {
  count: number;
}

export const ShoppingPage = () => {
  const [shoppingCart, setShoppingCart] = useState<{ [key:string]: ProductInCart }>({})

  const handleProductChange = ({counter, product}: {counter: number, product: Product}) => {

    setShoppingCart((prevState) => {
      if (counter === 0) {
        const {[product.id]: _, ...rest} = prevState //* rest is the new object without the product, _ is the product that was removed
                                                      //* [product.id] is the key that we want to remove from prevState
        return rest
      }
      return {
        ...prevState,
        [product.id]: {...product, counter},
      }
    })

  }
  
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            className="bg-dark text-white"
            onChange={(_) => handleProductChange(_) }

          >
            <ProductCard.Image image={product.image} className="custom-image" />
            <ProductCard.Title
              title={product.title}
              className="text-white text-bold"
            />
            <ProductCard.Description
              description={product.description}
              className="text-white"
            />
            <ProductCard.Buttons className="custom-btns" />
          </ProductCard>
        ))}
      </div>
      <div className="shopping-cart">
        <ProductCard
          product={product1}
          className="bg-dark text-white"
          style={{ width: "100px" }}
        >
          <ProductImage image={product1.image} className="custom-image" />
          <ProductButtons className="custom-btns" />
        </ProductCard>
      </div>
      <div>
        <code>
          {JSON.stringify(shoppingCart, null, 5)} 
          
        </code>
      </div>
    </div>
  );
};
