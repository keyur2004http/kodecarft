import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import faqContent from "./data/faq.json";
import { Navbar } from "./Componets/Navbar";
import Footer from "./Componets/Footer";
import PageMeta from "./Componets/PageMeta";

const FAQ = ({ title = "Frequently Asked Questions"
  , subtitle = "", className = "" }) => {
  const { categories, faqData } = faqContent;
  const categoryKeys = Object.keys(categories);
  const [selectedCategory, setSelectedCategory] = useState(categoryKeys[0]);

  return (
    <>
    <PageMeta title="FAQ – Kodecarft" favicon="/favicon.png" />
    <div className="bg-black min-h-screen flex flex-col">
  <section className={`flex-grow relative overflow-hidden  px-4 sm:px-6 md:px-12  text-white ${className}`}>
    <div className="max-w-6xl mx-auto">

      {/* Navbar */}
            <div className="flex justify-center w-full mb-16">
              <Navbar
                navItems={[
                  { name: "Home", href: "/" },
                  { name: "Service", href: "/#services" },
                  { name: "Portfolio", href: "/#portfolio" },
                  { name: "FAQ", href: "/faq" },
                ]}
              />
            </div>

      {/* Header */}
      <Header  title={title} subtitle={subtitle} />

      {/* Tabs */}
      <Tabs
        categories={categories}
        selected={selectedCategory}
        setSelected={setSelectedCategory}
      />

      {/* FAQs */}
      <FAQList faqData={faqData} selected={selectedCategory} />
    </div>
  </section>

  {/* Footer outside section but inside flex layout */}
  <Footer />
</div>
 
 </>
  )
  
};

const Header = ({ title, subtitle }) => (
  <div className="relative z-10 flex flex-col items-center justify-center">
    <span className="mb-4 bg-gradient-to-b from-white via-gray-300  bg-clip-text text-transparent sm:text-xl">
      {subtitle}
    </span>
    <h2 className="mb-8 text-4xl font-bold">{title}</h2>
    <span className="absolute -top-[350px] left-[50%] z-0 h-[500px] w-[600px] -translate-x-[50%] rounded-full bg-gradient-to-r from-primary/10 to-primary/5 blur-3xl" />
  </div>
);

const Tabs = ({ categories, selected, setSelected }) => (
  <div className="relative z-10 flex flex-wrap justify-center gap-3">
    {Object.entries(categories).map(([key, label]) => (
      <button
        key={key}
        onClick={() => setSelected(key)}
        className={`relative overflow-hidden whitespace-nowrap rounded-md border px-4 py-1.5 text-sm font-medium transition-all duration-300 ${
          selected === key
            ? "border-white/50 bg-white/10 "
            : "border-border bg-transparent text-muted-foreground hover:text-foreground"
        }`}
      >
        {label}
      </button>
    ))}
  </div>
);

const FAQList = ({ faqData, selected }) => (
  <div className="mx-auto mt-10 max-w-3xl space-y-4 ">
    <AnimatePresence mode="wait">
      {faqData[selected]?.map((faq, index) => (
        <FAQItem key={index} {...faq} />
      ))}
    </AnimatePresence>
  </div>
);

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <motion.div
      animate={isOpen ? "open" : "closed"}
      className={`rounded-xl border transition-colors ${
        isOpen ? "bg-muted/40" : "bg-card"
      }`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between p-4 text-left"
      >
        <span
          className={`text-base font-medium ${
            isOpen ? "text-foreground" : "text-muted-foreground"
          }`}
        >
          {question}
        </span>
        <motion.span
          variants={{
            open: { rotate: "45deg" },
            closed: { rotate: "0deg" },
          }}
          animate={isOpen ? "open" : "closed"}
          transition={{ duration: 0.2 }}
        >
          <Plus
            className={`h-5 w-5 transition-colors ${
              isOpen ? "text-foreground" : "text-muted-foreground"
            }`}
          />
        </motion.span>
      </button>
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "auto" : "0px",
          marginBottom: isOpen ? "16px" : "0px",
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden px-4"
      >
        <p className="text-muted-foreground">{answer}</p>
      </motion.div>
    </motion.div>
    
    </>
  );
};

export default FAQ;
