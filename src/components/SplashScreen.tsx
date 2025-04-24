
import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const SplashScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [isAnimating, setIsAnimating] = useState(true);

  // Auto-progress after 3.5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
      const exitTimer = setTimeout(() => {
        onComplete();
      }, 1000);
      return () => clearTimeout(exitTimer);
    }, 3500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-ecoscrub-beige flex flex-col items-center justify-center z-50">
      <div className={`transition-opacity duration-1000 ${!isAnimating ? 'opacity-0' : 'opacity-100'}`}>
        <div className="relative mb-8">
          {/* Animated logo */}
          <div className="w-32 h-32 md:w-40 md:h-40 bg-ecoscrub-green rounded-full flex items-center justify-center mb-8 animate-float">
            <span className="text-4xl md:text-5xl font-bold text-white">ES</span>
          </div>
          
          {/* Floating fibers */}
          <div className="absolute -top-4 -right-8 w-12 h-6 bg-ecoscrub-off-white rounded-full rotate-45 animate-float opacity-60" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute top-12 -left-10 w-8 h-4 bg-ecoscrub-off-white rounded-full -rotate-12 animate-float opacity-40" style={{ animationDelay: '1.2s' }}></div>
          <div className="absolute -bottom-4 right-10 w-10 h-5 bg-ecoscrub-off-white rounded-full rotate-12 animate-float opacity-50" style={{ animationDelay: '0.8s' }}></div>
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold text-ecoscrub-green mb-3 text-center">EcoScrub</h1>
        <p className="text-lg text-ecoscrub-brown opacity-90 animate-fade-in">Where Nature Meets Clean</p>
      </div>
      
      <button 
        className="absolute bottom-12 animate-bounce hover:text-ecoscrub-green transition-colors"
        onClick={onComplete}
      >
        <span className="sr-only">Enter Site</span>
        <ChevronDown className="h-8 w-8" />
      </button>
    </div>
  );
};

export default SplashScreen;
