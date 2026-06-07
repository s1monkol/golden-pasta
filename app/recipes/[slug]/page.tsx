import Image from "next/image";
import Link from "next/link";
import { recipes } from "../../../data/recipes";
import { notFound } from "next/navigation";
import Footer from "@/components/ui/footer";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

const pageStyles = {
  spaghetti: {
    bg: "#E9B8AA",
    patternStroke: "%238C6B5A",
  },
  conchiglie: {
    bg: "#EFD1C5",
    patternStroke: "%23B57F50",
  },
  vermicelli: {
    bg: "#F3E8D2",
    patternStroke: "%23B89B6A",
  },
  penne: {
    bg: "#F3F0C9",
    patternStroke: "%230B6B3A",
  },
  fusilli: {
    bg: "#DCE7C8",
    patternStroke: "%232E7D32",
  },
} as const;

export default async function RecipePage({ params }: Props) {
  const { slug } = await params;

  const recipe = recipes[slug as keyof typeof recipes];

  if (!recipe) {
    notFound();
  }

  const style =
    pageStyles[slug as keyof typeof pageStyles] ?? pageStyles.spaghetti;

  return (
    <main
      className="relative min-h-screen overflow-hidden"
      style={{ backgroundColor: style.bg }}
    >
      {/* Фоновий узор */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='20' viewBox='0 0 40 20'%3E%3Cpath d='M0 10 Q10 0 20 10 T40 10' fill='none' stroke='${style.patternStroke}' stroke-width='1.2'/%3E%3C/svg%3E")`,
          backgroundSize: "40px 20px",
        }}
      />

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-20">
        <Link
          href="/"
          data-aos="fade-right"
          className="group mb-10 inline-flex items-center gap-3 rounded-full bg-white/85 px-6 py-3 font-semibold text-red-700 shadow-md backdrop-blur-sm transition duration-300 hover:-translate-x-1 hover:bg-white hover:text-red-800 hover:shadow-xl"
        >
          <span className="text-xl transition-transform duration-300 group-hover:-translate-x-1">
            ←
          </span>
          Назад до продукції
        </Link>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div data-aos="fade-right">
            <p className="mb-3 text-lg font-semibold text-red-600">
              Golden Pasta
            </p>

            <h1 className="mb-6 text-5xl font-bold text-[#3B2F2F] md:text-6xl">
              {recipe.title}
            </h1>

            <p className="mb-8 text-xl leading-relaxed text-stone-700">
              {recipe.description}
            </p>
          </div>

          <div
            data-aos="fade-left"
            className="overflow-hidden rounded-[36px] bg-white p-6 shadow-xl"
          >
            <Image
              src={recipe.image}
              alt={recipe.title}
              width={1000}
              height={800}
              className="w-full rounded-[24px]"
            />
          </div>
        </div>
      </section>

      <section className="relative z-10 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p
            data-aos="fade-up"
            className="mb-3 text-center text-lg font-semibold text-red-600"
          >
            Відеорецепти
          </p>

          <h2
            data-aos="fade-up"
            data-aos-delay="100"
            className="mb-12 text-center text-4xl font-bold text-[#3B2F2F]"
          >
            Рецепти від Ектора Хіменеса-Браво
          </h2>

          {recipe.videos && recipe.videos.length > 0 ? (
            <div className="space-y-12">
              {recipe.videos.map((video) => (
                <article
                  key={video.file}
                  data-aos="fade-up"
                  className="rounded-[36px] bg-white/90 p-6 shadow-xl backdrop-blur-sm md:p-8"
                >
                  <div className="grid items-start gap-8 lg:grid-cols-[0.9fr_1.1fr]">
                    <div className="mx-auto w-full max-w-[420px] self-start overflow-hidden rounded-[28px] bg-black">
                      <video
                        src={video.file}
                        controls
                        playsInline
                        className="aspect-[9/16] h-auto w-full rounded-[28px] object-contain"
                      />
                    </div>

                    <div>
                      <h3 className="mb-6 text-3xl font-bold text-[#3B2F2F]">
                        {video.title}
                      </h3>

                      <div className="mb-8">
                        <h4 className="mb-4 text-xl font-bold text-red-700">
                          Інгредієнти
                        </h4>

                        <ul className="space-y-2 text-lg text-stone-700">
                          {video.ingredients.map((item) => (
                            <li key={item}>• {item}</li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="mb-4 text-xl font-bold text-red-700">
                          Спосіб приготування
                        </h4>

                        <ol className="space-y-3 text-lg leading-relaxed text-stone-700">
                          {video.steps.map((step, index) => (
                            <li key={step}>
                              <span className="font-semibold text-red-700">
                                {index + 1}.
                              </span>{" "}
                              {step}
                            </li>
                          ))}
                        </ol>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div
              data-aos="fade-up"
              className="rounded-3xl bg-white/90 p-8 text-center shadow-lg backdrop-blur-sm"
            >
              Рецепти буде додано пізніше
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}