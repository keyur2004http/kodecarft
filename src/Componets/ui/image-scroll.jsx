import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ScreenshotCarousel = ({ screenshots }) => {
  const [index, setIndex] = useState(0);
  const [imagesPerPage, setImagesPerPage] = useState(2); // Show 2 images

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) setImagesPerPage(1);
      else setImagesPerPage(2); // Always max 2 images visible
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(screenshots.length / imagesPerPage);

  const next = () => {
    if (index < totalPages - 1) setIndex(index + 1);
  };

  const prev = () => {
    if (index > 0) setIndex(index - 1);
  };

  const currentImages = screenshots.slice(
    index * imagesPerPage,
    index * imagesPerPage + imagesPerPage
  );

  return (
    <div className="relative w-full max-w-5xl mx-auto py-10 px-4">
      {/* Arrows */}


      {/* Image Display */}
      <div className="flex justify-center gap-6">
        {currentImages.map((img, i) => (
          <div
            key={i}
            className="w-full sm:w-1/2 flex items-center justify-center"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-auto max-h-[400px] object-contain rounded-xl shadow"
            />
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {Array.from({ length: totalPages }).map((_, i) => (
          <span
            key={i}
            className={`w-2 h-2 rounded-full ${i === index ? "bg-indigo-500" : "bg-gray-300"
              }`}
          ></span>
        ))}
      </div>
      <div className="flex justify-center gap-4 mt-10">
      <button
        onClick={prev}
        disabled={index === 0}
        className="h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center group/button shadow-md transition-colors duration-300 transform hover:scale-105"
      >
        <ChevronLeft />
      </button>

      <button
        onClick={next}
        disabled={index === totalPages - 1}
        className=" h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center group/button shadow-md transition-colors duration-300 transform hover:scale-105"
      >
        <ChevronRight />
      </button>
      </div>

    </div>
  );
};

export default ScreenshotCarousel;
