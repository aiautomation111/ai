'use client'

import Aos from 'aos';
import React, { useEffect } from 'react';

// SVG icon for the completed/active steps (filled circle with a checkmark)
const FilledCircleIcon = () => (
  <svg className="w-6 h-6 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
  </svg>
);

// SVG icon for the upcoming/inactive steps (empty circle)
const EmptyCircleIcon = () => (
  <div className="w-6 h-6 flex items-center justify-center">
      <div className="w-3 h-3 rounded-full border-2 border-gray-500"></div>
  </div>
);

// Define the types for the StepItem component's props
interface StepItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  isLast?: boolean;
}

// A reusable component for each step in the process.
// It conditionally renders the icon based on the 'active' prop.
const StepItem = ({ icon, title, description, isLast = false }: StepItemProps) => {
  return (
    <div data-aos="fade-up" className="relative flex items-start">
        {/* Dotted line connecting the steps */}
        {!isLast && (
            <div className="absolute top-5 left-3 -ml-px w-0.5 h-full bg-gray-700 border-l border-dashed border-gray-600"></div>
        )}
        <div className="flex-shrink-0 z-10 bg-black pr-4">
            {icon}
        </div>
        <div className="ml-4">
            <h3 className="text-lg font-bold text-gray-100">{title}</h3>
            <p className="mt-1 text-gray-400">{description}</p>
        </div>
    </div>
  );
};


// The main component for the "How We Work" section.
const OurWork = () => {
    const steps = [
        {
            icon: <FilledCircleIcon />,
            title: 'Discovery & Planning',
            description: 'We start by understanding your goals, users, and challenges. This helps us define the right strategy and scope for your project.'
        },
        {
            icon: <FilledCircleIcon />,
            title: 'Design & Prototyping',
            description: 'Our design team creates wireframes and UI mockups focused on usability, style, and brand consistency. We make sure everything feels right before we build.'
        },
        {
            icon: <EmptyCircleIcon />,
            title: 'Development',
            description: 'Using the latest tools and frameworks, we turn designs into responsive, high-performing websites or apps that work seamlessly across devices.'
        },
        {
            icon: <EmptyCircleIcon />,
            title: 'Launch & Support',
            description: 'After launch, we stay with you. We provide technical support, updates, and maintenance to keep everything running smoothly and securely.',
            isLast: true
        }
    ];

     useEffect(() => {
        // Initialize AOS when the component is mounted
        Aos.init({
          duration: 2000, // سرعة الحركة
          once: false, // تشغيل التأثير مرة واحدة فقط
        });
      }, []);

  return (
    <div className="bg-black text-white font-sans antialiased">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Text Content */}
          <div>
            <h2 data-aos="zoom-in" className="text-4xl md:text-5xl font-extrabold text-white mb-2">How We Work</h2>
            <p data-aos="zoom-in" className="text-gray-400 mb-10">A simple 4-step process:</p>
            
            <div className="space-y-10">
              {steps.map((step, index) => (
                <StepItem
                  key={index}
                  icon={step.icon}
                  title={step.title}
                  description={step.description}
                  isLast={step.isLast}
                />
              ))}
            </div>
          </div>

          {/* Right Column: Image Gallery */}
          <div className="relative h-96 lg:h-full">
            {/* Back Image */}
            <div className="absolute top-0 right-6 w-3/4 h-3/4 transform translate-x-4 -translate-y-4 lg:translate-x-8 lg:-translate-y-8">
              <img data-aos="flip-left"
                src="https://placehold.co/600x400/2d3748/e2e8f0?text=Workspace" 
                alt="A person working at a desk" 
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
              />
            </div>
            {/* Front Image */}
            <div className="absolute bottom-0 left-0 w-3/4 h-3/4 transform -translate-x-4 translate-y-4 lg:-translate-x-8 lg:translate-y-8">
              <img data-aos="flip-right"
                src="https://placehold.co/600x400/4a5568/e2e8f0?text=Collaboration" 
                alt="A person smiling while using a laptop" 
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurWork;
