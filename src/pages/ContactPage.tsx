
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Instagram, Twitter, Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const ContactPage = () => {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setContactForm(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!contactForm.name || !contactForm.email || !contactForm.subject || !contactForm.message) {
      toast({
        title: "Please complete all fields",
        description: "All fields are required.",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
    
    // Reset form
    setContactForm({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-ecoscrub-brown mb-4 text-center">Get In Touch</h1>
            <p className="text-ecoscrub-brown/70 text-center max-w-2xl mx-auto">
              Have questions, feedback, or want to collaborate? We'd love to hear from you. Fill out the form below or reach out through any of our channels.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-ecoscrub-brown mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-ecoscrub-green/10 rounded-full flex items-center justify-center text-ecoscrub-green mr-4">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-ecoscrub-brown mb-1">Email Us</h3>
                    <p className="text-ecoscrub-brown/70">
                      <a href="mailto:hello@ecoscrub.com" className="hover:text-ecoscrub-green transition-colors">
                        hello@ecoscrub.com
                      </a>
                    </p>
                    <p className="text-sm text-ecoscrub-brown/60">
                      We aim to respond within 24 hours
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-ecoscrub-green/10 rounded-full flex items-center justify-center text-ecoscrub-green mr-4">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-ecoscrub-brown mb-1">Call Us</h3>
                    <p className="text-ecoscrub-brown/70">
                      <a href="tel:+919876543210" className="hover:text-ecoscrub-green transition-colors">
                        +91 9876 543 210
                      </a>
                    </p>
                    <p className="text-sm text-ecoscrub-brown/60">
                      Mon-Fri, 10am - 6pm IST
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-ecoscrub-green/10 rounded-full flex items-center justify-center text-ecoscrub-green mr-4">
                    <MessageSquare className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-ecoscrub-brown mb-1">Social Media</h3>
                    <div className="flex space-x-4 mb-1">
                      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-ecoscrub-brown hover:text-ecoscrub-green transition-colors">
                        <Instagram className="h-5 w-5" />
                      </a>
                      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-ecoscrub-brown hover:text-ecoscrub-green transition-colors">
                        <Twitter className="h-5 w-5" />
                      </a>
                    </div>
                    <p className="text-sm text-ecoscrub-brown/60">
                      Follow us for eco-tips and updates
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-ecoscrub-green/10 rounded-full flex items-center justify-center text-ecoscrub-green mr-4">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-ecoscrub-brown mb-1">Visit Us</h3>
                    <p className="text-ecoscrub-brown/70">
                      123 Green Street, <br />
                      Eco Park, Bangalore 560001, <br />
                      Karnataka, India
                    </p>
                    <p className="text-sm text-ecoscrub-brown/60 mt-1">
                      By appointment only
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 bg-ecoscrub-beige/30 p-6 rounded-lg">
                <h3 className="font-semibold text-ecoscrub-brown mb-2">Wholesale Inquiries</h3>
                <p className="text-ecoscrub-brown/70 mb-2">
                  Interested in stocking EcoScrub products at your store? Contact our wholesale team for pricing and minimums.
                </p>
                <a 
                  href="mailto:wholesale@ecoscrub.com" 
                  className="eco-button inline-flex items-center"
                >
                  <Mail className="h-5 w-5 mr-2" />
                  Email Wholesale Team
                </a>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
              <h2 className="text-2xl font-bold text-ecoscrub-brown mb-6">Send Us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-ecoscrub-brown mb-1">Your Name*</label>
                  <input 
                    type="text" 
                    name="name" 
                    value={contactForm.name}
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
                    value={contactForm.email}
                    onChange={handleFormChange}
                    className="natural-input w-full" 
                    required 
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-ecoscrub-brown mb-1">Subject*</label>
                  <select 
                    name="subject" 
                    value={contactForm.subject}
                    onChange={handleFormChange}
                    className="natural-input w-full" 
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="Product Question">Product Question</option>
                    <option value="Order Inquiry">Order Inquiry</option>
                    <option value="Collaboration">Collaboration</option>
                    <option value="Feedback">Feedback</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-ecoscrub-brown mb-1">Your Message*</label>
                  <textarea 
                    name="message" 
                    value={contactForm.message}
                    onChange={handleFormChange}
                    className="natural-input w-full min-h-[150px]" 
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="eco-button w-full flex items-center justify-center"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </button>
              </form>
              
              <p className="mt-4 text-sm text-ecoscrub-brown/60 text-center">
                We value your privacy and will never share your information with third parties.
              </p>
            </div>
          </div>
          
          {/* Map */}
          <div className="bg-white rounded-lg shadow-md p-4 overflow-hidden">
            <h2 className="text-xl font-bold text-ecoscrub-brown mb-4 px-2">Find Us</h2>
            <div className="h-80 rounded-md overflow-hidden">
              {/* Placeholder for a map - in a real implementation, you'd use Google Maps or a similar service */}
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">Map placeholder - Google Maps would be integrated here</span>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ContactPage;
