
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center bg-ecoscrub-off-white">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-ecoscrub-beige/90 to-ecoscrub-beige/30"></div>
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
          alt="Natural background"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 z-10 pt-24">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-ecoscrub-brown mb-4">
            Clean Naturally, <br />
            <span className="text-ecoscrub-green">Live Sustainably</span>
          </h1>
          <p className="text-lg md:text-xl text-ecoscrub-brown/80 mb-8 max-w-lg">
            Handcrafted eco-friendly scrubbers that are gentle on your skin and kind to our planet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/shop" className="eco-button inline-block text-center">
              Shop Collection
            </Link>
            <Link to="/sustainability" className="bg-transparent border border-ecoscrub-green text-ecoscrub-green px-6 py-2 rounded-md font-medium hover:bg-ecoscrub-green/10 transition-all inline-block text-center">
              Learn Our Story
            </Link>
          </div>
        </div>
      </div>

      {/* Natural decoration elements */}
      <div className="absolute bottom-10 right-10 w-24 h-24 md:w-32 md:h-32 bg-ecoscrub-green/10 rounded-full animate-float hidden md:block"></div>
      <div className="absolute top-1/4 right-1/4 w-12 h-12 bg-ecoscrub-beige rounded-full animate-float" style={{ animationDelay: '1s', animationDuration: '7s' }}></div>
    </div>
  );
};

export default Hero;
