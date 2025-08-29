"use client";

import Link from 'next/link';
import { X } from 'lucide-react';

// تحديد أنواع الـ props لتحسين جودة الكود
interface MobileMenuProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

export default function MobileMenu({ isMenuOpen, setIsMenuOpen }: MobileMenuProps) {
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className={`
      md:hidden fixed top-0 left-0 w-full h-full bg-gray-900 z-50
      transform ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
      transition-transform duration-300 ease-in-out
    `}>
      <div className="flex justify-end p-4">
        <button onClick={closeMenu}>
          <X className="text-white" size={32} />
        </button>
      </div>
      <ul className="flex flex-col items-center justify-center h-full gap-y-8">
        <li><Link onClick={closeMenu} href="/" className="text-2xl font-semibold text-white hover:text-yellow-500">Home</Link></li>
        <li><Link onClick={closeMenu} href="/services" className="text-2xl font-semibold text-white hover:text-yellow-500">Services</Link></li>
        <li><Link onClick={closeMenu} href="/f&q" className="text-2xl font-semibold text-white hover:text-yellow-500">F&Q</Link></li>
        <li><Link onClick={closeMenu} href="/blogs" className="text-2xl font-semibold text-white hover:text-yellow-500">Blog</Link></li>
        <li><Link onClick={closeMenu} href="/contact_us" className="text-2xl font-semibold text-white hover:text-yellow-500">Contact</Link></li>
        <li className="mt-4"><Link onClick={closeMenu} href="#" className="px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold rounded-full">Get Started</Link></li>
      </ul>
    </div>
  );
}