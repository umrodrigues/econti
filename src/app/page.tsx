import Header from "@/components/header/header";
import PartnersCarrousel from "@/components/partners/carrousel/partners-carrousel";
import PartnersCount from "@/components/partners/partners-count/partners-count";

export default function Home() {
  return (
    <>
    <Header />
    <PartnersCount />
    <PartnersCarrousel/>
    </>
  );
}
