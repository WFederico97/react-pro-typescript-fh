import ProductCard, {
  ProductButtons,
  ProductDescription,
  ProductImage,
  ProductTitle,
} from "../components";

import "../styles/custom-styles.css";

const product = {
  id: 1,
  title: "Coffee Mug",
  description: "Coffee Mug",
  price: 100,
  image: "./coffee-mug.png",
  stock: 10,
};

export const ShoppingPage = () => {
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
        <ProductCard product={product} className="bg-dark text-white">
          <ProductImage className="custom-image" />
          <ProductTitle className="text-white text-bold" />
          <ProductDescription />
          <ProductButtons className="custom-btns" />
        </ProductCard>

        <ProductCard product={product} className="bg-dark text-white">
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

        <ProductCard product={product} style={{ backgroundColor: "#70d1f8" }}>
          <ProductCard.Image image={product.image} />
          <ProductCard.Title title={product.title} />
          <ProductCard.Description description={product.description} />
          <ProductCard.Buttons
            className="custom-btns"
            style={{ display: "flex", justifyContent: "end" }}
          />
        </ProductCard>
      </div>
    </div>
  );
};
