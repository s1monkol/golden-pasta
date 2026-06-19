import Link from "next/link";
import Spaghetti from "@/components/products/spaghetti";
import Conchiglie from "@/components/products/conchiglie";
import Vermicelli from "@/components/products/vermicelli";
import Penne from "@/components/products/penne";
import Fusilli from "@/components/products/fusilli";
import Footer from "@/components/ui/footer";

export default function RecipesPage() {
  return (
    <>
      <section className="bg-[#FFF3D1] px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/"
            className="group mb-10 inline-flex items-center gap-3 rounded-full bg-white/85 px-6 py-3 font-semibold text-red-700 shadow-md backdrop-blur-sm transition duration-300 hover:-translate-x-1 hover:bg-white hover:text-red-800 hover:shadow-xl"
          >
            <span className="text-xl transition-transform duration-300 group-hover:-translate-x-1">
              ←
            </span>
            На головну
          </Link>

          <div className="text-center">
            <p className="mb-3 text-lg font-semibold text-red-600">
              Golden Pasta
            </p>

            <h1 className="mb-6 text-5xl font-bold text-[#3B2F2F]">
              Рецепти Golden Pasta
            </h1>

            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-stone-700">
              Добірка ідей приготування з різними видами пасти Golden Pasta.
              Оберіть улюблений вид пасти та перегляньте рецепти.
            </p>
          </div>
        </div>
      </section>

      <Spaghetti />
      <Conchiglie />
      <Vermicelli />
      <Penne />
      <Fusilli />

      <Footer />
    </>
  );
}