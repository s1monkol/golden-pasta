import Image from "next/image";
import Link from "next/link";

export default function Spaghetti() {
  return (
    <section
      id="spaghetti"
      className="relative overflow-hidden bg-[#E9B8AA] py-16"
    >
      {/* Узор-скатерть */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='20' viewBox='0 0 40 20'%3E%3Cpath d='M0 10 Q10 0 20 10 T40 10' fill='none' stroke='%238C6B5A' stroke-width='1.2'/%3E%3C/svg%3E")`,
          backgroundSize: "40px 20px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div data-aos="fade-right">
            <p className="mb-3 text-lg font-semibold text-red-600">
              Golden Pasta
            </p>

            <h2 className="mb-5 text-5xl font-bold leading-tight text-[#A52A2A]">
              Spaghetti
            </h2>

            <p className="mb-8 max-w-xl text-xl leading-relaxed text-[#6B4E3D]">
              Класичні італійські спагеті з твердих сортів пшениці.
              Ідеально поєднуються з томатними соусами, морепродуктами
              та м&apos;ясними стравами.
            </p>

            <div className="flex flex-col items-start gap-4">
              <Link
                href="/recipes/spaghetti"
                className="group inline-flex items-center gap-3 rounded-full bg-red-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition duration-300 hover:scale-105 hover:bg-red-700 hover:shadow-xl"
              >
                Переглянути рецепти
                <span className="text-2xl transition-transform duration-300 group-hover:translate-x-2">
                  →
                </span>
              </Link>

              <a
                href="https://maudau.com.ua/product/vyroby-makaronni-golden-pasta-spaghetti-400-h"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-full bg-[#8B5A2B] px-8 py-4 text-lg font-semibold text-white shadow-lg transition duration-300 hover:scale-105 hover:bg-[#6F4521] hover:shadow-xl"
              >
                Купити зараз
                <span className="text-2xl transition-transform duration-300 group-hover:translate-x-2">
                  →
                </span>
              </a>
            </div>
          </div>

          <div
            data-aos="fade-left"
            className="group overflow-hidden rounded-[36px] bg-[#D67A67] p-6 shadow-xl transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl"
          >
            <Image
              src="/images/spaghetti_banner.png"
              alt="Golden Pasta Spaghetti"
              width={1000}
              height={820}
              className="h-[420px] w-full rounded-[24px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}