import React from 'react';
import { MoonStar, Sparkles, Shield, MessageSquare } from 'lucide-react';

export default function CyreneAISection() {
  return (
    <div className="bg-black text-white flex items-center justify-center p-6 mb-12">
      <div className="max-w-6xl mx-auto rounded-xl overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          {/* Left side: Image and glow effect */}
          <div className="relative lg:w-1/2 flex items-center justify-center p-8 overflow-hidden">
            <div className="absolute w-64 h-64 rounded-full bg-blue-600 opacity-20 blur-3xl"></div>
            <div className="absolute w-40 h-40 rounded-full bg-indigo-500 opacity-20 blur-3xl -top-10 -left-10"></div>
            
            <div className="relative z-10 flex flex-col items-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-300">
                Meet CyreneAI
              </h1>
              
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-3xl blur opacity-30"></div>
                <div className="bg-gray-900 rounded-3xl p-1 relative">
                  <div className="bg-gray-950 rounded-2xl p-2 border border-gray-800">
                    <div className="rounded-full overflow-hidden h-32 w-32 mb-2 mx-auto border-2 border-blue-500">
                      <div className="bg-gradient-to-br from-blue-500 to-indigo-600 h-full w-full flex items-center justify-center">
                        <Sparkles size={50} className="text-white" />
                      </div>
                    </div>
                    <div className="bg-gray-900 h-8 w-full rounded-full mb-2"></div>
                    <div className="flex justify-between">
                      <div className="bg-gray-900 h-4 w-20 rounded-full"></div>
                      <div className="bg-teal-500 h-6 w-6 rounded-full flex items-center justify-center">
                        <MessageSquare size={14} className="text-gray-900" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right side: Content */}
          <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
            <div className="flex items-center space-x-2 mb-4">
              <Shield size={20} className="text-blue-400" />
              <p className="text-gray-300 text-sm md:text-base">Private, Secure, and Censorship-Free Internet</p>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-blue-300">
              Your Cosmic Guide into the Agentic Future
            </h2>
            
            <p className="text-gray-300 mb-8 leading-relaxed">
              Chat with Cyrene, our advanced AI assistant integrated into Erebus applications, ready to answer your questions and provide instant assistance, across space and time.
            </p>
            
            <div className="flex items-center mb-8">
              <MoonStar className="text-blue-400 mr-3" size={24} />
              <p className="text-xl text-gray-200">
                Get the help you need, anytime.
              </p>
            </div>
            
            <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium py-3 px-6 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition duration-300 shadow-lg shadow-blue-900/30 flex items-center justify-center">
              <span>Start Exploring Now</span>
              <Sparkles size={18} className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
