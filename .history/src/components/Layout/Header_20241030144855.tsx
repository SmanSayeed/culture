'use client'
import React, { useState } from 'react'
import Link from 'next/link';
import { siteInfo } from '@/utils/siteInfo';
type Props = {}

export default function Header({}: Props) {
    
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <>
         {/* Header */}
      <header className="bg-blue-600 text-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-lg font-semibold">{siteInfo.siteTitle}</h1>

          {/* Navigation for Desktop */}
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-blue-300">Home</Link>
          </nav>

          {/* Hamburger Menu for Mobile */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setDrawerOpen(true)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Side Drawer for Mobile */}
      <div
        className={`fixed inset-0 bg-gray-800 bg-opacity-50 z-10 transition-opacity ${
          drawerOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setDrawerOpen(false)}
      ></div>
      <div
        className={`fixed top-0 left-0 h-full bg-white w-64 z-20 transform transition-transform ${
          drawerOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center px-4 py-4 bg-blue-600 text-white">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button
            className="text-white focus:outline-none"
            onClick={() => setDrawerOpen(false)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav className="flex flex-col p-4 space-y-4">
          <Link href="/" className="hover:bg-gray-100 p-2 rounded" onClick={() => setDrawerOpen(false)}>Home</Link>
          <Link href="/about" className="hover:bg-gray-100 p-2 rounded" onClick={() => setDrawerOpen(false)}>About</Link>
          <Link href="/contact" className="hover:bg-gray-100 p-2 rounded" onClick={() => setDrawerOpen(false)}>Contact</Link>
        </nav>
      </div>
    </>
  )
}