import FeatureSection from '@/components/landing/feature-section';
import Footer from '@/components/landing/footer';
import HeroSection from '@/components/landing/hero-section';
import Navbar from '@/components/landing/navbar';
import TestimonySection from '@/components/landing/testimony-section';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <TestimonySection />
      <Footer />
    </div>
  );
};

export default HomePage;
