'use client'; // This directive is needed for components that use client-side hooks like useState

import Aos from 'aos';
import React, { useState, useEffect } from 'react';

// --- Helper Components for Icons ---

// Icon for the "open" state (minus sign)
const MinusIcon = () => (
  <svg className="w-6 h-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
  </svg>
);

// Icon for the "closed" state (plus sign)
const PlusIcon = () => (
  <svg className="w-6 h-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
  </svg>
);


// --- TypeScript Interface for Prop Types ---
interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

// --- Reusable Accordion Item Component ---
const AccordionItem: React.FC<AccordionItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200 py-6">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center text-left text-lg font-semibold text-gray-800 hover:text-black focus:outline-none"
      >
        <span>{question}</span>
        {isOpen ? <MinusIcon /> : <PlusIcon />}
      </button>
      {/* The answer is conditionally rendered with a smooth transition */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-screen mt-4' : 'max-h-0'
        }`}
      >
        <p className="text-gray-600 leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
};


// --- Main FAQ Section Component ---
const QA = () => {
  // State to manage which accordion item is open. null means all are closed.
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  // State to manage if the auto-play is paused (e.g., on hover)
  const [isPaused, setIsPaused] = useState(false);

  // Data for the FAQ section. This could be fetched from a CMS or API.
  const faqData = [
    {
      question: 'What does Kyzen Dev mean by "custom software that reclaims my time"?',
      answer: ' We mean we build digital solutions specifically designed to automate your manual tasks, consolidate your fragmented apps, and streamline your workflows. This frees you from the daily grind and gives you back hours you can dedicate to growth or your personal life.',
    },
    {
      question: 'I have a business idea. How do I get a price quote for building an app or a website?',
      answer: 'The cost to build an app or website varies widely based on its complexity and features. Our process starts with a free Digital Readiness Assessment to help you define your idea and its viability before we provide a detailed, transparent quote.',
    },
    {
      question: 'How long does it take to build a custom website or mobile app?',
      answer: 'The timeline depends on the complexity of your needs. Our agile development process allows us to launch a Minimum Viable Product (MVP) quickly, with a phased approach to adding more features over time. ',
    },
    {
      question: 'Do I own the code and intellectual property (IP) after the project is complete? ',
      answer: 'Yes, absolutely. Upon final payment, all intellectual property and the codebase we developed for you become your property. This is clearly outlined in our service agreements from the start.',
    },
    {
      question: ' My current website is not generating leads. How can a web development company help me improve it?',
      answer: 'We build websites with a focus on conversion and user experience. We can redesign your site to be more intuitive, mobile-friendly, and to have a clearer call to action (CTA), driving more traffic and leads.',
    },
     {
      question: "What's the difference between a website and a web application for a business? ",
      answer: ' A website is primarily for static information and content (e.g., a company brochure). A web application is a dynamic tool for users to interact with (e.g., an online booking system, a client portal, an inventory management tool). We build both.',
    },
    {
      question: "How can I make my business website more accessible to all users? ",
      answer: 'We build all our websites with accessibility in mind. This includes designing for screen readers, keyboard navigation, and clear visual contrast, ensuring your website is usable by everyone, regardless of their ability.',
    },
    {
      question:" What kind of security and data privacy measures are needed for a mobile app?",
      answer:"Security is a non-negotiable foundation of our work. We build with a Security by Design philosophy, adhering to the most stringent privacy and security standards, including HIPAA compliance for our healthcare clients."
    },
    {
      question:"What kind of security is needed for AI solutions that handle sensitive data?",
      answer:"Security is a non-negotiable foundation of our work. We build with a Security by Design philosophy, ensuring all data is encrypted, stored securely, and that we have a Business Associate Agreement (BAA) for all our healthcare clients."
    },
    {
      question:"Is AI and automation only for large corporations with big budgets?",
      answer:"No. We specialize in building practical, intelligent automation that is accessible to small businesses. We’ll show you how to implement AI that gives you a competitive edge and frees up your team's time."
    },
    {
      question:"What kind of support do you offer for bugs and technical issues?",
      answer:"We provide a guaranteed warranty on our work, with proactive monitoring to address potential issues before they ever become a problem. We're your long-term partner, not a one-and-one vendor."
    },
  ];
  
  // Effect for auto-playing the accordion
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setOpenIndex(prevIndex => {
        if (prevIndex === null || prevIndex === faqData.length - 1) {
          return 0;
        }
        return prevIndex + 1;
      });
    }, 5000); // Change question every 5 seconds

    return () => clearInterval(interval);
  }, [isPaused, faqData.length]);

useEffect(() => {
    // Initialize AOS when the component is mounted
    Aos.init({
      duration: 2000, // سرعة الحركة
      once: false, // تشغيل التأثير مرة واحدة فقط
    });
  }, []);

  const handleItemClick = (index: number) => {
    // If the clicked item is already open, close it. Otherwise, open it.
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section 
      className="bg-gray-50 font-sans"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16">
          {/* Left Column: Title */}
          <div className="lg:col-span-1">
            <h2 data-aos="zoom-in" className="text-4xl md:text-5xl font-extrabold text-gray-900">
              Frequently asked questions
            </h2>
          </div>

          {/* Right Column: Accordion */}
          <div data-aos="fade-up" className="lg:col-span-2">
            {faqData.map((item, index) => (
              <AccordionItem
                key={index}
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === index}
                onClick={() => handleItemClick(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QA;
