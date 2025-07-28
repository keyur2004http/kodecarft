// App.js
import './App.css';
import FAQ from './FAQ';
import ContactPage from './ContactPage';
import React, { useEffect } from 'react';
import FeedbackPage from './FeedbackPage';
import HomePage from './HomePage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CaseStudyPage from './Componets/Case';
import netlifyIdentity from 'netlify-identity-widget';

function App() {
  useEffect(() => {
    netlifyIdentity.init();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/contact' element={<ContactPage/>}/>
        <Route path='/faq' element={<FAQ/>}/>
        <Route path="/feedback" element={<FeedbackPage />} />
        <Route path="/case-study/:slug" element={<CaseStudyPage />} />
        

      </Routes>
    </BrowserRouter>
  );
}

export default App;
