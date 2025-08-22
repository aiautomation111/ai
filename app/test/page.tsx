'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

/* -------------------------------- Button -------------------------------- */

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className,
  ...props
}) => {
  const baseStyles =
    'font-semibold rounded-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-opacity-75';

  const variantStyles: Record<NonNullable<ButtonProps['variant']>, string> = {
    primary: 'bg-indigo-600 hover:bg-indigo-700 text-white focus:ring-indigo-500',
    secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-800 focus:ring-gray-400',
    outline:
      'border border-indigo-600 text-indigo-600 hover:bg-indigo-50 focus:ring-indigo-500',
  };

  const sizeStyles: Record<NonNullable<ButtonProps['size']>, string> = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-5 py-2.5 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${
        className || ''
      }`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

/* -------------------------------- Header -------------------------------- */

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120, damping: 14, delay: 0.2 }}
      className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm"
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="flex items-center space-x-2 text-2xl font-bold text-indigo-600"
        >
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-indigo-600"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
          >
            <path d="M12 2L2 7l10 5 10-5-10-5z" />
            <path d="M2 17l10 5 10-5" />
            <path d="M2 12l10 5 10-5" />
          </motion.svg>
          <span>Acme Co.</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {[
            { name: 'Home', href: '/' },
            { name: 'About Us', href: '/about' },
            { name: 'Services', href: '/services' },
            { name: 'Contact Us', href: '/contact' },
          ].map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-gray-600 hover:text-indigo-600 font-medium transition-colors duration-200"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-md"
            aria-label="Toggle navigation"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Navigation (Animated) */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="absolute inset-x-0 top-full bg-white md:hidden shadow-lg border-t border-gray-100 py-4"
        >
          <div className="flex flex-col items-center space-y-4 px-4">
            {[
              { name: 'Home', href: '/' },
              { name: 'About Us', href: '/about' },
              { name: 'Services', href: '/services' },
              { name: 'Contact Us', href: '/contact' },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block w-full text-center text-gray-700 hover:text-indigo-600 font-medium py-2 border-b border-gray-50 last:border-b-0"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

/* -------------------------------- Footer -------------------------------- */

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-indigo-400">Acme Co.</h3>
            <p className="text-gray-400 text-sm">
              Innovating the future, one solution at a time.
            </p>
            <p className="text-gray-400 text-sm mt-2">
              &copy; {new Date().getFullYear()} Acme Co. All rights reserved.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-400 text-sm">Email: [email protected]</p>
            <p className="text-gray-400 text-sm">Phone: +1 (555) 123-4567</p>
            <p className="text-gray-400 text-sm mt-2">
              123 Innovation Drive, Tech City, USA
            </p>
            <div className="flex space-x-4 mt-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label="Facebook"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14 12v2h4v-2h-4zm-4-1h2V9h-2v2zm0-4h2V5h-2v2zm8-2v14H4V5h14zm0-2H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label="Twitter"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.633 7.997c.412-.138.82-.266 1.222-.38a8.312 8.312 0 0 1-2.35 1.777c.504-.3.978-.652 1.41-1.055a4.095 4.095 0 0 0-1.28-.488c-.463.352-.98.604-1.52.748a4.137 4.137 0 0 0-2.438-.07c-1.638-.175-2.924-1.587-2.924-3.219 0-.495.14-.962.384-1.37a11.69 11.69 0 0 1-8.527-4.322C2.1 4.5 1.565 5.562 1.565 6.749c0 1.25.632 2.361 1.597 3.018a4.103 4.103 0 0 1-1.85-.506v.05c0 1.62.903 3.047 2.234 3.367a4.103 4.103 0 0 1-1.858.07 4.125 4.125 0 0 0 3.834 2.85c-.946.74-2.138 1.182-3.398 1.182-.22 0-.437-.013-.65-.038a11.681 11.681 0 0 0 6.345 1.868c7.616 0 11.785-6.297 11.785-11.785 0-.179-.004-.356-.012-.533a8.434 8.434 0 0 0 2.07-2.15z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0H5a5 5 0 0 0-5 5v14a5 5 0 0 0 5 5h14a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5zM8 19H5V8h3v11zM6.5 6.25c-.966 0-1.75-.79-1.75-1.75s.784-1.75 1.75-1.75 1.75.79 1.75 1.75-.784 1.75-1.75 1.75zM19 19h-3v-5.604c0-3.368-4-3.113-4 0V19H9V8h3v1.765c1.396-2.586 7-2.777 7 2.317V19z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

/* ------------------------ Animations (shared variants) ------------------------ */

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring' as const,
      damping: 15,
      stiffness: 100,
      duration: 0.8,
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

/* ------------------------------- Home Page -------------------------------- */

export default function HomePage() {
  return (
    <div className="min-h-screen text-gray-800 bg-white">
      <Header />

      {/* Section 1: Hero Section */}
      <motion.section
        className="relative bg-gradient-to-r from-indigo-800 to-purple-900 text-white flex items-center justify-center min-h-[calc(100vh-6rem)] md:min-h-[calc(100vh-8rem)] py-20 overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/3183163/pexels-photo-3183163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Acme Co. innovative solutions"
            fill
            priority
            quality={80}
            className="opacity-20"
            style={{ objectFit: 'cover' }}
          />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold leading-tight mb-6"
            variants={itemVariants}
          >
            Powering Innovation, Driving Success for{' '}
            <span className="text-indigo-300">Acme Co.</span>
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl mb-10 max-w-2xl mx-auto text-indigo-100"
            variants={itemVariants}
          >
            We provide cutting-edge technology solutions and strategic
            consulting to transform your business and achieve unparalleled
            growth.
          </motion.p>
          <motion.div variants={itemVariants} className="flex items-center justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" variant="primary" className="shadow-lg hover:shadow-xl">
                Get Started
              </Button>
            </Link>
            <Link href="/services">
              <Button
                size="lg"
                variant="outline"
                className="shadow-lg hover:shadow-xl border-indigo-300 text-indigo-300 hover:bg-indigo-300 hover:text-white"
              >
                Our Services
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Section 2: About */}
      <motion.section
        className="py-16 md:py-24 bg-white container mx-auto px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={sectionVariants}
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              About Acme Co.: Pioneering Digital Transformation
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              At Acme Co., we believe in the power of innovation to reshape
              businesses. For over a decade, we've been at the forefront of
              technological advancement, helping clients navigate complex
              digital landscapes and seize new opportunities. Our team of
              seasoned experts is dedicated to delivering bespoke solutions that
              drive efficiency, foster growth, and ensure long-term success.
            </p>
            <p className="text-md text-gray-600 mb-6">
              From strategic IT consulting to custom software development and
              robust cybersecurity, our comprehensive approach ensures that every
              aspect of your digital journey is covered. We partner with you to
              understand your unique challenges and craft solutions that are not
              just effective but future-proof.
            </p>
            <Link href="/about">
              <Button variant="secondary">Learn More About Us</Button>
            </Link>
          </motion.div>

          <motion.div variants={itemVariants} className="relative w-full h-[450px]">
            <Image
              src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Acme Co. team collaboration"
              fill
              loading="lazy"
              className="rounded-xl shadow-xl transition-transform duration-500 hover:scale-105"
              style={{ objectFit: 'cover' }}
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Section 3: Services */}
      <motion.section
        className="py-16 md:py-24 bg-gray-50 container mx-auto px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            variants={itemVariants}
          >
            Our Premier Solutions
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Delivering innovative services tailored to your business needs,
            ensuring efficiency and competitive advantage.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: (
                <svg
                  className="w-10 h-10 text-indigo-600 mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9.75 17L9 20l-1 1h8l-1-1-1.25-3M15 10V5a3 3 0 00-3-3l-4 9h16l-4-9a3 3 0 00-3 3v5m-1.048 9.25V18l2-2.25L13.75 16l1-1h1.25"
                  />
                </svg>
              ),
              title: 'Custom Software Development',
              description:
                'Building bespoke applications and systems designed to streamline your operations and meet specific business goals.',
            },
            {
              icon: (
                <svg
                  className="w-10 h-10 text-indigo-600 mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              ),
              title: 'IT Consulting & Strategy',
              description:
                'Expert guidance to optimize your IT infrastructure, enhance cybersecurity, and align technology with business objectives.',
            },
            {
              icon: (
                <svg
                  className="w-10 h-10 text-indigo-600 mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 19V6l-2 2L4 5m0 0l3-3m-3 3h12a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2v-8z"
                  />
                </svg>
              ),
              title: 'Cloud Solutions & Migration',
              description:
                'Leveraging the power of cloud computing for scalability, flexibility, and cost-efficiency with seamless migration services.',
            },
            {
              icon: (
                <svg
                  className="w-10 h-10 text-indigo-600 mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8V6a2 2 0 112 2h-2zm0-8V2a2 2 0 012-2h-2zM9 16h6M12 20h0"
                  />
                </svg>
              ),
              title: 'Cybersecurity Services',
              description:
                'Protecting your digital assets with robust security measures, threat detection, and incident response planning.',
            },
            {
              icon: (
                <svg
                  className="w-10 h-10 text-indigo-600 mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
              ),
              title: 'Data Analytics & AI',
              description:
                'Transforming raw data into actionable insights using advanced analytics and artificial intelligence solutions.',
            },
            {
              icon: (
                <svg
                  className="w-10 h-10 text-indigo-600 mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 6l3 1m0 0l-3 9v7h14v-9l-3-9m-3 0V3h-2v3m0 2h.01M10 12l2 2m-2 2l2-2m-2-2v2"
                  />
                </svg>
              ),
              title: 'Managed IT Services',
              description:
                'Comprehensive IT support and maintenance to ensure your systems run smoothly, allowing you to focus on your core business.',
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2 flex flex-col items-center text-center border border-gray-100"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              {service.icon}
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/services">
            <Button size="lg" variant="primary">
              View All Services
            </Button>
          </Link>
        </div>
      </motion.section>

      {/* Section 4: Why Choose / Testimonials-like */}
      <motion.section
        className="py-16 md:py-24 bg-indigo-700 text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-4 text-white"
              variants={itemVariants}
            >
              Why Partner with Acme Co.?
            </motion.h2>
            <motion.p
              className="text-lg text-indigo-100 max-w-3xl mx-auto"
              variants={itemVariants}
            >
              Our commitment to excellence, client-centric approach, and proven
              track record make us the ideal technology partner for your
              business.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Expert Team',
                description:
                  'A dedicated team of certified professionals with vast industry experience and deep technical expertise.',
                icon: (
                  <svg
                    className="w-8 h-8 text-indigo-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253m9 0c1.168-.776 2.754-1.253 4.5-1.253 1.746 0 3.332.477 4.5 1.253m-13 0C9.246 7.023 10.832 7.5 12 7.5s2.754-.477 4.5-1.253M12 18.747c-1.168.776-2.754 1.253-4.5 1.253S4.168 19.523 3 18.747m9 0c1.168.776 2.754 1.253 4.5 1.253s3.332-.477 4.5-1.253"
                    />
                  </svg>
                ),
              },
              {
                title: 'Tailored Solutions',
                description:
                  'Customized strategies and solutions perfectly aligned with your unique business challenges and goals.',
                icon: (
                  <svg
                    className="w-8 h-8 text-indigo-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0013.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                ),
              },
              {
                title: 'Proven Track Record',
                description:
                  'A history of successful project delivery and satisfied clients across various industries.',
                icon: (
                  <svg
                    className="w-8 h-8 text-indigo-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ),
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-indigo-600 p-8 rounded-lg shadow-md border border-indigo-500 flex flex-col items-center text-center"
                variants={itemVariants}
                whileHover={{ backgroundColor: '#4c51bf', scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {feature.icon}
                <h3 className="text-xl font-semibold text-white mb-3 mt-4">
                  {feature.title}
                </h3>
                <p className="text-indigo-200 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Section 5: CTA */}
      <motion.section
        className="py-16 md:py-24 bg-white container mx-auto px-4 sm:px-6 lg:px-8 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
          variants={itemVariants}
        >
          Ready to Transform Your Business?
        </motion.h2>
        <motion.p
          className="text-lg text-gray-700 max-w-3xl mx-auto mb-10"
          variants={itemVariants}
        >
          Let Acme Co. be your trusted partner in navigating the complexities of
          the digital world. Contact us today for a personalized consultation.
        </motion.p>
        <motion.div variants={itemVariants} className="flex items-center justify-center gap-4">
          <Link href="/contact">
            <Button size="lg" variant="primary">
              Contact Our Team
            </Button>
          </Link>
          <Link href="/services">
            <Button size="lg" variant="secondary">
              Explore Solutions
            </Button>
          </Link>
        </motion.div>
      </motion.section>

      {/* Location Map (optional extra) */}
      <motion.section
        className="py-16 md:py-24 bg-gray-100"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-8"
            variants={itemVariants}
          >
            Find Our Headquarters
          </motion.h2>
          <motion.div
            className="w-full rounded-lg shadow-xl overflow-hidden"
            variants={itemVariants}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.203808447833!2d-73.98783458459424!3d40.74844057932789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25925a50b863d%3A0x6a1f3c3a9f0e1d!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1678912345678!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Acme Co. Office Location"
            />
          </motion.div>
          <motion.p className="mt-8 text-gray-700 text-lg" variants={itemVariants}>
            Our main office is located at:{' '}
            <span className="font-semibold text-indigo-600">
              123 Innovation Drive, Tech City, USA
            </span>
          </motion.p>
          <motion.div variants={itemVariants} className="mt-8">
            <Link href="/contact">
              <Button size="lg" variant="primary">
                Get Directions
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
}
