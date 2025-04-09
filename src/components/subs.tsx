import { useState, useEffect } from 'react';
import { Shield, Lock, Database, Zap, Smartphone, ChevronRight } from 'lucide-react';

export default function SubscriptionCard() {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isAnimating, setIsAnimating] = useState(false);
  
  useEffect(() => {
    if (isHovered) {
      setIsAnimating(true);
    }
  }, [isHovered]);

  const handleMouseMove = (e:any) => {
    if (!isHovered) return;
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };
  
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div 
        className="w-full flex flex-wrap gap-6 justify-center"
        onMouseMove={handleMouseMove}
      >
        {/* Glow background effect */}
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-blue-900/5 blur-3xl rounded-full pointer-events-none"></div>
        
        {/* Subscription Card */}
        <div 
          className={`bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 border border-gray-800 flex-1 min-w-[320px] max-w-[500px] relative overflow-hidden transition-all duration-500 ${isHovered ? 'shadow-lg shadow-blue-900/20' : ''}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Dynamic highlight effect */}
          <div 
            className={`absolute bg-blue-500/10 w-64 h-64 rounded-full blur-3xl transition-opacity duration-1000 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
            style={{
              left: `${mousePosition.x - 128}px`,
              top: `${mousePosition.y - 128}px`,
            }}
          ></div>
          
          {/* Card accent line */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600"></div>
          
          <div className="relative">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-blue-900/30 text-blue-400 mb-2">PREMIUM</span>
            <h2 className="text-gray-100 text-xl font-bold mb-1">Quantum Tier Subscription</h2>
            <p className="text-gray-500 text-sm mb-4">Advanced security & networking features</p>
            
            <div className="flex items-baseline mb-6">
              <span className="text-white text-4xl font-bold">$5.99</span>
              <span className="text-gray-500 ml-2">/month</span>
              <span className="ml-2 text-xs bg-blue-900/30 text-blue-400 px-2 py-1 rounded">SAVE 40%</span>
            </div>
            
            <div className="bg-gradient-to-r from-blue-700 to-blue-600 rounded-md py-2 px-4 text-center text-white font-medium mb-6 shadow-lg shadow-blue-900/20">
              <span className={`inline-block transition-transform duration-300 ${isHovered ? 'scale-105' : ''}`}>
                Start 7-Day Free Trial
              </span>
            </div>
            
            <div className="grid grid-cols-1 gap-3 mb-6">
              <div className="relative">
                <input 
                  className="w-full bg-gray-900/50 backdrop-blur-sm rounded-lg px-4 py-3 text-white placeholder:text-gray-600 border border-gray-800 focus:border-blue-500 outline-none transition-all duration-300"
                  placeholder="Email address"
                />
                <div className={`absolute bottom-0 left-0 h-0.5 bg-blue-500 transition-all duration-500 ${isHovered ? 'w-full' : 'w-0'}`}></div>
              </div>
              <div className="relative">
                <input 
                  className="w-full bg-gray-900/50 backdrop-blur-sm rounded-lg px-4 py-3 text-white placeholder:text-gray-600 border border-gray-800 focus:border-blue-500 outline-none transition-all duration-300" 
                  placeholder="Card details"
                  type="text"
                />
                <div className={`absolute bottom-0 left-0 h-0.5 bg-blue-500 transition-all duration-500 delay-100 ${isHovered ? 'w-full' : 'w-0'}`}></div>
              </div>
            </div>
            
            <ul className="space-y-4 mb-6">
              {[
                { icon: <Lock size={16} />, text: "Decentralized Zero-Trust Network" },
                { icon: <Shield size={16} />, text: "Multi-layer Quantum Encryption" },
                { icon: <Database size={16} />, text: "Real-time Threat Analysis & Prevention" },
                { icon: <Zap size={16} />, text: "AI-powered Security Insights" },
                { icon: <Smartphone size={16} />, text: "Cross-platform Secure Access" }
              ].map((item, index) => (
                <li 
                  key={index} 
                  className={`flex items-center text-gray-400 transition-all duration-300 ${isHovered ? 'translate-x-1' : ''}`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-900/30 text-blue-400 mr-3">
                    {item.icon}
                  </div>
                  {item.text}
                </li>
              ))}
            </ul>
            
            <button 
              className="group w-full bg-blue-600 hover:bg-blue-500 text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 relative overflow-hidden flex items-center justify-center"
            >
              <span className="relative z-10 group-hover:translate-x-1 transition-transform">Activate Secure Access</span>
              <ChevronRight className="ml-2 relative z-10 transition-transform group-hover:translate-x-1" size={18} />
              <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500 to-blue-400 transform transition-transform duration-500 ${isHovered ? '-translate-x-0 opacity-0' : '-translate-x-full opacity-0'} group-hover:opacity-30 group-hover:translate-x-0`}></div>
            </button>
          </div>
        </div>
        
        {/* Features Card */}
        <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 border border-gray-800 flex-1 min-w-[320px] max-w-[500px] relative overflow-hidden">
          {/* Card accent line */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600"></div>
          
          <div className="flex items-center mb-6">
            <div className="h-8 w-1 bg-blue-500 rounded-full mr-3"></div>
            <h2 className="text-white text-2xl font-bold">Advanced Features</h2>
          </div>
          
          <div className="space-y-8">
            {[
              {
                number: "01",
                title: "Military-Grade Security",
                description: "256-bit AES encryption with perfect forward secrecy"
              },
              {
                number: "02",
                title: "Enhanced Privacy Protocol",
                description: "Distributed node architecture with zero-knowledge validation"
              },
              {
                number: "03",
                title: "Complete Data Sovereignty",
                description: "Full control over your digital footprint with no logging policy"
              },
              {
                number: "04",
                title: "Optimized Connection Routing",
                description: "AI-driven path optimization for minimal latency"
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className={`transform transition-all duration-500 ${isAnimating ? 'translate-x-2' : 'translate-x-0'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start">
                  <span className="text-blue-500 font-mono mr-4 opacity-70">{feature.number}</span>
                  <div>
                    <h3 className="text-gray-100 font-bold text-lg mb-2">{feature.title}</h3>
                    <p className="text-gray-500">{feature.description}</p>
                  </div>
                </div>
                {index < 3 && <div className="w-full h-px bg-gray-800 mt-8"></div>}
              </div>
            ))}
          </div>

          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-900/10 rounded-full blur-3xl"></div>
        </div>
      </div>
    </div>
  );
}