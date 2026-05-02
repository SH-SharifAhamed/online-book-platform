import Hero from "@/components/Hero";
import SwiperSection from "@/components/SwiperSection";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main>
        <SwiperSection />
        <Hero />
      </main>
    </div>
  );
}
