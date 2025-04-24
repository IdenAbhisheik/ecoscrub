
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Star, MessageCircle, Image, Check } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const reviews = [
  {
    id: 1,
    name: "Anjali S.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80",
    rating: 5,
    review: "The coconut scrubber has transformed my shower routine. My skin feels so soft and rejuvenated after each use, and I love knowing I'm not contributing to plastic waste.",
    productName: "Coconut + Ridge Gourd Body Scrubber",
    location: "Mumbai",
    date: "3 months ago",
    verified: true,
    helpful: 24,
    image: "https://media-hosting.imagekit.io/c3d4173b3a304a05/WhatsApp%20Image%202025-04-24%20at%2018.20.48_14d9df5c.jpg?Expires=1840107083&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=Z7Nt6TRbYoKg8uQK6g2-bV8eQrQmdecjf-zg9USXAoiumnyh5SrafV3kKCLOS~9FEHQ8dsQ3dKMax6QQI9o42EiNlPv3PpzNhaUj-iRixdMSebgGqeN9GyaN~NHYa4WBV2C25qdEJt-7ZGBSdANALyondBtj~6sXjEeTOYBl6B70zSOedivtgQQaVXDpCftjSFUl6FsiH-8Zh6~ibpxCKBvPG-wzDVjqL2kQek8KA6~7lh~M3utGieeG-NXbEpG~2tLpMy1IFDyepNs0ddQ1eJYGKOWYTvuzz94WNszV1kQHLiqdTeMr5wt4I8~I1FYhpO3ewE-OeibYISq7Bo4gJg__"
  },
  {
    id: 2,
    name: "Vikram P.",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80",
    rating: 5,
    review: "I was skeptical about switching from my plastic dish scrubber, but the coconut version works even better! It doesn't scratch my non-stick pans and seems to be lasting longer too.",
    productName: "Coconut Dish Scrubber",
    location: "Delhi",
    date: "1 month ago",
    verified: true,
    helpful: 18,
    image: null
  },
  {
    id: 3,
    name: "Meera J.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80",
    rating: 4,
    review: "The Ridge Gourd scrubber is perfect for daily use. It's gentle enough for my sensitive skin but still effective. Love the plastic-free packaging too!",
    productName: "Ridge Gourd (Luffa) Body Scrubber",
    location: "Bangalore",
    date: "2 months ago",
    verified: true,
    helpful: 12,
    image: null
  },
  {
    id: 4,
    name: "Rahul M.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80",
    rating: 5,
    review: "This company is a game-changer for my lifestyle  . It reaches all the nooks and crannies that were impossible before.",
    productName: "Bamboo Bottle Cleaner",
    location: "Chennai",
    date: "2 weeks ago",
    verified: true,
    helpful: 9,
    image: ""
  },
  {
    id: 5,
    name: "Priya K.",
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80",
    rating: 5,
    review: "I bought the combo pack as a gift for my eco-conscious friend and she was thrilled! The quality is excellent and the packaging is beautiful. Will definitely be buying more for other friends.",
    productName: "EcoScrub Combo Pack",
    location: "Hyderabad",
    date: "1 month ago",
    verified: true,
    helpful: 15,
    image: null
  },
  {
    id: 6,
    name: "Arjun S.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80",
    rating: 4,
    review: "Great product that does what it says. The only reason for 4 stars instead of 5 is that it takes a bit longer to dry than I expected. Otherwise, very happy with my purchase.",
    productName: "Ridge Gourd (Luffa) Body Scrubber",
    location: "Pune",
    date: "3 months ago",
    verified: true,
    helpful: 7,
    image: null
  },
  {
    id: 7,
    name: "Divya R.",
    avatar: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80",
    rating: 5,
    review: "I'm in love with my coconut dish scrubber! It works so well on tough stains and doesn't hold onto food particles like my old plastic sponge did. Plus, knowing it's better for the environment makes me feel good about using it.",
    productName: "Coconut Dish Scrubber",
    location: "Kolkata",
    date: "2 weeks ago",
    verified: true,
    helpful: 11,
    image: null
  },
  {
    id: 8,
    name: "Kiran T.",
    avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80",
    rating: 5,
    review: "The dual-textured body scrubber is ingenious! I use the coconut side for my feet and elbows, and the gentler luffa side for the rest of my body. It's like having a spa treatment at home.",
    productName: "Coconut + Ridge Gourd Body Scrubber",
    location: "Ahmedabad",
    date: "1 month ago",
    verified: true,
    helpful: 19,
    image: null
  }
];

const ReviewsPage = () => {
  const [filterProduct, setFilterProduct] = useState('');
  const [filterRating, setFilterRating] = useState(0);
  const [reviewFormOpen, setReviewFormOpen] = useState(false);
  const [reviewForm, setReviewForm] = useState({
    name: '',
    email: '',
    product: '',
    rating: 0,
    review: '',
    image: null as File | null
  });
  
  // Filter reviews based on selected filters
  const filteredReviews = reviews.filter(review => {
    if (filterProduct && review.productName !== filterProduct) return false;
    if (filterRating > 0 && review.rating < filterRating) return false;
    return true;
  });
  
  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setReviewForm(prev => ({ ...prev, [name]: value }));
  };
  
  const handleRatingChange = (rating: number) => {
    setReviewForm(prev => ({ ...prev, rating }));
  };
  
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setReviewForm(prev => ({ ...prev, image: e.target.files![0] }));
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!reviewForm.name || !reviewForm.email || !reviewForm.product || reviewForm.rating === 0 || !reviewForm.review) {
      toast({
        title: "Please complete all fields",
        description: "All fields are required except the image upload.",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Thank you for your review!",
      description: "Your review has been submitted successfully.",
    });
    
    // Reset form
    setReviewForm({
      name: '',
      email: '',
      product: '',
      rating: 0,
      review: '',
      image: null
    });
    
    setReviewFormOpen(false);
  };
  
  const markHelpful = (reviewId: number) => {
    toast({
      title: "Thank you!",
      description: "You've marked this review as helpful.",
    });
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-ecoscrub-brown mb-4 text-center">Customer Reviews</h1>
            <p className="text-ecoscrub-brown/70 text-center max-w-2xl mx-auto">
              Read what our customers are saying about their EcoScrub experience. Real reviews from verified purchases.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12">
            {/* Filters */}
            <div className="w-full md:w-64 bg-white rounded-lg shadow-md p-6">
              <h2 className="font-semibold text-ecoscrub-brown mb-4">Filter Reviews</h2>
              
              <div className="mb-4">
                <label className="block text-sm text-ecoscrub-brown/70 mb-2">By Product</label>
                <select 
                  value={filterProduct} 
                  onChange={(e) => setFilterProduct(e.target.value)}
                  className="natural-input w-full"
                >
                  <option value="">All Products</option>
                  <option value="Coconut + Ridge Gourd Body Scrubber">Coconut + Ridge Gourd Body Scrubber</option>
                  <option value="Ridge Gourd (Luffa) Body Scrubber">Ridge Gourd (Luffa) Body Scrubber</option>
                  <option value="Coconut Dish Scrubber">Coconut Dish Scrubber</option>
                  <option value="Bamboo Bottle Cleaner">Bamboo Bottle Cleaner</option>
                  <option value="EcoScrub Combo Pack">EcoScrub Combo Pack</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm text-ecoscrub-brown/70 mb-2">By Rating</label>
                <div className="space-y-2">
                  {[5, 4, 3, 2, 1].map(rating => (
                    <button 
                      key={rating}
                      className={`flex items-center w-full p-2 rounded-md transition-colors ${
                        filterRating === rating 
                          ? 'bg-ecoscrub-green text-white' 
                          : 'hover:bg-ecoscrub-beige/50'
                      }`}
                      onClick={() => setFilterRating(rating === filterRating ? 0 : rating)}
                    >
                      <div className="flex text-yellow-400 mr-2">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className={i < rating ? "text-yellow-400" : "text-gray-300"}>★</span>
                        ))}
                      </div>
                      <span className="text-sm">& up</span>
                    </button>
                  ))}
                </div>
              </div>
              
              <button 
                onClick={() => {
                  setFilterProduct('');
                  setFilterRating(0);
                }}
                className="w-full mt-4 py-2 border border-ecoscrub-green text-ecoscrub-green rounded-md hover:bg-ecoscrub-green/10 transition-colors"
              >
                Clear Filters
              </button>
            </div>
            
            {/* Reviews */}
            <div className="flex-1">
              <div className="flex justify-between items-center mb-6">
                <p className="text-ecoscrub-brown/70">{filteredReviews.length} reviews</p>
                <button 
                  onClick={() => setReviewFormOpen(!reviewFormOpen)}
                  className="eco-button flex items-center"
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Write a Review
                </button>
              </div>
              
              {/* Review Form */}
              {reviewFormOpen && (
                <div className="bg-white rounded-lg shadow-md p-6 mb-8 animate-fade-in">
                  <h2 className="text-xl font-semibold text-ecoscrub-brown mb-4">Write Your Review</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-ecoscrub-brown mb-1">Your Name*</label>
                        <input 
                          type="text" 
                          name="name" 
                          value={reviewForm.name}
                          onChange={handleFormChange}
                          className="natural-input w-full" 
                          required 
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-ecoscrub-brown mb-1">Email Address*</label>
                        <input 
                          type="email" 
                          name="email" 
                          value={reviewForm.email}
                          onChange={handleFormChange}
                          className="natural-input w-full" 
                          required 
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-ecoscrub-brown mb-1">Product*</label>
                      <select 
                        name="product" 
                        value={reviewForm.product}
                        onChange={handleFormChange}
                        className="natural-input w-full" 
                        required
                      >
                        <option value="">Select a product</option>
                        <option value="Coconut + Ridge Gourd Body Scrubber">Coconut + Ridge Gourd Body Scrubber</option>
                        <option value="Ridge Gourd (Luffa) Body Scrubber">Ridge Gourd (Luffa) Body Scrubber</option>
                        <option value="Coconut Dish Scrubber">Coconut Dish Scrubber</option>
                        <option value="Bamboo Bottle Cleaner">Bamboo Bottle Cleaner</option>
                        <option value="EcoScrub Combo Pack">EcoScrub Combo Pack</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-ecoscrub-brown mb-1">Rating*</label>
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((rating) => (
                          <button
                            key={rating}
                            type="button"
                            onClick={() => handleRatingChange(rating)}
                            className="text-2xl"
                          >
                            <span className={rating <= reviewForm.rating ? "text-yellow-400" : "text-gray-300"}>
                              ★
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-ecoscrub-brown mb-1">Your Review*</label>
                      <textarea 
                        name="review" 
                        value={reviewForm.review}
                        onChange={handleFormChange}
                        className="natural-input w-full min-h-[120px]" 
                        required
                      ></textarea>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-ecoscrub-brown mb-1">Add Photo (optional)</label>
                      <div className="flex items-center">
                        <label className="cursor-pointer bg-ecoscrub-beige/50 hover:bg-ecoscrub-beige transition-colors rounded-md px-4 py-2 flex items-center">
                          <Image className="h-5 w-5 mr-2" />
                          <span>Choose Image</span>
                          <input 
                            type="file" 
                            accept="image/*" 
                            onChange={handleImageChange}
                            className="hidden" 
                          />
                        </label>
                        {reviewForm.image && (
                          <span className="ml-3 text-sm text-ecoscrub-brown/70">
                            {reviewForm.image.name}
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <button 
                        type="submit"
                        className="eco-button"
                      >
                        Submit Review
                      </button>
                      <button 
                        type="button"
                        onClick={() => setReviewFormOpen(false)}
                        className="px-6 py-2 border border-ecoscrub-brown/20 text-ecoscrub-brown rounded-md hover:bg-ecoscrub-beige/20 transition-colors"
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              )}
              
              {/* Reviews List */}
              {filteredReviews.length > 0 ? (
                <div className="space-y-6">
                  {filteredReviews.map((review) => (
                    <div key={review.id} className="bg-white rounded-lg shadow-md p-6">
                      <div className="flex justify-between mb-4">
                        <div className="flex items-center">
                          <img 
                            src={review.avatar} 
                            alt={review.name} 
                            className="w-10 h-10 rounded-full object-cover mr-3"
                          />
                          <div>
                            <div className="flex items-center">
                              <h3 className="font-semibold text-ecoscrub-brown">{review.name}</h3>
                              {review.verified && (
                                <div className="ml-2 flex items-center text-green-600 bg-green-50 px-2 py-0.5 rounded-full text-xs">
                                  <Check className="h-3 w-3 mr-0.5" />
                                  Verified Purchase
                                </div>
                              )}
                            </div>
                            <div className="flex items-center text-sm text-ecoscrub-brown/60">
                              <span>{review.location}</span>
                              <span className="mx-2">•</span>
                              <span>{review.date}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <span key={i} className={i < review.rating ? "text-yellow-400" : "text-gray-300"}>★</span>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <p className="text-sm font-medium text-ecoscrub-green mb-2">{review.productName}</p>
                        <p className="text-ecoscrub-brown/80 mb-4">{review.review}</p>
                        
                        {review.image && (
                          <div className="mb-4">
                            <img 
                              src={review.image} 
                              alt="Customer review" 
                              className="w-24 h-24 object-cover rounded-md"
                            />
                          </div>
                        )}
                        
                        <button 
                          onClick={() => markHelpful(review.id)}
                          className="text-sm text-ecoscrub-brown/60 hover:text-ecoscrub-brown transition-colors"
                        >
                          Was this review helpful? ({review.helpful})
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-white rounded-lg shadow-md p-8 text-center">
                  <p className="text-ecoscrub-brown/70">No reviews match your filter criteria.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ReviewsPage;
