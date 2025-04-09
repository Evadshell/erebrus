import React, { useState, FormEvent, ChangeEvent } from 'react';
import { ChevronUp, Mail, Twitter, LinkedinIcon, Send } from 'lucide-react';

interface ExpandedSections {
  products: boolean;
  company: boolean;
  resources: boolean;
}

const DarkFooter: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [subscribed, setSubscribed] = useState<boolean>(false);
  const [expanded, setExpanded] = useState<ExpandedSections>({
    products: false,
    company: false,
    resources: false
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
  };

  const toggleSection = (section: keyof ExpandedSections): void => {
    setExpanded({
      ...expanded,
      [section]: !expanded[section]
    });
  };

  return (
    <footer className="bg-black text-gray-300">
      {/* Top section with gradient border */}
      <div className="h-1 bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400"></div>
      
      <div className="max-w-6xl mx-auto px-4 py-10">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand column */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-xl font-bold">N</span>
              </div>
              <h2 className="text-white text-xl font-bold">Nexus</h2>
            </div>
            <p className="text-sm">Building the future of digital experiences with innovative solutions that transform how you connect and create.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <LinkedinIcon size={20} />
              </a>
            </div>
          </div>
          
          {/* Products Column */}
          <div>
            <div 
              className="flex justify-between items-center cursor-pointer mb-4 md:cursor-default" 
              onClick={() => toggleSection('products')}
            >
              <h3 className="text-white font-semibold">Products</h3>
              <ChevronUp 
                className={`md:hidden transition-transform duration-300 ${expanded.products ? 'transform rotate-180' : ''}`} 
                size={18} 
              />
            </div>
            <ul className={`space-y-3 overflow-hidden transition-all duration-300 ${expanded.products ? 'max-h-60' : 'max-h-0 md:max-h-60'}`}>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Analytics Platform</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Cloud Solutions</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Security Suite</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">API Services</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Mobile SDK</a></li>
            </ul>
          </div>
          
          {/* Company Column */}
          <div>
            <div 
              className="flex justify-between items-center cursor-pointer mb-4 md:cursor-default" 
              onClick={() => toggleSection('company')}
            >
              <h3 className="text-white font-semibold">Company</h3>
              <ChevronUp 
                className={`md:hidden transition-transform duration-300 ${expanded.company ? 'transform rotate-180' : ''}`} 
                size={18} 
              />
            </div>
            <ul className={`space-y-3 overflow-hidden transition-all duration-300 ${expanded.company ? 'max-h-60' : 'max-h-0 md:max-h-60'}`}>
              <li><a href="#" className="hover:text-white transition-colors duration-300">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Press</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Contact</a></li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold mb-4">Stay Updated</h3>
            <p className="text-sm mb-4">Subscribe to our newsletter for the latest updates and insights.</p>
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="your@email.com"
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg py-2 px-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
                <button 
                  type="submit" 
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-blue-500 hover:text-blue-400 transition-colors duration-300"
                  aria-label="Subscribe"
                >
                  <Send size={18} />
                </button>
              </div>
              {subscribed && (
                <div className="text-green-400 text-sm">Thanks for subscribing!</div>
              )}
            </form>
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>
        
        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Nexus. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-sm hover:text-white transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="text-sm hover:text-white transition-colors duration-300">Terms of Service</a>
            <a href="#" className="text-sm hover:text-white transition-colors duration-300">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default DarkFooter;