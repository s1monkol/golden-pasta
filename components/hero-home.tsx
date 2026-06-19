import Image from "next/image";

export default function HeroHome() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-[#006B43]">
      <div className="hero-banner-delay absolute inset-0">
        <Image
          src="/images/background/Banner_Final.png"
          alt="Golden Pasta"
          fill
          priority
          className="object-cover"
        />
      </div>
    </section>
  );
}