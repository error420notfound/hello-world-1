import React from 'react';
import { motion } from 'framer-motion';
import { Building2, PackageCheck, Award, MessageSquareQuote } from 'lucide-react';

const WholesaleSection = () => {
  return (
    <section className="py-32 px-6 md:px-12 bg-white text-[#1a1a1a]">
      <div className="max-w-7xl mx-auto space-y-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="max-w-2xl space-y-6"
          >
            <div className="inline-flex items-center space-x-3 text-[#1a1a1a]/40">
              <Building2 size={16} />
              <span className="text-xs font-semibold tracking-widest uppercase">For Third Wave Partners</span>
            </div>
            <h2 className="text-5xl md:text-8xl font-serif tracking-tight leading-[0.9]">
              Elevate your <br /> shop’s <span className="italic">standard</span>.
            </h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="max-w-md text-[#1a1a1a]/60 text-lg leading-relaxed font-light"
          >
            We partner with the finest coffee shops across India, providing consistent quality, 
            expert training, and small-batch fresh roasts that keep your customers coming back.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <PackageCheck size={28} />,
              title: "Bulk Precision",
              desc: "Flexible ordering volumes tailored to your shop's weekly pulse. Freshness guaranteed from roaster to bar."
            },
            {
              icon: <Award size={28} />,
              title: "Barista Support",
              desc: "On-site training and technical support to ensure every cup of Midnight Pulse is brewed to perfection."
            },
            {
              icon: <MessageSquareQuote size={28} />,
              title: "Custom Roasts",
              desc: "Work with our head roaster to develop a signature profile unique to your brand's identity."
            }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 * i, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="p-10 bg-[#faf9f6] rounded-3xl space-y-8 hover:shadow-xl hover:shadow-[#1a1a1a]/5 transition-shadow group"
            >
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-[#1a1a1a] shadow-sm group-hover:bg-[#1a1a1a] group-hover:text-white transition-colors duration-500">
                {item.icon}
              </div>
              <div className="space-y-4">
                <h4 className="text-2xl font-serif tracking-tight leading-tight">{item.title}</h4>
                <p className="text-[#1a1a1a]/60 text-sm leading-relaxed font-light">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="relative bg-[#e2d9c8]/20 rounded-[2.5rem] p-12 md:p-24 overflow-hidden group"
        >
          <div className="relative z-10 flex flex-col items-center text-center space-y-10">
            <h3 className="text-4xl md:text-6xl font-serif tracking-tight italic">Ready to fuel your community?</h3>
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <button className="bg-[#1a1a1a] text-white px-10 py-5 rounded-full text-base font-medium hover:scale-105 transition-transform shadow-lg shadow-[#1a1a1a]/20">
                Inquire for Wholesale
              </button>
              <button className="px-10 py-5 rounded-full text-base font-medium border border-[#1a1a1a]/10 hover:bg-[#1a1a1a]/5 transition-colors">
                Request Samples
              </button>
            </div>
          </div>
          {/* Decorative background circle */}
          <div className="absolute -bottom-1/2 left-1/2 -translate-x-1/2 w-[80%] aspect-square bg-white/40 blur-[100px] rounded-full group-hover:scale-110 transition-transform duration-1000" />
        </motion.div>
      </div>
    </section>
  );
};

export default WholesaleSection;
