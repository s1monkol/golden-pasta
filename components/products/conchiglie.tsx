import Image from "next/image";
import Link from "next/link";

export default function Conchiglie() {
  return (
    <section
      id="conchiglie"
      className="relative overflow-hidden bg-[#EFD1C5] py-16"
    >
      {/* Узор мушель */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Cpath d='M30 42 C16 42 14 24 30 16 C46 24 44 42 30 42 Z' fill='none' stroke='%23B57F50' stroke-width='1.2'/%3E%3Cpath d='M30 16 L30 42' stroke='%23B57F50' stroke-width='0.8'/%3E%3Cpath d='M23 20 L26 40' stroke='%23B57F50' stroke-width='0.7'/%3E%3Cpath d='M37 20 L34 40' stroke='%23B57F50' stroke-width='0.7'/%3E%3C/svg%3E")`,
          backgroundSize: "72px 72px",
        }}
      />
{/* Переход сверху от Spaghetti */}
<div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#E9B8AA] to-transparent" />

{/* Переход снизу к Vermicelli */}
<div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#F3E8D2] to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div data-aos="fade-right">
            <p className="mb-3 text-lg font-semibold text-red-600">
              Golden Pasta
            </p>

            <h2 className="mb-5 text-5xl font-bold leading-tight text-amber-800">
              Conchiglie
            </h2>

            <p className="mb-8 max-w-xl text-xl leading-relaxed text-stone-700">
              Паста у формі мушель, яка чудово утримує соуси та начинку.
              Ідеально підходить для сирних, овочевих та вершкових страв.
            </p>

            <div className="flex flex-col items-start gap-4">
              <Link
                href="/recipes/conchiglie"
                className="group inline-flex items-center gap-3 rounded-full bg-amber-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition duration-300 hover:scale-105 hover:bg-amber-700 hover:shadow-xl"
              >
                Переглянути рецепти
                <span className="text-2xl transition-transform duration-300 group-hover:translate-x-2">
                  →
                </span>
              </Link>

              <a
                href="https://tavriav.zakaz.ua/ru/products/makaroni-golden-pasta-400g--04820044843243/"
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
            className="group overflow-hidden rounded-[36px] bg-[#DDBA9E] p-6 shadow-xl transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl"
          >
            <Image
              src="/images/conchiglie_banner.png"
              alt="Golden Pasta Conchiglie"
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