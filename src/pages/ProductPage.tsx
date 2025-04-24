
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductDetail from '@/components/product/ProductDetail';

const ProductPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <ProductDetail />
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductPage;
