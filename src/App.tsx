import { ProductItem } from "./components/ProductItem";

function App() {
  return (
    <div style={{ padding: "16px", maxWidth: "600px", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center", fontSize: "20px" }}>
        Сравнение товаров по цене за килограмм
      </h1> 
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
    </div>
  );
}

export default App;
