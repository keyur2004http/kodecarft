import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import pricingData from "../data/pricing.json";

const PriceSection = () => {
  const { heading, subheading, plans } = pricingData;

  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-purple-950/40 via-purple-900/10 to-black text-white font-inter overflow-hidden relative">
      {/* Background bubbles (unchanged) */}
      <motion.div className="absolute top-[10%] left-[5%] w-32 h-32 bg-purple-400 rounded-full blur-3xl opacity-10 z-0" animate={{ y: [0, 20, 0], x: [0, -10, 0] }} transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }} />
      <motion.div className="absolute bottom-[10%] right-[10%] w-40 h-40 bg-purple-600 rounded-full blur-3xl opacity-10 z-0" animate={{ y: [0, -20, 0], x: [0, 15, 0] }} transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }} />
      <motion.div className="absolute top-[30%] right-[20%] w-24 h-24 bg-indigo-500 rounded-full blur-3xl opacity-10 z-0" animate={{ y: [0, 15, 0], x: [0, -10, 0] }} transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }} />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 className="text-4xl sm:text-5xl font-extrabold mb-4" initial={{ opacity: 0, y: -40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} viewport={{ once: true }}>
            {heading && <>{heading.split(" ").slice(0, -1).join(" ")} <span className="text-purple-600">{heading.split(" ").slice(-1)}</span></>}
          </motion.h2>
          <motion.p className="text-lg text-white" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }} viewport={{ once: true }}>
            {subheading}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full">
          {plans.map((plan, index) => (
            <div key={index} className="relative text-white text-center space-y-4 bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 shadow-md transition hover:scale-105">
              {plan.highlight && (
                <div className="absolute -top-3 right-3 bg-white text-purple-800 text-xs font-bold px-3 py-1 rounded-full shadow flex items-center gap-1">
                  <Star className="w-4 h-4" /> Most Popular
                </div>
              )}
              <h3 className="text-2xl font-semibold">{plan.name}</h3>
              <p className="text-3xl font-bold">{plan.price}</p>
              <ul className="space-y-2 text-sm text-white/80">
                {plan.features.map((feature, i) => (
                  <li key={i}>• {feature}</li>
                ))}
              </ul>
              <button className="mt-8 px-6 py-2 bg-white text-black rounded-full font-semibold hover:opacity-90 transition">
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PriceSection;
