import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import HomeContent from "@/components/home/home-content";
import Products from "@/components/home/products/products";
import Reviews from "@/components/home/reviews/reviews";
import PartnersCarrousel from "@/components/partners/carrousel/partners-carrousel";
import PartnersCount from "@/components/partners/partners-count/partners-count";

export default function Home() {
  return (
    <>
    <Header />
    <PartnersCount />
    <PartnersCarrousel/>
    <HomeContent/>
    <Products/>
    <Reviews/>
    <Footer/>
    </>
  );
}
