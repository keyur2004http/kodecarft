import React  from "react";
import { useParams } from "react-router-dom";
import caseStudies from "../data/case-studies.json";
import { Navbar } from "./Navbar";
import {
  FaHtml5, FaWordpress, FaJs, FaCss3Alt,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaShopify,FaNex
} from "react-icons/fa";
import {
  Rocket,
  BarChart3,
  Briefcase,
  ArrowRightCircle,
  Lightbulb,
  Target,
} from "lucide-react";
import Footer from "./Footer";
import { useEffect,useLayoutEffect } from "react";
import CardCarousel, { ScreenshotCarousel } from "./ui/image-scroll";
import InteractiveSelector from "./ui/image-scroll";


const iconComponents = {
  Rocket,
  BarChart3,
  Briefcase,
};
const iconMap = {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaWordpress,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaShopify
};


export default function CaseStudyPage() {
  const { slug } = useParams();
  const caseStudy = caseStudies.find((cs) => cs.slug === slug);

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [slug]);
  if (!caseStudy) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-black text-white px-6">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold">No Case Study Found</h1>
          <p className="text-gray-400">The page you’re looking for does not exist or has been removed.</p>
          <a
            href="/"
            className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-full transition"
          >
            Back to Home
          </a>
        </div>
      </section>
    );
  }

  return (
    <section  className="min-h-screen bg-black text-white px-4 sm:px-10 md:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Navbar */}
        <div className="flex justify-center w-full mb-24">
          <Navbar
            navItems={[
              { name: "Home", href: "/" },
              { name: "Service", href: "/#services" },
              { name: "Portfolio", href: "/#portfolio" },
              { name: "FAQ", href: "/faq" },
            ]}
          />
        </div>
        {/* Hero */}
        <div className="space-y-5 text-center">
          <h2 className="text-2xl sm:text-5xl font-bold bg-gradient-to-b from-white via-gray-200  bg-clip-text text-transparent">{caseStudy.title}</h2>
          <h2 className="text-2xl sm:text-5xl font-bold bg-gradient-to-b from-white via-gray-200  bg-clip-text text-transparent">Case Study</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">{caseStudy.description}</p>
        </div>

              {/* Screenshots */}
              <div className="mt-20">
              <InteractiveSelector screenshots={caseStudy.screenshots} />

        </div>
        {/* Technologies Used */}
        {caseStudy.technologies && (
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-semibold mb-6 text-white">Technologies Used</h2>
            <div className="flex flex-wrap justify-center gap-8 text-white/50 text-4xl">
              {caseStudy.technologies.map((tech, i) => {
                const IconComponent = iconMap[tech.icon];
                return (
                  <div key={i} className="flex flex-col items-center gap-2">
                    {IconComponent && <IconComponent />}
                    <span className="text-sm text-gray-300">{tech.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
          
        )}
      {/* Goals + Solutions */}
      <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 sm:p-10 space-y-10 mt-16">
        <div>
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <Target className="w-6 h-6 text-white/80" />
            Client Goals
          </h2>
          <ul className="pl-6 text-gray-300 space-y-2 list-disc">
            {caseStudy.goals.map((goal, i) => (
              <li key={i}>{goal}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <Lightbulb className="w-6 h-6 text-white/80" />
            Our Solutions
          </h2>
          <ul className="pl-6 text-gray-300 space-y-2 list-disc">
            {caseStudy.solutions.map((solution, i) => (
              <li key={i}>{solution}</li>
            ))}
          </ul>
        </div>
      </div>
      {/* Result Boxes */}
      <div className="grid sm:grid-cols-3 gap-6 text-center mt-16">
        {caseStudy.results.map((res, i) => {
          const Icon = iconComponents[res.icon];
          return (
            <div key={i} className="p-6 rounded-xl bg-white/10 space-y-2">
              {Icon && <Icon className="w-8 h-8 mx-auto text-indigo-400" />}
              <h3 className="font-semibold text-lg">{res.title}</h3>
              <p className="text-sm text-gray-400">{res.desc}</p>
            </div>
          );
        })}
      </div>
      {/* CTA */}
      <div className="text-center space-y-4 mt-16 mb-24">
        <h2 className="text-2xl font-semibold">{caseStudy.cta.text}</h2>
        <a
          href={caseStudy.cta.link}
          className="inline-flex items-center gap-2 bg-indigo-500 hover:bg-indigo-400 hover:shadow-[0_0_35px_rgba(255,255,255,0.8)] transition-all duration-300 text-white font-semibold px-6 py-3 rounded-full transition"
        >
          {caseStudy.cta.buttonText} <ArrowRightCircle className="w-5 h-5" />
        </a>
      </div>
    </div>
      {/* Footer with margin */ }
  <div className="mt-16">
    <Footer />
  </div>
    </section >
  );
}  