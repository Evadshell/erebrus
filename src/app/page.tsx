"use client"

import Navbar, { 
  NavBody, 
  NavItems, 
  NavbarLogo, 
  NavbarButton,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle
} from '@/components/ui/navbar'
import HeroSection from "../components/HeroSection"
import { Marquee } from "@/components/ui/Marquee" // Import the Marquee component
import React, { useState } from 'react'
import Link from 'next/link'
import DePINRevolutionComponent from '@/components/ui/map'
import SubscriptionCard from '@/components/subs'
import CyreneAISection from '@/components/ui/cyrene'
import DarkFooter from '@/components/ui/footer'
import ErebrusSection from '@/components/ui/join'
import VPNContentSection from '@/components/ui/vpnContent'

function Page() {
  // Define your navigation items
  const navItems = [
    { name: "Home", link: "/" },
    { name: "Features", link: "/features" },
    { name: "Pricing", link: "/pricing" },
    { name: "About", link: "/about" }
  ];

  // Add state for mobile menu
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div style={{background:"black"}}>
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} className="flex-1" />
          <div className="relative z-20 flex items-center justify-end gap-2">
            <NavbarButton href="/login" variant="secondary">Login</NavbarButton>
            <NavbarButton href="/signup">Sign Up</NavbarButton>
          </div>
        </NavBody>
        
        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle 
              isOpen={mobileMenuOpen} 
              onClick={toggleMobileMenu} 
            />
          </MobileNavHeader>
          
          <MobileNavMenu 
            isOpen={mobileMenuOpen} 
            onClose={() => setMobileMenuOpen(false)}
          >
            {/* Mobile menu items */}
            {navItems.map((item, idx) => (
              <Link 
                key={`mobile-link-${idx}`} 
                href={item.link}
                className="w-full px-4 py-3 text-sm font-medium text-neutral-700 hover:bg-neutral-100 dark:text-neutral-200 dark:hover:bg-neutral-800"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Mobile buttons */}
            <div className="mt-4 flex w-full flex-col gap-2 px-4">
              <NavbarButton href="/login" variant="secondary" className="w-full">Login</NavbarButton>
              <NavbarButton href="/signup" className="w-full">Sign Up</NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
      
      <HeroSection />
      
      {/* Marquee after hero section */}
      <Marquee className="py-6 bg-black mb-16" pauseOnHover>
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
    alt="Amazon"
    className="mx-6 h-10  transition duration-300"
  />
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
    alt="Microsoft"
    className="mx-6 h-10  transition duration-300"
  />
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/0/08/Google_Logo.svg"
    alt="Google"
    className="mx-6 h-10  transition duration-300"
  />
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
    alt="Apple"
    className="mx-6 h-10  transition duration-300"
  />
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg"
    alt="IBM"
    className="mx-6 h-10  transition duration-300"
  />
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Intel-logo.svg"
    alt="Intel"
    className="mx-6 h-10  transition duration-300"
  />
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/1/19/Oracle_Logo.svg"
    alt="Oracle"
    className="mx-6 h-10  transition duration-300"
  />
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/c/c2/Netflix_2015_logo.svg"
    alt="Netflix"
    className="mx-6 h-10  transition duration-300"
  />
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/3/3e/Spotify_logo_with_text.svg"
    alt="Spotify"
    className="mx-6 h-10  transition duration-300"
  />
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Adobe_Corporate_Logo.png"
    alt="Adobe"
    className="mx-6 h-10 transition duration-300"
  />
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/5/59/Meta_Platforms_Inc._logo.svg"
    alt="Meta"
    className="mx-6 h-10  transition duration-300"
  />
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/9/96/Nvidia_logo.svg"
    alt="NVIDIA"
    className="mx-6 h-10 transition duration-300"
  />
</Marquee>
<DePINRevolutionComponent/>
<VPNContentSection/>
<CyreneAISection/>
<SubscriptionCard/>
<ErebrusSection/>
<DarkFooter/>
    </div>
  )
}

export default Page