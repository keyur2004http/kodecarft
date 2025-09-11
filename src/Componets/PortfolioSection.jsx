"use client"
import React from "react"
import { Squares } from "./ui/square"
import { motion } from "framer-motion";
import portfolioData from "../data/portfolio.json";
import { Link } from "react-router-dom";
import caseStudies from "../data/case-studies.json";


const PortfolioSection = () => {
  const projects = portfolioData.projects;
  return (

    <section className="bg-black py-24 px-2.5 md:px-12 lg:px-24 text-white" id="portfolio">

      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4  bg-gradient-to-b from-white via-gray-300  bg-clip-text text-transparent">Our Latest Work</h2>
        <p className="text-lg text-gray-300">Every expert starts somewhere. Here’s what we’ve crafted so far.</p>
      </div>
      <div className="space-y-10 relative transperate ">
        {projects.map((project) => (

          <motion.div
            key={project.id}
            className="relative grid md:grid-cols-2 items-center gap-10 p-0 rounded-2xl border border-neutral-700 bg-white/5 shadow-xl backdrop-blur-md overflow-hidden"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {/* Background Squares */}
            <div className="absolute inset-0 z-0">
              <Squares
                direction="diagonal"
                speed={0.5}
                squareSize={30}
                borderColor="#3333"
                hoverFillColor="#222"
              />
            </div>
            {/* Text Section */}
            <motion.div className="relative z-10 space-y-6 p-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}>
              <div className="flex gap-2 flex-wrap">
                {project.tags?.map((tag, i) => (
                  <span key={i} className="text-sm px-4 py-1 border border-white/20 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold leading-snug">{project.title}</h3>
              <p className="text-gray-300">{project.description}</p>

              <div className="flex flex-wrap gap-2 mt-4 sm:gap-4 sm:mt-6">
                {caseStudies.some(cs => cs.slug === project.slug) ? (
                  <Link to={`/case-study/${project.slug}`}>
                    <button className="px-4 py-1.5 text-sm sm:px-5 sm:py-2 sm:text-base bg-white text-black font-semibold rounded-full hover:shadow-[0_0_35px_rgba(255,255,255,0.8)] hover:scale-105 transition duration-300">
                      View Case Study →
                    </button>
                  </Link>
                ) : (
                  <button
                    disabled
                    className="px-4 py-1.5 text-sm sm:px-5 sm:py-2 sm:text-base bg-white text-black font-semibold rounded-full hover:shadow-[0_0_35px_rgba(255,255,255,0.8)] hover:scale-105 transition duration-300"
                  >
                    No Case Study 
                  </button>
                )}

{project.live ? (
  <button
    onClick={() => window.open(project.link, "_blank")}
    className="px-4 py-1.5 text-sm sm:px-5 sm:py-2 sm:text-base border border-white rounded-full font-semibold hover:bg-white hover:text-black transition"
  >
    Visit Website
  </button>
) : (
  <button
    disabled
    className="px-4 py-1.5 text-sm sm:px-5 sm:py-2 sm:text-base border border-white rounded-full font-semibold hover:bg-white hover:text-black transition"
  >
    Launching Soon
  </button>
)}


              </div>
            </motion.div>

            {/* Screenshot Section */}
            <motion.div className="relative z-10 w-full h-full flex items-center justify-start"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}>
              {/* Back Image */}
              <div className="rotate-[1deg] md:rotate-[-4deg] lg:rotate-[-7deg] w-[300px] md:w-[340px] lg:w-[360px] mt-5 overflow-hidden rounded-2xl shadow-2xl border border-white/10">
                <img
                  src={project.imageUrl2}
                  alt="Second Screen"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Front Image */}
              <div className="absolute left-[40%] md:left-[45%] lg:left-[50%] -translate-y-1/2 top-1/2 w-[300px] md:w-[340px] lg:w-[360px] rotate-[-7deg] mt-2 overflow-hidden rounded-2xl shadow-2xl border border-white/10 z-10">
                <img
                  src={project.imageUrl}
                  alt="Main Screen"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

    </section>

  )
}

export default PortfolioSection
