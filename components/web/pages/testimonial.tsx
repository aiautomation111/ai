'use client'
import Aos from 'aos';
import React, { useState, useEffect, useRef } from 'react';

// Define the types for the props for type-safety with TypeScript
interface Testimonial {
  quote: string;
  name: string;
  role: string;
  avatarUrl: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
}

// --- Individual Testimonial Card Component ---
const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    
    <div data-aos="fade-up" className="flex-shrink-0 w-full md:w-[475px] bg-gray-50 p-8 rounded-xl shadow-sm flex flex-col">
      {/* Quotation mark icon */}
      <svg className="w-8 h-8 text-gray-400 mb-4" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v4a1 1 0 01-2 0V3a3 3 0 013-3h1a1 1 0 011 1v4a1 1 0 11-2 0V3a1 1 0 00-1-1H6zM14 2a1 1 0 00-1 1v4a1 1 0 11-2 0V3a1 1 0 00-1-1h-1a3 3 0 013 3v4a1 1 0 11-2 0V3a1 1 0 00-1-1h-1z" clipRule="evenodd" />
      </svg>
      
      {/* Testimonial text */}
      <p className="text-gray-600 leading-relaxed flex-grow">{testimonial.quote}</p>
      
      {/* Author information */}
      <div className="flex items-center mt-6">
        <img
          src={testimonial.avatarUrl}
          alt={`Avatar of ${testimonial.name}`}
          className="w-12 h-12 rounded-full object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.onerror = null; 
            target.src = 'https://placehold.co/100x100/e2e8f0/334155?text=:)';
          }}
        />
        <div className="ml-4">
          <p className="font-semibold text-gray-800">{testimonial.name}</p>
          <p className="text-gray-500 text-sm">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
};

// --- Main Testimonials Section Component ---
const Testimonail = () => {
  // Sample data for the testimonials
  const testimonials: Testimonial[] = [
    {
      quote: "I was nervous about learning to drive, but this course made everything so clear and easy. The practice tests felt just like the real thing!",
      name: "Lydia Westervelt",
      role: "First-time driver",
      avatarUrl: "https://placehold.co/100x100/e2e8f0/334155?text=LW",
    },
    {
      quote: "This course helped me pass both my theory and road tests. It's clear, affordable, and actually prepares you for real-world driving.",
      name: "Cooper Aminoff",
      role: "New Driver",
      avatarUrl: "https://placehold.co/100x100/d1d5db/334155?text=CA",
    },
    {
      quote: "English isn't my first language, but the course was easy to follow, and the instructors were very patient. I passed my theory test on the first try.",
      name: "Giana Dias",
      role: "International Student",
      avatarUrl: "https://placehold.co/100x100/9ca3af/334155?text=GD",
    },
    {
      quote: "My son used this platform to prepare for his permit test. The interactive modules kept him engaged—and he passed with flying colors!",
      name: "Omar Kenter",
      role: "Parent of a Teen Driver",
      avatarUrl: "https://placehold.co/100x100/b5b5b5/334155?text=OK",
    },
     {
      quote: "My son used this platform to prepare for his permit test. The interactive modules kept him engaged—and he passed with flying colors!",
      name: "Allison",
      role: "New Driver",
      avatarUrl: "https://placehold.co/100x100/b5b5b5/334155?text=A",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Effect for auto-scrolling
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex(prevIndex => (prevIndex + 1) % testimonials.length);
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(interval);
  }, [isPaused, testimonials.length]);

  // Effect to handle the actual scroll
  useEffect(() => {
    if (scrollContainerRef.current) {
      const card = scrollContainerRef.current.children[activeIndex] as HTMLElement;
      if (card) {
        const scrollLeft = card.offsetLeft - (scrollContainerRef.current.offsetWidth - card.offsetWidth) / 2;
        scrollContainerRef.current.scrollTo({
          left: scrollLeft,
          behavior: 'smooth',
        });
      }
    }
  }, [activeIndex]);
  
  useEffect(() => {
      // Initialize AOS when the component is mounted
      Aos.init({
        duration: 2000, // سرعة الحركة
        once: false, // تشغيل التأثير مرة واحدة فقط
      });
    }, []);

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  }

  return (
    <section className="bg-white font-sans py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 data-aos="zoom-in" className="text-4xl md:text-5xl font-extrabold text-gray-900 text-center mb-12">
          Testimonial
        </h2>

        {/* Horizontally Scrolling Container */}
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-hidden scroll-auto space-x-8 pb-8 scrollbar-hide"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${
                activeIndex === index ? 'bg-gray-800' : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonail;
