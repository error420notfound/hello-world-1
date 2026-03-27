import React from 'react';
import { Instagram, Twitter, Facebook, ArrowUpRight } from 'lucide-react';

const base = import.meta.env.BASE_URL;

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] text-[#faf9f6] px-6 py-24 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-24">
        {/* Brand Section */}
        <div className="md:col-span-2 space-y-8">
          <h2 className="text-4xl md:text-6xl font-serif tracking-tight leading-tight">
            Crafting the pulse <br /> of midnight.
          </h2>
          <p className="text-[#faf9f6]/60 text-lg leading-relaxed max-w-md">
            Midnight Pulse is a specialty coffee roastery dedicated to those who find their rhythm in the quiet hours. 
            From Mumbai to Bangalore, we fuel the third wave coffee culture across India.
          </p>
          <div className="flex items-center space-x-6">
            <a href="#" className="hover:opacity-60 transition-opacity"><Instagram size={20} /></a>
            <a href="#" className="hover:opacity-60 transition-opacity"><Twitter size={20} /></a>
            <a href="#" className="hover:opacity-60 transition-opacity"><Facebook size={20} /></a>
          </div>
        </div>

        {/* Links Section */}
        <div className="space-y-8">
          <h3 className="text-sm font-medium tracking-[0.2em] uppercase text-[#faf9f6]/40">Explore</h3>
          <ul className="space-y-4">
            {[
              { label: 'Shop All', href: 'shop' },
              { label: 'Bulk Orders', href: 'wholesale' },
              { label: 'Our Story', href: 'story' },
              { label: 'Brewing Guides', href: 'brewing' },
              { label: 'Contact', href: '#' }
            ].map((item) => (
              <li key={item.label}>
                <a href={item.href.startsWith('#') ? item.href : `${base}/${item.href}`} className="text-lg hover:opacity-60 transition-opacity flex items-center group">
                  {item.label}
                  <ArrowUpRight size={16} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Section */}
        <div className="space-y-8">
          <h3 className="text-sm font-medium tracking-[0.2em] uppercase text-[#faf9f6]/40">Newsletter</h3>
          <p className="text-[#faf9f6]/60 text-sm leading-relaxed">
            Join the collective. Receive early access to seasonal drops and brewing tips.
          </p>
          <form className="relative group">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="w-full bg-transparent border-b border-[#faf9f6]/20 py-3 focus:outline-none focus:border-[#faf9f6] transition-colors placeholder:text-[#faf9f6]/30 text-sm"
            />
            <button className="absolute right-0 top-1/2 -translate-y-1/2 text-xs font-medium tracking-widest uppercase hover:text-[#faf9f6]/60 transition-opacity">
              Join
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-32 pt-12 border-t border-[#faf9f6]/5 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-[10px] tracking-[0.2em] uppercase text-[#faf9f6]/40 font-medium">
        <span>© 2026 Midnight Pulse Coffee Roastery.</span>
        <div className="flex space-x-8">
          <a href="#" className="hover:text-[#faf9f6] transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-[#faf9f6] transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-[#faf9f6] transition-colors">Shipping & Returns</a>
        </div>
        <span>Handcrafted in India.</span>
      </div>
    </footer>
  );
};

export default Footer;
