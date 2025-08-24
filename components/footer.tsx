import React from 'react';

// --- TypeScript Interfaces for Prop Types ---
interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

interface LinkColumnProps {
  title: string;
  links: { href: string; label: string }[];
}

// --- Logo Component (as an SVG for scalability) ---
const KyzenDevLogo = () => (
  <div className="flex items-center space-x-2">
    
  <img src="/Logo-dark.png" className='w-[150px]' alt="" />
  </div>
);

// --- Reusable Footer Link Component ---
const FooterLink: React.FC<FooterLinkProps> = ({ href, children }) => (
  <a href={href} className="text-gray-400 hover:text-white transition-colors duration-300">
    {children}
  </a>
);

// --- Reusable Link Column Component ---
const LinkColumn: React.FC<LinkColumnProps> = ({ title, links }) => (
  <div>
    <h3 className="font-bold text-white mb-4">{title}</h3>
    <ul className="space-y-3">
      {links.map((link) => (
        <li key={link.label}>
          <FooterLink href={link.href}>{link.label}</FooterLink>
        </li>
      ))}
    </ul>
  </div>
);


// --- Main Footer Component ---
const FooterWeb = () => {
  const courseLinks = [
    { href: '', label: 'App Development' },
    { href: '', label: 'Web Development' },
    { href: '', label: 'WordPress and CMS Development' },
    { href: '', label: 'Course 4Website Maintenance' },
    { href: '', label: 'UI/UX Design' },
    { href: '', label: 'Technical Support' },
  ];

  const supportLinks = [
    { href: '#', label: 'Help' },
    { href: '#', label: 'FAQ' },
    { href: '#', label: 'Contact us' },
  ];

  const legalLinks = [
    { href: '#', label: 'Privacy policy' },
    { href: '#', label: 'Terms of service' },
    { href: '#', label: 'Cookies' },
  ];

  return (
    <footer className="bg-black text-white font-sans">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Column 1: Logo and Description */}
          <div className="md:col-span-2 lg:col-span-1">
            <KyzenDevLogo />
            <p className="mt-4 text-gray-400 max-w-xs">
              Lorem ipsum dolor sit amet consectetur. Pulvinar volutpat mi feugiat cras.
            </p>
          </div>

          {/* Spacer for tablet view */}
          <div className="hidden md:block lg:hidden"></div>

          {/* Link Columns */}
          <LinkColumn title="Services" links={courseLinks} />
          <LinkColumn title="Support" links={supportLinks} />
          <LinkColumn title="Legal" links={legalLinks} />

        </div>

        {/* Bottom copyright section */}
        <div className="mt-16 border-t border-gray-800 pt-8 pb-8 text-center text-sm text-gray-500">
          <p>Copyright © 2025 Taikly. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterWeb;
