import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";
import { Navbar } from "./Navbar";
import { useLocation } from "react-router-dom";

function HeroSection() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["builds", "sells", "inspires", "connects"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const target = document.querySelector(location.hash);
      if (target) {
        setTimeout(() => {
          target.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <section
      className="relative min-h-screen overflow-hidden px-4 pb-12 pt-2 md:pt-4 
      
      bg-[radial-gradient(ellipse_60%_80%_at_50%_-20%,rgba(120,119,198,0.4),rgba(0,0,0,0))] 
      text-white "
    >
      {/* Navbar */}
      <motion.div className="flex justify-center w-full mb-16">
        <div className="flex justify-center w-full mb-4">
          <Navbar
            navItems={[
              { name: "Home", href: "/" },
              { name: "Service", href: "#services" },
              { name: "Portfolio", href: "#portfolio" },
              { name: "FAQ", href: "/faq" },
            ]}
          />
        </div>
      </motion.div>

      <div className="w-full overflow-hidden">
        <div className="container mx-auto">
          <div className="flex gap-8 py-12 lg:py-20  items-center justify-center flex-col">
            <a
              href="/#websiteAnalysis"
              className="px-4 py-1.5 text-sm sm:px-5 sm:py-2 sm:text-base bg-white/20 border border-white/30 rounded-full hover:bg-white/5 transition"
            >
              Get Free Website Analysis →
            </a>
            {/* Title */}
            <div className="flex gap-4 flex-col">
              <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-regular">
                <span className="text-spektr-cyan-50 bg-gradient-to-b from-white via-gray-300 bg-clip-text text-transparent">
                  Design that{" "}
                </span>
                <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
                  &nbsp;
                  {titles.map((title, index) => (
                    <motion.span
                      key={index}
                      className="absolute font-semibold"
                      initial={{ opacity: 0, y: "-100" }}
                      transition={{ type: "spring", stiffness: 50 }}
                      animate={
                        titleNumber === index
                          ? {
                            y: 0,
                            opacity: 1,
                          }
                          : {
                            y: titleNumber > index ? -150 : 150,
                            opacity: 0,
                          }
                      }
                    >
                      {title}
                    </motion.span>
                  ))}
                </span>
              </h1>

              <p className="font-poppins text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
                We build websites that are fast, professional, and built to grow
                your brand effortlessly.
              </p>
            </div>

            {/* CTA Button */}
            <div className="flex flex-row gap-3">
              <button
                onClick={() => {
                  document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex rounded-full text-center group items-center w-full justify-center bg-gradient-to-tr from-zinc-300/20 to-transparent border border-white hover:shadow-[0_0_35px_rgba(255,255,255,0.8)] transition-all sm:w-auto py-4 px-10"
              >
                Portfolio
                <MoveRight className="w-5 h-5 ml-2" />
              </button>

            </div>
          </div>
        </div>
      </div>
  

    </section>
  );
}

export { HeroSection };
