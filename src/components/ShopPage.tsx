import React from 'react';
import { motion } from 'framer-motion';

const products = [
  { id: 1, name: "Nightshade Blend", type: "Half-Caf", price: "₹950", roast: "Medium Dark", origin: "Ethiopia + Brazil", image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=2070&auto=format&fit=crop" },
  { id: 2, name: "Sidamo G1", type: "Single Origin", price: "₹1,200", roast: "Light", origin: "Ethiopia", image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=2070&auto=format&fit=crop" },
  { id: 3, name: "Monsoon Malabar", type: "Single Origin", price: "₹850", roast: "Dark", origin: "India", image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=2070&auto=format&fit=crop" },
  { id: 4, name: "Electric City", type: "Espresso Blend", price: "₹900", roast: "Medium", origin: "Colombia + India", image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=2070&auto=format&fit=crop" },
];

const ShopPage = () => {
  return (
    <div className="pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto space-y-16">
        <header className="space-y-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-serif tracking-tight"
          >
            The Collection.
          </motion.h1>
          <p className="text-[#1a1a1a]/60 text-lg max-w-xl font-light">
            Roasted daily in our Mumbai facility. Each bag is marked with its unique batch number and roast date.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {products.map((product, i) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i }}
              className="group cursor-pointer"
            >
              <div className="aspect-[3/4] overflow-hidden rounded-2xl bg-[#e2d9c8]/20 relative mb-6">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase">
                  {product.type}
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-serif">{product.name}</h3>
                  <span className="text-sm font-medium">{product.price}</span>
                </div>
                <p className="text-xs text-[#1a1a1a]/40 uppercase tracking-widest">{product.roast} Roast • {product.origin}</p>
                <motion.button 
                  whileTap={{ scale: 0.95 }}
                  className="w-full mt-4 py-3 border border-[#1a1a1a] rounded-full text-sm font-medium hover:bg-[#1a1a1a] hover:text-white transition-colors"
                >
                  Add to Cart
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
