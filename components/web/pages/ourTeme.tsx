'use client'
import Aos from 'aos';
import React, { useEffect } from 'react';

// Define the types for the TeamMemberCard's props for TypeScript
interface TeamMemberCardProps {
  imageUrl: string;
  name: string;
  title: string;
}

/**
 * A reusable card component to display a single team member.
 * @param {string} imageUrl - The URL for the team member's portrait.
 * @param {string} name - The name of the team member.
 * @param {string} title - The job title of the team member.
 */
const TeamMemberCard = ({ imageUrl, name, title }: TeamMemberCardProps) => {
  return (
    <div  className="text-center">
      <div data-aos="fade-up" className="relative w-full aspect-square rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
        {/* Using a standard img tag. For Next.js <Image>, ensure domain is configured in next.config.js */}
        <img
          src={imageUrl}
          alt={`Portrait of ${name}`}
          className="w-full h-full object-cover"
          // Fallback in case the image fails to load
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.onerror = null; 
            target.src = 'https://placehold.co/400x400/e2e8f0/334155?text=Image';
          }}
        />
      </div>
      <div data-aos="zoom-in" className="mt-4">
        <h3 className="text-lg font-bold text-gray-800">{name}</h3>
        <p className="text-gray-500">{title}</p>
      </div>
    </div>
  );
};

/**
 * The main component for the "Team Serun" section.
 * It lays out the title and the grid of team members.
 */
const OurTeme = () => {
  // Data for the team members. In a real app, this might come from a CMS or API.
  const teamMembers: TeamMemberCardProps[] = [
    {
      imageUrl: 'https://placehold.co/400x400/d1d5db/334155?text=Nikolai',
      name: 'Nikolai Ivanov',
      title: 'CEO & Co-Founder',
    },
    {
      imageUrl: 'https://placehold.co/400x400/a3a3a3/334155?text=Bruce',
      name: 'Bruce Vanguard',
      title: 'Lead Designer',
    },
    {
      imageUrl: 'https://placehold.co/400x400/9ca3af/334155?text=Anuv',
      name: 'Anuv Kapoor',
      title: 'Chief Technology Officer',
    },
    {
      imageUrl: 'https://placehold.co/400x400/b5b5b5/334155?text=Roger',
      name: 'Roger Calzoni',
      title: 'Senior Software Engineer',
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
    <section className="bg-white font-sans py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 data-aos="zoom-in" className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Team Serun
          </h2>
        </div>

        {/* Responsive Grid for Team Members */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 max-w-6xl mx-auto">
          {teamMembers.map((member) => (
            <TeamMemberCard
              key={member.name}
              imageUrl={member.imageUrl}
              name={member.name}
              title={member.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeme;
