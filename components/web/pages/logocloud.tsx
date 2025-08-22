import React from 'react';
// Importing a variety of icons from the react-icons library to match the logos in the image.
import { 
  BsBoxSeam, 
  BsCapsule, 
  BsCloud,
  BsDiamond,
  BsJournalCode, 
  BsPlusSquare,
  BsShieldCheck
} from 'react-icons/bs';

// An array of logo objects. Each object contains a name and its corresponding icon component.
// This makes it easy to add, remove, or change logos in one place.
const logos = [
  { name: 'BuildingBlocks', icon: <BsBoxSeam /> },
  { name: 'Calescence', icon: <BsDiamond /> },
  { name: 'Capsule', icon: <BsCapsule /> },
  { name: 'Catalog', icon: <BsJournalCode /> },
  { name: 'Chromatools', icon: <BsShieldCheck /> },
  { name: 'Clandestine', icon: <BsPlusSquare /> },
  { name: 'CloudWave', icon: <BsCloud /> },
];

const LogoCloud = () => {
  // To create a seamless loop, we duplicate the logos array.
  // The animation will scroll through the first half, and by the time it ends,
  // the second half (the duplicate) is in position to start, creating an infinite effect.
  const extendedLogos = [...logos, ...logos];

  return (
    <div className="bg-black py-12 antialiased">
      <div className="relative w-full overflow-hidden">
        {/* This div is the scrolling track. It contains the duplicated logos. */}
        {/* The 'animate-scroll' class applies the custom CSS animation. */}
        <div className="flex animate-scroll">
          {extendedLogos.map((logo, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center flex-shrink-0 mx-6"
            >
              {/* Styling for each individual logo item */}
              <div className="flex items-center gap-3 text-2xl text-gray-500 transition-colors duration-300 hover:text-white">
                <span className="text-3xl">{logo.icon}</span>
                <span className="font-medium">{logo.name}</span>
              </div>
            </div>
          ))}
        </div>
        {/* A decorative gradient overlay to fade the edges, enhancing the visual effect. */}
        <div className="absolute top-0 left-0 w-1/4 h-full bg-gradient-to-r from-black to-transparent"></div>
        <div className="absolute top-0 right-0 w-1/4 h-full bg-gradient-to-l from-black to-transparent"></div>
      </div>
    </div>
  );
};

export default LogoCloud;
