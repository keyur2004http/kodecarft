import React from "react";
import data from "./data/cta.json";
import { CheckCircle2 } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="bg-gradient-to-b from-bg-[#0e0e12]  to-black  text-white py-16 px-4 sm:px-8">
      
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10">
        {/* Text Block */}  
        <div className="flex-1">
          <h2 className="text-3xl sm:text-4xl font-bold leading-snug mb-6">
            A partnership built on <span className="text-indigo-400">trust</span> and <span className="text-indigo-400">growth</span>
          </h2>
          <p className="text-gray-300 text-lg">{data.description1}</p>
          <h2 className="text-2xl sm:text-2xl font-bold leading-snug mt-10">
          Start<span className="text-indigo-400">Smart.</span>Grow<span className="text-indigo-400">Smarter.</span>
          </h2>
          <p className="text-gray-300 text-lg mt-10">{data.description2}</p>
        </div>

        {/* Callout Box */}
        <div className="relative overflow-hidden group 
  bg-white/5 backdrop-blur-md 
  shadow-[inset_0_0_0.5px_rgba(255,255,255,0.05)] 
  border border-white/10 
  hover:shadow-2xl hover:backdrop-blur-2xl 
  transition-all duration-300 cursor-pointer 
  p-8 rounded-xl w-full md:max-w-md shadow-md">

  {/* ✅ Background Noise Layer */}
  <div className="absolute inset-0 z-0 bg-[url(https://www.transparenttextures.com/patterns/binding-dark.png)] opacity-5" />

  {/* ✅ Content Layer */}
  <div className="relative z-10">
    <img
      src="/Assets/illustration/leadership-amico.png"
      alt="Call Illustration"
      className="w-full h-auto mb-6"
    />
    <h3 className="text-xl font-semibold mb-4 text-center">{data.heading}</h3>
    <button
  onClick={() =>
    (window.location.href =
      "/contact?message=I need website for my bussiness")
  }
  className="w-full py-3 bg-white font-semibold text-black/70 hover:shadow-[0_0_25px_rgba(255,255,255,0.8)] hover:bg-indigo-400 hover:text-white  transition duration-300 rounded-md mb-6"
>
  {data.buttonText}
</button>

    <ul className="space-y-2">
      {data.benefits.map((item, index) => (
        <li key={index} className="flex items-center gap-2 text-sm text-gray-200">
          <CheckCircle2 className="text-indigo-400 w-4 h-4" />
          {item}
        </li>
      ))}
    </ul>
  </div>
</div>  

      </div>
    </section>
  );
};

export default CallToAction;
