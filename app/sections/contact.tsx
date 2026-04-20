"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, ArrowRight, CheckCircle } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formMessage, setFormMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus('error');
      setFormMessage("Please fill in all fields");
      return;
    }

    setFormStatus('loading');

    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      setFormMessage("Thank you! Your message has been received. We'll get back to you soon.");
      
      // Reset form
      setFormData({ name: "", email: "", message: "" });
      
      setTimeout(() => {
        setFormStatus('idle');
        setFormMessage("");
      }, 6000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-32 px-6 border-t border-white/10 bg-[#050505]">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">Ready to Build Something Great?</h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            Let's turn your idea into a production ready product.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          
          {/* Left Side - Information */}
          <div className="space-y-10">
            <div>
              <h3 className="text-3xl font-bold mb-6">Get In Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Email Us</p>
                    <p className="text-white font-medium">hello@developershub.corp</p>
                  </div>
                </div>

                <div>
                  <p className="text-white/60 text-sm mb-2">Our Locations</p>
                  <p className="text-white">Karachi, Pakistan • San Francisco, USA • Remote</p>
                </div>
              </div>
            </div>

            <div className="border-l-2 border-blue-500 pl-6">
              <p className="text-white/70 italic text-lg">
                "We're always excited to work on challenging and meaningful projects."
              </p>
              <p className="text-sm text-blue-400 mt-4">- DevelopersHub Team</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-zinc-900/50 border border-white/10 rounded-3xl p-8 md:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm text-white/70 mb-2">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-zinc-900 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-blue-500 transition"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm text-white/70 mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-zinc-900 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-blue-500 transition"
                  placeholder="you@company.com"
                />
              </div>

              <div>
                <label className="block text-sm text-white/70 mb-2">Project Details</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={7}
                  className="w-full bg-zinc-900 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-blue-500 transition resize-y"
                  placeholder="Tell us about your project, requirements, timeline, and budget..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={formStatus === 'loading'}
                className="w-full py-5 bg-blue-600 hover:bg-blue-500 disabled:bg-blue-400 rounded-2xl font-bold text-lg transition flex items-center justify-center gap-3 disabled:cursor-not-allowed"
              >
                {formStatus === 'loading' ? "Sending Message..." : "Send Message"}
                <ArrowRight className="w-5 h-5" />
              </button>

              <AnimatePresence>
                {formMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className={`flex items-center gap-3 text-center text-sm font-medium mt-4 p-4 rounded-2xl ${
                      formStatus === 'success'
                        ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                        : 'bg-red-500/10 text-red-400 border border-red-500/20'
                    }`}
                  >
                    {formStatus === 'success' && <CheckCircle className="w-5 h-5" />}
                    {formMessage}
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}