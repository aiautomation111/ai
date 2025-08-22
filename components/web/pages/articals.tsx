'use client'
import Aos from 'aos';
import Link from 'next/link';
import React, { useEffect } from 'react';

// --- TypeScript Interface for Prop Types ---
interface ArticleCardProps {
  imageUrl: string;
  day: string;
  month: string;
  year: string;
  category: string;
  title: string;
}

// --- Reusable Article Card Component ---
const ArticleCard: React.FC<ArticleCardProps> = ({ imageUrl, day, month, year, category, title }) => {
  return (
    <div data-aos="fade-up" className="group">
      {/* Image container */}
      <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-md">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.onerror = null;
            target.src = 'https://placehold.co/400x300/e2e8f0/334155?text=Article';
          }}
        />
        {/* Date Overlay */}
        <div className="absolute top-4 left-4 bg-white rounded-lg p-2 text-center shadow">
          <p className="text-xs text-gray-500 uppercase">{month}</p>
          <p className="font-bold text-xl text-gray-800">{day}</p>
          <p className="text-xs text-gray-500">{year}</p>
        </div>
      </div>
      {/* Text content below the image */}
      <Link href={""} className="mt-4">
        <p className="text-sm text-gray-500 mb-1">{category}</p>
        <h3 className="text-lg font-bold text-gray-800 group-hover:text-black transition-colors duration-300">
          {title}
        </h3>
      </Link>
    </div>
  );
};

// --- Main 'Latest Articles' Section Component ---
const Articals = () => {
  // Sample data for the articles. This could be fetched from a CMS or API.
  const articles: ArticleCardProps[] = [
    {
      imageUrl: 'https://placehold.co/400x300/60a5fa/ffffff?text=Driving+Lesson',
      day: '09',
      month: 'Jul',
      year: '2025',
      category: 'Category name',
      title: 'Article title goes here',
    },
    {
      imageUrl: 'https://placehold.co/400x300/818cf8/ffffff?text=In+The+Car',
      day: '09',
      month: 'Jul',
      year: '2025',
      category: 'Category name',
      title: 'Article title goes here',
    },
    {
      imageUrl: 'https://placehold.co/400x300/f87171/ffffff?text=Racing',
      day: '09',
      month: 'Jul',
      year: '2025',
      category: 'Category name',
      title: 'Article title goes here',
    },
    {
      imageUrl: 'https://placehold.co/400x300/fbbf24/ffffff?text=Bus+Driver',
      day: '09',
      month: 'Jul',
      year: '2025',
      category: 'Category name',
      title: 'Article title goes here',
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
            Latest articles
          </h2>
        </div>

        {/* Responsive Grid for Articles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {articles.map((article, index) => (
            <ArticleCard key={index} {...article} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articals;
