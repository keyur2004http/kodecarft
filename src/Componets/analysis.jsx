import React from "react";
import content from "../data/analysis.json"
import { CheckCircle2 } from "lucide-react";
const features = [
  { title: "100% Free", description: "No cost or obligation to get insights." },
  { title: "Detailed Feedback", description: "Structure, design, and speed analysis." },
  { title: "Actionable Tips", description: "Know exactly what to fix or enhance." }
];

const WebsiteAnalysis = () => {
  return (
    <section id="websiteAnalysis" className="relative min-h-screen flex flex-col items-center justify-center bg-black overflow-hidden text-white px-4 ">
      
      {/* 👇 Foreground content */}
      <div className="relative z-10 max-w-2xl text-center space-y-6 py-16 mx-auto">

  {/* ✅ Noise Background Layer */}
  <div className="absolute inset-0 bg-[url(https://www.transparenttextures.com/patterns/asfalt-dark.png)] opacity-100 pointer-events-none z-0" />

  {/* ✅ Foreground Content */}
  <div className="relative z-10">
    <h2 className="text-3xl sm:text-4xl text-spektr-cyan-50 mb-10 font-bold bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
      {content.heading}
    </h2>
    <p className="text-gray-300">{content.subtext}</p>
  </div>
</div>


      {/* 👇 Feature highlight cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 z-10 cursor-pointer">
        {features.map((item, index) => (
          <div
            key={index}
            className="bg-white/5 border border-white/10 backdrop-blur-md p-4 rounded-lg text-center hover:scale-105 transition duration-300"
          >
            <CheckCircle2
              className="text-indigo-400 w-5 h-5 mx-auto mb-2"
              aria-hidden="true"
            />
            <h4 className="text-lg font-semibold text-white mb-1">{item.title}</h4>
            <p className="text-sm text-gray-300">{item.description}</p>
          </div>
        ))}
      </div>

      <form className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 mb-10">
        <input
          type=""

          placeholder={content.inputPlaceholder}
          className="px-4 py-3  rounded-md bg-white/10 text- white w-full sm:w-80 focus:outline-none"
        />
        <a
          href="/contact?message=Free Website Analysis Request"
          className="relative z-10 px-6 py-3 rounded-md bg-indigo-500 hover:bg-indigo-400 text-white font-semibold 
             hover:shadow-[0_0_25px_rgba(255,255,255,0.6)] hover:scale-105 transition duration-300"
        >
          Analyze Now
        </a>

      </form>
    </section>
  );
};

export default WebsiteAnalysis;
