import Image from "next/image";
import Link from "next/link";

export default function Fusilli() {
  return (
    <section
      id="fusilli"
      className="relative overflow-hidden bg-[#DCE7C8] py-16"
    >
      {/* Узор Fusilli */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='90' height='90' viewBox='0 0 90 90'%3E%3Cpath d='M45 15 C60 20 60 35 45 40 C30 45 30 60 45 65 C60 70 60 85 45 90' fill='none' stroke='%232E7D32' stroke-width='1.4' stroke-linecap='round'/%3E%3C/svg%3E")`,
          backgroundSize: "90px 90px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div data-aos="fade-right">
            <p className="mb-3 text-lg font-semibold text-red-600">
              Golden Pasta
            </p>

            <h2 className="mb-5 text-5xl font-bold leading-tight text-green-800">
              Fusilli
            </h2>

            <p className="mb-8 max-w-xl text-xl leading-relaxed text-green-700">
              Спіральна паста з твердих сортів пшениці.
              Чудово поєднується з вершковими соусами,
              овочами та салатами.
            </p>

            <div className="flex flex-col items-start gap-4">
              <Link
                href="/recipes/fusilli"
                className="group inline-flex items-center gap-3 rounded-full bg-green-700 px-8 py-4 text-lg font-semibold text-white shadow-lg transition duration-300 hover:scale-105 hover:bg-green-800 hover:shadow-xl"
              >
                Переглянути рецепти
                <span className="text-2xl transition-transform duration-300 group-hover:translate-x-2">
                  →
                </span>
              </Link>

              <a
                href="https://maudau.com.ua/product/vyroby-makaronni-golden-pasta-fusilli"
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
            className="group overflow-hidden rounded-[36px] bg-[#BFD89B] p-6 shadow-xl transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl"
          >
            <Image
              src="/images/fusilli_banner.png"
              alt="Golden Pasta Fusilli"
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