'use client'
import React, { useState } from 'react';

import Footer from './Footer';
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 text-gray-900">
     <Header/>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8">{children}</main>
<Footer/>
    </div>
  );
};

export default Layout;
