import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Menu, X } from 'lucide-react';

const base = import.meta.env.BASE_URL;
const navItems = [
  { label: 'Shop', href: 'shop' },
  { label: 'Wholesale', href: 'wholesale' },
  { label: 'Story', href: 'story' },
  { label: 'Brewing', href: 'brewing' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed left-1/2 top-6 z-50 hidden w-[min(calc(100vw-3rem),72rem)] -translate-x-1/2 md:block"
      >
        <div className="flex items-center justify-between rounded-full border border-white/60 bg-[#faf9f6]/78 px-4 py-3 shadow-[0_20px_60px_rgba(26,26,26,0.12)] backdrop-blur-xl">
          <a href={base} className="px-4 text-2xl font-serif tracking-tight text-[#1a1a1a] transition-opacity hover:opacity-80">
            Midnight Pulse
          </a>
          <div className="flex items-center gap-2 rounded-full bg-white/70 p-2">
            {navItems.map((item) => (
              <a key={item.label} href={`${base}${item.href}`} className="rounded-full px-5 py-3 text-sm font-medium tracking-wide text-[#1a1a1a]/65 transition-colors hover:bg-[#1a1a1a]/5 hover:text-[#1a1a1a]">
                {item.label}
              </a>
            ))}
          </div>
          <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="flex items-center gap-2 rounded-full bg-[#1a1a1a] px-5 py-3 text-sm font-medium tracking-wide text-white transition-colors hover:bg-[#1a1a1a]/90">
            <ShoppingBag size={18} />
            <span>Cart (0)</span>
          </motion.button>
        </div>
      </motion.nav>

      <motion.nav
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        className="fixed inset-x-[10px] bottom-[10px] z-50 md:hidden"
      >
        <div className="w-full rounded-[2rem] border border-white/60 bg-[#faf9f6]/88 p-3 shadow-[0_20px_60px_rgba(26,26,26,0.18)] backdrop-blur-xl">
          {isOpen && (
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="mb-3 rounded-[1.75rem] border border-[#1a1a1a]/8 bg-white/90 p-3">
              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <a key={item.label} href={`${base}${item.href}`} className="rounded-2xl px-4 py-3 text-base font-medium text-[#1a1a1a] transition-colors hover:bg-[#1a1a1a]/5" onClick={() => setIsOpen(false)}>
                    {item.label}
                  </a>
                ))}
                <button className="mt-1 flex items-center justify-between rounded-2xl bg-[#1a1a1a] px-4 py-3 text-sm font-medium text-white">
                  <span>View Cart</span>
                  <ShoppingBag size={18} />
                </button>
              </div>
            </motion.div>
          )}
          <div className="flex items-center justify-between gap-3">
            <a href={base} className="px-3 text-lg font-serif tracking-tight text-[#1a1a1a]">
              Midnight Pulse
            </a>
            <button className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#1a1a1a] shadow-sm" aria-label={isOpen ? 'Close menu' : 'Open menu'} onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;
