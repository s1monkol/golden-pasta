import Link from "next/link";

export default function HomeNavigation() {
  return (
    <section className="relative overflow-hidden bg-[#7A1118] py-10 text-white">
      <div
        className="
          absolute inset-0 opacity-[0.08]
          bg-[linear-gradient(45deg,transparent_25%,white_25%,white_26%,transparent_26%,transparent_50%,white_50%,white_51%,transparent_51%)]
          bg-[size:48px_48px]
        "
      />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 text-center md:flex-row md:text-left">
        <div>
          <p className="text-sm font-semibold text-[#F5B400]">
            Golden Pasta
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            Оберіть, що вас цікавить
          </h2>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row">
          <Link
            href="/recipes"
            className="rounded-full bg-white px-8 py-4 text-lg font-bold text-[#7A1118] shadow-lg transition hover:scale-105 hover:bg-[#F5B400]"
          >
            Наші рецепти
          </Link>

          <a
            href="https://tavriav.zakaz.ua/ru/categories/pasta-tavriav/tm=golden-pasta/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#F5B400] px-8 py-4 text-lg font-bold text-[#3B2F2F] shadow-lg transition hover:scale-105 hover:bg-white"
          >
            Купити продукцію
          </a>
        </div>
      </div>
    </section>
  );
}