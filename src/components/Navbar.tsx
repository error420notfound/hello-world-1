import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Menu, X } from 'lucide-react';

const base = import.meta.env.BASE_URL;

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#faf9f6]/80 backdrop-blur-md border-b border-[#1a1a1a]/5 px-6 py-4 md:px-12"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href={base} className="text-2xl font-serif tracking-tight text-[#1a1a1a] hover:opacity-80 transition-opacity">
          Midnight Pulse
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-12">
          {['Shop', 'Wholesale', 'Story', 'Brewing'].map((item) => (
            <a 
              key={item} 
              href={`${base}${item.toLowerCase()}`}
              className="text-sm font-medium tracking-wide text-[#1a1a1a]/60 hover:text-[#1a1a1a] transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#1a1a1a] transition-all group-hover:w-full" />
            </a>
          ))}
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 bg-[#1a1a1a] text-white px-5 py-2.5 rounded-full text-sm font-medium tracking-wide hover:bg-[#1a1a1a]/90 transition-colors"
          >
            <ShoppingBag size={18} />
            <span>Cart (0)</span>
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-[#1a1a1a]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden absolute top-full left-0 right-0 bg-[#faf9f6] border-b border-[#1a1a1a]/5 px-6 py-8"
        >
          <div className="flex flex-col space-y-6">
            {['Shop', 'Wholesale', 'Story', 'Brewing'].map((item) => (
              <a 
                key={item} 
                href={`${base}${item.toLowerCase()}`}
                className="text-xl font-serif text-[#1a1a1a]"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
            <button className="flex items-center justify-between bg-[#1a1a1a] text-white px-6 py-4 rounded-xl text-lg font-medium">
              <span>View Cart</span>
              <ShoppingBag size={20} />
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
