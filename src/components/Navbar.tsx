
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Heart, User, Search, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Change navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={cn(
      'fixed w-full z-50 transition-all duration-300 py-4',
      isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
    )}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-ecoscrub-green">EcoScrub</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="font-medium hover:text-ecoscrub-green transition-colors">Home</Link>
            <Link to="/shop" className="font-medium hover:text-ecoscrub-green transition-colors">Shop</Link>
            <Link to="/about" className="font-medium hover:text-ecoscrub-green transition-colors">About</Link>
            <Link to="/sustainability" className="font-medium hover:text-ecoscrub-green transition-colors">Sustainability</Link>
            <Link to="/reviews" className="font-medium hover:text-ecoscrub-green transition-colors">Reviews</Link>
            <Link to="/contact" className="font-medium hover:text-ecoscrub-green transition-colors">Contact</Link>
          </div>
          
          {/* Search Bar */}
          <div className="hidden md:flex items-center relative">
            <input 
              type="text" 
              placeholder="Search products..." 
              className="natural-input w-48 lg:w-64"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute right-3 h-5 w-5 text-ecoscrub-brown opacity-60" />
          </div>
          
          {/* Icons */}
          <div className="flex items-center space-x-4">
            <Link to="/wishlist" className="relative hover:text-ecoscrub-green transition-colors">
              <Heart className="h-6 w-6" />
              <span className="absolute -top-2 -right-2 bg-ecoscrub-green text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                2
              </span>
            </Link>
            <Link to="/cart" className="relative hover:text-ecoscrub-green transition-colors">
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute -top-2 -right-2 bg-ecoscrub-green text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </Link>
            <Link to="/login" className="hover:text-ecoscrub-green transition-colors">
              <User className="h-6 w-6" />
            </Link>
            
            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden hover:text-ecoscrub-green transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-3 mt-3 border-t border-ecoscrub-beige animate-fade-in">
            <div className="flex flex-col space-y-3">
              <Link to="/" className="font-medium hover:text-ecoscrub-green transition-colors">Home</Link>
              <Link to="/shop" className="font-medium hover:text-ecoscrub-green transition-colors">Shop</Link>
              <Link to="/about" className="font-medium hover:text-ecoscrub-green transition-colors">About</Link>
              <Link to="/sustainability" className="font-medium hover:text-ecoscrub-green transition-colors">Sustainability</Link>
              <Link to="/reviews" className="font-medium hover:text-ecoscrub-green transition-colors">Reviews</Link>
              <Link to="/contact" className="font-medium hover:text-ecoscrub-green transition-colors">Contact</Link>
            </div>
            <div className="mt-4 relative">
              <input 
                type="text" 
                placeholder="Search products..." 
                className="natural-input w-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-ecoscrub-brown opacity-60" />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
