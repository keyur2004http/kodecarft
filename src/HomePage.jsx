import React from "react";
import Services from "./Componets/services";
import PortfolioSection from "./Componets/PortfolioSection";
import Footer from "./Componets/Footer";
import { HeroSection } from "./Componets/animated-hero";
import CallToAction from "./CTA";
import AnimatedTestimonials from "./Componets/Testimonials";
import WebsiteAnalysis from "./Componets/analysis";
import Loader from "./Componets/ui/Loader";
import PageMeta from "./Componets/PageMeta";
import SeoMeta from "./Componets/SeoMeta";

const HomePage = () => {
    return (
        <>
       <SeoMeta
        title="HomePage – Kodecarft"
        description="Explore our web design, branding, and digital marketing services crafted for startups and growing businesses."
        url="https://kodecarft.netlify.app/"
        image="./Assets/logo/openGraph.png"
      />
        <div className=" bg-black text-gray-900 dark:text-white">
            
            <HeroSection></HeroSection>
           
            <Services></Services>
            <PortfolioSection></PortfolioSection>
            <AnimatedTestimonials></AnimatedTestimonials>
            <CallToAction></CallToAction>
            <WebsiteAnalysis></WebsiteAnalysis>
           
            <Footer></Footer>
            
        </div>
        </>
    );
};

export default HomePage;
