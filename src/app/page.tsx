import Hero from "@/components/hero/hero";
import HomeContent from "@/components/home/home-content";
import Products from "@/components/home/products/products";
import Portfolio from "@/components/portfolio/portfolio";
import Reviews from "@/components/home/reviews/reviews";
import PartnersCarrousel from "@/components/partners/carrousel/partners-carrousel";
import PartnersCount from "@/components/partners/partners-count/partners-count";
import Contact from "@/components/contact/contact";

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
      
      <section id="portfolio">
        <Portfolio/>
      </section>
      
      <section id="depoimentos">
        <Reviews/>
      </section>
      
      <section id="contato">
        <Contact/>
      </section>
    </>
  );
}


