"use client";

import Link from "next/link";
import Logo from "./logo";

export default function Header() {
  return (
    <header className="z-30 mt-2 w-full md:mt-5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-[#FFF8EE]/90 px-6 shadow-lg backdrop-blur-sm">

          {/* Logo */}
          <div className="flex items-center">
            <Logo />
          </div>

          {/* Navigation */}
          <nav>
            <ul className="flex items-center gap-8 text-sm font-medium text-[#3B2F2F]">
              <li>
                <a
                  href="#products"
                  className="transition hover:text-red-600"
                >
                  Продукція
                </a>
              </li>

              <li>
                <a
                  href="#recipes"
                  className="transition hover:text-red-600"
                >
                  Рецепти
                </a>
              </li>

              <li>
                <a
                  href="#buy"
                  className="transition hover:text-red-600"
                >
                  Де купити
                </a>
              </li>

              <li>
                <a
                  href="#contacts"
                  className="transition hover:text-red-600"
                >
                  Контакти
                </a>
              </li>
            </ul>
          </nav>

          {/* CTA Button */}
          <Link
            href="#products"
            className="rounded-full bg-red-600 px-5 py-2 text-sm font-medium text-white transition hover:bg-red-700"
          >
            Переглянути продукцію
          </Link>

        </div>
      </div>
    </header>
  );
}