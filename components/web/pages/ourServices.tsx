"use client";
import Aos from "aos";
import React, { useEffect } from "react";

// A simple arrow icon component for the links
const ArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13 7l5 5m0 0l-5 5m5-5H6"
    />
  </svg>
);

// This is the individual card component for each service.
// It takes title, description, and link details as props.
const ServiceCard = ({
  title,
  description,
  linkText,
  linkHref,
}: {
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
}) => {
  return (
    // The main card container
    <div
      data-aos="fade-up"
      className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col"
    >
      {/* Service Title */}
      <h3 className="text-2xl font-bold text-gray-800 mb-4">{title}</h3>
      {/* Service Description */}
      <p className="text-gray-600 leading-relaxed flex-grow mb-6">
        {description}
      </p>
      {/* "Learn More" link */}
      <a
        href={linkHref}
        className="group text-yellow-400 hover:text-yellow-500 font-semibold mt-auto inline-flex items-center transition-colors duration-300"
      >
        {linkText}
        <ArrowIcon />
      </a>
    </div>
  );
};

// This is the main component that holds the entire "Our Services" section.
// It can be directly imported and used in any Next.js page.
const OurServices = () => {
  // Data for the service cards. This can be fetched from a CMS or API.
  const services = [
    {
      title: "Web Development",
      description:
        "We build modern, responsive websites tailored to your brand and business needs. Every site is optimized for speed, security, and performance across all devices.",
      linkText: "Explore This Topic",
      linkHref: "#web-development", // Placeholder link
    },
    {
      title: "App Development",
      description:
        "We create mobile apps that are fast, user-friendly, and built for both iOS and Android. From concept to launch, we focus on smooth performance and great user experience.",
      linkText: "View Lesson Details",
      linkHref: "#app-development", // Placeholder link
    },
    {
      title: "Website Maintenance",
      description:
        "We take care of ongoing updates, backups, and performance checks for your website. This ensures everything stays secure, fast, and fully functional at all times.",
      linkText: "View Lesson Details",
      linkHref: "#app-development", // Placeholder link
    },
    {
      title: "WordPress and CMS Development",
      description:
        "We deliver custom WordPress and CMS solutions that are flexible and easy to manage. You get full control of your content without needing any technical skills.",
      linkText: "View Lesson Details",
      linkHref: "#app-development", // Placeholder link
    },
    {
      title: "UI/UX Design",
      description:
        "We design clean and intuitive interfaces that make your product easy to use. Every layout and interaction is crafted to enhance usability and engagement.",
      linkText: "View Lesson Details",
      linkHref: "#app-development", // Placeholder link
    },
    {
      title: "Technical Support",
      description:
        "Our team provides fast, reliable support to keep your systems running smoothly. We handle bugs, errors, and tech issues before they become real problems.",
      linkText: "View Lesson Details",
      linkHref: "#app-development", // Placeholder link
    },
  ];

  useEffect(() => {
    // Initialize AOS when the component is mounted
    Aos.init({
      duration: 2000, // سرعة الحركة
      once: false, // تشغيل التأثير مرة واحدة فقط
    });
  }, []);
  return (
    // Section container with a light gray background
    <section className="bg-white font-sans py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2
            data-aos="zoom-in"
            className="text-4xl md:text-5xl font-extrabold text-gray-900"
          >
            Our Services
          </h2>
          <p data-aos="zoom-in" className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            Providing top-tier solutions to elevate your digital presence.
          </p>
        </div>

        {/* Grid container for the service cards */}
        {/* It's a responsive grid: 1 column on small screens, 2 on larger screens. */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              linkText={service.linkText}
              linkHref="/services"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
