import { useEffect } from "react";
import { WorldMap } from "./WorldMap"; // Assuming WorldMap is available in this path

export default function DePINRevolutionComponent() {
  // Sample connection points representing DePIN nodes across the globe
  const connectionPoints = [
    {
      start: { lat: 40.7128, lng: -74.0060, label: "New York" }, // New York
      end: { lat: 37.7749, lng: -122.4194, label: "San Francisco" } // San Francisco
    },
    {
      start: { lat: 51.5074, lng: -0.1278, label: "London" }, // London
      end: { lat: 1.3521, lng: 103.8198, label: "Singapore" } // Singapore
    },
    {
      start: { lat: 35.6762, lng: 139.6503, label: "Tokyo" }, // Tokyo
      end: { lat: -33.8688, lng: 151.2093, label: "Sydney" } // Sydney
    },
    {
      start: { lat: 52.5200, lng: 13.4050, label: "Berlin" }, // Berlin
      end: { lat: 19.0760, lng: 72.8777, label: "Mumbai" } // Mumbai
    },
    {
      start: { lat: -23.5505, lng: -46.6333, label: "São Paulo" }, // São Paulo
      end: { lat: 28.6139, lng: 77.2090, label: "New Delhi" } // New Delhi
    }
  ];

  useEffect(() => {
    // Force dark theme for this component
    document.documentElement.classList.add('dark');
    
    return () => {
      // Clean up if needed
      // document.documentElement.classList.remove('dark');
    };
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-black text-white overflow-hidden flex items-center justify-center">
      {/* Map as background - taking full width and height */}
      <div className="absolute inset-0 z-0 opacity-80">
        <WorldMap dots={connectionPoints} lineColor="#10b981" />
      </div>
      
      {/* Content overlay - centered both horizontally and vertically */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6">
        <div className="bg-black bg-opacity-70 p-8 rounded-xl backdrop-blur-sm border border-gray-800">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
            Pioneering the DePIN Revolution
          </h1>
          
          <div className="space-y-6 text-lg">
            <p className="leading-relaxed text-center">
              Decentralized Physical Infrastructure Networks (DePIN) are redefining how we build, maintain, and interact with critical infrastructure systems around the globe.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mt-10">
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-emerald-400 mb-3">Democratized Ownership</h3>
                <p>DePIN enables distributed ownership of infrastructure, allowing individuals to participate in and benefit from networks that were previously controlled by centralized entities.</p>
              </div>
              
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-emerald-400 mb-3">Token-Powered Incentives</h3>
                <p>Crypto-economic models drive participation and resource contribution, creating self-sustaining networks that scale through aligned incentives.</p>
              </div>
            </div>
            
            <div className="mt-10 text-center">
              <button className="bg-gradient-to-r from-emerald-500 to-blue-600 text-white font-bold py-3 px-8 rounded-full hover:opacity-90 transition-opacity">
                Join the Network
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}