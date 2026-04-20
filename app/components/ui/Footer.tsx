import React from "react";
import { Command, X as Twitter } from "lucide-react";   // X icon Twitter ke liye

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-16">
      <div className="max-w-screen-2xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-y-12">
          
          {/* Logo & Location */}
          <div>
            <div className="flex items-center gap-x-2 mb-6">
              <div className="flex items-center gap-2 group cursor-pointer">
                <Command className="w-6 h-6 text-blue-500 group-hover:rotate-180 transition-transform duration-500" />
                <span className="font-bold tracking-tighter text-xl">Developers Hub</span>
              </div>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-55">
              Karachi • San Francisco • Remote
            </p>
          </div>

          {/* Company Links */}
          <div>
            <p className="font-medium mb-4 text-white">Company</p>
            <div className="space-y-3 text-sm text-zinc-400">
              <a href="#about" className="block hover:text-white transition-colors">About Us</a>
              <a href="#" className="block hover:text-white transition-colors">Careers</a>
              <a href="#" className="block hover:text-white transition-colors">Blog</a>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <p className="font-medium mb-4 text-white">Services</p>
            <div className="space-y-3 text-sm text-zinc-400">
              <a href="#services" className="block hover:text-white transition-colors">Software Development</a>
              <a href="#services" className="block hover:text-white transition-colors">AI Solutions</a>
              <a href="#services" className="block hover:text-white transition-colors">Digital Marketing</a>
              <a href="#services" className="block hover:text-white transition-colors">Post Production</a>
            </div>
          </div>

          {/* Legal Links */}
          <div>
            <p className="font-medium mb-4 text-white">Legal</p>
            <div className="space-y-3 text-sm text-zinc-400">
              <a href="#" className="block hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="block hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>

          {/* Connect / Social */}
          <div>
            <p className="font-medium mb-4 text-white">Connect</p>
            <div className="flex gap-x-6">
              <a 
                href="https://x.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-white transition-colors"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-white transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
              </a>
            </div>

            <div className="mt-8 text-xs text-zinc-500">
              © 2026 DevelopersHub. All rights reserved.
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}