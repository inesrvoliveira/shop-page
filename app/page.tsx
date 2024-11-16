import Image from "next/image";
import ProductCardGrid from "./components/Product/ProductCardsGrid";
import Navbar from "./components/NavBar/NavBar"; 

export default function Home() {
  return (
    <main>
      <Navbar />
      <ProductCardGrid />
    </main>
  );
}
