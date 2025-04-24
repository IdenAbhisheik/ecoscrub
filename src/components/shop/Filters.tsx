
import { useState } from 'react';
import { Sliders, ChevronDown, ChevronUp } from 'lucide-react';

interface FiltersProps {
  onFilterChange: (filters: {
    category: string;
    priceRange: [number, number];
    material: string;
    ecoTags: string[];
  }) => void;
}

const Filters = ({ onFilterChange }: FiltersProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [category, setCategory] = useState('');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500]);
  const [material, setMaterial] = useState('');
  const [ecoTags, setEcoTags] = useState<string[]>([]);
  
  const categories = ["Body Care", "Kitchen", "Bathroom", "Home"];
  const materials = ["Coconut Fiber", "Ridge Gourd", "Bamboo", "Cotton"];
  const availableTags = ["Biodegradable", "Plastic-Free", "Handcrafted", "Sustainable", "Antibacterial", "Ethically Farmed"];
  
  const handleEcoTagToggle = (tag: string) => {
    setEcoTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag) 
        : [...prev, tag]
    );
  };
  
  const applyFilters = () => {
    onFilterChange({
      category,
      priceRange,
      material,
      ecoTags
    });
  };
  
  const resetFilters = () => {
    setCategory('');
    setPriceRange([0, 500]);
    setMaterial('');
    setEcoTags([]);
    
    onFilterChange({
      category: '',
      priceRange: [0, 500],
      material: '',
      ecoTags: []
    });
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-6">
      <div 
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center">
          <Sliders className="h-5 w-5 mr-2 text-ecoscrub-green" />
          <h3 className="font-semibold text-ecoscrub-brown">Filter Products</h3>
        </div>
        {isOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
      </div>
      
      {isOpen && (
        <div className="mt-4 border-t border-ecoscrub-beige pt-4">
          {/* Category Filter */}
          <div className="mb-4">
            <h4 className="text-sm font-medium text-ecoscrub-brown mb-2">Category</h4>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="natural-input w-full"
            >
              <option value="">All Categories</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
          
          {/* Price Range Filter */}
          <div className="mb-4">
            <h4 className="text-sm font-medium text-ecoscrub-brown mb-2">
              Price Range: ₹{priceRange[0]} - ₹{priceRange[1]}
            </h4>
            <div className="flex gap-4">
              <input 
                type="range" 
                min="0" 
                max="500" 
                value={priceRange[0]} 
                onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                className="w-full"
              />
              <input 
                type="range" 
                min="0" 
                max="500" 
                value={priceRange[1]} 
                onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                className="w-full"
              />
            </div>
          </div>
          
          {/* Material Filter */}
          <div className="mb-4">
            <h4 className="text-sm font-medium text-ecoscrub-brown mb-2">Material</h4>
            <select
              value={material}
              onChange={(e) => setMaterial(e.target.value)}
              className="natural-input w-full"
            >
              <option value="">All Materials</option>
              {materials.map((mat) => (
                <option key={mat} value={mat}>{mat}</option>
              ))}
            </select>
          </div>
          
          {/* Eco Tags Filter */}
          <div className="mb-4">
            <h4 className="text-sm font-medium text-ecoscrub-brown mb-2">Eco Tags</h4>
            <div className="flex flex-wrap gap-2">
              {availableTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => handleEcoTagToggle(tag)}
                  className={`text-xs px-3 py-1 rounded-full transition-colors ${
                    ecoTags.includes(tag) 
                      ? 'bg-ecoscrub-green text-white' 
                      : 'bg-ecoscrub-beige text-ecoscrub-brown hover:bg-ecoscrub-green/20'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
          
          {/* Filter Actions */}
          <div className="flex gap-2 mt-4">
            <button 
              onClick={applyFilters}
              className="eco-button flex-1"
            >
              Apply Filters
            </button>
            <button 
              onClick={resetFilters}
              className="px-4 py-2 border border-ecoscrub-green text-ecoscrub-green rounded-md hover:bg-ecoscrub-green/10 transition-colors"
            >
              Reset
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Filters;
