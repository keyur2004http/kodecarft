import React, { useState } from "react"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"


export const Navbar = ({ navItems = [] }) => {
  const [isOpen, setIsOpen] = useState(false)


  return (
    <>
      <header className="w-full flex justify-center px-4 pt-6 z-50 sticky">
        <div className=" bg-gradient-to-tr from-zinc-300/20 via-purple-450/30 to-transparent   text-white border-input border-[1px]  px-6 py-3 rounded-full shadow-lg flex justify-between items-center w-full max-w-5xl relative">
          {/* Logo */}
          <a class="flex items-center text-white" href="/">
            <img
               src="/Assets/logo/Kode-studio-logo.png"// Replace with your actual image path
              alt="Icon"
              className="w-10 h-10  rounded-xl object-cover"
            />
            <span className="ml-2 text-white font-semibold">
        KodeCraft
      </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-10 sticky">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative text-sm text-white font-medium after:block after:h-[2px] after:bg-white after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
              >
                {item.name}
              </a>

            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href="/contact"
            className="hidden md:inline-flex px-5 py-2 rounded-full bg-white/20 text-white text-sm hover:shadow-[inset_0_0_25px_rgba(255,255,255,0.5)] 
        ]"
          >
            Get Started
          </a>

          {/* Mobile Menu Icon */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Mobile Menu Overlay */}
          <AnimatePresence>
            {isOpen && (
              <>
                {/* ✅ Background blur overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 z-40 backdrop-blur-md bg-black/30 md:hidden"
                  onClick={() => setIsOpen(false)} // click outside to close
                />

                {/* ✅ Mobile Menu */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-16 left-0 w-full z-50 font-bold rounded-xl py-4 px-6 md:hidden flex flex-col gap-4 
             shadow-md bg-[url('https://www.transparenttextures.com/patterns/broken-noise.png')] opacity-10 
             bg-repeat bg-white/5 backdrop-blur-md"
                >

                  {navItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-lg font-medium text-white after:block after:h-[2px] after:bg-white after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100 "
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                  <a
                    href="/contact"
                    className="w-full text-center py-2 rounded-full  bg-white/20 text-white text-sm hover:shadow-[inset_0_0_25px_rgba(255,255,255,0.5)] 
                  ] duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    Get Started
                  </a>
                </motion.div>
              </>
            )}
          </AnimatePresence>

        </div>
      </header>

    </>

  )
}
