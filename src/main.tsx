import { createRoot } from "react-dom/client";
import "./assets/sass/main.scss";
import App from "./App.tsx";
import { ProductProvider } from "./assets/Context/ProductsContext.tsx";

createRoot(document.getElementById("root")!).render(
  <ProductProvider>
    <App />
  </ProductProvider>,
);
