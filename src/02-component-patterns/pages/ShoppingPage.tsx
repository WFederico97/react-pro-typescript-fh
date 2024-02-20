import ProductCard, { ProductButtons, ProductImage } from "../components";
import "../styles/custom-styles.css";
import { useShoppingCart } from '../hooks/useShoppingCart';
import { products } from "../data/products";

export const ShoppingPage = () => {

  const { shoppingCart, handleProductChange} = useShoppingCart(); //* We use the custom hook useShoppingCart to get the products and the shoppingCart
  
  return (
    <div>
      <h1>Shopping Store</h1>5
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
            value={shoppingCart[product.id]?.count || 0}  /* If the product is in the shoppingCart, then we use the count, otherwise we use 0 */
            onChange={(_) => handleProductChange(_)}
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
        {Object.entries(shoppingCart).map(([key, product]) => (
          <ProductCard
            key={key}
            product={product}
            className="bg-dark text-white"
            style={{ width: "100px" }}
            onChange={handleProductChange}
            value={product.count}
          >
            <ProductImage image={product.image} className="custom-image" />
            <ProductButtons
              style={{
                display: "flex",
                justifyContent: "center",
              }}
              className="custom-btns"
            />
          </ProductCard>
        ))}
      </div>
    </div>
  );
};
