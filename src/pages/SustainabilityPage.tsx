
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Recycle, Leaf, Check, Trash } from 'lucide-react';

const SustainabilityPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          {/* Hero Section */}
          <div className="mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-ecoscrub-brown mb-4 text-center">Our Sustainability Commitment</h1>
            <p className="text-ecoscrub-brown/80 max-w-3xl mx-auto text-center">
              At EcoScrub, sustainability isn't just a feature—it's our foundation. Learn how we're working to eliminate plastic waste one scrubber at a time.
            </p>
          </div>
          
          {/* Materials Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-ecoscrub-brown mb-6">Our Materials</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-ecoscrub-brown mb-4">Coconut Fiber</h3>
                <div className="flex mb-4">
                  <img 
                    src="https://media-hosting.imagekit.io/c3d4173b3a304a05/WhatsApp%20Image%202025-04-24%20at%2018.20.48_14d9df5c.jpg?Expires=1840107083&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=Z7Nt6TRbYoKg8uQK6g2-bV8eQrQmdecjf-zg9USXAoiumnyh5SrafV3kKCLOS~9FEHQ8dsQ3dKMax6QQI9o42EiNlPv3PpzNhaUj-iRixdMSebgGqeN9GyaN~NHYa4WBV2C25qdEJt-7ZGBSdANALyondBtj~6sXjEeTOYBl6B70zSOedivtgQQaVXDpCftjSFUl6FsiH-8Zh6~ibpxCKBvPG-wzDVjqL2kQek8KA6~7lh~M3utGieeG-NXbEpG~2tLpMy1IFDyepNs0ddQ1eJYGKOWYTvuzz94WNszV1kQHLiqdTeMr5wt4I8~I1FYhpO3ewE-OeibYISq7Bo4gJg__" 
                    alt="Coconut Fiber" 
                    className="w-24 h-24 object-cover rounded-md mr-4"
                  />
                  <div>
                    <p className="text-ecoscrub-brown/80 mb-2">
                      Sourced from coconut husks that would otherwise be discarded, our coconut fiber is a byproduct of coconut farming that provides additional income to farmers.
                    </p>
                    <ul className="space-y-1">
                      <li className="flex items-center text-sm text-ecoscrub-brown/70">
                        <Check className="h-4 w-4 text-ecoscrub-green mr-2" />
                        Biodegradable and compostable
                      </li>
                      <li className="flex items-center text-sm text-ecoscrub-brown/70">
                        <Check className="h-4 w-4 text-ecoscrub-green mr-2" />
                        Naturally antibacterial properties
                      </li>
                      <li className="flex items-center text-sm text-ecoscrub-brown/70">
                        <Check className="h-4 w-4 text-ecoscrub-green mr-2" />
                        Durable and long-lasting
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-ecoscrub-brown mb-4">Ridge Gourd (Luffa)</h3>
                <div className="flex mb-4">
                  <img 
                    src="https://media-hosting.imagekit.io/3543ef0a2ecb488e/images%20(1).jpeg?Expires=1840106850&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=3C3oIBIFX2OYMGOYH7AGMROxoea5weujkuf3wiktcisASy~acWOhpMNml5h21dP32jNxLRFA-OVQLvjfYu9Hg1MBZ7f9OiFSDWUcyXrZUtXb4ydXtaVh3Pf8CTyju1nqz3Hc6IBBgcHzwsP2l9EwnW9H9Xz7P45zrkVINJx91EwBaCTpD8A19tw0ePvHOQrF58OamaFGwUtUa99640GNPG-h48kCLWQXXnrxUooNwxLXKHy1Y2XJyexPZq~eWyDwBMlwUp08Js8RrzzZLWODlu7n6ONi3qlRPJaAej5LQtg8Q4NezlxACaWZfmFDjOWpr0TaFCmDeMGdxpR1q1hckA__" 
                    alt="Ridge Gourd" 
                    className="w-24 h-24 object-cover rounded-md mr-4"
                  />
                  <div>
                    <p className="text-ecoscrub-brown/80 mb-2">
                      Our ridge gourds are grown without pesticides on small family farms. When fully mature, they develop a natural fiber network that's perfect for gentle exfoliation.
                    </p>
                    <ul className="space-y-1">
                      <li className="flex items-center text-sm text-ecoscrub-brown/70">
                        <Check className="h-4 w-4 text-ecoscrub-green mr-2" />
                        100% plant-based and natural
                      </li>
                      <li className="flex items-center text-sm text-ecoscrub-brown/70">
                        <Check className="h-4 w-4 text-ecoscrub-green mr-2" />
                        Renewable annual crop
                      </li>
                      <li className="flex items-center text-sm text-ecoscrub-brown/70">
                        <Check className="h-4 w-4 text-ecoscrub-green mr-2" />
                        Gentle on skin and surfaces
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-ecoscrub-brown mb-4">Bamboo</h3>
                <div className="flex mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1591488320623-011701524808?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" 
                    alt="Bamboo" 
                    className="w-24 h-24 object-cover rounded-md mr-4"
                  />
                  <div>
                    <p className="text-ecoscrub-brown/80 mb-2">
                      Bamboo is one of the fastest-growing plants on Earth, making it an incredibly sustainable resource. Our bamboo is harvested from managed forests.
                    </p>
                    <ul className="space-y-1">
                      <li className="flex items-center text-sm text-ecoscrub-brown/70">
                        <Check className="h-4 w-4 text-ecoscrub-green mr-2" />
                        Grows up to 91 cm per day
                      </li>
                      <li className="flex items-center text-sm text-ecoscrub-brown/70">
                        <Check className="h-4 w-4 text-ecoscrub-green mr-2" />
                        No fertilizers or pesticides needed
                      </li>
                      <li className="flex items-center text-sm text-ecoscrub-brown/70">
                        <Check className="h-4 w-4 text-ecoscrub-green mr-2" />
                        Naturally water-resistant
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-ecoscrub-brown mb-4">Packaging</h3>
                <div className="flex mb-4">
                  <img 
                    src="https://media-hosting.imagekit.io/e759fe6d81944dfe/Plastic_Free_Packaging_-_Email_Signature.webp?Expires=1840109253&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=177Zyeuf5exMN0~izz3jVGBYM7-jem4gfbMObazH8FFSQh1lVMkhXFrr6Th1AEyGc2p3ue-PdiTM6-XgFHlqNWYL1~KNfAWsQo2hU9TsPkJHBCt6DkCtPb2tNtyudJEfKEgNS~NKL5sy-9vHYY-4-ZU20STmgfz1Dv1tUWQQ3xpgObqOQPDbFj1AnyQSKFVtAO7X4lOGFi1J14xaP25a248ZxSsb2o8b3a-mcwGlypWhh8Ay408sfp0oGYYCu4q-7wagFsu3UtUi2Y47fEdYLqQd~KdZVdfxZcvwy425fQUVKUotdGOLBp~N829y0EOfJjg9cPypaslGEp9hSGqwww__" 
                    alt="Packaging" 
                    className="w-24 h-24 object-cover rounded-md mr-4"
                  />
                  <div>
                    <p className="text-ecoscrub-brown/80 mb-2">
                      All our packaging is plastic-free and either recyclable or compostable. We use recycled paper, cardboard, and plant-based compostable materials.
                    </p>
                    <ul className="space-y-1">
                      <li className="flex items-center text-sm text-ecoscrub-brown/70">
                        <Check className="h-4 w-4 text-ecoscrub-green mr-2" />
                        Zero plastic guarantee
                      </li>
                      <li className="flex items-center text-sm text-ecoscrub-brown/70">
                        <Check className="h-4 w-4 text-ecoscrub-green mr-2" />
                        Printed with non-toxic vegetable inks
                      </li>
                      <li className="flex items-center text-sm text-ecoscrub-brown/70">
                        <Check className="h-4 w-4 text-ecoscrub-green mr-2" />
                        Minimalist design to reduce waste
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Production Process */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-ecoscrub-brown mb-6">Our Production Process</h2>
            
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-ecoscrub-green/10 rounded-full flex items-center justify-center mx-auto mb-4 text-ecoscrub-green">
                  <span className="text-3xl">1</span>
                </div>
                <h3 className="font-semibold text-ecoscrub-brown mb-2">Ethical Sourcing</h3>
                <p className="text-sm text-ecoscrub-brown/70">
                  Materials are ethically sourced from local farmers who are paid fair wages.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-ecoscrub-green/10 rounded-full flex items-center justify-center mx-auto mb-4 text-ecoscrub-green">
                  <span className="text-3xl">2</span>
                </div>
                <h3 className="font-semibold text-ecoscrub-brown mb-2">Natural Processing</h3>
                <p className="text-sm text-ecoscrub-brown/70">
                  Materials are cleaned and processed using traditional methods without harmful chemicals.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-ecoscrub-green/10 rounded-full flex items-center justify-center mx-auto mb-4 text-ecoscrub-green">
                  <span className="text-3xl">3</span>
                </div>
                <h3 className="font-semibold text-ecoscrub-brown mb-2">Handcrafted</h3>
                <p className="text-sm text-ecoscrub-brown/70">
                  Each product is meticulously handcrafted by skilled artisans in small batches.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-ecoscrub-green/10 rounded-full flex items-center justify-center mx-auto mb-4 text-ecoscrub-green">
                  <span className="text-3xl">4</span>
                </div>
                <h3 className="font-semibold text-ecoscrub-brown mb-2">Minimal Packaging</h3>
                <p className="text-sm text-ecoscrub-brown/70">
                  Products are shipped in minimal, plastic-free packaging that's reusable or compostable.
                </p>
              </div>
            </div>
          </div>
          
          {/* Environmental Impact */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-ecoscrub-brown mb-6">Our Environmental Impact</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-ecoscrub-beige/30 p-6 rounded-lg">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-ecoscrub-green shadow-sm">
                    <Recycle className="h-8 w-8" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-ecoscrub-brown mb-2 text-center">12,000+</h3>
                <p className="text-sm text-ecoscrub-brown/70 text-center">
                  Plastic scrubbers avoided since our launch
                </p>
              </div>
              
              <div className="bg-ecoscrub-beige/30 p-6 rounded-lg">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-ecoscrub-green shadow-sm">
                    <Leaf className="h-8 w-8" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-ecoscrub-brown mb-2 text-center">100%</h3>
                <p className="text-sm text-ecoscrub-brown/70 text-center">
                  Biodegradable and compostable products
                </p>
              </div>
              
              <div className="bg-ecoscrub-beige/30 p-6 rounded-lg">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-ecoscrub-green shadow-sm">
                    <Trash className="h-8 w-8" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-ecoscrub-brown mb-2 text-center">120 kg</h3>
                <p className="text-sm text-ecoscrub-brown/70 text-center">
                  Plastic waste prevented from entering landfills
                </p>
              </div>
              
              <div className="bg-ecoscrub-beige/30 p-6 rounded-lg">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-ecoscrub-green shadow-sm">
                    <Check className="h-8 w-8" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-ecoscrub-brown mb-2 text-center">3</h3>
                <p className="text-sm text-ecoscrub-brown/70 text-center">
                  Environmental certifications earned
                </p>
              </div>
            </div>
          </div>
          
          {/* Disposal Guide */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-ecoscrub-brown mb-6">End-of-Life Guide</h2>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-ecoscrub-brown/80 mb-4">
                All EcoScrub products are designed to be completely biodegradable and compostable. When your scrubber has reached the end of its useful life, here's how to dispose of it:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border border-ecoscrub-beige p-4 rounded-lg">
                  <h3 className="font-semibold text-ecoscrub-brown mb-2">Home Composting</h3>
                  <ol className="list-decimal pl-5 space-y-1 text-sm text-ecoscrub-brown/70">
                    <li>Wash your scrubber to remove any soap residue</li>
                    <li>Cut it into smaller pieces to speed up decomposition</li>
                    <li>Add it to your home compost bin</li>
                    <li>It will fully decompose within 1-3 months</li>
                  </ol>
                </div>
                
                <div className="border border-ecoscrub-beige p-4 rounded-lg">
                  <h3 className="font-semibold text-ecoscrub-brown mb-2">Garden Use</h3>
                  <ol className="list-decimal pl-5 space-y-1 text-sm text-ecoscrub-brown/70">
                    <li>Wash thoroughly to remove soap residues</li>
                    <li>Cut into pieces and mix into garden soil</li>
                    <li>Can be used as mulch around plants</li>
                    <li>Adds structure to soil and helps retain moisture</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          
          {/* Certifications */}
          <div>
            <h2 className="text-2xl font-bold text-ecoscrub-brown mb-6">Our Certifications</h2>
            
            <div className="flex flex-wrap justify-center gap-8">
              <div className="flex flex-col items-center">
                <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center border border-ecoscrub-beige shadow-sm mb-4">
                  <span className="text-4xl">🌱</span>
                </div>
                <h3 className="font-semibold text-ecoscrub-brown">Certified Biodegradable</h3>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center border border-ecoscrub-beige shadow-sm mb-4">
                  <span className="text-4xl">🔄</span>
                </div>
                <h3 className="font-semibold text-ecoscrub-brown">Zero Plastic Certified</h3>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center border border-ecoscrub-beige shadow-sm mb-4">
                  <span className="text-4xl">👐</span>
                </div>
                <h3 className="font-semibold text-ecoscrub-brown">Fair Trade Certified</h3>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SustainabilityPage;
