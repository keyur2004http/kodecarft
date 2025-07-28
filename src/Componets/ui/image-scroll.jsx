import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ScreenshotCarousel = ({ screenshots }) => {
  const [index, setIndex] = useState(0);
  const [imagesPerPage, setImagesPerPage] = useState(2);

  // Responsive image count
  useEffect(() => {
    const handleResize = () => {
      setImagesPerPage(window.innerWidth < 768 ? 1 : 2);
    };
    handleResize(); // Set initial
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(screenshots.length / imagesPerPage);

  const next = () => {
    setIndex((prev) => Math.min(prev + 1, totalPages - 1));
  };

  const prev = () => {
    setIndex((prev) => Math.max(prev - 1, 0));
  };

  const currentImages = screenshots.slice(
    index * imagesPerPage,
    index * imagesPerPage + imagesPerPage
  );

  return (
    <div className="relative w-full max-w-6xl mx-auto py-6">
      {/* Buttons */}
      <button
        onClick={prev}
        disabled={index === 0}
        className="absolute  top-1/2 -translate-y-1/2 z-10 bg-white/60 text-white p-2 rounded-full disabled:opacity-30"
      >
        <ChevronLeft />
      </button>

      <button
        onClick={next}
        disabled={index === totalPages - 1}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/60 text-white p-2 rounded-full disabled:opacity-30"
      >
        <ChevronRight />
      </button>

      {/* Image Grid */}
      <div className="flex flex-wrap justify-center gap-6 px-4">
  {currentImages.map((img, i) => (
    <div
      key={i}
      className="w-full md:w-[38%] h-[300px] flex items-center justify-center rounded-xl shadow-lg overflow-hidden bg-gray-100"
    >
      <img
        src={img.src}
        alt={img.alt}
        className="w-full h-full object-cover object-top "
      />
    </div>
  ))}
</div>

    </div>
  );
};

export default ScreenshotCarousel;
