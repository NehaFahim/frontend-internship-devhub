"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Command, Menu } from "lucide-react";

interface NavbarProps {
  onBookCall: () => void;
}

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Work', href: '/work' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar({ onBookCall }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/90 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        
        {/* Logo - Home pe jaaye */}
        <Link href="/" className="flex items-center gap-2 group cursor-pointer">
          <Command className="w-6 h-6 text-blue-500 group-hover:rotate-180 transition-transform duration-500" />
          <span className="font-bold tracking-tighter text-xl">Developers Hub</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-white/75 hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <button 
            onClick={onBookCall}
            className="hidden sm:block text-xs font-bold px-5 py-2.5 bg-blue-600 hover:bg-blue-500 rounded-xl transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)]"
          >
            Book a call
          </button>

          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-white"
          >
            <Menu size={28} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-white/10 bg-black/95 backdrop-blur-xl"
          >
            <div className="px-6 py-8 flex flex-col gap-6 text-lg">
              {navLinks.map((link) => (
                <Link 
                  key={link.name}
                  href={link.href}
                  className="py-2 text-white/80 hover:text-white transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <button 
                onClick={() => {
                  onBookCall();
                  setIsMobileMenuOpen(false);
                }}
                className="mt-4 w-full py-4 bg-blue-600 hover:bg-blue-500 rounded-2xl font-bold text-base transition"
              >
                Book a Discovery Call
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}