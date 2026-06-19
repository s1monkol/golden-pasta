import Image from "next/image";

const products = [
  {
    title: "Linguine / Лінгвіні",
    weight: "400 г",
    image: "/images/Packs/Golden Pasta_LINGUINI_3.png",
  },
  {
    title: "Spaghetti / Спагетті",
    weight: "400 г",
    image: "/images/Packs/Golden Pasta_Spaghetti_2.png",
  },

  {
    title: "Big Shells / Великі мушлі",
    weight: "400 г",
    image: "/images/Packs/GoldenPasta_BigShells.png",
  },
  {
    title: "Charleston / Чарльстон",
    weight: "400 г",
    image: "/images/Packs/GoldenPasta_Charleston.png",
  },
  {
    title: "Creste di Gallo / Гребінці",
    weight: "400 г",
    image: "/images/Packs/GoldenPasta_Creste-di-gallo.png",
  },
  {
    title: "Elbow Rigati / Ріжки рифлені",
    weight: "400 г",
    image: "/images/Packs/GoldenPasta_Elbow-rigati.png",
  },
  {
    title: "Farfalle / Фарфале",
    weight: "400 г",
    image: "/images/Packs/GoldenPasta_Farfalle.png",
  },
  {
    title: "Fiori / Фіорі",
    weight: "400 г",
    image: "/images/Packs/GoldenPasta_Fiori.png",
  },
  {
    title: "Fusilli / Фузілі",
    weight: "400 г",
    image: "/images/Packs/GoldenPasta_Fusilli.png",
  },
  {
    title: "Lumachine / Лумакині",
    weight: "400 г",
    image: "/images/Packs/GoldenPasta_Lumachine.png",
  },
  {
    title: "Penne / Пене",
    weight: "400 г",
    image: "/images/Packs/GoldenPasta_Penne.png",
  },
];

export default function ProductCatalog() {
  return (
    <section className="relative overflow-hidden bg-[#F6E3A1] py-20">
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='40' viewBox='0 0 80 40'%3E%3Cpath d='M0 20 Q20 0 40 20 T80 20' fill='none' stroke='%23A86B00' stroke-width='1.2'/%3E%3C/svg%3E")`,
          backgroundSize: "80px 40px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <p className="mb-3 text-lg font-semibold text-red-600">
            Golden Pasta
          </p>

          <h2 className="text-4xl font-bold text-[#3B2F2F]">
            Наша продукція
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <article
              key={product.title}
              className="group overflow-hidden rounded-3xl bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative flex h-[280px] items-center justify-center bg-[#FFE8A8] p-6">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={220}
                  height={240}
                  className="max-h-[240px] w-auto object-contain transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <p className="mb-2 text-sm text-stone-500">Golden Pasta</p>

                <h3 className="mb-4 text-2xl font-bold text-[#D88400]">
                  {product.title}
                </h3>

                <p className="mb-2 text-sm text-stone-700">
                  Упаковка: <strong>{product.weight}</strong>
                </p>

                <p className="text-sm leading-relaxed text-stone-600">
                  Борошно з твердої пшениці вищого сорту, вода питна. Без
                  харчових добавок і барвників.
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}