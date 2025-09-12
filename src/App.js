// App.js
import './App.css';
import FAQ from './FAQ';
import ContactPage from './ContactPage';
import { useState, useEffect } from "react";
import FeedbackPage from './FeedbackPage';
import HomePage from './HomePage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CaseStudyPage from './Componets/Case';
import netlifyIdentity from 'netlify-identity-widget';


function App() {
  useEffect(() => {
    netlifyIdentity.init();
  }, []);

  const [loading, setLoading] = useState(true);     
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    if (document.readyState === "complete") {
      finishLoading();
      return;
    }

    const onLoad = () => finishLoading();
    window.addEventListener("load", onLoad);

    const fallback = setTimeout(() => finishLoading(), 7000);

    return () => {
      window.removeEventListener("load", onLoad);
      clearTimeout(fallback);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function finishLoading() {
    setLoading(false);
    setTimeout(() => setShowLoader(false), 450); // fade out delay
  }

  return (
    <>
     
      
      {/* Main App */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/faq' element={<FAQ />} />
          <Route path="/feedback" element={<FeedbackPage />} />
          <Route path="/case-study/:slug" element={<CaseStudyPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
