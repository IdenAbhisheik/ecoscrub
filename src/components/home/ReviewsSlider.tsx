
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: "Anjali S.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80",
    rating: 5,
    review: "The coconut scrubber has transformed my shower routine. My skin feels so soft and rejuvenated after each use, and I love knowing I'm not contributing to plastic waste.",
    location: "Mumbai",
    date: "3 months ago"
  },
  {
    id: 2,
    name: "Vikram P.",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80",
    rating: 5,
    review: "I was skeptical about switching from my plastic dish scrubber, but the coconut version works even better! It doesn't scratch my non-stick pans and seems to be lasting longer too.",
    location: "Delhi",
    date: "1 month ago"
  },
  {
    id: 3,
    name: "Meera J.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80",
    rating: 4,
    review: "The Ridge Gourd scrubber is perfect for daily use. It's gentle enough for my sensitive skin but still effective. Love the plastic-free packaging too!",
    location: "Bangalore",
    date: "2 months ago"
  },
  {
    id: 4,
    name: "Rahul M.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80",
    rating: 5,
    review: "The company is a game-changer for my lifestyle . It reaches all the nooks and crannies that were impossible before.",
    location: "Chennai",
    date: "2 weeks ago"
  }
];

const ReviewsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const handlePrev = () => {
    setCurrentIndex(prev => Math.max(0, prev - 1));
  };
  
  const handleNext = () => {
    setCurrentIndex(prev => Math.min(reviews.length - 1, prev + 1));
  };
  
  return (
    <section className="bg-ecoscrub-beige section-padding">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-ecoscrub-brown mb-2 text-center">What Our Customers Say</h2>
        <p className="text-center text-ecoscrub-brown/70 mb-12 max-w-xl mx-auto">
          Join thousands of satisfied customers who've made the switch to sustainable cleaning.
        </p>
        
        <div className="relative max-w-4xl mx-auto">
          <div
            className="flex transition-transform duration-300"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {reviews.map((review) => (
              <div key={review.id} className="min-w-full px-4">
                <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <img 
                      src={review.avatar} 
                      alt={review.name} 
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h3 className="font-semibold text-ecoscrub-brown">{review.name}</h3>
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className={i < review.rating ? "text-yellow-400" : "text-gray-300"}>★</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <blockquote className="text-ecoscrub-brown/80 italic mb-4">
                    "{review.review}"
                  </blockquote>
                  <div className="text-sm text-ecoscrub-brown/60 flex justify-between">
                    <span>{review.location}</span>
                    <span>{review.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Navigation dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {reviews.map((_, i) => (
              <button 
                key={i} 
                className={`w-2 h-2 rounded-full transition-all ${currentIndex === i ? 'bg-ecoscrub-green w-6' : 'bg-ecoscrub-green/30'}`}
                onClick={() => setCurrentIndex(i)}
              >
                <span className="sr-only">Review {i + 1}</span>
              </button>
            ))}
          </div>
          
          {/* Navigation buttons */}
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 p-2 rounded-full bg-white shadow-md text-ecoscrub-green hover:bg-ecoscrub-green hover:text-white transition-colors"
            onClick={handlePrev}
            disabled={currentIndex === 0}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 p-2 rounded-full bg-white shadow-md text-ecoscrub-green hover:bg-ecoscrub-green hover:text-white transition-colors"
            onClick={handleNext}
            disabled={currentIndex === reviews.length - 1}
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSlider;
