
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Mail, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-ecoscrub-beige">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold text-ecoscrub-green mb-4">EcoScrub</h3>
            <p className="text-ecoscrub-brown mb-4">
              Handcrafted sustainable scrubbers that care for your skin and the planet.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-ecoscrub-brown hover:text-ecoscrub-green transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-ecoscrub-brown hover:text-ecoscrub-green transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="mailto:info@ecoscrub.com" className="text-ecoscrub-brown hover:text-ecoscrub-green transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-ecoscrub-brown mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/shop" className="text-ecoscrub-brown hover:text-ecoscrub-green transition-colors">Shop All</Link>
              </li>
              <li>
                <Link to="/about" className="text-ecoscrub-brown hover:text-ecoscrub-green transition-colors">Our Story</Link>
              </li>
              <li>
                <Link to="/sustainability" className="text-ecoscrub-brown hover:text-ecoscrub-green transition-colors">Sustainability</Link>
              </li>
              <li>
                <Link to="/reviews" className="text-ecoscrub-brown hover:text-ecoscrub-green transition-colors">Reviews</Link>
              </li>
              <li>
                <Link to="/contact" className="text-ecoscrub-brown hover:text-ecoscrub-green transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>
          
          {/* Customer Care */}
          <div>
            <h3 className="text-lg font-semibold text-ecoscrub-brown mb-4">Customer Care</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/shipping" className="text-ecoscrub-brown hover:text-ecoscrub-green transition-colors">Shipping & Returns</Link>
              </li>
              <li>
                <Link to="/faq" className="text-ecoscrub-brown hover:text-ecoscrub-green transition-colors">FAQs</Link>
              </li>
              <li>
                <Link to="/privacy" className="text-ecoscrub-brown hover:text-ecoscrub-green transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="text-ecoscrub-brown hover:text-ecoscrub-green transition-colors">Terms & Conditions</Link>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-ecoscrub-brown mb-4">Newsletter</h3>
            <p className="text-ecoscrub-brown mb-4">
              Subscribe for eco-friendly tips and exclusive offers.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="natural-input rounded-r-none flex-1"
              />
              <button
                type="submit"
                className="bg-ecoscrub-green text-white px-4 rounded-r-md hover:bg-opacity-90 transition-colors"
              >
                <ArrowRight className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-ecoscrub-green/20 mt-12 pt-8 text-center text-ecoscrub-brown">
          <p>&copy; {new Date().getFullYear()} EcoScrub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
