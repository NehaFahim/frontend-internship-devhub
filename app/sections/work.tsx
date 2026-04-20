"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  Monitor, Server, Layers, Palette, Brain, 
  Smartphone, Globe, Sparkles, ArrowRight 
} from "lucide-react";

const portfolioItems = [
  { 
    icon: Monitor, 
    title: "Frontend Development", 
    desc: "Modern, responsive and pixel-perfect user interfaces using React, Next.js, Tailwind and Framer Motion.", 
    tags: ["React", "Next.js", "Tailwind", "TypeScript"], 
    color: "blue" 
  },
  { 
    icon: Server, 
    title: "Backend & APIs", 
    desc: "Scalable server-side solutions with Node.js, NestJS, Express, PostgreSQL and real-time features.", 
    tags: ["Node.js", "PostgreSQL", "NestJS", "Socket.io"], 
    color: "emerald" 
  },
  { 
    icon: Layers, 
    title: "Full-Stack Applications", 
    desc: "End-to-end web applications including authentication, payments, dashboards and admin panels.", 
    tags: ["MERN", "Next.js", "Stripe", "Prisma"], 
    color: "violet" 
  },
  { 
    icon: Palette, 
    title: "UI/UX Design", 
    desc: "Beautiful, intuitive and user-centered designs with Figma to clean, accessible code implementation.", 
    tags: ["Figma", "UI/UX", "Design Systems", "Accessibility"], 
    color: "amber" 
  },
  { 
    icon: Brain, 
    title: "AI & Machine Learning", 
    desc: "Intelligent solutions including RAG systems, AI content generation, chatbots and automation.", 
    tags: ["OpenAI", "LangChain", "Python", "Automation"], 
    color: "purple" 
  },
  { 
    icon: Smartphone, 
    title: "Mobile App Development", 
    desc: "Cross-platform mobile applications with React Native and native-like performance.", 
    tags: ["React Native", "Expo", "Firebase"], 
    color: "rose" 
  },
  { 
    icon: Globe, 
    title: "SaaS & Web Platforms", 
    desc: "Subscription-based SaaS products with multi-tenant architecture and advanced analytics.", 
    tags: ["SaaS", "Dashboard", "Analytics", "Multi-tenant"], 
    color: "cyan" 
  },
  { 
    icon: Sparkles, 
    title: "Emerging Technologies", 
    desc: "Web3 integrations, blockchain solutions, AR/VR experiences and cutting-edge innovations.", 
    tags: ["Web3", "Blockchain", "AR/VR", "Innovation"], 
    color: "orange" 
  }
];

interface WorkProps {
  onBookCall: () => void;
}

export default function Work({ onBookCall }: WorkProps) {
  return (
    <section id="portfolio" className="py-32 px-6 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 tracking-tight">
            Our Expertise Across Domains
          </h2>
          <p className="text-white/60 text-xl max-w-2xl mx-auto">
            We have successfully delivered projects in Frontend, Backend, AI, Mobile, SaaS and much more.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolioItems.map((project, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              className="group p-8 rounded-3xl border border-white/10 bg-zinc-900/70 hover:border-blue-500/50 hover:bg-zinc-900 transition-all duration-500 flex flex-col"
            >
              <div className={`w-14 h-14 rounded-2xl bg-linear-to-br from-${project.color}-500/20 to-transparent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <project.icon className={`w-8 h-8 text-${project.color}-400`} />
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-white">{project.title}</h3>
              
              <p className="text-white/70 text-[15px] leading-relaxed mb-8 grow">
                {project.desc}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag, idx) => (
                  <span 
                    key={idx}
                    className="text-xs px-3 py-1 bg-white/5 border border-white/10 rounded-full text-white/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <p className="text-white/50 text-sm max-w-md mx-auto">
            + Many more projects delivered for clients across different industries using latest technologies and best practices.
          </p>
          
          <button 
            onClick={onBookCall}
            className="mt-8 px-8 py-4 border border-white/30 hover:bg-white/5 rounded-2xl text-sm font-medium transition flex items-center gap-3 mx-auto hover:border-white/50"
          >
            Discuss Your Project With Us 
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}