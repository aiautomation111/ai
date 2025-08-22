'use client'; // This directive is needed for components that use client-side hooks like useState

import Aos from 'aos';
import React, { useEffect, useState } from 'react';

// --- Main Newsletter Subscription Component ---
const NewsLatter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle the form submission logic here.
    // For example, you could send the email to your backend or a service like Mailchimp.
    console.log('Submitted email:', email);
    alert(`Thank you for subscribing with ${email}!`);
    setEmail(''); // Clear the input after submission
  };
  useEffect(() => {
    // Initialize AOS when the component is mounted
    Aos.init({
      duration: 2000, // سرعة الحركة
      once: false, // تشغيل التأثير مرة واحدة فقط
    });
  }, []);
  return (
    <section  className="bg-white font-sans py-16 sm:py-24">
      <div data-aos="flip-left" className="container md:w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
        {/* The main black container with rounded corners */}
        <div className="bg-black text-white rounded-2xl p-8 md:p-12 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            
            {/* Left Column: Title and Description */}
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
                Subscribe our newsletter
              </h2>
              <p className="mt-4 text-gray-400 max-w-md">
                Subscribe to our news letter and be the first to receive insights, updates, and expert tips on optimising your financial management.
              </p>
            </div>

            {/* Right Column: Subscription Form */}
            <div>
              <form onSubmit={handleSubmit}>
                <label htmlFor="email-subscribe" className="block text-sm font-medium text-gray-300 mb-2">
                  Stay up to date
                </label>
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    id="email-subscribe"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="flex-grow px-4 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                  <button
                    type="submit"
                    className="bg-yellow-400 text-black font-bold px-6 py-3 rounded-lg hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-black transition-colors duration-300"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
              <p className="mt-4 text-xs text-gray-500">
                By subscribing you agree to our{' '}
                <a href="#" className="underline hover:text-gray-300">
                  privacy policy
                </a>
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsLatter;
