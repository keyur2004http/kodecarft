// src/components/Services.jsx
import React from "react";
import { motion, useAnimation } from "framer-motion";
import {
  LayoutTemplate,
  Brush,
  Smartphone,
  Search,
  CodeXml,
  Globe,
} from "lucide-react";
import serviceData from "../data/services.json";
const iconMap = {
  Brush,
  Smartphone,
  Search,
  CodeXml,
  LayoutTemplate,
  Globe,
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

const underlineVariants = {
  hidden: { width: 0 },
  visible: { width: "100%", transition: { duration: 0.4 } },
};

const ServiceCard = ({ icon, title, description, index }) => {
  const Icon = iconMap[icon] || Brush;
  const underlineControls = useAnimation();


  return (
    <motion.div
      className=" rounded-3xl p-8 text-left border border-white/10 relative overflow-hidden group 
               bg-white/10 backdrop-blur-xl backdrop-saturate-150 shadow-xl hover:shadow-2xl 
               hover:backdrop-blur-2xl transition-all duration-300 cursor-pointer"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={cardVariants}
      custom={index}
      whileHover={{
        scale: 1.05,
        y: -8,
        boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
      }}
      onHoverStart={() => underlineControls.start("visible")}
      onHoverEnd={() => underlineControls.start("hidden")}
    >
      

      {/* Icon */}
      <motion.div
        className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-400 to-indigo-600 
                 text-white flex items-center justify-center mb-6 shadow-md 
                 group-hover:scale-110 group-hover:rotate-6 transition"
        whileHover={{ scale: 1.1, rotate: 5 }}
      >
        <Icon className="w-8 h-8" strokeWidth={2.5} />
      </motion.div>

      {/* Title */}
      <h3 className="text-2xl font-bold text-white mb-3 relative inline-block">
        {title}
        <motion.span
          className="block h-1 bg-gradient-to-r bg-gradient-to-b from-white to-indigo-600 absolute bottom-[-8px] left-0"
          variants={underlineVariants}
          initial="hidden"
          animate={underlineControls}
        ></motion.span>
      </h3>

      {/* Description */}
      <p className="text-gray-300 text-base leading-relaxed">{description}</p>
    </motion.div>

  );

};

const Services = () => {
  const services = serviceData.services;
  return (
    <section
      id="services"
      className="relative py-20 sm:py-28  text-white overflow-hidden"
    >



      {/* 🟡 Foreground content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 text-center">
        <motion.h2
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 relative inline-block"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, damping: 10 }}
        >
          What I{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-indigo-600">
            Offer
          </span>
          <div className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-28 h-1.5 bg-gradient-to-r from-white to-indigo-600 rounded-full shadow-lg"></div>
        </motion.h2>

        <motion.p
          className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-16 mt-8 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
        >
          I build beautiful, lightning-fast, and highly engaging websites
          tailored to elevate your business's online presence.
        </motion.p>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};


export default Services;
