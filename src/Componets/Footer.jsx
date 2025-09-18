// src/components/Footer.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Instagram, Twitter, Mail, Facebook } from 'lucide-react'; // Social media and contact icons
import { FaWhatsapp } from "react-icons/fa" // ✅ WhatsApp from react-icons


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
        <motion.div variants={itemVariants} className="mb-8 text-center">
  {/* Logo + Text Wrapper */}
  <a href="/" className="flex flex-col items-center">
    <img
      src="/Assets/logo/Kode-studio-footer.png"
      alt="Icon"
      className="w-20 h-20 rounded-xl object-cover "
    />
    <h2 className="mt-2 text-2xl font-extrabold text-gray-900 dark:text-white">
      <span className=" text-white">
        KodeCraft
      </span>
    </h2>
  </a>

  <p className="text-lg text-gray-600 dark:text-gray-400 mt-2">
    Crafting Digital Experiences
  </p>
  <p className="text-sm text-gray-500 dark:text-gray-400 mt-6 max-w-xl mx-auto">
    KodeCraft is a creative digital agency delivering tailor-made web
    solutions, marketing strategies, and brand experiences.
  </p>
</motion.div>


        {/* Navigation Links */}
        <motion.nav variants={itemVariants} className="mb-10">
          <ul className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-base font-medium">
            <motion.li variants={itemVariants}>
              <a href="/#services" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Services</a>
            </motion.li>
            <motion.li variants={itemVariants}>
              <a href="/#portfolio" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Portfolio</a>
            </motion.li>
            <motion.li variants={itemVariants}>
              <a href="/#testimonials" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Testimonials</a>
            </motion.li>
            <motion.li variants={itemVariants}>
              <a href="/contact" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Contact</a>
            </motion.li>
          </ul>
        </motion.nav>

        {/* Social Media Links */}
        <motion.div variants={itemVariants} className="flex justify-center space-x-6 mb-10">
          <motion.a
            href="https://www.facebook.com/profile.php?id=61581084899943"
            target="_blank"
            rel="noopener noreferrer"
            variants={socialIconVariants}
            whileHover="hover"
            custom={{ '--hover-color': '#6D28D9' }} // Purple-600
            className="text-gray-700 dark:text-gray-300"
          >
            <Facebook size={28} />
          </motion.a>
          <motion.a
            href="https://www.instagram.com/KodeCraft/"
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
  href="https://wa.me/917383084925" // Replace with client WhatsApp number
  target="_blank"
  rel="noopener noreferrer"
  variants={socialIconVariants}
  whileHover="hover"
  custom={{ '--hover-color': '#25D366' }} // WhatsApp green
  className="text-gray-700 dark:text-gray-300"
>
  <FaWhatsapp size={28} />
</motion.a>
          
          <motion.a
            href="mailto:hello.kodecraft@gmail.com"
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
          &copy; {new Date().getFullYear()} KodeCraft. All rights reserved.
        </motion.p>
      </div>
    </motion.footer>

  );
};

export default Footer;


