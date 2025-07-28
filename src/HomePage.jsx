import React from "react";
import Services from "./Componets/services";
import PortfolioSection from "./Componets/PortfolioSection";
import Footer from "./Componets/Footer";
import { HeroSection } from "./Componets/animated-hero";
import CallToAction from "./CTA";
import AnimatedTestimonials from "./Componets/Testimonials";
import WebsiteAnalysis from "./Componets/analysis";


const HomePage = () => {
    return (
        <div className=" bg-black text-gray-900 dark:text-white">
            
            <HeroSection></HeroSection>
           
            <Services></Services>
            <PortfolioSection></PortfolioSection>
            <AnimatedTestimonials></AnimatedTestimonials>
            <CallToAction></CallToAction>
            <WebsiteAnalysis></WebsiteAnalysis>
           
            <Footer></Footer>
        </div>
    );
};
export default HomePage;