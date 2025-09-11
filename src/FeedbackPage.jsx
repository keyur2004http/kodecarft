
import React from "react";
import { Navbar } from "./Componets/Navbar"; 
import Footer from "./Componets/Footer";
import FeedbackSection from "./Componets/FeedbackSection";

const FeedbackPage = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#e0cfff] to-[#f5efff] overflow-hidden text-gray-900 dark:text-white">
      {/* Navbar */}
      <Navbar navItems={[{name:"Home",href:"/"}]}/>

      {/* Main Contact Section */}
      <main className="pt-24 px-4">
        <FeedbackSection />
      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default FeedbackPage;