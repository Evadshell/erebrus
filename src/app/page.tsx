"use client"

import Navbar, { NavBody, NavItems, NavbarLogo, NavbarButton } from '@/components/navbar'
import React, { useState } from 'react'

function Page() {
  // Define your navigation items
  const navItems = [
    { name: "Home", link: "/" },
    { name: "Features", link: "/features" },
    { name: "Pricing", link: "/pricing" },
    { name: "About", link: "/about" }
  ];

  return (
    <div>
      <Navbar>
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} className="flex-1" />
          <div className="relative z-20 flex items-center justify-end gap-2">
            <NavbarButton href="/login" variant="secondary">Login</NavbarButton>
            <NavbarButton href="/signup">Sign Up</NavbarButton>
          </div>
        </NavBody>
      </Navbar>
    </div>
  )
}

export default Page