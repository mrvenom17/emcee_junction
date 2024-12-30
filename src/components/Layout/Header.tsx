import React from 'react';
import TopLogos from './TopLogos.tsx';
import Navbar from './Navbar.tsx';

export default function Header() {
  return (
    <header className="fixed w-full z-50 bg-black">
      <TopLogos />
      <Navbar />
    </header>
  );
}