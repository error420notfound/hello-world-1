import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight, Coffee } from 'lucide-react';

const base = import.meta.env.BASE_URL;

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 pt-24 overflow-hidden">
      {/* Background Decorative Element */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-[#e2d9c8]/30 via-transparent to-[#faf9f6] -z-10 blur-3xl rounded-full"
      />

      <div className="max-w-5xl mx-auto text-center space-y-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center space-x-3 px-4 py-2 rounded-full bg-[#1a1a1a]/5 text-[#1a1a1a]/60 text-xs font-medium tracking-[0.2em] uppercase backdrop-blur-sm border border-[#1a1a1a]/5 shadow-sm"
        >
          <Coffee size={14} />
          <span>India's Premier Specialty Roastery</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-9xl font-serif tracking-tight leading-[0.9] text-[#1a1a1a]"
        >
          Fresh roast <br /> for the <span className="italic italic-serif">night owls</span>.
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-xl mx-auto text-[#1a1a1a]/60 text-lg md:text-xl leading-relaxed font-light"
        >
          Artisanal coffee beans roasted in small batches, delivered across India. 
          Fueling individual mornings and the finest third-wave coffee shops.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 pt-8"
        >
          <motion.a 
            href={`${base}shop`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="group flex items-center space-x-3 bg-[#1a1a1a] text-white px-8 py-4 rounded-full text-base font-medium transition-shadow hover:shadow-2xl hover:shadow-[#1a1a1a]/20"
          >
            <span>Explore the Shop</span>
            <ArrowDownRight size={20} className="group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
          </motion.a>
          
          <motion.a 
            href={`${base}wholesale`}
            whileHover={{ x: 5 }}
            className="text-sm font-semibold tracking-widest uppercase text-[#1a1a1a] flex items-center group py-4 px-8 border border-transparent hover:border-[#1a1a1a]/10 rounded-full transition-all"
          >
            Bulk for Shops
          </motion.a>
        </motion.div>
      </div>

      {/* Hero Image/Element Placeholder */}
      <motion.div 
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 1, ease: [0.16, 1, 0.3, 1] }}
        className="mt-24 w-full max-w-6xl aspect-[21/9] bg-[#e2d9c8]/50 rounded-2xl overflow-hidden relative group cursor-pointer"
      >
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-1000 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/40 to-transparent" />
        <div className="absolute bottom-8 left-8 text-white">
          <p className="text-xs font-medium tracking-[0.3em] uppercase opacity-70 mb-2">Now Roasting</p>
          <h3 className="text-3xl font-serif italic">Ethiopian Sidamo — Batch #204</h3>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
