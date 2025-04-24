
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Heart, Eye } from 'lucide-react';
import { Product, products } from '@/data/products';
import { toast } from '@/hooks/use-toast';

interface ProductGridProps {
  filters: {
    category: string;
    priceRange: [number, number];
    material: string;
    ecoTags: string[];
  };
  sortOption: string;
}

const ProductGrid = ({ filters, sortOption }: ProductGridProps) => {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  
  useEffect(() => {
    // Apply filters
    let result = [...products];
    
    if (filters.category) {
      result = result.filter(product => product.category === filters.category);
    }
    
    if (filters.priceRange[0] !== 0 || filters.priceRange[1] !== 500) {
      result = result.filter(product => 
        product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1]
      );
    }
    
    if (filters.material) {
      result = result.filter(product => 
        product.material.toLowerCase().includes(filters.material.toLowerCase())
      );
    }
    
    if (filters.ecoTags.length > 0) {
      result = result.filter(product => 
        filters.ecoTags.every(tag => product.ecoTags.includes(tag))
      );
    }
    
    // Apply sorting
    switch (sortOption) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        result.sort((a, b) => (a.isNew === b.isNew) ? 0 : a.isNew ? -1 : 1);
        break;
      case 'popular':
      default:
        result.sort((a, b) => b.reviews - a.reviews);
        break;
    }
    
    setFilteredProducts(result);
  }, [filters, sortOption]);

  const addToCart = (product: Product) => {
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const addToWishlist = (product: Product) => {
    toast({
      title: "Added to wishlist",
      description: `${product.name} has been added to your wishlist.`,
    });
  };
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredProducts.length > 0 ? (
        filteredProducts.map(product => (
          <div key={product.id} className="product-card group">
            <div className="relative overflow-hidden h-64">
              <img 
                src={product.images[0]} 
                alt={product.name} 
                className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-300"
              />
              
              {product.isNew && (
                <div className="absolute top-2 left-2 bg-ecoscrub-green text-white text-xs font-bold px-3 py-1 rounded-full">
                  New
                </div>
              )}
              
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                <div className="flex gap-2">
                  <button 
                    onClick={() => addToCart(product)}
                    className="p-2 bg-white rounded-full hover:bg-ecoscrub-green hover:text-white transition-colors"
                    title="Add to cart"
                  >
                    <ShoppingCart className="h-5 w-5" />
                  </button>
                  <Link 
                    to={`/product/${product.id}`} 
                    className="p-2 bg-white rounded-full hover:bg-ecoscrub-green hover:text-white transition-colors"
                    title="Quick view"
                  >
                    <Eye className="h-5 w-5" />
                  </Link>
                  <button 
                    onClick={() => addToWishlist(product)}
                    className="p-2 bg-white rounded-full hover:bg-ecoscrub-green hover:text-white transition-colors"
                    title="Add to wishlist"
                  >
                    <Heart className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
            
            <div className="p-4">
              <div className="flex justify-between items-start mb-1">
                <Link to={`/product/${product.id}`}>
                  <h3 className="font-semibold text-ecoscrub-brown hover:text-ecoscrub-green transition-colors line-clamp-2">{product.name}</h3>
                </Link>
                <span className="font-bold text-ecoscrub-green">₹{product.price}</span>
              </div>
              
              <div className="flex items-center mb-2">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={i < Math.round(product.rating) ? "text-yellow-400" : "text-gray-300"}>★</span>
                  ))}
                </div>
                <span className="text-xs text-ecoscrub-brown/70 ml-1">({product.reviews})</span>
              </div>
              
              <p className="text-sm text-ecoscrub-brown/80 mb-3 line-clamp-2">{product.shortDescription}</p>
              
              <div className="flex flex-wrap gap-2 mb-3">
                {product.ecoTags.map((tag, index) => (
                  <span 
                    key={index} 
                    className="text-xs bg-ecoscrub-beige px-2 py-1 rounded-full text-ecoscrub-brown/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <button 
                onClick={() => addToCart(product)}
                className="w-full bg-ecoscrub-green/10 text-ecoscrub-green py-2 rounded-md font-medium hover:bg-ecoscrub-green hover:text-white transition-colors"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))
      ) : (
        <div className="col-span-3 py-12 text-center">
          <p className="text-lg text-ecoscrub-brown/70">No products match your filters. Please try different criteria.</p>
        </div>
      )}
    </div>
  );
};

export default ProductGrid;
