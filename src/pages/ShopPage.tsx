
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Filters from '@/components/shop/Filters';
import SortOptions from '@/components/shop/SortOptions';
import ProductGrid from '@/components/shop/ProductGrid';

const ShopPage = () => {
  const [filters, setFilters] = useState({
    category: '',
    priceRange: [0, 500] as [number, number],
    material: '',
    ecoTags: [] as string[]
  });
  
  const [sortOption, setSortOption] = useState('popular');
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-ecoscrub-brown mb-2">Shop All Products</h1>
            <p className="text-ecoscrub-brown/70">
              Discover our range of sustainable, plastic-free cleaning products
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <Filters onFilterChange={setFilters} />
            </div>
            
            <div className="lg:col-span-3">
              <SortOptions onSortChange={setSortOption} sortOption={sortOption} />
              <ProductGrid filters={filters} sortOption={sortOption} />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ShopPage;
