import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import testimonialsData from "../data/testimonials.json"
// Helper function to conditionally join class names (similar to 'clsx' or 'classnames')
function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

// Inline SVG for Left Arrow (replaces @tabler/icons-react's IconArrowLeft)
const IconArrowLeft = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M19 12H5" />
    <path d="M12 19L5 12L12 5" />
  </svg>
);

const IconArrowRight = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M5 12h14" />
    <path d="M12 5l7 7-7 7" />
  </svg>
);

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
  className,
}) => {
  const [active, setActive] = useState(0);


  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };


  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };


  const isActive = (index) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay, handleNext]);


  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };

  return (
    <div className={cn("max-w-sm md:max-w-4xl mx-auto px-4 md:px-8 lg:px-12 py-20", className)}>
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-20">
        {/* Testimonial Image Section */}
        <div>
          <div className="relative h-80 w-full">

            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.src}
                initial={{
                  opacity: 0,
                  scale: 0.9,
                  z: -100,
                  rotate: randomRotateY(),
                }}
                animate={{
                  opacity: isActive(index) ? 1 : 0.7,
                  scale: isActive(index) ? 1 : 0.95,
                  z: isActive(index) ? 0 : -100,
                  rotate: isActive(index) ? 0 : randomRotateY(),
                  zIndex: isActive(index) ? 999 : testimonials.length + 2 - index,
                  y: isActive(index) ? [0, -80, 0] : 0,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.9,
                  z: 100,
                  rotate: randomRotateY(),
                }}
                transition={{
                  duration: 0.4,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 origin-bottom"
              >
                <div className="flex flex-col items-center justify-center h-full w-full bg-white/10 backdrop-blur-xl backdrop-saturate-150 rounded-3xl text-center p-6">
                  <img
                    src={testimonial.src}
                    alt={testimonial.name}
                    className="w-60 h-60  object-cover mb-4 rounded-full border"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = `https://placehold.co/100x100/444/ccc?text=Image+Error`;
                    }}
                  />
                 
                </div>
              </motion.div>
            ))}

          </div>
        </div>

        {/* Testimonial Content and Navigation Section */}
        <div className="flex justify-between flex-col py-4">
          <motion.div
            key={active}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <h3 className="text-2xl font-bold text-white">
              {testimonials[active].name}
            </h3>
            <p className="text-sm text-gray-400">
              {testimonials[active].designation}
            </p>

            <motion.p className="text-lg text-gray-300 mt-8 leading-relaxed">
              {testimonials[active].quote.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ filter: "blur(10px)", opacity: 0, y: 5 }}
                  animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.02 * index,
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
          </motion.div>

          <div className="flex gap-4 pt-12 md:pt-0">
            <button
              onClick={handlePrev}
              className="h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center group/button shadow-md transition-colors duration-300 transform hover:scale-105"
              aria-label="Previous Testimonial"
            >
              <IconArrowLeft className="h-6 w-6 group-hover/button:-rotate-12 transition-transform duration-300" />
            </button>
            <button
              onClick={handleNext}
              className="h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center group/button shadow-md transition-colors duration-300 transform hover:scale-105"
              aria-label="Next Testimonial"
            >
              <IconArrowRight className="h-6 w-6 group-hover/button:rotate-12 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </div>

  );
};
// Main App Component to demonstrate AnimatedTestimonials
export default function App() {
  const sampleTestimonials = testimonialsData.testimonials;
  return (

    <div id="testimonials" className="min-h-screen bg-gradient-to-b from-bg-[#0e0e12] via-black to-white/10 py-20 px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-b from-white to-grey-100 bg-clip-text text-transparent">
          Client Review
        </h2>
        <p className="text-lg text-gray-300">
          What our clients say about working with us
        </p>
      </div>

      <AnimatedTestimonials testimonials={sampleTestimonials} autoplay={true} />
    </div>

  );
}

