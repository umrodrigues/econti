import Header from '../../components/Header';
import Banner from '../../components/Banner';
import MiniBanners from '../../components/MiniBanners';
import Portfolio from '../../components/Portfolio';
import LeadershipSection from '../../components/LeadershipSection';

export default function Home() {
  return (
    <main>
      <Header />
      <Banner />
      <MiniBanners />
      <LeadershipSection />
      <Portfolio />
    </main>
  );
}
