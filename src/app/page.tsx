import Hero from "@/components/hero/hero";
import HomeContent from "@/components/home/home-content";
import Products from "@/components/home/products/products";
import Reviews from "@/components/home/reviews/reviews";

export default function Home() {
  return (
    <>
      <section id="home">
        <Hero />
      </section>
      
      <section id="sobre">
        <HomeContent/>
      </section>
      
      <section id="solucoes">
        <Products/>
      </section>
      
      <section id="depoimentos">
        <Reviews/>
      </section>
    </>
  );
}


