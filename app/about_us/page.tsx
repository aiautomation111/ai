'use client'; 
import Image from "next/image";
import React, { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css';

const AboutUsPage = () => {
  useEffect(() => {
    Aos.init({
      duration: 800,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <div className="bg-white text-gray-900">
      <div className="container mx-auto space-y-24">

        {/* === Section 1: Our Story === */}
        <section className="text-center text-white bg-black w-full h-[87vh] flex items-center justify-center flex-col gap-4 mx-auto">
          <h1 data-aos="fade-down" className="text-4xl md:text-6xl font-bold mb-4">
            Digital Future Makers
          </h1>
          <p data-aos="fade-up" data-aos-delay="200" className="text-gray-500 text-lg px-5 leading-relaxed">
            We believe technology should be a force for good and a tool to empower great ideas. We are a team of dreamers and doers, coming together to build solutions that are technologically advanced and leave a lasting positive impact.
          </p>
        </section>
        
        {/* === Section 2: Our Core Values === */}
        <section>
          <div className="text-center max-w-2xl mx-auto">
            <h2 data-aos="fade-up" className="text-3xl font-bold mb-4">Our Guiding Values</h2>
            <p data-aos="fade-up" data-aos-delay="150" className="text-gray-500">
              Every project we undertake is guided by a set of core principles that shape our identity.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 mx-10 md:grid-cols-3 gap-8 text-center">
            {/* Value 1 */}
            <div data-aos="fade-up" data-aos-delay="200" className="bg-gray-50 p-8 rounded-lg hover:border-yellow-300 border border-transparent transition-all duration-300">
              <div className="text-yellow-300 text-4xl mx-auto mb-4">⚡</div>
              <h3 className="font-bold text-xl mb-2">Innovation</h3>
              <p className="text-gray-500">We always challenge the status quo and explore the latest technologies to deliver innovative solutions.</p>
            </div>
            {/* Value 2 */}
            <div data-aos="fade-up" data-aos-delay="300" className="bg-gray-50 p-8 rounded-lg hover:border-yellow-300 border border-transparent transition-all duration-300">
              <div className="text-yellow-300 text-4xl mx-auto mb-4">❤️</div>
              <h3 className="font-bold text-xl mb-2">Customer Passion</h3>
              <p className="text-gray-500">Our clients' success is our success. We put their needs at the heart of everything we do.</p>
            </div>
            {/* Value 3 */}
            <div data-aos="fade-up" data-aos-delay="400" className="bg-gray-50 p-8 rounded-lg hover:border-yellow-300 border border-transparent transition-all duration-300">
              <div className="text-yellow-300 text-4xl mx-auto mb-4">🛡️</div>
              <h3 className="font-bold text-xl mb-2">Integrity & Transparency</h3>
              <p className="text-gray-500">We build our relationships on trust and clarity, adhering to the highest ethical standards.</p>
            </div>
          </div>
        </section>

        {/* === Section 3: Numbers That Speak About Us === */}
        <section data-aos="zoom-in-up" className="bg-gray-50 rounded-lg p-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mx-10 text-center">
            <div>
              <span className="text-4xl font-bold text-yellow-300">150+</span>
              <p className="text-gray-500 mt-2">Completed Projects</p>
            </div>
            <div>
              <span className="text-4xl font-bold text-yellow-300">99%</span>
              <p className="text-gray-500 mt-2">Client Satisfaction</p>
            </div>
            <div>
              <span className="text-4xl font-bold text-yellow-300">30+</span>
              <p className="text-gray-500 mt-2">Team Members</p>
            </div>
            <div>
              <span className="text-4xl font-bold text-yellow-300">8</span>
              <p className="text-gray-500 mt-2">Years of Experience</p>
            </div>
          </div>
        </section>

        {/* === Section 4: Our Team === */}
        <section className="text-center pb-12 px-10">
          <h2 data-aos="fade-up" className="text-3xl md:text-4xl font-bold mb-10">The Creative Minds Behind Our Success</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[11,12,13,14].map((id, i) => (
              <div key={i} data-aos="fade-up" data-aos-delay={200 + i*100} className="group flex flex-col items-center">
                <div className="w-40 h-40 rounded-full overflow-hidden mb-4 border-4 border-gray-200 group-hover:border-yellow-300 transition-all duration-300 transform group-hover:scale-105">
                  <Image src={`https://i.pravatar.cc/150?img=${id}`} alt="Team Member" width={160} height={160} className="w-full h-full object-cover" />
                </div>
                <h3 className="font-bold text-lg">Member Name</h3>
                <p className="text-yellow-300">Job Title</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default AboutUsPage;
