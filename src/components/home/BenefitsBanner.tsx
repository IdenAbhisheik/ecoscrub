
import { Check, Recycle, Leaf, Hand } from 'lucide-react';

const BenefitsBanner = () => {
  const benefits = [
    {
      icon: <Check className="h-6 w-6" />,
      title: "100% Natural",
      description: "Made from organic materials"
    },
    {
      icon: <Recycle className="h-6 w-6" />,
      title: "Compostable",
      description: "Zero waste after use"
    },
    {
      icon: <Leaf className="h-6 w-6" />,
      title: "Plastic-Free",
      description: "Sustainable packaging"
    },
    {
      icon: <Hand className="h-6 w-6" />,
      title: "Handcrafted",
      description: "Supporting local artisans"
    }
  ];

  return (
    <section className="bg-ecoscrub-beige py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="flex flex-col items-center text-center p-4 bg-white/80 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="w-12 h-12 bg-ecoscrub-green/10 rounded-full flex items-center justify-center text-ecoscrub-green mb-3">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-semibold text-ecoscrub-brown mb-1">{benefit.title}</h3>
              <p className="text-sm text-ecoscrub-brown/70">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsBanner;
