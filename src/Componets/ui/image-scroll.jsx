import React, { useState, useEffect } from "react";

const InteractiveSelector = ({ screenshots }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animatedScreenshots, setAnimatedScreenshots] = useState([]);

  useEffect(() => {
    const timers = [];
    if (screenshots && screenshots.length > 0) {
      screenshots.forEach((_, i) => {
        const timer = setTimeout(() => {
          setAnimatedScreenshots((prev) => [...prev, i]);
        }, 180 * i);
        timers.push(timer);
      });
    }
    return () => timers.forEach((timer) => clearTimeout(timer));
  }, [screenshots]);

  if (!screenshots || screenshots.length === 0) {
    return <div>No screenshots to display.</div>;
  }

  return (
    <div className="flex w-full max-w-5xl h-auto mx-auto items-stretch overflow-hidden relative gap-2 px-2">
      {screenshots.map((s, index) => {
        const src = s.src;
        const alt = s.alt || `screenshot-${index}`;

        return (
          <div
            key={index}
            className={`
              relative flex transition-all duration-700 ease-in-out cursor-pointer
              ${activeIndex === index ? "active" : ""}
            `}
            style={{
              opacity: animatedScreenshots.includes(index) ? 1 : 0,
              transform: animatedScreenshots.includes(index)
                ? "translateX(0)"
                : "translateX(-40px)",
              flex: activeIndex === index ? "4 1 0%" : "1 1 0%",
              zIndex: activeIndex === index ? 10 : 1,
            }}
            onClick={() => setActiveIndex(index)}
          >
            <img
              src={src}
              alt={alt}
              className={`rounded-lg shadow-lg transition-all duration-700 ease-in-out object-cover
                ${activeIndex === index ? "w-full" : "w-[100px]"}
              `}
              style={{
                maxHeight: "450px", // limit height
                width: activeIndex === index ? "100%" : "100px",
              }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default InteractiveSelector;
