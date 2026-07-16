import Image from "next/image";
import Link from "next/link";

type Product = {
  title: string;
  weight: string;
  image: string;
  buyUrl: string;
  description: string;
  recipeUrl?: string;
};

const products: Product[] = [
{
  title: "Spaghetti / Спагетті",
  weight: "400 г",
  image: "/images/Packs/Golden Pasta_Spaghetti_2.png",
  buyUrl:
    "https://tavriav.zakaz.ua/ru/products/makaroni-400g--04820044843281/",
  recipeUrl: "/recipes/spaghetti",
  description:
    "Справжня класика італійської кухні. Прекрасно смакують із соусом Болоньєзе, томатними соусами та улюбленими домашніми рецептами.",
},
{
  title: "Big Shells / Великі мушлі",
  weight: "400 г",
  image: "/images/Packs/GoldenPasta_BigShells.png",
  buyUrl:
    "https://tavriav.zakaz.ua/ru/products/makaroni-golden-pasta-400g--04820044843243/",
  recipeUrl: "/recipes/conchiglie",
  description:
    "Великі мушлі ніби створені для густих соусів і запечених страв. Особливо смакують із сиром, овочами або м'ясною начинкою.",
},
{
  title: "Fusilli / Спіральки",
  weight: "400 г",
  image: "/images/Packs/GoldenPasta_Fusilli.png",
  buyUrl:
    "https://tavriav.zakaz.ua/ru/products/makaroni-400g--04820044843229/",
  recipeUrl: "/recipes/fusilli",
  description:
    "Спіральки, які чудово вбирають соус у кожен виток. Ідеально підходять до Болоньєзе, страв із м'яса, овочів та ароматного песто.",
},
{
  title: "Penne / Пір'я",
  weight: "400 г",
  image: "/images/Packs/GoldenPasta_Penne.png",
  buyUrl:
    "https://tavriav.zakaz.ua/ru/products/makaroni-golden-pasta-400g-ukrayina--04820044843366/",
  recipeUrl: "/recipes/penne",
  description:
    "Одна з найпопулярніших форм пасти у світі. Чудово поєднується з томатними, сирними та вершковими соусами, роблячи кожну страву по-справжньому домашньою.",
},

  {
    title: "Vermicelli / Вермішель",
    weight: "400 г",
    image: "/images/Packs/GoldenPasta_Vermicelli.png",
    buyUrl:
      "https://prom.ua/p1798074146-makaronny-golden-pasta.html",
    recipeUrl: "/recipes/vermicelli",
    description:
      "Тонка та ніжна вермішель, яка швидко готується й чудово підходить для супів, гарнірів, запіканок та легких домашніх страв.",
  },

{
  title: "Linguine / Лінгвіні",
  weight: "400 г",
  image: "/images/Packs/Golden Pasta_LINGUINI_3.png",
  buyUrl:
    "https://tavriav.zakaz.ua/ru/products/makaroni-golden-pasta-400g-ukrayina--04820044844226/",
  description:
    "Традиційна довга паста, яка чудово поєднується з морепродуктами, вершковими соусами та свіжою зеленню. Ідеальний вибір для легкої сімейної вечері.",
},
{
  title: "Charleston / Ріжки",
  weight: "400 г",
  image: "/images/Packs/GoldenPasta_Charleston.png",
  buyUrl:
    "https://tavriav.zakaz.ua/ru/products/makaroni-400g--04820044843625/",
  description:
    "Оригінальна форма пасти, яка додає особливого настрою кожній страві. Добре поєднується з ніжними вершковими соусами та овочами.",
},
{
  title: "Creste di Gallo / Гребінці",
  weight: "400 г",
  image: "/images/Packs/GoldenPasta_Creste-di-gallo.png",
  buyUrl:
    "https://tavriav.zakaz.ua/ru/products/makaroni-golden-pasta-400g-ukrayina--04820044844257/",
  description:
    "Завдяки своїй рифленій формі чудово утримують соус. Ідеально підходять для насичених м'ясних страв і домашніх рагу.",
},
{
  title: "Elbow Rigati / Ріжки рифлені",
  weight: "400 г",
  image: "/images/Packs/GoldenPasta_Elbow-rigati.png",
  buyUrl:
    "https://tavriav.zakaz.ua/ru/products/makaroni-golden-pasta-400g-ukrayina--04820044843601/",
  description:
    "Улюблена форма для сімейних обідів. Чудово поєднується із сиром, тушкованим м'ясом та овочевими соусами.",
},
{
  title: "Farfalle / Метелики",
  weight: "400 г",
  image: "/images/Packs/GoldenPasta_Farfalle.png",
  buyUrl:
    "https://tavriav.zakaz.ua/ru/products/makaroni-golden-pasta-400g--04820044843267/",
  description:
    "Відомі як «метелики». Легкі, красиві та святкові — прекрасно смакують у салатах, з овочами та ніжними соусами.",
},
{
  title: "Fiori / Квіточки",
  weight: "400 г",
  image: "/images/Packs/GoldenPasta_Fiori.png",
  buyUrl:
    "https://obzhora.ua/product/makarony-golden-pasta-400h-fiori-novynka",
  description:
    "Паста у формі квітів, яка додає яскравих барв до столу. Особливо подобається дітям і чудово поєднується з легкими вершковими соусами.",
},
{
  title: "Lumachine / Мала мушля",
  weight: "400 г",
  image: "/images/Packs/GoldenPasta_Lumachine.png",
  buyUrl:
    "https://silpo.ua/product/vyroby-makaronni-golden-pasta-lumachine-960221",
  description:
    "Невеликі мушлі для затишних домашніх страв. Смакують із легкими соусами, овочами та наваристими супами.",
},
];

export default function ProductCatalog() {
  return (
    <section className="relative overflow-hidden bg-[#F6E3A1] py-20">
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='40' viewBox='0 0 80 40'%3E%3Cpath d='M0 20 Q20 0 40 20 T80 20' fill='none' stroke='%23A86B00' stroke-width='1.2'/%3E%3C/svg%3E")`,
          backgroundSize: "80px 40px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-[#3B2F2F]">
            Наша продукція
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <article
              key={product.title}
              className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative flex h-[340px] items-center justify-center bg-[#FFE8A8] p-4">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={300}
                  height={320}
                  className="max-h-[300px] w-auto object-contain transition duration-500 group-hover:scale-110"
                />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <p className="mb-2 text-sm text-stone-500">
                  Golden Pasta
                </p>

                <h3 className="mb-4 text-2xl font-bold text-[#D88400]">
                  {product.title}
                </h3>

                <p className="mb-3 text-sm text-stone-700">
                  Упаковка: <strong>{product.weight}</strong>
                </p>

                <p className="text-sm leading-relaxed text-stone-600">
                  {product.description}
                </p>

                <div className="mt-auto flex flex-wrap gap-3 pt-6">
/*
<a
  href={product.buyUrl}
  target="_blank"
  rel="noopener noreferrer"
  className="group/buy inline-flex w-fit items-center gap-3 rounded-full bg-red-600 px-6 py-3 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#F5B400] hover:text-[#3B2F2F] hover:shadow-xl"
>
  <Image
    src="/images/cart.svg"
    alt="Cart"
    width={20}
    height={20}
    className="transition-transform duration-300 group-hover/buy:rotate-[-8deg] group-hover/buy:scale-110"
  />
  Купити
</a>
*/

                  {product.recipeUrl && (
                    <Link
                      href={product.recipeUrl}
                      className="group/recipe inline-flex w-fit items-center gap-3 rounded-full bg-[#168447] px-6 py-3 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#0F6F3A] hover:shadow-xl"
                    >
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="h-5 w-5 transition-transform duration-300 group-hover/recipe:rotate-[-6deg] group-hover/recipe:scale-110"
                      >
                        <path
                          d="M5 11h14l-1 4.5A3.2 3.2 0 0 1 14.9 18H9.1A3.2 3.2 0 0 1 6 15.5L5 11Z"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M8 8.5c.5-1.2 1.3-1.8 2.4-1.8 1.2 0 1.8.8 2.9.8 1 0 1.7-.6 2.2-1.5"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                        />
                        <path
                          d="M8 21h8"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                        />
                      </svg>

                      Рецепти
                    </Link>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="1200"
          className="mt-16 rounded-3xl bg-white p-8 shadow-xl transition-all duration-700 ease-out hover:-translate-y-1 hover:scale-[1.005] hover:shadow-2xl"
        >
          <h3 className="mb-6 text-3xl font-bold text-[#D88400]">
            Склад та харчова цінність
          </h3>

          <p className="mb-6 text-stone-700">
            Борошно з твердої пшениці вищого сорту (дурум) для макаронних
            виробів (містить глютен), вода питна. Без харчових добавок і
            барвників.
          </p>

          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h4 className="mb-3 font-semibold text-[#3B2F2F]">
                Харчова цінність на 100 г
              </h4>

              <ul className="space-y-2 text-stone-700">
                <li>Білки — 11,5 г</li>
                <li>Жири — 1,5 г</li>
                <li>з них насичені — 0,3 г</li>
                <li>Вуглеводи — 74 г</li>
                <li>з них цукор — 2,2 г</li>
                <li>Сіль — 0,004 г</li>
                <li>358 ккал / 1498,8 кДж</li>
              </ul>
            </div>

            <div>
              <h4 className="mb-3 font-semibold text-[#3B2F2F]">
                Додаткова інформація
              </h4>

              <ul className="space-y-2 text-stone-700">
                <li>
                  Строк придатності — 24 місяці від дати виготовлення
                </li>
                <li>Стандарт — ДСТУ 7043:2020</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}