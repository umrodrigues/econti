import Header from '../../components/Header';
import Banner from '../../components/Banner';
import MiniBanners from '../../components/MiniBanners';
import Portfolio from '../../components/Portfolio';
import LeadershipSection from '../../components/LeadershipSection';
import Partners from '../../components/Partners';
import Footer from '../../components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <MiniBanners />
        <LeadershipSection />
        <Portfolio />
      </main>
      <Partners />
      <Footer />
    </>
  );
}
