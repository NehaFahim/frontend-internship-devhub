"use client";
import { motion } from "framer-motion";
import { Users, CheckCircle } from "lucide-react";


export default function About() {
  return (
    <section id="about" className="py-24 border-t border-white/10 bg-[#050505]">
      <div className="max-w-screen-2xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        
        {/* Left Side - Vision */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }} 
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-bold tracking-tighter mb-8 text-blue-500 underline decoration-blue-500/30 underline-offset-8">
            01. Our Vision
          </h2>
          
          <p className="text-zinc-400 text-lg leading-relaxed">
            Founded in 2023, DevelopersHub is a boutique technology agency that combines 
            deep engineering expertise with creative vision. We help ambitious companies 
            turn complex ideas into elegant, high-performance digital products.
          </p>

          <div className="mt-12 flex gap-8">
            <div>
              <div className="text-4xl font-bold text-white">120+</div>
              <div className="text-xs text-zinc-500 uppercase tracking-widest mt-1">Projects Delivered</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white">98%</div>
              <div className="text-xs text-zinc-500 uppercase tracking-widest mt-1">Client Retention</div>
            </div>
          </div>
        </motion.div>

        {/* Right Side - Highlights */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }} 
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          <div className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:border-blue-500/30 transition-all group">
            <Users className="text-blue-500 mb-6 group-hover:scale-110 transition-transform" size={32} />
            <h4 className="font-bold text-xl mb-3">Top Talent</h4>
            <p className="text-sm text-zinc-500 leading-relaxed">
              Engineers and designers from global tech giants with years of experience building 
              scalable products.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:border-emerald-500/30 transition-all group">
            <CheckCircle className="text-emerald-500 mb-6 group-hover:scale-110 transition-transform" size={32} />
            <h4 className="font-bold text-xl mb-3">End-to-End Delivery</h4>
            <p className="text-sm text-zinc-500 leading-relaxed">
              From discovery and design to development, testing, and deployment — we handle everything.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}