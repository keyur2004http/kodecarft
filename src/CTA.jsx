import React from "react";
import data from "./data/cta.json";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const CallToAction = () => {
  return (
    <section className="bg-black text-white py-16 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10">
        
        {/* ✅ Text Block */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <h2 className="text-3xl sm:text-4xl font-bold leading-snug mb-6">
            A partnership built on{" "}
            <span className="text-indigo-400">trust</span> and{" "}
            <span className="text-indigo-400">growth</span>
          </h2>
          <p className="text-gray-300 text-lg">{data.description1}</p>

          <h2 className="text-2xl sm:text-2xl font-bold leading-snug mt-10">
            Start<span className="text-indigo-400">Smart.</span>Grow
            <span className="text-indigo-400">Smarter.</span>
          </h2>
          <p className="text-gray-300 text-lg mt-10">{data.description2}</p>
        </motion.div>

        {/* ✅ Callout Box */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative overflow-hidden group 
            bg-white/5 backdrop-blur-md 
            shadow-[inset_0_0_0.5px_rgba(255,255,255,0.05)] 
            border border-white/10 
            hover:shadow-2xl hover:backdrop-blur-2xl 
            transition-all duration-300 cursor-pointer 
            p-8 rounded-xl w-full md:max-w-md shadow-md"
        >
          {/* Background Noise */}
          <div className="absolute inset-0 z-0 bg-[url(https://www.transparenttextures.com/patterns/binding-dark.png)] opacity-5" />

          {/* Content */}
          <div className="relative z-10">
            {/* Floating Illustration */}
            <motion.img
              src="/Assets/illustration/leadership-amico.png"
              alt="Call Illustration"
              className="w-full h-auto mb-6"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-xl font-semibold mb-4 text-center"
            >
              {data.heading}
            </motion.h3>

            {/* Button */}
            <motion.button
              onClick={() =>
                (window.location.href =
                  "/contact?message=I need website for my bussiness")
              }
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="w-full py-3 bg-white font-semibold text-black/70 
                hover:shadow-[0_0_25px_rgba(255,255,255,0.8)] 
                hover:bg-indigo-400 hover:text-white  
                transition duration-300 rounded-md mb-6"
            >
              {data.buttonText}
            </motion.button>

            {/* Benefits List */}
            <motion.ul
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: { staggerChildren: 0.15 },
                },
              }}
              className="space-y-2"
            >
              {data.benefits.map((item, index) => (
                <motion.li
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    show: { opacity: 1, y: 0 },
                  }}
                  className="flex items-center gap-2 text-sm text-gray-200"
                >
                  <CheckCircle2 className="text-indigo-400 w-4 h-4" />
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
