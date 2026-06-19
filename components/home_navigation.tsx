import Link from "next/link";

export default function HomeNavigation() {
  return (
    <section className="relative overflow-hidden bg-[#7A1118] py-4">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-4 px-6">
        <Link
          href="/recipes"
          className="rounded-full bg-white px-6 py-2 font-semibold text-[#7A1118] transition hover:bg-[#F5B400]"
        >
          Наші рецепти
        </Link>

        <a
          href="https://tavriav.zakaz.ua/ru/categories/pasta-tavriav/tm=golden-pasta/"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-[#F5B400] px-6 py-2 font-semibold text-[#3B2F2F] transition hover:bg-white"
        >
          Купити продукцію
        </a>
      </div>
    </section>
  );
}