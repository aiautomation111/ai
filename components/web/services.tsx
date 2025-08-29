'use client'
// components/ServicePage.tsx

import Aos from "aos";
import Image from "next/image";
import React, { useEffect } from "react";
import "aos/dist/aos.css";
import { ServiceData } from "@/app/types"; // استورد الأنواع

// المكون الآن يقبل خاصية `service`
interface ServicePageProps {
  service: ServiceData;
}

const ServicePage = ({ service }: ServicePageProps) => {
  useEffect(() => {
    Aos.init({
      duration: 800,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <div className="bg-white text-gray-900 overflow-hidden">
      <div className="mx-auto space-y-24">

        {/* === Section 1: Service Title & Description (Dynamic) === */}
        <section className=" w-full grid grid-cols-1 lg:grid-cols-2 px-7  items-center gap-4 bg-black text-white p-7 mx-auto">
          <div className="flex flex-col">
            <h1 data-aos="zoom-in" className="text-4xl md:text-2xl font-bold leading-tight mb-4">
            {service.hero.title}
          </h1>
          <p data-aos="fade-up" data-aos-delay="200" className="text-gray-400 text-md" dangerouslySetInnerHTML={{ __html: service.hero.description }} />
          </div>
          <div className="w-full h-[525px]"><img src={service.hero.img} className="w-full h-full" alt="" /></div>
        </section>

        {/* === Section 2: Image & Key Features (Dynamic) === */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 px-10 items-center">
          <div data-aos="flip-left" className="w-full h-96 rounded-xl overflow-hidden shadow-lg shadow-gray-200">
            <Image
              src={service.features.imageUrl}
              alt="Service illustration"
              width={600}
              height={400}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div data-aos="fade-left" className="flex flex-col gap-6">
            <h2 className="text-3xl font-bold">{service.features.title}</h2>
            <p className="text-gray-600">{service.features.description}</p>
            <ul className="space-y-4">
              {service.features.items.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-yellow-400 text-xl font-bold mt-1">{`0${index + 1}`}</span>
                  <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-gray-500 text-sm">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* === Section 3: Process (Dynamic) === */}
        <section className="px-10">
          <div className="text-center max-w-2xl mx-auto">
            <h2 data-aos="fade-up" className="text-3xl font-bold mb-4">
              {service.process.title}
            </h2>
            <p data-aos="fade-up" data-aos-delay="150" className="text-gray-600">
              {service.process.description}
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.process.steps.map((step, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={`${200 + index * 100}`}
                className="bg-gray-50 p-6 rounded-lg border border-gray-200"
              >
                <div className="text-yellow-400 font-bold text-2xl mb-2">{`0${index + 1}`}</div>
                <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* === Section 4: Testimonials (Dynamic) === */}
        <section className="px-10">
          <div className="text-center max-w-2xl mx-auto">
            <h2 data-aos="fade-up" className="text-3xl font-bold mb-4">
              {service.testimonials.title}
            </h2>
            <p data-aos="fade-up" data-aos-delay="150" className="text-gray-600">
              {service.testimonials.description}
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.testimonials.clients.map((client, index) => (
              <div
                key={index}
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                className="bg-gray-50 p-8 rounded-lg border border-gray-200"
              >
                <div className="flex items-center mb-4">
                  <Image
                    src={client.avatarUrl}
                    alt={client.name}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div className="ml-4">
                    <h4 className="font-semibold">{client.name}</h4>
                    <p className="text-gray-500 text-sm">{client.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{client.quote}"</p>
              </div>
            ))}
          </div>
        </section>

        {/* === Section 5: Call to Action (Dynamic) === */}
        <section data-aos="zoom-in-up" className="bg-black rounded-lg p-10 flex flex-col md:flex-row items-center justify-between gap-6 text-white mx-12 mb-13">
          <div>
            <h3 className="text-3xl font-bold">{service.cta.title}</h3>
            <p className="mt-2 opacity-80">{service.cta.description}</p>
          </div>
          <button className="bg-yellow-300 text-gray-900 font-semibold py-3 px-6 rounded-lg flex items-center gap-2 w-full md:w-max cursor-pointer transition-colors flex-shrink-0">
            {service.cta.buttonText}
            <div className="bg-yellow-400 text-gray-900 rounded-full p-1">→</div>
          </button>
        </section>
      </div>
    </div>
  );
};

export default ServicePage;