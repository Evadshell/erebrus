import { useState, useEffect } from 'react';
import { Shield, Network, Layers } from 'lucide-react';

export default function VPNContentSection() {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    setVisible(true);
  }, []);

  const cards = [
    {
      title: "Last Mile Safe Internet",
      description: "No censorship or geo-restrictions with enhanced security and privacy.",
      icon: <Shield className="w-8 h-8 text-gray-300" />,
      delay: "0"
    },
    {
      title: "CyreneAI Coordination Layer",
      description: "Communication layer for apps and AI agents with sensitive data. Multi-agent coordination with discovery & access control.",
      icon: <Layers className="w-8 h-8 text-gray-300" />,
      delay: "150"
    },
    {
      title: "DNS Firewall",
      description: "Block adware, spyware and malware with targeted network protection.",
      icon: <Network className="w-8 h-8 text-gray-300" />,
      delay: "300"
    }
  ];

  return (
    <div className="bg-black min-h-screen text-white py-12 px-4  lg:px-8">
      <div className={`max-w-6xl mx-auto transition-opacity duration-1000 ${visible ? 'opacity-100' : 'opacity-0'}`}>
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent mb-4">
            Your Content Delivery, Uninterrupted!
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Launch your own VPN and AI agents for sovereign and private experience
          </p>
        </div>
        
        {/* Cards with flex-wrap */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {cards.map((card, index) => (
            <div 
              key={index}
              className="w-full md:w-64 lg:w-80 bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 shadow-lg border border-gray-700 transform transition-all duration-700 hover:scale-105 hover:shadow-white/10 hover:shadow-lg"
              style={{ 
                transitionDelay: `${card.delay}ms`,
                transform: visible ? 'translateY(0)' : 'translateY(20px)',
                opacity: visible ? 1 : 0
              }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 bg-black/50 rounded-full">
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                <p className="text-gray-400">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <button className="px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-md transition-all duration-300 border border-gray-700 hover:border-gray-500 flex items-center group">
            <span className="transform transition-transform group-hover:translate-x-1">Deploy Your Node</span>
          </button>
          <button className="px-6 py-3 bg-white text-black hover:bg-gray-200 rounded-md transition-all duration-300 shadow-lg hover:shadow-white/20 flex items-center group">
            <span className="transform transition-transform group-hover:translate-x-1">Launch Agent</span>
          </button>
        </div>
      </div>
    </div>
  );
}