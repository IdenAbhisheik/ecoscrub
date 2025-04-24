
import { Link } from 'react-router-dom';

const AboutSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative">
            <img 
              src="https://media-hosting.imagekit.io/1826fcfaf97146da/WhatsApp%20Image%202025-04-24%20at%2018.30.51_8d4da7fb.jpg?Expires=1840107678&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=J2orOSX9fAXHmfIpkyDAmSYloi4OvWQe0tKCJHFM7ps54UC1jwf0abceGRDy429SF88JcWn4A24dkTrG5Dk2jFMJwMNZyZOQ-EmFckqJl8Z2Ep-58ka4sANQBq8JIAbtROzjqIV7D5Uv8~vaLq8Qb4Wm1ma~AmjBo0JsMnkpRHztnxE-cn-WI0kYd1dhoHAskFIwvVU65RiI5WTp2wkI8r5OfOIWuF2hnDies6cVV3lrVdDOl11fkCdftiYJzX4PHTJ5vrIMgOGdymB0O8FfFS0VUUWHsRHSTVi1rjPQDKJAIot1XjdNq~5Scz7FphiGbDle11TNs7I8H3JNULvnCg__" 
              alt="EcoScrub Founder" 
              className="rounded-lg shadow-lg w-full h-auto md:h-[500px] object-cover"
            />
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-ecoscrub-green/20 rounded-full z-[-1]"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-ecoscrub-beige/50 rounded-full z-[-1]"></div>
          </div>
          
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-ecoscrub-brown mb-4">Why EcoScrub?</h2>
            <p className="text-ecoscrub-brown/80 mb-4">
              EcoScrub was born from a simple question: why are we using plastic to clean ourselves and our homes, when nature provides better alternatives?
            </p>
            <p className="text-ecoscrub-brown/80 mb-6">
              As university students concerned about plastic pollution, we began exploring traditional cleansing tools made from plant materials. We discovered that these natural scrubbers not only worked better than synthetic alternatives but also supported sustainable farming and reduced plastic waste.
            </p>
            <div className="bg-ecoscrub-beige/30 p-6 rounded-lg mb-6 border-l-4 border-ecoscrub-green">
              <p className="italic text-ecoscrub-brown">
                "We believe that small, everyday changes can make a significant impact on our planet. Each EcoScrub product represents one less piece of plastic in our oceans."
              </p>
              <p className="mt-2 font-semibold text-ecoscrub-brown">— Irfan & Iden, Co-founders</p>
            </div>
            <Link 
              to="/about" 
              className="eco-button inline-flex items-center"
            >
              Our Full Story
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
