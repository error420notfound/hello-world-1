import React from 'react';
import { motion } from 'framer-motion';
import { Moon, Zap, ArrowRight } from 'lucide-react';

const HalfCafFeature = () => {
  return (
    <section className="py-32 px-6 md:px-12 bg-[#1a1a1a] text-[#faf9f6] relative overflow-hidden">
      {/* Decorative Moon Shadow */}
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.4, 0.3],
          x: [-50, 0, -50]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 -left-24 -translate-y-1/2 w-96 h-96 bg-[#e2d9c8]/10 blur-[120px] rounded-full pointer-events-none"
      />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="space-y-10"
        >
          <div className="inline-flex items-center space-x-3 text-[#e2d9c8]">
            <Moon size={20} className="fill-[#e2d9c8]" />
            <span className="text-xs font-semibold tracking-widest uppercase">For the midnight owls</span>
          </div>

          <h2 className="text-5xl md:text-8xl font-serif tracking-tight leading-[0.9]">
            The <br /> Half-Caf <br /> Revolution.
          </h2>

          <p className="text-[#faf9f6]/60 text-lg md:text-xl leading-relaxed max-w-md font-light">
            Crafted for the developers, the designers, and the dreamers who find their best work in the quiet hours of the night. 
            All the flavor, half the caffeine. Stay sharp, sleep better.
          </p>

          <div className="grid grid-cols-2 gap-8 pt-4">
            <div className="space-y-3">
              <Zap size={24} className="text-[#e2d9c8]" />
              <h4 className="font-serif text-2xl italic tracking-tight text-[#e2d9c8]">Focus fuel</h4>
              <p className="text-xs text-[#faf9f6]/40 leading-relaxed uppercase tracking-widest">Sustained energy without the midnight crash.</p>
            </div>
            <div className="space-y-3">
              <Moon size={24} className="text-[#e2d9c8]" />
              <h4 className="font-serif text-2xl italic tracking-tight text-[#e2d9c8]">Rest easy</h4>
              <p className="text-xs text-[#faf9f6]/40 leading-relaxed uppercase tracking-widest">Designed for those who code till 3 AM.</p>
            </div>
          </div>

          <motion.button 
            whileHover={{ x: 10 }}
            className="flex items-center space-x-4 text-sm font-semibold tracking-[0.2em] uppercase text-[#e2d9c8] pt-8 group"
          >
            <span>Pre-order now</span>
            <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
          </motion.button>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="relative aspect-square md:aspect-[4/5] bg-[#e2d9c8]/5 rounded-3xl overflow-hidden shadow-2xl group cursor-pointer"
        >
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-700" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent opacity-60" />
          
          <div className="absolute bottom-12 left-12 right-12">
            <div className="flex items-center justify-between border-t border-[#faf9f6]/20 pt-8">
              <div>
                <h3 className="text-3xl font-serif italic text-[#e2d9c8]">The Nightshade Blend</h3>
                <p className="text-xs tracking-widest uppercase opacity-60 mt-1">Half-Caf / Medium Dark Roast</p>
              </div>
              <div className="text-4xl font-serif">₹950</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HalfCafFeature;
