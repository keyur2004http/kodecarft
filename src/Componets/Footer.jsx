// src/components/Footer.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Instagram, Twitter, Mail } from 'lucide-react'; // Social media and contact icons


const Footer = () => {
  // Variants for staggered children animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  // Variants for individual item animation
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const socialIconVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeOut" } },
    hover: { scale: 1.2, color: 'var(--hover-color)', transition: { type: "spring", stiffness: 400, damping: 10 } }
  };

  return (
    
    <motion.footer
    
      className="bg-white dark:bg-black py-16 sm:py-20 font-inter text-gray-700 dark:text-gray-300 relative overflow-hidden mt-10" 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      {/* Background radial gradient for subtle texture */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-radial-gradient-purple-blue pointer-events-none"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
        {/* Company Name / Logo */}
        <motion.div variants={itemVariants} className="mb-8">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900  to-white">KodeCarft</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-2">
            Crafting Digital Experiences
          </p>
        </motion.div>

        {/* Navigation Links */}
        <motion.nav variants={itemVariants} className="mb-10">
          <ul className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-lg font-medium">
            <motion.li variants={itemVariants}>
              <a href="#services" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Services</a>
            </motion.li>
            <motion.li variants={itemVariants}>
              <a href="#portfolio" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Portfolio</a>
            </motion.li>
            <motion.li variants={itemVariants}>
              <a href="#pricing" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Pricing</a>
            </motion.li>
            <motion.li variants={itemVariants}>
              <a href="#testimonials" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Testimonials</a>
            </motion.li>
            <motion.li variants={itemVariants}>
              <a href="#contact" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Contact</a>
            </motion.li>
          </ul>
        </motion.nav>

        {/* Social Media Links */}
        <motion.div variants={itemVariants} className="flex justify-center space-x-6 mb-10">
          <motion.a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            variants={socialIconVariants}
            whileHover="hover"
            custom={{ '--hover-color': '#6D28D9' }} // Purple-600
            className="text-gray-700 dark:text-gray-300"
          >
            <Linkedin size={28} />
          </motion.a>
          <motion.a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            variants={socialIconVariants}
            whileHover="hover"
            custom={{ '--hover-color': '#4F46E5' }} // Indigo-600
            className="text-gray-700 dark:text-gray-300"
          >
            <Instagram size={28} />
          </motion.a>
          <motion.a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            variants={socialIconVariants}
            whileHover="hover"
            custom={{ '--hover-color': '#EC4899' }} // Pink-500
            className="text-gray-700 dark:text-gray-300"
          >
            <Twitter size={28} />
          </motion.a>
          <motion.a
            href="mailto:your_email@kinfinity.com"
            variants={socialIconVariants}
            whileHover="hover"
            custom={{ '--hover-color': '#A78BFA' }} // Purple-400
            className="text-gray-700 dark:text-gray-300"
          >
            <Mail size={28} />
          </motion.a>
        </motion.div>

        {/* Copyright */}
        <motion.p variants={itemVariants} className="text-sm text-gray-500 dark:text-gray-400">
          &copy; {new Date().getFullYear()} KodeCarft. All rights reserved.
        </motion.p>
      </div>
    </motion.footer>
    
  );
};

export default Footer;
