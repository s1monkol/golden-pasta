export const metadata = {
  title: "Home - Open PRO",
  description: "Page description",
};


import Hero from "@/components/hero-home";
import Penne from "@/components/products/penne";
import Fusilli from "@/components/products/fusilli";
import Spaghetti from "@/components/products/spaghetti";
import Conchiglie from "@/components/products/conchiglie";
import Vermicelli from "@/components/products/vermicelli";

export default function Home() {
  return (
    <>
      
      <Hero />
      <Spaghetti />
      <Conchiglie />
      <Vermicelli />
      <Penne />
      <Fusilli />

    </>
  );
}
