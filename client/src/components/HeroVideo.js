import React from 'react';

const HeroVideo = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source
          src="https://www.w3schools.com/howto/rain.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-start justify-center h-full max-w-7xl mx-auto px-6 md:px-12 text-white">
        <div className="max-w-3xl">
          {/* Location */}
          <p className="text-sm md:text-base font-light mb-4 tracking-wide">
            Billyard and Onslow Avenue, Elizabeth Bay, NSW
          </p>

          {/* Status Badge */}
          <div className="inline-block bg-white bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <span className="text-xs md:text-sm font-medium">
              Construction commenced / Residential
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-6">
            Nestled between the iconic Sydney Harbour and vibrant Macleay St, 
            Regency House is a sanctuary of contemporary living.
          </h1>

          {/* Description */}
          <p className="text-base md:text-lg font-light mb-4 leading-relaxed">
            In partnership with Smart Design Studio and Arent&Pyke
          </p>

          <p className="text-sm md:text-base font-light mb-8 leading-relaxed max-w-2xl">
            A collection of refined residences featuring premium finishes, 
            expansive living spaces, and breathtaking harbour views. 
            Experience luxury living at its finest.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-white text-black px-8 py-3 rounded-sm font-medium hover:bg-opacity-90 transition-all duration-300">
              Enquire
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-sm font-medium hover:bg-white hover:text-black transition-all duration-300">
              Project website
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroVideo;
