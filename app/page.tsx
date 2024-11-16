import Image from "next/image";
import ProductCardGrid from "./components/Product/ProductCardsGrid";
import Navbar from "./components/NavBar/NavBar"; 
import { BasketProvider } from "./components/Basket/BasketContext";

export default function Home() {
  return (
    <main>
      <BasketProvider>
        <Navbar />
        <ProductCardGrid />
      </BasketProvider>
    </main>
  );
}
