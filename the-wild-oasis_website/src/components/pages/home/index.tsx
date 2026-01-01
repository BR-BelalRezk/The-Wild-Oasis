import Heading from "@/components/ui/heading";
import HeroImage from "./hero-image";
import LuxuryCTA from "../../ui/luxury-cta";
export default function HomePage() {
  return (
    <section className="relative h-dvh">
      <HeroImage />
      <article className="relative z-30 text-center h-full flex items-center justify-center flex-col gap-5">
        <Heading
          text="Welcome to paradise."
          as={"h1"}
          animationType="splitText"
          className="text-8xl text-primary-50 tracking-tight font-normal"
        />
        <LuxuryCTA />
      </article>
    </section>
  );
}
