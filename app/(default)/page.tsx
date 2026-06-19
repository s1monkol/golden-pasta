export const metadata = {
  title: "Home - Open PRO",
  description: "Page description",
};


import Hero from "@/components/hero-home";
import ProductCatalog from "@/components/product_catalog";

export default function Home() {
  return (
    <>
      
      <Hero />
      <ProductCatalog />
    </>
  );
}
