import FeatureSection from '@/components/landing/feature-section';
import HeroSection from '@/components/landing/hero-section';
import Navbar from '@/components/landing/navbar';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <FeatureSection />
    </div>
  );
};

export default HomePage;
