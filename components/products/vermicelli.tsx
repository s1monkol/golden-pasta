import Image from "next/image";
import Link from "next/link";

export default function Vermicelli() {
  return (
    <section
      id="vermicelli"
      className="relative overflow-hidden bg-[#F3E8D2] py-16"
    >
      {/* Узор вермішелі */}
      <div
        className="absolute inset-0 opacity-[0.1]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='90' height='36' viewBox='0 0 90 36'%3E%3Cpath d='M0 18 C12 8 24 28 36 18 S60 8 72 18 S84 28 90 18' fill='none' stroke='%23B89B6A' stroke-width='1.2'/%3E%3Cpath d='M0 8 C12 -2 24 18 36 8 S60 -2 72 8 S84 18 90 8' fill='none' stroke='%23B89B6A' stroke-width='0.9'/%3E%3Cpath d='M0 28 C12 18 24 38 36 28 S60 18 72 28 S84 38 90 28' fill='none' stroke='%23B89B6A' stroke-width='0.9'/%3E%3C/svg%3E")`,
          backgroundSize: "90px 36px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div data-aos="fade-right">
            <p className="mb-3 text-lg font-semibold text-red-600">
              Golden Pasta
            </p>

            <h2 className="mb-5 text-5xl font-bold leading-tight text-amber-900">
              Vermicelli
            </h2>

            <p className="mb-8 max-w-xl text-xl leading-relaxed text-stone-700">
              Легка та універсальна вермішель із твердих сортів пшениці.
              Ідеально підходить для супів, гарнірів та швидких домашніх страв.
            </p>

            <div className="flex flex-col items-start gap-4">
              <Link
                href="/recipes/vermicelli"
                className="group inline-flex items-center gap-3 rounded-full bg-red-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition duration-300 hover:scale-105 hover:bg-red-700 hover:shadow-xl"
              >
                Переглянути рецепти
                <span className="text-2xl transition-transform duration-300 group-hover:translate-x-2">
                  →
                </span>
              </Link>

              <a
                href="https://maudau.com.ua/product/vyroby-makaronni-golden-pasta-vermicelli"
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
            className="group overflow-hidden rounded-[36px] bg-[#E6D3A8] p-6 shadow-xl transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl"
          >
            <Image
              src="/images/vermicelli_banner.png"
              alt="Golden Pasta Vermicelli"
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