import React, { useState, useEffect } from "react";

const Hero = () => {
  // Use local, reliable images from the /public folder
  const slideImages = [
    {
      url: "/images/hero-1.jpg",
      caption: "Shirala Village Landscape",
      description:
        "Experience the beautiful and serene rural landscapes of the Shirala taluka.",
    },
    {
      url: "/images/hero-2.jpg",
      caption: "Lush Agricultural Fields",
      description:
        "Our region is known for its fertile farming lands, yielding abundant crops year-round.",
    },
    {
      url: "/images/hero-3.jpg",
      caption: "Sahyadri Mountain Ranges",
      description:
        "Discover the breathtaking, scenic mountain views in the western parts of Shirala.",
    },
    {
      url: "/images/hero-4.jpg",
      caption: "Vibrant Community Life",
      description:
        "Witness the warmth of community gatherings and the richness of our traditional rural lifestyle.",
    },
    {
      url: "/images/hero-5.jpg",
      caption: "Pristine Water Resources",
      description:
        "The Warna and Morana rivers flow through our region, providing vital water resources.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (isPlaying) {
      const timer = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === slideImages.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [isPlaying, slideImages.length]);

  const goToSlide = (index) => setCurrentIndex(index);
  const goToPrevious = () =>
    setCurrentIndex(
      currentIndex === 0 ? slideImages.length - 1 : currentIndex - 1
    );
  const goToNext = () =>
    setCurrentIndex(
      currentIndex === slideImages.length - 1 ? 0 : currentIndex + 1
    );

  return (
    <section className="relative w-full h-[90vh] md:h-screen text-white overflow-hidden">
      {/* Background Image Slider */}
      <div className="absolute inset-0">
        {slideImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image.url}
              alt={image.caption}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div>
          </div>
        ))}
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex items-center justify-center text-center">
        <div className="max-w-4xl mx-auto px-4">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/20">
            <div className="w-2.5 h-2.5 bg-green-400 rounded-full mr-2.5 animate-pulse"></div>
            <span className="font-semibold text-sm">
              Government of Maharashtra • Sangli District
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
            Welcome to Panchayat Samiti Shirala
          </h1>

          <div className="mb-6 h-20 flex items-center justify-center">
            <p className="text-lg md:text-xl text-white/90 transition-opacity duration-500">
              {slideImages[currentIndex].description}
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all"
        aria-label="Previous image"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all"
        aria-label="Next image"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Play/Pause Button */}
      <button
        onClick={() => setIsPlaying(!isPlaying)}
        className="absolute top-6 right-6 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all"
        aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
      >
        {isPlaying ? (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M5 4h3v12H5V4zm7 0h3v12h-3V4z" />
          </svg>
        ) : (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M4 4l12 6-12 6V4z" />
          </svg>
        )}
      </button>

      {/* Dots Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {slideImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentIndex
                ? "bg-white scale-125"
                : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
