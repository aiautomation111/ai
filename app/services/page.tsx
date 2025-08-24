'use client'
// components/ServicePage.tsx

import Aos from "aos";
import Image from "next/image";
import React, { useEffect } from "react";
import "aos/dist/aos.css";

const ServicePage = () => {
  useEffect(() => {
    Aos.init({
      duration: 800,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <div className="bg-white text-gray-900 overflow-hidden">
      <div className="container mx-auto space-y-24">
        
        {/* === Section 1: Service Title & Description === */}
        <section className="text-center w-full h-[87vh] flex px-7 flex-col items-center justify-center gap-4 bg-black text-white p-7 mx-auto">
          <h1
            data-aos="zoom-in"
            className="text-4xl md:text-6xl font-bold leading-tight mb-4"
          >
            Custom Web Application Development
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-gray-600 text-lg"
          >
            We turn your ideas into powerful, secure, and high-performing web
            solutions. From simple websites to complex platforms, we deliver
            exceptional digital experiences tailored to your business needs.
          </p>
        </section>

        {/* === Section 2: Image & Key Features === */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 px-10 items-center">
          <div
            data-aos="flip-left"
            className="w-full h-96 rounded-xl overflow-hidden shadow-lg shadow-gray-200"
          >
            <Image
              src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=2070"
              alt="Service illustration"
              width={600}
              height={400}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div data-aos="fade-left" className="flex flex-col gap-6">
            <h2 className="text-3xl font-bold">Why Choose Our Service?</h2>
            <p className="text-gray-600">
              We don’t just build web apps—we build partnerships. Our focus is
              on understanding your goals to deliver a product that not only
              meets but exceeds your expectations.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-yellow-300 text-xl font-bold mt-1">01</span>
                <div>
                  <h3 className="font-semibold">User-Centered Design</h3>
                  <p className="text-gray-500 text-sm">
                    Attractive and easy-to-use interfaces that ensure a
                    delightful experience for your customers.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-300 text-xl font-bold mt-1">02</span>
                <div>
                  <h3 className="font-semibold">High Performance</h3>
                  <p className="text-gray-500 text-sm">
                    Responsive applications optimized to handle different
                    workloads smoothly.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-300 text-xl font-bold mt-1">03</span>
                <div>
                  <h3 className="font-semibold">Security & Protection</h3>
                  <p className="text-gray-500 text-sm">
                    We implement best security practices to safeguard your data
                    and your users.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* === Section 3: Process === */}
        <section className="px-10">
          <div className="text-center max-w-2xl mx-auto mx-10">
            <h2 data-aos="fade-up" className="text-3xl font-bold mb-4">
              Our Methodical Process
            </h2>
            <p
              data-aos="fade-up"
              data-aos-delay="150"
              className="text-gray-600"
            >
              We follow a four-step process to ensure your project is delivered
              with the highest quality and on time.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="bg-gray-50 p-6 rounded-lg border border-gray-200"
            >
              <div className="text-yellow-300 font-bold text-2xl mb-2">01</div>
              <h3 className="font-semibold text-lg mb-2">Discovery & Planning</h3>
              <p className="text-gray-500 text-sm">
                We begin with a deep understanding of your vision, goals, and
                target audience to define a clear strategy.
              </p>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="bg-gray-50 p-6 rounded-lg border border-gray-200"
            >
              <div className="text-yellow-300 font-bold text-2xl mb-2">02</div>
              <h3 className="font-semibold text-lg mb-2">Design & Prototyping</h3>
              <p className="text-gray-500 text-sm">
                Our design team creates user-focused prototypes and UI designs.
              </p>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="400"
              className="bg-gray-50 p-6 rounded-lg border border-gray-200"
            >
              <div className="text-yellow-300 font-bold text-2xl mb-2">03</div>
              <h3 className="font-semibold text-lg mb-2">Development & Testing</h3>
              <p className="text-gray-500 text-sm">
                Developers write clean, efficient code and run extensive testing
                to ensure quality.
              </p>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="500"
              className="bg-gray-50 p-6 rounded-lg border border-gray-200"
            >
              <div className="text-yellow-300 font-bold text-2xl mb-2">04</div>
              <h3 className="font-semibold text-lg mb-2">Launch & Support</h3>
              <p className="text-gray-500 text-sm">
                After your approval, we launch the app and provide continuous
                support for smooth operation.
              </p>
            </div>
          </div>
        </section>

        {/* === Section 4: Testimonials === */}
        <section className="px-10">
          <div className="text-center max-w-2xl mx-auto">
            <h2 data-aos="fade-up" className="text-3xl font-bold mb-4">
              What Our Clients Say
            </h2>
            <p
              data-aos="fade-up"
              data-aos-delay="150"
              className="text-gray-600"
            >
              We take pride in building strong relationships with our clients.
              Here’s what some of them said about us.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              data-aos="fade-right"
              className="bg-gray-50 p-8 rounded-lg border border-gray-200"
            >
              <div className="flex items-center mb-4">
                <Image
                  src="https://i.pravatar.cc/150?img=1"
                  alt="Client 1"
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div className="ml-4">
                  <h4 className="font-semibold">Ahmed Ali</h4>
                  <p className="text-gray-500 text-sm">CEO of Company X</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "The team exceeded our expectations at every stage. The final
                product was amazing and had a positive impact on our business."
              </p>
            </div>
            <div
              data-aos="fade-left"
              className="bg-gray-50 p-8 rounded-lg border border-gray-200"
            >
              <div className="flex items-center mb-4">
                <Image
                  src="https://i.pravatar.cc/150?img=2"
                  alt="Client 2"
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div className="ml-4">
                  <h4 className="font-semibold">Fatima Salem</h4>
                  <p className="text-gray-500 text-sm">Founder of Company Y</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Their professionalism and attention to detail were
                outstanding. Highly recommend working with them for any tech
                project."
              </p>
            </div>
          </div>
        </section>

        {/* === Section 5: Call to Action === */}
        <section
          data-aos="zoom-in-up"
          className="bg-black rounded-lg p-10 flex flex-col md:flex-row items-center justify-between gap-6 text-white mx-12 mb-13"
        >
          <div>
            <h3 className="text-3xl font-bold">Got a Project Idea?</h3>
            <p className="mt-2 opacity-80">
              Let us help you bring it to life. Contact us today for a free
              consultation.
            </p>
          </div>
          <button className="bg-yellow-300 text-gray-900 font-semibold py-3 px-6 rounded-lg flex items-center gap-2 w-full md:w-max cursor-pointer transition-colors flex-shrink-0">
            Start Your Project Now
            <div className="bg-yellow-300 text-gray-900 rounded-full p-1">→</div>
          </button>
        </section>
      </div>
    </div>
  );
};

export default ServicePage;
