'use client';

import React,  { useEffect, useState } from 'react';
import Navbar from '@/components/web/menuweb'; // قائمة سطح المكتب
import MobileMenu from '@/components/web/menumpbile'; // ✨ 1. استيراد قائمة الموبايل
import { Menu } from 'lucide-react'; // ✨ 2. استيراد أيقونة القائمة
import Link from 'next/link';

export default function HeaderContent() {
  const [isFixed, setIsFixed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // ✨ 3. إضافة حالة لقائمة الموبايل

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 100); // بعد 100px يصبح fixed
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={`transition-all duration-500 ease-in-out bg-black text-white ${
          isFixed
            ? "fixed top-0 left-0 w-full shadow-lg z-50 animate-slideDown"
            : "relative border-b-2 border-white"
        }`}>
        <div className="flex items-center justify-between mx-5 py-5">
          <Link href="/">
            <img className='w-[100px] cursor-pointer' src="/Logo-dark.png" alt="Company Logo" />
          </Link>
          
          {/* قائمة سطح المكتب (تختفي في الموبايل) */}
          <div className="hidden md:block">
            <Navbar />
          </div>

          {/* ✨ 4. زر قائمة الموبايل (يظهر في الموبايل فقط) */}
          <div className="block md:hidden">
            <button onClick={() => setIsMobileMenuOpen(true)}>
              <Menu size={28} />
            </button>
          </div>
        </div>
      </header>

      {/* ✨ 5. عرض مكون قائمة الموبايل بناءً على الحالة */}
      <MobileMenu 
        isMenuOpen={isMobileMenuOpen} 
        setIsMenuOpen={setIsMobileMenuOpen} 
      />
    </>
  );
}