
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ShoppingCart, Heart } from 'lucide-react';
import { getFeaturedProducts } from '@/data/products';
import { toast } from '@/hooks/use-toast';

const FeaturedProducts = () => {
  const products = getFeaturedProducts();
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = Math.max(0, products.length - (window.innerWidth > 768 ? 3 : 1));
  
  const handlePrev = () => {
    setCurrentIndex(prev => Math.max(0, prev - 1));
  };
  
  const handleNext = () => {
    setCurrentIndex(prev => Math.min(maxIndex, prev + 1));
  };

  const addToCart = (productName: string) => {
    toast({
      title: "Added to cart",
      description: `${productName} has been added to your cart.`,
    });
  };

  const addToWishlist = (productName: string) => {
    toast({
      title: "Added to wishlist",
      description: `${productName} has been added to your wishlist.`,
    });
  };
  
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-ecoscrub-brown">Featured Products</h2>
          <div className="flex gap-2">
            <button 
              onClick={handlePrev} 
              disabled={currentIndex === 0} 
              className="p-2 rounded-full border border-ecoscrub-green text-ecoscrub-green hover:bg-ecoscrub-green hover:text-white transition-colors disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:text-ecoscrub-green"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button 
              onClick={handleNext} 
              disabled={currentIndex === maxIndex} 
              className="p-2 rounded-full border border-ecoscrub-green text-ecoscrub-green hover:bg-ecoscrub-green hover:text-white transition-colors disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:text-ecoscrub-green"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
        
        <div className="relative">
          <div 
            className="flex transition-transform duration-300 gap-6"
            style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
          >
            {products.map((product) => (
              <div 
                key={product.id} 
                className="product-card min-w-[280px] md:min-w-[calc(33.333%-1rem)] flex-grow flex flex-col"
              >
                <div className="relative overflow-hidden group h-64">
                  <img 
                    src={product.images[0]} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="flex gap-2">
                      <button 
                        onClick={() => addToCart(product.name)}
                        className="p-2 bg-white rounded-full hover:bg-ecoscrub-green hover:text-white transition-colors"
                      >
                        <ShoppingCart className="h-5 w-5" />
                      </button>
                      <button 
                        onClick={() => addToWishlist(product.name)}
                        className="p-2 bg-white rounded-full hover:bg-ecoscrub-green hover:text-white transition-colors"
                      >
                        <Heart className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 flex-grow flex flex-col">
                  <Link to={`/product/${product.id}`} className="block">
                    <h3 className="text-lg font-semibold text-ecoscrub-brown hover:text-ecoscrub-green transition-colors mb-1">{product.name}</h3>
                  </Link>
                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className={i < Math.round(product.rating) ? "text-yellow-400" : "text-gray-300"}>★</span>
                      ))}
                    </div>
                    <span className="text-sm text-ecoscrub-brown/70 ml-2">({product.reviews})</span>
                  </div>
                  <p className="text-sm text-ecoscrub-brown/80 mb-3 flex-grow">{product.shortDescription}</p>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-ecoscrub-green">₹{product.price}</span>
                    <Link 
                      to={`/product/${product.id}`} 
                      className="text-sm text-ecoscrub-green hover:underline"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
