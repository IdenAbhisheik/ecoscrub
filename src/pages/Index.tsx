
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import SplashScreen from '@/components/SplashScreen';
import Hero from '@/components/home/Hero';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import BenefitsBanner from '@/components/home/BenefitsBanner';
import AboutSection from '@/components/home/AboutSection';
import ReviewsSlider from '@/components/home/ReviewsSlider';
import Newsletter from '@/components/home/Newsletter';
import Footer from '@/components/Footer';

const Index = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [showContent, setShowContent] = useState(false);
  
  useEffect(() => {
    // Check if user has visited before
    const hasVisited = localStorage.getItem('hasVisitedEcoscrub');
    if (hasVisited) {
      setShowSplash(false);
      setShowContent(true);
    } else {
      // Set flag for future visits
      localStorage.setItem('hasVisitedEcoscrub', 'true');
    }
  }, []);
  
  const handleSplashComplete = () => {
    setShowSplash(false);
    setTimeout(() => setShowContent(true), 300);
  };
  
  return (
    <div className="min-h-screen">
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      
      {showContent && (
        <>
          <Navbar />
          <Hero />
          <FeaturedProducts />
          <BenefitsBanner />
          <AboutSection />
          <ReviewsSlider />
          <Newsletter />
          <Footer />
        </>
      )}
    </div>
  );
};

export default Index;
