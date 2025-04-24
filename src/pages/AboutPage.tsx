
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          {/* Hero Section */}
          <div className="mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-ecoscrub-brown mb-4 text-center">Our Story</h1>
            <p className="text-ecoscrub-brown/80 max-w-3xl mx-auto text-center">
              From a university project to a sustainable business, discover how EcoScrub was born from a passion to reduce plastic waste and revive traditional cleaning methods.
            </p>
          </div>
          
          {/* Mission Section */}
          <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
            <div>
              <h2 className="text-2xl font-bold text-ecoscrub-brown mb-4">Our Mission</h2>
              <p className="text-ecoscrub-brown/80 mb-4">
                At EcoScrub, we're on a mission to eliminate plastic from your cleaning routine. We believe that small, everyday changes can make a significant impact on our planet's health.
              </p>
              <p className="text-ecoscrub-brown/80">
                Every EcoScrub product represents one less piece of plastic in our oceans and landfills. By reviving traditional, plant-based cleaning tools, we're not just creating better products—we're helping to create a better future.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://media-hosting.imagekit.io/4caa7e83b05045c3/WhatsApp%20Image%202025-04-24%20at%2018.46.33_17df0612.jpg?Expires=1840108623&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=VfpE3v6BYOiZBeCkolxjv5ys0-knCu8wtjq2kFAT4gWl153GwY0hRyTAMM4sdi~anPq-xrQ42PU0T9F~64IUDdB~~11UHHewys9T~O6h8lKh11-mT3mNPECa0hQl1BkSR8LU8tGn20nzpHTi973UDhq1PtbZgchgVbr-OfmZAuc4kniczfZey3ibLeW8nGvIqocGc9sIp8xVaJ6oe2a7CWQ0U4SYYg7aU13mT1AVTTqq43FAC6vyy-sQVH8p~QmCvKMoWeKwitgIkd5lhbfQuwPaiPrUpnxouZT7t6I0Q8yo-b6jlrhM9Hd8zvKciZDF~BnjJgQk7z~5zQ6XIhmu6w__" 
                alt="Nature" 
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-ecoscrub-green/20 rounded-full z-[-1]"></div>
            </div>
          </div>
          
          {/* Timeline */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-ecoscrub-brown mb-8 text-center">Our Journey</h2>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-ecoscrub-green/30"></div>
              
              {/* Timeline events */}
              <div className="space-y-12">
                {/* Event 1 */}
                <div className="relative">
                  <div className="md:w-1/2 md:pr-8 md:text-right pb-8 md:pb-0">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h3 className="text-lg font-semibold text-ecoscrub-brown mb-2"> The Idea</h3>
                      <p className="text-ecoscrub-brown/80">
                        Irfan and Iden , environmental science students, began exploring alternatives to plastic scrubbers for a university project.
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-0 md:left-1/2 top-6 transform -translate-x-1/2 w-4 h-4 rounded-full bg-ecoscrub-green"></div>
                </div>
                
                {/* Event 2 */}
                <div className="relative">
                  <div className="md:w-1/2 md:ml-auto md:pl-8 pb-8 md:pb-0">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h3 className="text-lg font-semibold text-ecoscrub-brown mb-2">First Prototypes</h3>
                      <p className="text-ecoscrub-brown/80">
                        After researching traditional cleaning methods, the first EcoScrub prototypes were developed using locally sourced coconut coir and ridge gourd.
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-0 md:left-1/2 top-6 transform -translate-x-1/2 w-4 h-4 rounded-full bg-ecoscrub-green"></div>
                </div>
                
                {/* Event 3 */}
                <div className="relative">
                  <div className="md:w-1/2 md:pr-8 md:text-right pb-8 md:pb-0">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h3 className="text-lg font-semibold text-ecoscrub-brown mb-2">Launch</h3>
                      <p className="text-ecoscrub-brown/80">
                        EcoScrub officially launched with an online store and three core products, quickly gaining attention from eco-conscious consumers.
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-0 md:left-1/2 top-6 transform -translate-x-1/2 w-4 h-4 rounded-full bg-ecoscrub-green"></div>
                </div>
                
                {/* Event 4 */}
                <div className="relative">
                  <div className="md:w-1/2 md:ml-auto md:pl-8 pb-8 md:pb-0">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h3 className="text-lg font-semibold text-ecoscrub-brown mb-2">trying to scale </h3>
                      <p className="text-ecoscrub-brown/80">
                        Partnering with 10+ local artisan communities to expand production while maintaining quality and ethical standards.
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-0 md:left-1/2 top-6 transform -translate-x-1/2 w-4 h-4 rounded-full bg-ecoscrub-green"></div>
                </div>
                
                {/* Event 5 */}
                <div className="relative">
                  <div className="md:w-1/2 md:pr-8 md:text-right">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h3 className="text-lg font-semibold text-ecoscrub-brown mb-2">Today</h3>
                      <p className="text-ecoscrub-brown/80">
                        EcoScrub continues to innovate with new sustainable products while expanding our impact on plastic waste reduction.
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-0 md:left-1/2 top-6 transform -translate-x-1/2 w-4 h-4 rounded-full bg-ecoscrub-green"></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Team Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-ecoscrub-brown mb-8 text-center">Meet Our Team</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Team Member 1 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://media-hosting.imagekit.io/2d76de6dd49241fa/WhatsApp%20Image%202025-04-24%20at%2018.37.42_8a567b0c.jpg?Expires=1840108394&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=O6OLKbvHhpcfKKBt~ArwzMqDkn-ShwPqIQSOKakWh4hKMpa6rThk-Fmp3Ptsu6J4kZi6gdEKBTpooBWevJKvnLEZc1fzcYezKP7PoX942WbTX6nTov~089xwic~I5IS2PFsb4dD6kkFNkbkEjECVTPpye71x1y7Jl1cxQi2-tJ8jpNFd1X5CHd4UqyIjbAsQSfuBb0CyYW7SMRxWAvirmAI5cTL8gCh8kapUN4jbh~ZyG5khqpOrY-2m51HDh9E244DQfKsFmbVPCly5s41Hu8iyjls~OgYJXn1oHojosOTkcaE3gzv4UB-HnSvH5LrSXj5uO14DuJSUQ0nnAiPFfA__" 
                    alt="Mohamed Irfan S" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-ecoscrub-brown">Mohamed Irfan S</h3>
                  <p className="text-ecoscrub-green text-sm mb-2">Co-Founder & CEO</p>
                  <p className="text-ecoscrub-brown/70 text-sm">
                    Environmental scientist passionate about reducing plastic pollution through sustainable innovation.
                  </p>
                </div>
              </div>
              
              {/* Team Member 2 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://media-hosting.imagekit.io/75e8c85da39b4473/WhatsApp%20Image%202025-04-24%20at%2018.49.39_d204bee1.jpg?Expires=1840108877&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=RUz26BhIX4OyyYi6An6NbLRpyWq2t88ZToWmMDDU5QQbP77y-n9um6jPQMZgsKlfkhyZ9y-uKZicqAlwTLsisIsjRxXku~ZDc4fmZbb2Nhk3VWpFfYDM2Pd9qlbwROLgjOXtNiFfm-eM274RqkfU4j~rzoDt2t3cWroJvpEMR7F5kg5vECl6bx7m5nBQ6DlnFdY3nVnowHIhGqJDn00jk3jmXEnYX9uMWbZs3LaopLZ~eVdXXHmTRj3A0zhkySKFigqcxR5xA4mBBdBBqZznPTXHjhYp-XP0b35y6ZxicAO8ZDT57Fq9knlCPzk038UXx9z6YribsqS8IdjzycxVkg__" 
                    alt="Iden Abhisheik" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-ecoscrub-brown">Iden Abhisheik</h3>
                  <p className="text-ecoscrub-green text-sm mb-2">Co-Founder & Product Director</p>
                  <p className="text-ecoscrub-brown/70 text-sm">
                    Product designer with expertise in sustainable materials and traditional crafts.
                  </p>
                </div>
              </div>
              
              {/* Team Member 3 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://media-hosting.imagekit.io/cee4773f1ac547dc/WhatsApp%20Image%202025-04-24%20at%2018.38.44_ef1d5f64.jpg?Expires=1840108394&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=ehkK7ao307jBRW~jL6nDM0fukGiDvIewpBNV8s-fXWWUEIY1W-1NM-4gbIkweXZ7CWVVdVCooA6r1cGKBhyXd26IPCvAtZzmTsmKXs1kkPW2foGM7F5eqf7gj7hUnX-AzZptX9e7jWzH0PaZFSNggJUNQAsONMqO~f~iv0ivxhs-krETuv1ZTkmeQkM2IPMybta72O2SvCYdnM6JzAvE6q2lig7ZNmd3ex~nJh0ZIuPjB-U0obHTI0rKvp028iUD3iNdnwWJjGEJ9uaXAmdtdApWXWa1eKc2gSs08goYHiX0Fizw-a3oz3xnYJUkI3NMaOhMxXIAv1Ednwxjw7Mxcw__" 
                    alt="Hashir Mohamed " 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-ecoscrub-brown">Hashir Mohamed</h3>
                  <p className="text-ecoscrub-green text-sm mb-2">Head of Operations</p>
                  <p className="text-ecoscrub-brown/70 text-sm">
                    Supply chain expert ensuring ethical sourcing and sustainable production.
                  </p>
                </div>
              </div>
              
              
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutPage;
