'use client';
import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // لا تنسى إضافة ملف CSS الخاص بـ AOS

const Counter = ({ end, text }: { end: number; text: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let interval: string | number | NodeJS.Timeout | undefined;
    if (count < end) {
      interval = setInterval(() => {
        setCount((prevCount) => Math.min(prevCount + 1, end));
      }, 50); // Adjust the interval for faster/slower counting
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval); // Cleanup on unmount
  }, [end]);

  return (
    <div style={{ textAlign: 'center', fontFamily: 'sans-serif' }}>
      <h2 style={{ fontSize: '2rem', margin: '0' }}>
        {count}
        {end >= 100 ? '%' : '+'}
      </h2>
      <p style={{ fontSize: '0.9rem', color: '#555', margin: '0' }}>{text}</p>
    </div>
  );
};

export default function CounterSection() {
  useEffect(() => {
    // Initialize AOS when the component is mounted
    AOS.init({
      duration: 1000, // سرعة الحركة
      once: false, // تشغيل التأثير مرة واحدة فقط
    });
  }, []);

  return (
    <div
      className="wow slideInLeft grid grid-cols-2 md:grid-cols-4 gap-2 bg-[#ccff00] p-[40px]"
      data-aos="fade-up" // التأثير الذي سيظهر عند التمرير
    >
      <Counter end={50} text="Happy clients" />
      <Counter end={8} text="Years of experience" />
      <Counter end={12} text="Services" />
      <Counter end={100} text="Client satisfaction" />
    </div>
  );
}
