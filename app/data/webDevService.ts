// data/webDevService.ts
import { ServiceData } from "@/app/types"; // استورد الأنواع

export const webDevServiceData: ServiceData = {
  hero: {
    title: "Custom Web Application Development",
    description: "We turn your ideas into powerful, secure, and high-performing web solutions. From simple websites to complex platforms, we deliver exceptional digital experiences tailored to your business needs.",
  },
  features: {
    imageUrl: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=2070",
    title: "Why Choose Our Service?",
    description: "We don’t just build web apps—we build partnerships. Our focus is on understanding your goals to deliver a product that not only meets but exceeds your expectations.",
    items: [
      { title: "User-Centered Design", description: "Attractive and easy-to-use interfaces that ensure a delightful experience for your customers." },
      { title: "High Performance", description: "Responsive applications optimized to handle different workloads smoothly." },
      { title: "Security & Protection", description: "We implement best security practices to safeguard your data and your users." },
    ],
  },
  process: {
    title: "Our Methodical Process",
    description: "We follow a four-step process to ensure your project is delivered with the highest quality and on time.",
    steps: [
      { title: "Discovery & Planning", description: "We begin with a deep understanding of your vision, goals, and target audience to define a clear strategy." },
      { title: "Design & Prototyping", description: "Our design team creates user-focused prototypes and UI designs." },
      { title: "Development & Testing", description: "Developers write clean, efficient code and run extensive testing to ensure quality." },
      { title: "Launch & Support", description: "After your approval, we launch the app and provide continuous support for smooth operation." },
    ],
  },
  testimonials: {
    title: "What Our Clients Say",
    description: "We take pride in building strong relationships with our clients. Here’s what some of them said about us.",
    clients: [
      { avatarUrl: "https://i.pravatar.cc/150?img=1", name: "Ahmed Ali", role: "CEO of Company X", quote: "The team exceeded our expectations at every stage. The final product was amazing and had a positive impact on our business." },
      { avatarUrl: "https://i.pravatar.cc/150?img=2", name: "Fatima Salem", role: "Founder of Company Y", quote: "Their professionalism and attention to detail were outstanding. Highly recommend working with them for any tech project." },
    ],
  },
  cta: {
    title: "Got a Project Idea?",
    description: "Let us help you bring it to life. Contact us today for a free consultation.",
    buttonText: "Start Your Project Now",
  },
};