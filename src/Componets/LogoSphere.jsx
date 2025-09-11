// src/components/LogoSphere.jsx
import React, { useEffect } from 'react';

const LogoSphere = () => {
  useEffect(() => {
    if (window.TagCanvas) {
      try {
        window.TagCanvas.Start('myCanvas', 'logoTags', {
          textColour: null,
          outlineColour: '#ffffff',
          reverse: true,
          depth: 0.9,
          maxSpeed: 0.05,
          wheelZoom: false,
          zoom: 1.1,
          shape: "sphere",
          imageMode: "image",
          initial: [0.05, -0.03],
        });
      } catch (e) {
        console.log('Canvas error:', e);
      }
    }
  }, []);

  return (
    <div className="w-[350px] h-[350px] mx-auto">
      <canvas width="350" height="350" id="myCanvas">
        <ul id="logoTags">
          <li><a href="#"><img src="/logos/html5.svg" alt="HTML" /></a></li>
          <li><a href="#"><img src="/logos/css3.svg" alt="CSS" /></a></li>
          <li><a href="#"><img src="/logos/js.svg" alt="JS" /></a></li>
          <li><a href="#"><img src="/logos/react.svg" alt="React" /></a></li>
          <li><a href="#"><img src="/logos/java.svg" alt="Java" /></a></li>
          <li><a href="#"><img src="/logos/nodejs.svg" alt="NodeJS" /></a></li>
          {/* Add as many logos as you want */}
        </ul>
      </canvas>
    </div>
  );
};

export default LogoSphere;
