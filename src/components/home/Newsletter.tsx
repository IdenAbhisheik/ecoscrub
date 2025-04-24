
import { useState } from 'react';
import { X } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isOpen, setIsOpen] = useState(true);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    
    toast({
      title: "Thank you for subscribing!",
      description: "You've been added to our newsletter list.",
    });
    
    setEmail('');
    setIsOpen(false);
  };
  
  const handleClose = () => {
    setIsOpen(false);
  };
  
  if (!isOpen) return null;
  
  return (
    <div className="fixed bottom-6 right-6 z-40 max-w-sm animate-fade-in-up">
      <div className="bg-white rounded-lg shadow-xl p-6 border border-ecoscrub-beige">
        <button 
          onClick={handleClose}
          className="absolute top-3 right-3 text-ecoscrub-brown/50 hover:text-ecoscrub-brown transition-colors"
        >
          <X className="h-4 w-4" />
        </button>
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-ecoscrub-brown mb-1">Join Our Eco Community</h3>
          <p className="text-sm text-ecoscrub-brown/70">
            Subscribe for eco-living tips, new product alerts, and 10% off your first order.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="natural-input mb-3"
            required
          />
          <button 
            type="submit"
            className="eco-button"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
