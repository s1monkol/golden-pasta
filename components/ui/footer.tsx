import Image from "next/image";

export default function Footer() {
  return (
    <footer
      id="contacts"
      className="
        relative overflow-hidden
        bg-gradient-to-r
        from-[#5A0F14]
        via-[#74151D]
        to-[#5A0F14]
        text-white
      "
    >
      <div
        className="
          absolute inset-0 opacity-[0.06]
          bg-[linear-gradient(45deg,transparent_25%,white_25%,white_26%,transparent_26%,transparent_50%,white_50%,white_51%,transparent_51%)]
          bg-[size:60px_60px]
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-12">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <h2 className="text-3xl font-bold md:text-4xl">
              Контакти відділу продажів
            </h2>

            <p className="mt-6 text-2xl font-semibold">
              Ірина Василівна
            </p>

            <a
              href="mailto:km.off.km@gmail.com"
              className="mt-4 block text-xl font-semibold text-[#F5B400] transition hover:text-[#FFD54A]"
            >
              km.off.km@gmail.com
            </a>

            <a
              href="tel:+380680041341"
              className="mt-4 block text-2xl font-bold md:text-3xl"
            >
              +38 (068) 004-13-41
            </a>
          </div>

          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            className="md:text-right"
          >
            <h2 className="text-3xl font-bold md:text-4xl">
              Слідкуйте за нами
            </h2>

            <div className="mt-8 flex flex-col gap-4 md:items-end">
              <a
                href="https://www.instagram.com/golden.pasta.ua/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex w-full max-w-[320px] items-center gap-5 rounded-2xl bg-white/10 px-6 py-4 backdrop-blur-sm transition-all duration-300 hover:bg-[#5A0F14] hover:shadow-[0_0_30px_rgba(90,15,20,0.8)]"
              >
                <Image
                  src="/images/instagram.svg"
                  alt="Instagram"
                  width={42}
                  height={42}
                />

                <span className="text-lg font-semibold">
                  Наш Instagram
                </span>
              </a>

              <a
                href="https://www.tiktok.com/@golden.pasta.ua"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex w-full max-w-[320px] items-center gap-5 rounded-2xl bg-white/10 px-6 py-4 backdrop-blur-sm transition-all duration-300 hover:bg-[#5A0F14] hover:shadow-[0_0_30px_rgba(90,15,20,0.8)]"
              >
                <Image
                  src="/images/tiktok.svg"
                  alt="TikTok"
                  width={42}
                  height={42}
                />

                <span className="text-lg font-semibold">
                  Наш TikTok
                </span>
              </a>
            </div>
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="mt-10 border-t border-white/20 pt-6 text-center text-sm text-white/70"
        >
          © 2026 Golden Pasta. Всі права захищені.
        </div>
      </div>
    </footer>
  );
}