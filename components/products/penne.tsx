import Image from "next/image";
import Link from "next/link";

export default function Penne() {
  return (
    <section
      id="products"
      className="relative overflow-hidden bg-[#F3F0C9] py-16"
    >
      {/* Узор Penne */}
<div
  className="absolute inset-0 opacity-[0.08]"
  style={{
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='120' viewBox='0 0 180 120'%3E%3Cg fill='none' stroke='%230B6B3A' stroke-width='1.2'%3E%3Cpath d='M30 55 L60 30 L130 70 L100 95 Z'/%3E%3C/g%3E%3C/svg%3E")`,
    backgroundSize: "120px 80px",
  }}
/>
{/* Переход сверху от Vermicelli */}
<div className="pointer-events-none absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-[#F3E8D2] to-transparent" />

{/* Переход снизу к Fusilli */}
<div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#DCE7C8] to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div data-aos="fade-right">
            <p className="mb-3 text-lg font-semibold text-red-600">
              Golden Pasta
            </p>

            <h2 className="mb-5 text-5xl font-bold leading-tight text-[#0B6B3A]">
              Penne
            </h2>

            <p className="mb-8 max-w-xl text-xl leading-relaxed text-[#1F6F43]">
              Класична паста з твердих сортів пшениці. Ідеально поєднується з
              томатними соусами, овочами та морепродуктами.
            </p>

            <div className="flex flex-col items-start gap-4">
              <Link
                href="/recipes/penne"
                className="group inline-flex items-center gap-3 rounded-full bg-red-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition duration-300 hover:scale-105 hover:bg-red-700 hover:shadow-xl"
              >
                Переглянути рецепти
                <span className="text-2xl transition-transform duration-300 group-hover:translate-x-2">
                  →
                </span>
              </Link>

              <a
                href="https://maudau.com.ua/product/vyroby-makaronni-golden-pasta-penne"
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
            className="group overflow-hidden rounded-[36px] bg-[#DCD879] p-6 shadow-xl transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl"
          >
            <Image
              src="/images/penne_banner_3.png"
              alt="Golden Pasta Penne"
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