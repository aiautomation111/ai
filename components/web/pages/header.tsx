'use client';

import React, { useEffect, useState } from 'react';
import { NavigationMenuDemo, NavMobile } from '../menuweb';

export default function HeaderContent() {
   const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 100); // بعد 100px يصبح fixed
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className={`transition-all duration-500 ease-in-out bg-black text-white ${
        isFixed
          ? "fixed top-0 left-0 w-full shadow-lg z-50 animate-slideDown"
          : "relative border-b-2 border-white"
      }`}>
      <div className="flex items-center justify-between mx-5 py-5">
        {/* <h1 className='text-2xl font-bold'>Keyaen dev</h1> */}
        <img className='w-[100px]' src="/Logo-dark.png" alt="" />
        <div className="hidden md:block">
          <NavigationMenuDemo/>
        </div>
        <div className="block md:hidden">
          <NavMobile />
        </div>
      </div>
    </div>
  );
}