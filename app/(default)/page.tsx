export const metadata = {
  title: "Home - Open PRO",
  description: "Page description",
};


import Hero from "@/components/hero-home";
import HomeNavigation from "@/components/home_navigation";
import ProductCatalog from "@/components/product_catalog";

export default function Home() {
  return (
    <>
      
      <Hero />
      <HomeNavigation />
      <ProductCatalog />
    </>
  );
}
