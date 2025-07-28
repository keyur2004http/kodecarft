import React from "react";
import { useParams } from "react-router-dom";
import caseStudies from "../data/case-studies.json";
import ScreenshotCarousel from "./ui/image-scroll";
import {
  Rocket,
  BarChart3,
  Briefcase,
  ArrowRightCircle,
  Lightbulb,
  Target,
} from "lucide-react";


const iconComponents = {
  Rocket,
  BarChart3,
  Briefcase,
};

export default function CaseStudyPage() {
  const { slug } = useParams();
  const caseStudy = caseStudies.find((cs) => cs.slug === slug);

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
    <section className="min-h-screen bg-black text-white py-16 px-6 sm:px-10 md:px-20">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Hero */}
        <div className="space-y-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold">{caseStudy.title}</h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">{caseStudy.description}</p>
        </div>

        {/* Screenshots */}
        
    
            <ScreenshotCarousel screenshots={caseStudy.screenshots} />



        {/* Goals + Solutions */}
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 sm:p-10 space-y-10">
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
        <div className="grid sm:grid-cols-3 gap-6 text-center">
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
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-semibold">{caseStudy.cta.text}</h2>
          <a
            href={caseStudy.cta.link}
            className="inline-flex items-center gap-2 bg-indigo-500 hover:bg-indigo-400 text-white font-semibold px-6 py-3 rounded-full transition"
          >
            {caseStudy.cta.buttonText} <ArrowRightCircle className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
