import Image from "next/image";

export default function HeroHome() {
  return (
    <section id="home" className="overflow-hidden bg-[#006B43]">
      <Image
        src="/images/background/main_banner_2.png"
        alt="Golden Pasta"
        width={1920}
        height={900}
        priority
        className="h-auto w-full"
      />
    </section>
  );
}