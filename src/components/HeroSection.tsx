import React from 'react';
import Link from 'next/link';

const HeroSection= () => {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover opacity-70"
        >
          <source src="/videos/network-bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Dark overlay for better text visibility */}
        <div className="absolute inset-0 bg-black"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full w-full items-center justify-center px-4 text-center">
        <div className="max-w-4xl">
          <h1 className="mb-8 font-sans text-5xl font-bold leading-tight tracking-tight text-white md:text-6xl lg:text-7xl">
            Building the Global{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Decentralized Network
            </span>
          </h1>
          
          <p className="mb-10 text-lg text-gray-300 md:text-xl">
            Join the revolution reshaping how the world connects, shares, and creates value
          </p>
          
          <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-6 sm:space-y-0">
            <Link href="/get-started">
              <button className="rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-3 font-medium text-white transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25">
                Get Started
              </button>
            </Link>
            <Link href="/learn-more">
              <button className="rounded-full border-2 border-gray-300 bg-transparent px-8 py-3 font-medium text-white transition-all duration-300 hover:border-blue-400 hover:text-blue-400">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Abstract glowing elements */}
      <div className="absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-blue-500 opacity-10 blur-3xl"></div>
      <div className="absolute right-1/4 top-1/4 h-96 w-96 rounded-full bg-purple-500 opacity-10 blur-3xl"></div>
    </div>
  );
};

export default HeroSection;