
import { useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { ShoppingCart, Heart, Share2, ChevronLeft, ChevronRight, Minus, Plus, Check, Recycle, Leaf, Hand } from 'lucide-react';
import { getProductById, getRelatedProducts, Product } from '@/data/products';
import { toast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const product = getProductById(id || '');
  const relatedProducts = getRelatedProducts(id || '');
  
  const [quantity, setQuantity] = useState(1);
  const [currentImage, setCurrentImage] = useState(0);
  const [activeTab, setActiveTab] = useState('description');
  
  if (!product) {
    navigate('/shop');
    return null;
  }
  
  const handleQuantityChange = (amount: number) => {
    setQuantity(prev => Math.max(1, Math.min(product.stock, prev + amount)));
  };
  
  const handleAddToCart = () => {
    toast({
      title: "Added to cart",
      description: `${quantity} x ${product.name} added to your cart.`,
    });
  };
  
  const handleAddToWishlist = () => {
    toast({
      title: "Added to wishlist",
      description: `${product.name} has been added to your wishlist.`,
    });
  };
  
  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: "Link copied",
      description: "Product link copied to clipboard.",
    });
  };
  
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'sparkles':
      case 'sparkle':
        return <span className="text-xl">✨</span>;
      case 'timer':
        return <span className="text-xl">⏱️</span>;
      case 'skin':
        return <span className="text-xl">👐</span>;
      case 'recycle':
        return <Recycle className="h-5 w-5" />;
      case 'feather':
        return <span className="text-xl">🪶</span>;
      case 'spa':
        return <span className="text-xl">🌿</span>;
      case 'wind':
        return <span className="text-xl">💨</span>;
      case 'leaf':
        return <Leaf className="h-5 w-5" />;
      case 'shield':
        return <span className="text-xl">🛡️</span>;
      case 'bacteria':
        return <span className="text-xl">🦠</span>;
      case 'trash':
        return <span className="text-xl">🗑️</span>;
      case 'arrow-down':
        return <span className="text-xl">⬇️</span>;
      case 'hand':
        return <Hand className="h-5 w-5" />;
      case 'tree':
        return <span className="text-xl">🌳</span>;
      default:
        return <Check className="h-5 w-5" />;
    }
  };
  
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <nav className="flex mb-8" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <Link to="/" className="text-sm text-ecoscrub-brown/70 hover:text-ecoscrub-green">
              Home
            </Link>
          </li>
          <li>
            <div className="flex items-center">
              <span className="mx-1 text-ecoscrub-brown/70">/</span>
              <Link to="/shop" className="text-sm text-ecoscrub-brown/70 hover:text-ecoscrub-green">
                Shop
              </Link>
            </div>
          </li>
          <li>
            <div className="flex items-center">
              <span className="mx-1 text-ecoscrub-brown/70">/</span>
              <span className="text-sm text-ecoscrub-brown font-medium">
                {product.name}
              </span>
            </div>
          </li>
        </ol>
      </nav>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="relative h-80 md:h-96 bg-white rounded-lg overflow-hidden">
            <img 
              src={product.images[currentImage]} 
              alt={product.name} 
              className="w-full h-full object-contain"
            />
            
            {product.images.length > 1 && (
              <>
                <button 
                  onClick={() => setCurrentImage(prev => (prev === 0 ? product.images.length - 1 : prev - 1))}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-white rounded-full p-1 shadow-md hover:bg-ecoscrub-green hover:text-white transition-colors"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button 
                  onClick={() => setCurrentImage(prev => (prev === product.images.length - 1 ? 0 : prev + 1))}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-white rounded-full p-1 shadow-md hover:bg-ecoscrub-green hover:text-white transition-colors"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </>
            )}
          </div>
          
          {product.images.length > 1 && (
            <div className="flex gap-2 overflow-x-auto py-2">
              {product.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={cn(
                    "border-2 rounded min-w-[60px] h-16 overflow-hidden transition-all",
                    currentImage === index ? "border-ecoscrub-green" : "border-transparent"
                  )}
                >
                  <img src={img} alt={`${product.name} view ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>
        
        {/* Product Info */}
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-ecoscrub-brown mb-2">{product.name}</h1>
          
          <div className="flex items-center mb-4">
            <div className="flex text-yellow-400 mr-2">
              {[...Array(5)].map((_, i) => (
                <span key={i} className={i < Math.round(product.rating) ? "text-yellow-400" : "text-gray-300"}>★</span>
              ))}
            </div>
            <span className="text-sm text-ecoscrub-brown/70">({product.reviews} reviews)</span>
          </div>
          
          <p className="text-xl md:text-2xl font-bold text-ecoscrub-green mb-4">₹{product.price}</p>
          
          <p className="text-ecoscrub-brown mb-6">{product.shortDescription}</p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {product.ecoTags.map((tag, index) => (
              <span 
                key={index} 
                className="text-xs bg-ecoscrub-beige px-3 py-1 rounded-full text-ecoscrub-brown/80"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <div className="mb-6">
            <div className="flex items-center mb-2">
              <span className="text-ecoscrub-brown mr-2">Availability:</span>
              {product.stock > 0 ? (
                <span className="text-green-500 font-medium flex items-center">
                  <Check className="h-4 w-4 mr-1" />
                  In Stock ({product.stock})
                </span>
              ) : (
                <span className="text-red-500 font-medium">Out of Stock</span>
              )}
            </div>
          </div>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center border border-ecoscrub-beige rounded-md">
              <button 
                onClick={() => handleQuantityChange(-1)}
                className="px-3 py-2 hover:bg-ecoscrub-beige/50 transition-colors"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="px-4 py-2 border-x border-ecoscrub-beige min-w-[40px] text-center">{quantity}</span>
              <button 
                onClick={() => handleQuantityChange(1)}
                className="px-3 py-2 hover:bg-ecoscrub-beige/50 transition-colors"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
            
            <button 
              onClick={handleAddToCart}
              disabled={product.stock === 0}
              className="eco-button flex items-center disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ShoppingCart className="h-5 w-5 mr-2" />
              Add to Cart
            </button>
            
            <button 
              onClick={handleAddToWishlist}
              className="p-2 border border-ecoscrub-green rounded-md text-ecoscrub-green hover:bg-ecoscrub-green/10 transition-colors"
            >
              <Heart className="h-5 w-5" />
            </button>
            
            <button 
              onClick={handleShare}
              className="p-2 border border-ecoscrub-beige rounded-md text-ecoscrub-brown/70 hover:bg-ecoscrub-beige/50 transition-colors"
            >
              <Share2 className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Product Tabs */}
      <div className="mb-12">
        <div className="flex border-b border-ecoscrub-beige">
          <button 
            onClick={() => setActiveTab('description')} 
            className={cn(
              "px-4 py-2 font-medium transition-colors",
              activeTab === 'description' 
                ? "border-b-2 border-ecoscrub-green text-ecoscrub-green" 
                : "text-ecoscrub-brown/70 hover:text-ecoscrub-brown"
            )}
          >
            Description
          </button>
          <button 
            onClick={() => setActiveTab('benefits')} 
            className={cn(
              "px-4 py-2 font-medium transition-colors",
              activeTab === 'benefits' 
                ? "border-b-2 border-ecoscrub-green text-ecoscrub-green" 
                : "text-ecoscrub-brown/70 hover:text-ecoscrub-brown"
            )}
          >
            Benefits
          </button>
          <button 
            onClick={() => setActiveTab('usage')} 
            className={cn(
              "px-4 py-2 font-medium transition-colors",
              activeTab === 'usage' 
                ? "border-b-2 border-ecoscrub-green text-ecoscrub-green" 
                : "text-ecoscrub-brown/70 hover:text-ecoscrub-brown"
            )}
          >
            Usage Tips
          </button>
          <button 
            onClick={() => setActiveTab('reviews')} 
            className={cn(
              "px-4 py-2 font-medium transition-colors",
              activeTab === 'reviews' 
                ? "border-b-2 border-ecoscrub-green text-ecoscrub-green" 
                : "text-ecoscrub-brown/70 hover:text-ecoscrub-brown"
            )}
          >
            Reviews
          </button>
        </div>
        
        <div className="py-6">
          {activeTab === 'description' && (
            <div className="prose max-w-none text-ecoscrub-brown/80">
              <p className="mb-4">{product.longDescription}</p>
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-ecoscrub-brown mb-2">Materials & Manufacturing</h3>
                <p className="mb-2">
                  <strong>Materials:</strong> {product.material}
                </p>
                <p>
                  <strong>Manufacturing:</strong> Handcrafted by local artisans using traditional techniques. 
                  All materials are ethically sourced and processed without harmful chemicals.
                </p>
              </div>
            </div>
          )}
          
          {activeTab === 'benefits' && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {product.keyBenefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="bg-ecoscrub-beige/30 p-4 rounded-lg text-center"
                >
                  <div className="w-12 h-12 bg-ecoscrub-green/10 rounded-full flex items-center justify-center mx-auto mb-3 text-ecoscrub-green">
                    {getIconComponent(benefit.icon)}
                  </div>
                  <h3 className="font-semibold text-ecoscrub-brown mb-1">{benefit.title}</h3>
                  <p className="text-sm text-ecoscrub-brown/70">{benefit.description}</p>
                </div>
              ))}
            </div>
          )}
          
          {activeTab === 'usage' && (
            <div>
              <h3 className="text-lg font-semibold text-ecoscrub-brown mb-4">How to Use</h3>
              <ul className="space-y-3">
                {product.usageTips.map((tip, index) => (
                  <li key={index} className="flex items-start">
                    <span className="bg-ecoscrub-green/10 text-ecoscrub-green rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">
                      {index + 1}
                    </span>
                    <span className="text-ecoscrub-brown/80">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {activeTab === 'reviews' && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold text-ecoscrub-brown">Customer Reviews</h3>
                <button className="eco-button">Write a Review</button>
              </div>
              
              <div className="space-y-6">
                <div className="border-b border-ecoscrub-beige pb-6">
                  <div className="flex justify-between mb-2">
                    <div>
                      <h4 className="font-medium text-ecoscrub-brown">Priya S.</h4>
                      <div className="flex text-yellow-400">
                        <span>★★★★★</span>
                      </div>
                    </div>
                    <span className="text-sm text-ecoscrub-brown/60">2 weeks ago</span>
                  </div>
                  <p className="text-ecoscrub-brown/80">
                    This is exactly what I've been looking for! Great quality and it works so well. I love that it's completely compostable too.
                  </p>
                </div>
                
                <div className="border-b border-ecoscrub-beige pb-6">
                  <div className="flex justify-between mb-2">
                    <div>
                      <h4 className="font-medium text-ecoscrub-brown">Rahul K.</h4>
                      <div className="flex text-yellow-400">
                        <span>★★★★☆</span>
                      </div>
                    </div>
                    <span className="text-sm text-ecoscrub-brown/60">1 month ago</span>
                  </div>
                  <p className="text-ecoscrub-brown/80">
                    Good product overall. It's durable and does the job well. The only reason for 4 stars instead of 5 is that it took a bit longer to dry than I expected.
                  </p>
                </div>
                
                <div>
                  <button className="w-full py-2 border border-ecoscrub-beige text-ecoscrub-brown/70 rounded-md hover:bg-ecoscrub-beige/20 transition-colors">
                    Load More Reviews
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold text-ecoscrub-brown mb-6">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <RelatedProductCard key={relatedProduct.id} product={relatedProduct} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const RelatedProductCard = ({ product }: { product: Product }) => {
  const addToCart = () => {
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };
  
  return (
    <div className="product-card group">
      <div className="relative overflow-hidden h-48">
        <Link to={`/product/${product.id}`}>
          <img 
            src={product.images[0]} 
            alt={product.name} 
            className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-300"
          />
        </Link>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-1">
          <Link to={`/product/${product.id}`}>
            <h3 className="font-semibold text-ecoscrub-brown hover:text-ecoscrub-green transition-colors">{product.name}</h3>
          </Link>
          <span className="font-bold text-ecoscrub-green">₹{product.price}</span>
        </div>
        
        <div className="flex items-center mb-3">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <span key={i} className={i < Math.round(product.rating) ? "text-yellow-400" : "text-gray-300"}>★</span>
            ))}
          </div>
          <span className="text-xs text-ecoscrub-brown/70 ml-1">({product.reviews})</span>
        </div>
        
        <button 
          onClick={addToCart}
          className="w-full bg-ecoscrub-green/10 text-ecoscrub-green py-2 rounded-md font-medium hover:bg-ecoscrub-green hover:text-white transition-colors"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
