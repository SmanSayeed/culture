'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 text-gray-900">
     

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8">{children}</main>
<Footer/>
    </div>
  );
};

export default Layout;
