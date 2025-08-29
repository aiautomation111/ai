"use client"; // Required for components with state and interactivity in Next.js App Router

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type AccordionItemProps = {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void; // A function that takes no arguments and returns nothing
};

// --- Data Structure for all FAQs ---
const faqData = [
  {
    category: "General Questions & The Kyzen Dev Difference",
    faqs: [
      {
        question:
          'What does Kyzen Dev mean by "custom software that reclaims my time"?',
        answer:
          "We mean we build digital solutions specifically designed to automate your manual tasks, consolidate your fragmented apps, and streamline your workflows. This frees you from the daily grind and gives you back hours you can dedicate to growth or your personal life.",
      },
      {
        question:
          "How is Kyzen Dev different from a freelance developer on Upwork?",
        answer:
          "A freelance developer is a contractor; we are a strategic partner. We get inside your business with our Requirements Engineer to understand your operations, ensuring the solution we build is a perfect fit, not a generic one-off project. We provide a full partnership, from blueprint to sustained growth.",
      },
      {
        question:
          "Does a custom solution cost more than a monthly SaaS subscription?",
        answer:
          "While the upfront cost of a custom solution is higher, it often provides a better long-term return on investment (ROI). It eliminates multiple subscription fees, integrates all your business functions into one platform, and saves your team countless hours in manual work.",
      },
      {
        question:
          "I have a business idea. How do I get a price quote for building an app or a website?",
        answer:
          'The cost to build an app or website varies widely based on its complexity and features. Our process starts with a free "Digital Readiness Assessment" to help you define your idea and its viability before we provide a detailed, transparent quote.',
      },
      {
        question:
          "How long does it take to build a custom website or mobile app?",
        answer:
          "The timeline depends on the complexity of your needs. Our agile development process allows us to launch a Minimum Viable Product (MVP) quickly, with a phased approach to adding more features over time.",
      },
      {
        question:
          "I'm not technical. How can I be sure the solution is right for my business?",
        answer:
          'Our "embedded requirements engineer" approach is designed specifically for you. We speak your language and translate your business needs into precise technical requirements, ensuring the solution is a perfect fit for your workflow.',
      },
      {
        question:
          "Do I own the code and intellectual property (IP) after the project is complete?",
        answer:
          "Yes, absolutely. Upon final payment, all intellectual property and the codebase we developed for you become your property. This is clearly outlined in our service agreements from the start.",
      },
    ],
  },
  {
    category: "Website & E-commerce Solutions",
    faqs: [
      {
        question:
          "My current website is not generating leads. How can a web development company help me improve it?",
        answer:
          "We build websites with a focus on conversion and user experience. We can redesign your site to be more intuitive, mobile-friendly, and to have a clearer call to action (CTA), driving more traffic and leads.",
      },
      {
        question:
          "How do I make a website for my small business that I can update easily myself?",
        answer:
          "We build on flexible platforms like WordPress, which has a very user-friendly content management system (CMS) that allows you to easily update text, images, and blog posts without needing a developer.",
      },
      {
        question:
          "I want to sell my products online. How much does it cost to build a custom e-commerce website?",
        answer:
          "The cost depends on the number of products, payment integrations, and custom features you need. We can help you create a cost-effective, custom e-commerce solution that scales with your business.",
      },
      {
        question:
          "What's the difference between a website and a web application for a business?",
        answer:
          "A website is primarily for static information and content (e.g., a company brochure). A web application is a dynamic tool for users to interact with (e.g., an online booking system, a client portal, an inventory management tool). We build both.",
      },
      {
        question:
          "I have a great idea for a web app. How can a development company help me build it without wasting money?",
        answer:
          'Our "Product Vision & Roadmap" service is designed for exactly that. We help you define a Minimum Viable Product (MVP) to get your idea to market quickly, and then we build on it with a phased, agile approach to minimize risk and cost.',
      },
      {
        question:
          "What are the key benefits of having a custom website instead of using a template from a platform like Squarespace?",
        answer:
          "A custom website is unique to your brand, built for scalability, and can be integrated with your specific business processes. It eliminates the limitations of templates and allows you to own your digital platform.",
      },
      {
        question:
          "How can I make my business website more accessible to all users?",
        answer:
          "We build all our websites with accessibility in mind. This includes designing for screen readers, keyboard navigation, and clear visual contrast, ensuring your website is usable by everyone, regardless of their ability.",
      },
    ],
  },
  {
    category: "Mobile & Cross-Platform Apps",
    faqs: [
      {
        question:
          "What is the difference between a native app and a cross-platform app?",
        answer:
          "A native app is built specifically for a single operating system (iOS or Android) and offers the best performance. A cross-platform app is built once and runs on both, making it more cost-effective for a business that wants to reach all users. We can help you decide which is best for your business.",
      },
      {
        question:
          "I want to build a mobile app to engage my customers. How can a mobile app increase customer loyalty?",
        answer:
          "Mobile apps are a powerful tool for customer loyalty. They provide a direct channel for personalized offers, exclusive content, and gamified experiences, keeping your customers engaged and increasing their lifetime value.",
      },
      {
        question:
          "Can a mobile app help my business streamline its internal operations?",
        answer:
          "Yes. We build custom mobile apps for internal use that can automate tasks, track inventory, and manage projects, giving your team the tools they need to work more efficiently and accurately.",
      },
      {
        question:
          "How much does it typically cost for a custom mobile app for a small business?",
        answer:
          'The cost of a custom app varies widely. We start with a comprehensive "Tech Audit & Consolidation" to understand your needs and provide a clear, transparent quote.',
      },
      {
        question:
          "My app idea is for both Apple and Android users. Do I need to build two separate apps?",
        answer:
          "Not necessarily. We specialize in cross-platform development, which allows us to build a single app that works on both iOS and Android, making the process more cost-effective and efficient for your business.",
      },
      {
        question:
          "What kind of security and data privacy measures are needed for a mobile app?",
        answer:
          'Security is a non-negotiable foundation of our work. We build with a "Security by Design" philosophy, adhering to the most stringent privacy and security standards, including HIPAA compliance for our healthcare clients.',
      },
      {
        question:
          "How can a mobile app help a multi-location business manage its operations?",
        answer:
          "We build custom mobile apps that provide a unified dashboard for managing multiple locations, tracking sales, and communicating with employees, giving you a single source of truth for your entire business.",
      },
    ],
  },
  {
    category: "System Integrations & Automation",
    faqs: [
      {
        question:
          "My different apps don't talk to each other. How can a developer fix this problem?",
        answer:
          'This is a very common problem. We specialize in "System Integrations & Automation," which is the process of building connections between your apps to create a seamless flow of data, eliminating chaos and double-data entry.',
      },
      {
        question:
          "What's the difference between a simple API connection and a custom system integration?",
        answer:
          "A simple API connection is a basic link between two systems. A custom system integration is a comprehensive solution that connects all your business functions into one unified workflow, ensuring your systems work together to save you time and money.",
      },
      {
        question:
          "Can automation help my business streamline its repetitive manual tasks?",
        answer:
          "Yes. We use AI and automation to eliminate manual tasks like data entry, scheduling, and invoicing, freeing up your team's time to focus on high-value work and strategic growth.",
      },
      {
        question:
          "I have a lot of data in different places. How can I consolidate it all into one platform?",
        answer:
          'Our "System Integrations & Automation" service is designed to consolidate all your data into one unified platform, giving you a single source of truth for your entire business.',
      },
      {
        question:
          "How can a custom solution help me improve my customer experience?",
        answer:
          "We build custom solutions that provide a seamless, delightful experience for your customers. We can integrate your key business functions into one platform, making it easy for your customers to interact with you and get the information they need.",
      },
      {
        question:
          "What kind of security is needed for system integrations that handle sensitive data?",
        answer:
          'Security is a non-negotiable foundation of our work. We build with a "Security by Design" philosophy, ensuring all data is encrypted, stored securely, and that we have a Business Associate Agreement (BAA) for all our healthcare clients.',
      },
      {
        question:
          "How can a custom solution help me improve my sales and marketing efforts?",
        answer:
          "We build custom solutions that provide a unified dashboard for managing your sales and marketing efforts, tracking your key performance indicators, and using data to continually improve your digital products for growth.",
      },
    ],
  },
  {
    category: "AI & Automation ",
    faqs: [
      {
        question:
          "Is AI and automation only for large corporations with big budgets?",
        answer:
          "No. We specialize in building practical, intelligent automation that is accessible to small businesses. We’ll show you how to implement AI that gives you a competitive edge and frees up your team's time.",
      },
      {
        question:
          "What is a custom AI solution, and how is it different from a simple chatbot?",
        answer:
          "A custom AI solution is a comprehensive workflow that can do more than just chat. It can automate entire processes, from data entry to customer follow-up, freeing your team for high-value work and strategic growth.",
      },
      {
        question:
          "How can AI and automation help my business save money and time?",
        answer:
          "We show you how to implement practical, intelligent automation that eliminates repetitive, manual tasks, reduces human error, and gives you a competitive edge. This directly translates into time and money saved.",
      },
      {
        question:
          "How can a custom solution help me improve my customer experience?",
        answer:
          "We can build AI-powered solutions that provide personalized customer interactions, automate customer support, and offer proactive insights, making your customers feel understood and valued.",
      },
      {
        question: "Can an AI help me with my business's data and analytics?",
        answer:
          'Yes. Our "Data & AI-Driven Insights" service uses data to help you make smarter decisions, track your key performance indicators, and continually improve your digital products for growth.',
      },
      {
        question:
          "What kind of security is needed for AI solutions that handle sensitive data?",
        answer:
          'Security is a non-negotiable foundation of our work. We build with a "Security by Design" philosophy, ensuring all data is encrypted, stored securely, and that we have a Business Associate Agreement (BAA) for all our healthcare clients.',
      },
      {
        question:
          "How can a custom solution help me improve my sales and marketing efforts?",
        answer:
          "We build custom solutions that provide a unified dashboard for managing your sales and marketing efforts, tracking your key performance indicators, and using data to continually improve your digital products for growth.",
      },
    ],
  },
  {
    category: "Developers on Rent",
    faqs: [
      {
        question:
          "We have a project backlog. Can I hire a developer for a short-term project?",
        answer:
          'Yes. Our "Developers on Rent" service is designed for exactly that. We provide highly skilled, pre-vetted developers who can seamlessly integrate with your team to accelerate project completion and fill any skill gaps.',
      },
      {
        question: "How do you find the right developer for a specific project?",
        answer:
          "We use our \"embedded requirements engineer\" approach to understand your project's context, your team's workflow, and the specific pain points you're trying to solve. This ensures we match you with the right developer, not just any developer.",
      },
      {
        question:
          "How can I be sure that the developer will be a good fit for my team?",
        answer:
          "Our developers are rigorously vetted for their technical prowess and their alignment with Kyzen Dev's values of precision, agility, and a business-first mindset. This ensures a seamless, productive integration with your existing team.",
      },
      {
        question: "What kind of support do you offer for developers on rent?",
        answer:
          "Our commitment to your success extends beyond the launch. We provide ongoing support, proactive monitoring, and a guaranteed warranty on our work. We're your long-term partner, not a one-and-one vendor.",
      },
      {
        question: "Do you offer a long-term contract for developers on rent?",
        answer:
          "Yes. Our service is designed for maximum flexibility. You can scale your team up or down precisely as needed, maintaining agility and cost-effectiveness.",
      },
      {
        question:
          "What is the difference between a freelance developer and a developer on rent?",
        answer:
          "A freelance developer is a contractor who works on a project-by-project basis. A developer on rent is a part of our team who seamlessly integrates with your existing team to accelerate project completion and fill any skill gaps.",
      },
      {
        question: "What is the cost for a developer on rent?",
        answer:
          "The cost for a developer on rent depends on the complexity of your project and the number of hours you need. We can help you create a cost-effective solution that scales with your business.",
      },
    ],
  },
  {
    category: "Data & AI-Driven Insights",
    faqs: [
      {
        question:
          "Can you help us make smarter business decisions based on our data?",
        answer:
          'Yes. Our "Data & AI-Driven Insights" service uses data to help you make smarter decisions, track your key performance indicators, and continually improve your digital products for growth.',
      },
      {
        question: "How can we turn our business data into actionable insights?",
        answer:
          "We use AI and data analytics to help you find trends and patterns in your data, giving you actionable insights that you can use to improve your sales, marketing, and customer experience.",
      },
      {
        question: "How can data analytics help my small business grow?",
        answer:
          "We use data analytics to help you understand your customers, track your key performance indicators, and continually improve your digital products for growth. This is a powerful tool for businesses that want to scale.",
      },
      {
        question:
          'What is a "data lake," and is it something we need for our business?',
        answer:
          "A data lake is a centralized repository that stores all of your data in its original format. It's a powerful tool for businesses that want to scale, but it's not always necessary. We can help you determine if it's the right solution for you.",
      },
      {
        question:
          "How can we use AI to improve our business's data and analytics?",
        answer:
          "We use AI to help you find trends and patterns in your data, giving you actionable insights that you can use to improve your sales, marketing, and customer experience.",
      },
      {
        question:
          "What kind of security is needed for data analytics solutions that handle sensitive data?",
        answer:
          'Security is a non-negotiable foundation of our work. We build with a "Security by Design" philosophy, ensuring all data is encrypted, stored securely, and that we have a Business Associate Agreement (BAA) for all our healthcare clients.',
      },
      {
        question:
          "How can a custom solution help me improve my sales and marketing efforts?",
        answer:
          "We build custom solutions that provide a unified dashboard for managing your sales and marketing efforts, tracking your key performance indicators, and using data to continually improve your digital products for growth.",
      },
    ],
  },
  {
    category: "Ongoing Support & Optimization",
    faqs: [
      {
        question:
          "Do you offer post-launch support and maintenance for the apps you build?",
        answer:
          "Yes. Our commitment to your success extends far beyond the launch. We remain your dedicated partner, ensuring your technology is always available and your digital solution continues to deliver on its promise.",
      },
      {
        question:
          'What is "optimization," and why is it important for my app\'s success?',
        answer:
          "Optimization is the process of continually improving your app's performance and user experience. It's important because it helps you keep your customers engaged and increase their lifetime value.",
      },
      {
        question: "How do you use data to improve my app's performance?",
        answer:
          "We use real user engagement data and a proactive approach to continually optimize your product, so it remains a powerful engine for growth and a source of continuous time savings.",
      },
      {
        question:
          "Can you help us with our app's app store optimization (ASO)?",
        answer:
          "Yes. We specialize in app store optimization (ASO), which is the process of improving your app's visibility and conversion rate in the app store. This is a key part of our ongoing support and optimization services.",
      },
      {
        question:
          "What kind of support do you offer for bugs and technical issues?",
        answer:
          "We provide a guaranteed warranty on our work, with proactive monitoring to address potential issues before they ever become a problem. We're your long-term partner, not a one-and-one vendor.",
      },
      {
        question:
          "How can we be sure our app is always available and working properly?",
        answer:
          "We use real-time monitoring to ensure your app is always available and working properly. We're your long-term partner, not a one-and-one vendor.",
      },
      {
        question: "What is the cost for ongoing support and optimization?",
        answer:
          "The cost for ongoing support and optimization depends on the complexity of your app and the level of support you need. We can help you create a cost-effective solution that scales with your business.",
      },
    ],
  },
  {
    category: "Growth & Conversion Optimization",
    faqs: [
      {
        question: "Can you help us increase our app's conversion rate?",
        answer:
          'Yes. Our "Growth & Conversion Optimization" service is designed to help you increase your app\'s conversion rate by using data and user feedback to fine-tune your digital products.',
      },
      {
        question: "How do you use data to improve my app's conversion rate?",
        answer:
          "We use real user engagement data and a proactive approach to continually optimize your product, so it remains a powerful engine for growth and a source of continuous time savings.",
      },
      {
        question:
          'What is "user engagement," and why is it important for my app\'s success?',
        answer:
          "User engagement is the process of keeping your customers interested and involved with your app. It's important because it helps you keep your customers engaged and increase their lifetime value.",
      },
      {
        question: "Can you help us with our app's marketing and promotion?",
        answer:
          "Yes. We specialize in app store optimization (ASO), which is the process of improving your app's visibility and conversion rate in the app store. This is a key part of our ongoing support and optimization services.",
      },
      {
        question:
          "How can we use data to improve our sales and marketing efforts?",
        answer:
          "We use data analytics to help you make smarter decisions, track your key performance indicators, and continually improve your digital products for growth. This is a powerful tool for businesses that want to scale.",
      },
      {
        question:
          "What kind of support do you offer for bugs and technical issues?",
        answer:
          "We provide a guaranteed warranty on our work, with proactive monitoring to address potential issues before they ever become a problem. We're your long-term partner, not a one-and-one vendor.",
      },
      {
        question: "What is the cost for ongoing support and optimization?",
        answer:
          "The cost for ongoing support and optimization depends on the complexity of your app and the level of support you need. We can help you create a cost-effective solution that scales with your business.",
      },
    ],
  },
];

// --- The Accordion Item Component ---
const AccordionItem = ({ question, answer, isOpen, onClick }:AccordionItemProps) => {
  return (
    <div className="border-b border-gray-200 py-4">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center text-left text-lg font-semibold text-gray-800"
      >
        <span>{question}</span>
        <ChevronDown
          className={`transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          size={24}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-screen mt-4" : "max-h-0"
        }`}
      >
        <p className="text-gray-600 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

// --- The Main FAQ Section Component ---
export default function FaqSection() {
  // State to track the currently selected category
  const [activeCategory, setActiveCategory] = useState(faqData[0].category);

  // State to track which question is open. Default to 0 (the first question)
  const [openQuestionIndex, setOpenQuestionIndex] = useState<number | null>(0);

  const handleCategoryClick = (category:string) => {
    setActiveCategory(category);
    setOpenQuestionIndex(0); // Reset to open the first question of the new category
  };

  // Add the 'number' type to the index parameter
const handleQuestionClick = (index: number) => {
  // If the clicked question is already open, close it. Otherwise, open the new one.
  setOpenQuestionIndex(openQuestionIndex === index ? null : index);
};

  const activeFaqs =
    faqData.find((cat) => cat.category === activeCategory)?.faqs || [];

  return (
    <section className="bg-white py-12 md:py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-8">
          Frequently Asked Questions
        </h2>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {faqData.map((item) => (
            <button
              key={item.category}
              onClick={() => handleCategoryClick(item.category)}
              className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors duration-300 ${
                activeCategory === item.category
                  ? "bg-yellow-500 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {item.category}
            </button>
          ))}
        </div>

        {/* Accordion */}
        <div>
          {activeFaqs.map((faq, index) => (
            <AccordionItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openQuestionIndex === index}
              onClick={() => handleQuestionClick(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
