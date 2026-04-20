"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  Code2, 
  Cpu, 
  Globe, 
  Video, 
  Calendar as CalendarIcon, 
  ExternalLink 
} from "lucide-react";

export default function Services() {
  return (
    <section id="services" className="py-32 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
              Our Stack
            </h2>
            <p className="text-white/40 text-lg mt-3">
              Comprehensive tech solutions for modern problems
            </p>
          </div>
          <div className="hidden md:block text-[10px] font-mono text-white/20 tracking-widest">
            SEARCH_PARAMS: ALL_SERVICES
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          
          {/* Main Software Development Card */}
          <div className="md:col-span-8 group relative overflow-hidden rounded-3xl border border-white/10 bg-linear-to-br from-white/5 to-transparent p-10 hover:border-blue-500/50 transition-all duration-500">
            <div className="absolute top-8 right-8">
              <Code2 className="w-32 h-32 text-blue-500 opacity-80" />
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-6">Software Development</h3>
              <p className="text-white/75 max-w-md text-lg leading-relaxed">
                We build production-ready applications using Next.js, React, and robust backend 
                architectures. Optimized for speed, SEO, and developer experience.
              </p>

              <div className="flex flex-wrap gap-3 mt-12">
                {['React', 'Next.js', 'TypeScript', 'PostgreSQL'].map((tech) => (
                  <span 
                    key={tech}
                    className="px-4 py-1.5 rounded-full bg-white/5 border border-blue-400/30 text-xs font-mono uppercase tracking-wider text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* AI & Automation Card */}
          <div className="md:col-span-4 group rounded-3xl border border-white/10 bg-[#0A0A0A] p-8 hover:bg-blue-600/5 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-6">
              <Cpu className="w-7 h-7 text-purple-400" />
            </div>
            <h3 className="text-2xl font-bold mb-3">AI & Automation</h3>
            <p className="text-white/60 leading-relaxed">
              RAG implementation, custom LLM fine-tuning, AI content generation, and intelligent automation pipelines.
            </p>
            
            <div className="h-1.5 w-full bg-white/10 rounded-full mt-10 overflow-hidden">
              <motion.div 
                initial={{ width: 0 }} 
                whileInView={{ width: "92%" }} 
                transition={{ duration: 1.8, ease: "easeOut" }}
                className="h-full bg-purple-500 rounded-full"
              />
            </div>
          </div>

          {/* Marketing Card */}
          <div className="md:col-span-4 group rounded-3xl border border-white/10 bg-white/5 p-8 hover:border-emerald-500/30 transition-all">
            <div className="flex justify-between items-start mb-6">
              <Globe className="w-6 h-6 text-emerald-400" />
              <ExternalLink className="w-5 h-5 text-white/30 group-hover:text-white transition" />
            </div>
            <h3 className="text-xl font-bold mb-3">Digital Marketing & Growth</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Data-driven strategies to scale your user base and maximize ROI.
            </p>
          </div>

          {/* Post Production Card */}
          <div className="md:col-span-4 group rounded-3xl border border-white/10 bg-white/5 p-8 hover:border-pink-500/30 transition-all">
            <Video className="w-6 h-6 text-pink-400 mb-6" />
            <h3 className="text-xl font-bold mb-3">Post Production</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Professional video editing, motion graphics, and digital asset creation.
            </p>
          </div>

          {/* Meeting Scheduler Card */}
          <div className="md:col-span-4 group rounded-3xl border border-blue-500/30 bg-blue-500/5 p-8 flex flex-col justify-between hover:border-blue-500 transition-all">
            <div className="flex justify-between items-center">
              <CalendarIcon className="w-6 h-6 text-blue-400" />
              <div className="px-3 py-1 rounded bg-blue-500 text-[10px] font-bold uppercase tracking-widest">Live</div>
            </div>
            
            <div className="mt-auto">
              <h3 className="text-xl font-bold mb-1">Meeting Scheduler</h3>
              <p className="text-blue-400/70 text-sm font-mono">Status: active_session</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}