import ProductCard, { ProductButtons,  ProductDescription, ProductImage, ProductTitle } from "../components";



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
        <ProductCard product={product}>
          <ProductImage />
          <ProductTitle />
          <ProductDescription />
          <ProductButtons />
        </ProductCard>

        <ProductCard product={product}>
          <ProductCard.Image image={product.image} />
          <ProductCard.Title title={product.title} />
          <ProductCard.Description description={product.description} />
          <ProductCard.Buttons />
        </ProductCard>

      </div>
    </div>
  );
};
