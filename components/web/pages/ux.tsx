"use client";

import React, { useMemo, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";
import {
  Info,
  Plus,
  Minus,
  Phone,
  Mail,
  Globe,
  FileText,
  Download,
  CheckCircle2,
  ShoppingCart,
  Calendar,
  Edit3,
  Languages,
  MessageSquare,
  Shield,
  Zap,
  Palette,
  Image as ImageIcon,
  Briefcase,
  Bot,
  CreditCard,
  TrendingUp,
  GalleryHorizontal,
  Brush,
  Wand2,
  Video,
  Moon,
  Type,
  Search,
  PlugZap,
  BarChart,
  LucideIcon,
} from "lucide-react";
import { CheckedState } from "@radix-ui/react-checkbox";

// --- Types
interface Feature {
  id: string;
  label: string;
  desc?: string;
  price: number;
  category: string;
  recommended?: boolean;
  icon: LucideIcon; // Or 'any', 'string', 'React.FC', etc.
  details: {
    what: string;
    why: string;
    forCustomers: string;
  };
}

interface PackageTier {
  id: string;
  name: string;
  tagline: string;
  basePrice: number;
  includes: string[];
  pages: string[];
}

interface Page {
  id: string;
  label: string;
  price: number;
  category: "traditional" | "ecommerce";
  desc?: string; // ADDED: Description for tooltips
}

// --- Data
const FEATURES = [
  {
    id: "ecommerce",
    label: "E-commerce Shop",
    price: 1200,
    category: "Core",
    desc: "Full-featured online store with payment processing.",
    icon: ShoppingCart,
    details: {
      what: "A full-featured online store built into your website, complete with a product catalog, shopping cart, and secure payment processing.",
      why: "It allows you to sell products or services directly to customers 24/7, turning your website into a powerful revenue-generating tool.",
      forCustomers:
        "It offers them a seamless and convenient shopping experience, allowing them to browse and purchase your products anytime, anywhere.",
    },
  },
  {
    id: "booking",
    label: "Booking/Scheduling System",
    price: 800,
    category: "Core",
    desc: "Let customers book appointments directly from your site.",
    icon: Calendar,
    details: {
      what: "A feature that allows clients to book appointments, reserve a table, or schedule a service directly on your website.",
      why: "It streamlines your operations and saves you time by automating appointment booking.",
      forCustomers:
        "It provides them with the convenience of scheduling a service anytime, anywhere.",
    },
  },
  {
    id: "client_portal",
    label: "Client Portal",
    price: 1000,
    category: "Core",
    desc: "Secure area for clients to log in and view documents.",
    icon: Briefcase,
    details: {
      what: "A secure, password-protected area where clients can log in to access personalized content, documents, or information.",
      why: "It provides a professional, centralized hub for all client communications and resources.",
      forCustomers:
        "It gives them a secure and convenient place to access important information related to your work together.",
    },
  },
  {
    id: "blog",
    label: "Blog Management Tools",
    price: 400,
    category: "Content",
    desc: "Easy publishing, categories, tags, and search.",
    icon: Edit3,
    details: {
      what: "Advanced tools to easily write, publish, and manage blog posts.",
      why: "A blog is a powerful way to provide valuable content, build your brand authority, and improve your search rankings.",
      forCustomers:
        "It provides them with helpful information and keeps them engaged with your business.",
    },
  },
  {
    id: "multilang",
    label: "Multi‑language Support",
    price: 600,
    category: "Core",
    desc: "Serve content in multiple languages with a language switcher.",
    icon: Languages,
    details: {
      what: "The ability for your website to be displayed in multiple languages.",
      why: "It allows you to reach a wider, global audience.",
      forCustomers:
        "It provides a more personalized and comfortable browsing experience for non-native English speakers.",
    },
  },
  {
    id: "website_search",
    label: "Website Search",
    price: 300,
    category: "Core",
    desc: "Allow visitors to easily search for content on your site.",
    icon: Search,
    details: {
      what: "A search bar that allows visitors to quickly find specific content on your website.",
      why: "It improves user experience by allowing visitors to find what they're looking for with a single click.",
      forCustomers:
        "It saves them time and frustration by making your website easy to navigate.",
    },
  },
  {
    id: "dynamic_animations",
    label: "Dynamic Animations",
    price: 500,
    category: "Design",
    desc: "Engaging animations that trigger on scroll or interaction.",
    icon: Wand2,
    details: {
      what: "Subtle, tasteful animations that bring your website to life, like elements fading in as you scroll.",
      why: "It creates a modern, high-end feel that makes your brand stand out from the competition.",
      forCustomers:
        "It creates a more engaging and memorable browsing experience.",
    },
  },
  {
    id: "advanced_typography",
    label: "Advanced Typography",
    price: 300,
    category: "Design",
    desc: "Custom fonts and advanced styling for unique text.",
    icon: Type,
    details: {
      what: "Custom fonts and unique text styles that create a professional and memorable look.",
      why: "It helps your website express your unique brand identity and shows attention to detail.",
      forCustomers:
        "It creates a visually appealing experience that is both easy to read and beautiful to look at.",
    },
  },
  {
    id: "interactive_galleries",
    label: "Interactive Galleries",
    price: 600,
    category: "Design",
    desc: "Showcase work with stunning, interactive image galleries.",
    icon: GalleryHorizontal,
    details: {
      what: "Visually stunning image and video galleries that allow visitors to click through and interact with your media.",
      why: "It's the perfect way to showcase your portfolio, products, or creative work in a dynamic and professional way.",
      forCustomers:
        "It provides an engaging way for them to explore your visual content.",
    },
  },
  {
    id: "custom_illustrations",
    label: "Custom Illustrations/Graphics",
    price: 800,
    category: "Design",
    desc: "Unique, tailor-made graphics for your brand.",
    icon: Brush,
    details: {
      what: "Original, branded illustrations or graphics designed specifically for your website.",
      why: "It makes your website unique and visually memorable, distinguishing you from a generic template.",
      forCustomers:
        "It creates a unique and branded feel that is exclusive to your business.",
    },
  },
  {
    id: "dark_mode",
    label: "Dark Mode Toggle",
    price: 200,
    category: "Design",
    desc: "Allow users to switch between light and dark themes.",
    icon: Moon,
    details: {
      what: "A button that allows users to switch the website's color scheme to a darker version.",
      why: "It shows that you are a modern, user-focused brand that cares about user preferences.",
      forCustomers:
        "It provides them with a comfortable viewing option, especially in low-light environments.",
    },
  },
  {
    id: "video_backgrounds",
    label: "Video Backgrounds",
    price: 400,
    category: "Design",
    desc: "An engaging video that plays on a loop in the background.",
    icon: Video,
    details: {
      what: "An engaging video that plays on a loop in the background of a section.",
      why: "It adds a dynamic and modern element that captures attention immediately.",
      forCustomers:
        "It provides a visually immersive experience that quickly conveys your brand's style.",
    },
  },
  {
    id: "seo_pro",
    label: "Pro SEO Package",
    price: 800,
    category: "Marketing",
    desc: "Advanced SEO strategies, keyword research, and link building.",
    icon: TrendingUp,
    details: {
      what: "In-depth keyword research, competitor analysis, and ongoing optimization.",
      why: "It's about turning your website from a digital brochure into a powerful customer acquisition tool by ranking high on search engines.",
      forCustomers:
        "It makes it much easier for them to find your website when they're searching for your products or services.",
    },
  },
  {
    id: "email_integration",
    label: "Email Marketing Integration",
    price: 400,
    category: "Marketing",
    desc: "Connect with services like Mailchimp or ConvertKit.",
    icon: Mail,
    details: {
      what: "Connect your website to an email service like Mailchimp or HubSpot.",
      why: "It allows you to build a list of interested customers and send newsletters or promotions.",
      forCustomers:
        "It allows them to stay updated on your latest news and offers without having to visit your site.",
    },
  },
  {
    id: "popups",
    label: "Pop‑ups & Lead Capture Forms",
    price: 300,
    category: "Marketing",
    desc: "Grow your email list with targeted forms and modals.",
    icon: MessageSquare,
    details: {
      what: "Customizable forms or pop-up windows to announce promotions or capture visitor information.",
      why: "It's an effective way to grow your email list and collect leads directly from your website.",
      forCustomers:
        "It provides them with a clear path to opt-in for special offers or information.",
    },
  },
  {
    id: "social_feed",
    label: "Social Media Feed Integration",
    price: 300,
    category: "Content",
    desc: "Embed dynamic Instagram/Twitter/LinkedIn feeds.",
    icon: ImageIcon,
    details: {
      what: "Display live feeds from your social media accounts directly on your website.",
      why: "It showcases your latest posts and increases engagement with your social channels.",
      forCustomers:
        "It provides a quick way for them to see what you've been up to on social media.",
    },
  },
  {
    id: "accept_payments",
    label: "Accept Payments",
    price: 600,
    category: "Automation",
    desc: "Integrate payment gateways like Stripe or PayPal.",
    icon: CreditCard,
    details: {
      what: "A secure way for your customers to pay you directly on your website using credit cards, PayPal, and more.",
      why: "It turns your website into a 24/7 digital storefront, allowing you to sell products or services and generate revenue at any time.",
      forCustomers:
        "It provides a seamless and trustworthy checkout experience, making it easy and safe for them to complete a purchase without ever leaving your site.",
    },
  },
  {
    id: "smart_chatbot",
    label: "Smart Chatbot",
    price: 700,
    category: "Automation",
    desc: "AI-powered chatbot for customer support.",
    icon: Bot,
    details: {
      what: "An automated assistant that can answer common questions and guide visitors on your website.",
      why: "It provides instant support and saves you time by answering customer questions 24/7.",
      forCustomers:
        "It gives them immediate help and ensures they're never left with a question unanswered.",
    },
  },
  {
    id: "app_integrations",
    label: "App Integrations",
    price: 500,
    category: "Automation",
    desc: "Connect your website with third-party apps and services.",
    icon: PlugZap,
    details: {
      what: "The ability to connect your website with other tools you use, like a CRM, inventory tracker, or a calendar app.",
      why: "It makes your website work seamlessly with your business operations, automating key functions.",
      forCustomers: "It provides a more integrated and efficient experience.",
    },
  },
  {
    id: "perf",
    label: "Website Performance Optimization",
    price: 400,
    category: "Optimization",
    desc: "Image compression, code splitting, lazy‑loading.",
    icon: Zap,
    details: {
      what: "We optimize your website's code and images so it loads as fast as possible.",
      why: "A quick website makes for happy visitors and is better for search rankings.",
      forCustomers:
        "It saves them time and prevents frustration by providing a quick, responsive experience.",
    },
  },
  {
    id: "shield",
    label: "Website Shield",
    price: 600,
    category: "Optimization",
    desc: "Security headers, bot protection, and uptime monitor.",
    icon: Shield,
    details: {
      what: "We set up an advanced security system to protect your website from hackers and malicious threats. We also back up your website regularly, so your data is always safe.",
      why: "It protects your investment and your reputation by keeping your website and your data secure.",
      forCustomers:
        "It gives them peace of mind knowing they are browsing on a secure site.",
    },
  },
  {
    id: "advanced_insights",
    label: "Advanced Insights",
    price: 500,
    category: "Optimization",
    desc: "In-depth analytics and custom event tracking.",
    icon: BarChart,
    details: {
      what: "A custom dashboard that shows you everything you need to know about your website's performance—like how many people visited and which pages are most popular—all in one easy-to-read place.",
      why: "It provides the data you need to make informed business decisions and grow your business.",
      forCustomers:
        "It helps you better serve them by understanding their needs and preferences.",
    },
  },
  {
    id: "custom",
    label: "Custom Features",
    price: 900,
    category: "Custom",
    desc: "Bespoke functionality tailored to your business.",
    recommended: true,
    icon: Palette,
    details: {
      what: "This is for any unique functionality not listed here. It could be anything from a custom calculator to a specialized user dashboard.",
      why: "It allows you to build a feature that is perfectly tailored to your unique business processes and customer needs.",
      forCustomers:
        "It provides them with a unique tool or experience that they cannot get anywhere else, enhancing their loyalty to your brand.",
    },
  },
];

const PACKAGES: PackageTier[] = [
  {
    id: "entry",
    name: "Premier Entry",
    tagline: "Perfect for individuals or small businesses",
    basePrice: 1499,
    includes: ["seo_basic"],
    pages: ["home", "contact"],
  },
  {
    id: "core",
    name: "Premier Core",
    tagline: "Most popular starting point",
    basePrice: 2199,
    includes: ["seo_basic", "perf"],
    pages: ["home", "about", "contact", "services"],
  },
  {
    id: "blueprint",
    name: "Your Website Blueprint",
    tagline: "Foundation + custom features",
    basePrice: 3299,
    includes: ["seo_basic", "perf", "custom"],
    pages: ["home", "about", "contact", "services", "blog_index"],
  },
];

// MODIFIED: Added 'desc' property to each page for tooltips
const PAGES: Page[] = [
  {
    id: "home",
    label: "Homepage",
    price: 250,
    category: "traditional",
    desc: "The main landing page of your website, making the first impression on visitors.",
  },
  {
    id: "about",
    label: "About Us",
    price: 150,
    category: "traditional",
    desc: "Tell your story, introduce your team, and build trust with your audience.",
  },
  {
    id: "contact",
    label: "Contact Us",
    price: 150,
    category: "traditional",
    desc: "A page with a contact form, map, and other ways for users to get in touch.",
  },
  {
    id: "services",
    label: "Services / Features",
    price: 150,
    category: "traditional",
    desc: "Detail the services you offer or the features of your product.",
  },
  {
    id: "blog_index",
    label: "Blog Index",
    price: 150,
    category: "traditional",
    desc: "A main page to display all your blog posts, articles, or news updates.",
  },
  {
    id: "faq",
    label: "FAQ",
    price: 150,
    category: "traditional",
    desc: "Answer common customer questions to reduce support inquiries.",
  },
  {
    id: "portfolio",
    label: "Portfolio / Gallery",
    price: 200,
    category: "traditional",
    desc: "Showcase your work, projects, or images in a visually appealing gallery.",
  },
  {
    id: "shop",
    label: "Main Shop / Product Grid",
    price: 300,
    category: "ecommerce",
    desc: "The main storefront where all your products are displayed for customers to browse.",
  },
  {
    id: "product_detail",
    label: "Product Detail Page Template",
    price: 250,
    category: "ecommerce",
    desc: 'A template for individual product pages with images, descriptions, and an "Add to Cart" button.',
  },
  {
    id: "cart",
    label: "Shopping Cart",
    price: 200,
    category: "ecommerce",
    desc: "Allows customers to review the items they have selected before proceeding to checkout.",
  },
  {
    id: "checkout",
    label: "Checkout Page",
    price: 300,
    category: "ecommerce",
    desc: "A secure page for customers to enter payment and shipping information to complete their purchase.",
  },
  {
    id: "account",
    label: "User Account / Order History",
    price: 250,
    category: "ecommerce",
    desc: "A private area for registered customers to view their past orders and manage their details.",
  },
];

const CURRENCY = (n: number) =>
  new Intl.NumberFormat(undefined, {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n);

const FeatureBlueprint: React.FC<{
  selectedFeatures: (Feature & { icon: React.ElementType })[];
}> = ({ selectedFeatures }) => {
  const foundationFeature = {
    id: "foundation",
    label: "Foundation",
    icon: Globe,
  };
  const featuresToShow = [
    foundationFeature,
    ...selectedFeatures.filter((f) => f.id !== "seo_basic"),
  ];

  return (
    <Card className="rounded-2xl">
      <CardHeader>
        <CardTitle>Your Website Blueprint</CardTitle>
        <p className="text-sm text-muted-foreground pt-1">
          Foundation +{" "}
          {selectedFeatures.filter((f) => f.id !== "seo_basic").length} custom
          features
        </p>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap items-center gap-4">
          {featuresToShow.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={feature.id}
                className="flex flex-col items-center text-center gap-2 w-20"
              >
                <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center">
                  <IconComponent className="w-8 h-8 text-muted-foreground" />
                </div>
                <span className="text-xs font-medium leading-tight">
                  {feature.label}
                </span>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default function ProposalBuilder() {
  const [selectedPackage, setSelectedPackage] = useState<PackageTier>(
    PACKAGES[1]
  );
  const [selected, setSelected] = useState<Record<string, boolean>>(() => {
    const base: Record<string, boolean> = {};
    FEATURES.forEach((f) => (base[f.id] = false));
    selectedPackage.includes.forEach((id) => (base[id] = true));
    return base;
  });

  const [client, setClient] = useState({
    name: "Acme Co.",
    email: "team@acme.co",
    phone: "+1 (555) 123‑4567",
    website: "acme.co",
  });
  const [notes, setNotes] = useState(
    "What jobs should your website do for your customers? Add any special requirements here."
  );
  const [generatedPrompt, setGeneratedPrompt] = useState<string | null>(null);

  const [selectedPages, setSelectedPages] = useState<Record<string, boolean>>(
    () => {
      const base: Record<string, boolean> = {};
      selectedPackage.pages.forEach((pageId) => {
        base[pageId] = true;
      });
      return base;
    }
  );

  const onSelectPackage = (pkg: PackageTier) => {
    setSelectedPackage(pkg);
    setSelected(() => {
      const base: Record<string, boolean> = {};
      FEATURES.forEach((f) => (base[f.id] = false));
      pkg.includes.forEach((id) => (base[id] = true));
      return base;
    });
    setSelectedPages(() => {
      const base: Record<string, boolean> = {};
      pkg.pages.forEach((pageId) => {
        base[pageId] = true;
      });
      return base;
    });
  };

  const downloadPDF = () => window.print();

  const generateAIProposalPrompt = () => {
    const featureList = lineItems.included
      .map((f) => `- **${f.label}**: ${f.desc || "Core feature."}`)
      .join("\n");
    const pageList = PAGES.filter((page) => selectedPages[page.id])
      .map((page) => `- ${page.label}`)
      .join("\n");

    const promptText = `
You are an expert full-stack web developer AI. Your task is to generate a project structure and starter code for a new website based on the following proposal.

### Project Title
Website for ${client.name || "a valued client"}

### Client Details
- **Name:** ${client.name}
- **Email:** ${client.email}
- **Phone:** ${client.phone}
- **Current Website:** ${client.website}

### Core Package
- **Package Name:** ${selectedPackage.name}
- **Base Price:** ${CURRENCY(selectedPackage.basePrice)}
- **Description:** ${selectedPackage.tagline}

### Website Pages
The website must include the following pages:
${pageList}

### Selected Features & Requirements
This website requires the following features:
${featureList}

### Project Notes & Special Requirements
The client has provided the following notes:
"${notes}"

### Budget
The total estimated one-time investment for this project is **${CURRENCY(
      lineItems.total
    )}**. Please ensure the proposed technical solution is appropriate for this budget.

### Your Task
1️⃣ Suggest a technology stack suitable for building a modern, performant, and animated website. (e.g., Next.js + TypeScript + Tailwind CSS + Framer Motion)

2️⃣ Outline a file and component structure for the project that supports scalability and maintainability.

3️⃣ Provide starter code for the main landing page, ensuring:

The page has at least 200+ lines of code.

The home page contains 5 professional sections according to location (law firm - programming company - contracting ......)

Images are sourced from Pexels or Unsplash.

Includes animations (scroll animations, hover effects, transitions).

About Us page should contain a map.

Optimized for SEO and performance (lazy-loading images, code splitting).
`;
    setGeneratedPrompt(promptText);
    fetch(
      "https://kyzendev.app.n8n.cloud/webhook-test/1b3a7e3d-c4a1-4805-b884-0f71efe0b77c",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: promptText }),
      }
    )
      .then((res) => {
        if (!res.ok) throw new Error("Request failed");
        return res.json();
      })
      .then((data) => {
        console.log("Response:", data);
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  };

  const lineItems = useMemo(() => {
    const included = FEATURES.filter((f) => selected[f.id]);
    const addOnsTotal = included.reduce(
      (sum, f) =>
        selectedPackage.includes.includes(f.id) ? sum : sum + f.price,
      0
    );
    const pagesTotal = PAGES.reduce(
      (sum, page) =>
        selectedPages[page.id] && !selectedPackage.pages.includes(page.id)
          ? sum + page.price
          : sum,
      0
    );
    const subtotal = selectedPackage.basePrice + addOnsTotal + pagesTotal;
    const contingency = Math.round(subtotal * 0.08);
    const total = subtotal + contingency;
    return { included, addOnsTotal, pagesTotal, subtotal, contingency, total };
  }, [selected, selectedPackage, selectedPages]);

  const grouped = useMemo(() => {
    const map: Record<string, Feature[]> = {};
    FEATURES.forEach((f) => {
      if (!map[f.category]) map[f.category] = [];
      map[f.category].push(f);
    });
    return map;
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <header className=" border-b bg-background/70 backdrop-blur">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-2xl bg-primary/10 flex items-center justify-center">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <div className="font-semibold leading-tight">BuildMySite</div>
              <div className="text-xs text-muted-foreground -mt-0.5">
                Explore your website options
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              className="rounded-2xl"
              onClick={downloadPDF}
            >
              <Download className="w-4 h-4 mr-2" /> Export / Save PDF
            </Button>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="rounded-2xl">
                  <FileText className="w-4 h-4 mr-2" /> View Summary
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-lg">
                <DialogHeader>
                  <DialogTitle>Project Summary</DialogTitle>
                </DialogHeader>
                <div className="space-y-3">
                  <div className="text-sm text-muted-foreground">
                    {selectedPackage.name}
                  </div>
                  <div className="divide-y">
                    {lineItems.included.map((f) => (
                      <div
                        key={f.id}
                        className="flex items-center justify-between py-1.5"
                      >
                        <div className="text-sm">{f.label}</div>
                        <div className="text-sm font-medium">
                          {selectedPackage.includes.includes(f.id)
                            ? "Included"
                            : CURRENCY(f.price)}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="border-t pt-3 text-sm">
                    <div className="flex justify-between">
                      <span>Package Base</span>
                      <span className="font-medium">
                        {CURRENCY(selectedPackage.basePrice)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Pages Cost</span>
                      <span className="font-medium">
                        {CURRENCY(lineItems.pagesTotal)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Add‑ons</span>
                      <span className="font-medium">
                        {CURRENCY(lineItems.addOnsTotal)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Contingency (8%)</span>
                      <span className="font-medium">
                        {CURRENCY(lineItems.contingency)}
                      </span>
                    </div>
                    <div className="flex justify-between text-lg font-semibold mt-2">
                      <span>Total</span>
                      <span>{CURRENCY(lineItems.total)}</span>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-6 grid md:grid-cols-5 gap-4">
        <div className="md:col-span-3 space-y-4">
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Choose Your Package</span>
                <Badge variant="secondary" className="rounded-full">
                  Most Popular: Premier Core
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-3">
                {PACKAGES.map((pkg) => (
                  <button
                    key={pkg.id}
                    onClick={() => onSelectPackage(pkg)}
                    className={`rounded-2xl border p-4 text-left hover:shadow transition-all ${
                      selectedPackage.id === pkg.id
                        ? "border-primary ring-2 ring-primary/20"
                        : "border-muted"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="font-semibold">{pkg.name}</div>
                      {selectedPackage.id === pkg.id && (
                        <CheckCircle2 className="w-5 h-5" />
                      )}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      {pkg.tagline}
                    </div>
                    <div className="mt-3 text-lg font-semibold">
                      Starting at {CURRENCY(pkg.basePrice)}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      Includes {pkg.includes.length} feature(s) &{" "}
                      {pkg.pages.length} pages
                    </div>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* === MODIFIED SECTION START === */}
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle>Select Required Pages</CardTitle>
              <p className="text-sm text-muted-foreground pt-1">
                Choose the pages your website will need.
              </p>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-x-8 gap-y-2">
              <div>
                <h3 className="font-semibold mb-2">Standard Pages</h3>
                <div className="space-y-2">
                  {PAGES.filter((p) => p.category === "traditional").map(
                    (page) => (
                      <div
                        key={page.id}
                        className="flex items-center space-x-2"
                      >
                        <Checkbox
                          id={page.id}
                          checked={!!selectedPages[page.id]}
                          disabled={selectedPackage.pages.includes(page.id)}
                          onCheckedChange={(checked) =>
                            setSelectedPages((prev) => ({
                              ...prev,
                              [page.id]: !!checked,
                            }))
                          }
                        />
                        <div className="flex items-center gap-2">
                          <label
                            htmlFor={page.id}
                            className={`text-sm font-medium leading-none ${
                              selectedPackage.pages.includes(page.id)
                                ? "cursor-not-allowed opacity-70"
                                : "cursor-pointer"
                            }`}
                          >
                            {page.label} (
                            {selectedPackage.pages.includes(page.id)
                              ? "Included"
                              : CURRENCY(page.price)}
                            )
                          </label>
                          {page.desc && (
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <Info className="w-4 h-4 opacity-70" />
                                </TooltipTrigger>
                                <TooltipContent className="max-w-xs text-sm leading-relaxed">
                                  {page.desc}
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          )}
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">E-commerce Pages</h3>
                <div className="space-y-2">
                  {PAGES.filter((p) => p.category === "ecommerce").map(
                    (page) => (
                      <div
                        key={page.id}
                        className="flex items-center space-x-2"
                      >
                        <Checkbox
                          id={page.id}
                          checked={!!selectedPages[page.id]}
                          disabled={selectedPackage.pages.includes(page.id)}
                          onCheckedChange={(checked) =>
                            setSelectedPages((prev) => ({
                              ...prev,
                              [page.id]: !!checked,
                            }))
                          }
                        />
                        <div className="flex items-center gap-2">
                          <label
                            htmlFor={page.id}
                            className={`text-sm font-medium leading-none ${
                              selectedPackage.pages.includes(page.id)
                                ? "cursor-not-allowed opacity-70"
                                : "cursor-pointer"
                            }`}
                          >
                            {page.label} (
                            {selectedPackage.pages.includes(page.id)
                              ? "Included"
                              : CURRENCY(page.price)}
                            )
                          </label>
                          {page.desc && (
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <Info className="w-4 h-4 opacity-70" />
                                </TooltipTrigger>
                                <TooltipContent className="max-w-xs text-sm leading-relaxed">
                                  {page.desc}
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          )}
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
          {/* === MODIFIED SECTION END === */}

          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle>Your Custom Website Project</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue={Object.keys(grouped)[0]}>
                <TabsList className="h-auto flex-wrap justify-start">
                  {Object.keys(grouped).map((cat) => (
                    <TabsTrigger key={cat} value={cat} className="capitalize">
                      {cat}
                    </TabsTrigger>
                  ))}
                </TabsList>
                {Object.entries(grouped).map(([cat, items]) => (
                  <TabsContent key={cat} value={cat} className="space-y-2 pt-2">
                    {items.map((f) => (
                      <div key={f.id} className="flex items-start gap-3 py-2">
                        <Checkbox
                          id={f.id}
                          checked={!!selected[f.id]}
                          onCheckedChange={(v: CheckedState) =>
                            setSelected((s) => ({ ...s, [f.id]: !!v }))
                          }
                          disabled={selectedPackage.includes.includes(f.id)}
                          className="mt-1"
                        />
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <label
                              htmlFor={f.id}
                              className={`font-medium ${
                                selectedPackage.includes.includes(f.id)
                                  ? "cursor-not-allowed opacity-70"
                                  : "cursor-pointer"
                              }`}
                            >
                              {f.label}
                            </label>
                            {f.recommended && (
                              <Badge className="rounded-full">
                                Recommended
                              </Badge>
                            )}
                            {selectedPackage.includes.includes(f.id) && (
                              <Badge variant="outline" className="rounded-full">
                                Included
                              </Badge>
                            )}
                            {f.desc && (
                              <TooltipProvider>
                                <Tooltip>
                                  <TooltipTrigger asChild>
                                    <Info className="w-4 h-4 opacity-70" />
                                  </TooltipTrigger>
                                  <TooltipContent className="max-w-xs text-sm leading-relaxed">
                                    {f.desc}
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                            )}
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button className="rounded-2xl w-4 h-4 bg-yellow-500 hover:bg-yellow-400">
                                  <Plus className="w-2 h-2" />
                                </Button>
                              </DialogTrigger>
                              <DialogContent className="sm:max-w-lg">
                                <DialogHeader>
                                </DialogHeader>
                                <div className="space-y-3">
                                  <div className="text-sm text-muted-foreground flex flex-col gap-3 mb-4">
                                    <h1 className="text-md font-bold text-yellow-500">What is it?</h1>
                                    
                                    <p className="text-sm text-gray-400">{f.details.what}</p>
                                  </div>
                                  <div className="text-sm text-muted-foreground flex flex-col gap-3 mb-4">
                                    <h1 className="text-md font-bold text-yellow-500">Why do you need it?</h1>
                                    <p className="text-sm text-gray-400">{f.details.why}</p>
                                  </div>
                                  <div className="text-sm text-muted-foreground flex flex-col gap-3">
                                    <h1 className="text-md font-bold text-yellow-500" >What does it do for your customers?</h1>
                                    <p className="text-sm text-gray-400">{f.details.forCustomers}</p>
                                  </div>
                                </div>
                              </DialogContent>
                            </Dialog>
                          </div>
                          <div className="text-xs text-muted-foreground mt-0.5">
                            One‑time investment
                          </div>
                        </div>
                        <div className="font-semibold whitespace-nowrap">
                          {CURRENCY(f.price)}
                        </div>
                      </div>
                    ))}
                  </TabsContent>
                ))}
              </Tabs>
            </CardContent>
          </Card>

          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle>Project Notes</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="min-h-[120px]"
              />
              <div className="text-xs text-muted-foreground">
                Tip: Capture goals, target audience, integrations, and timeline.
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-2 space-y-4">
          <FeatureBlueprint selectedFeatures={lineItems.included} />

          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle>Client Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="grid grid-cols-1 gap-2">
                <Input
                  value={client.name}
                  onChange={(e) =>
                    setClient({ ...client, name: e.target.value })
                  }
                  placeholder="Client / Company name"
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <Input
                    value={client.email}
                    onChange={(e) =>
                      setClient({ ...client, email: e.target.value })
                    }
                    placeholder="Email"
                  />
                  <Input
                    value={client.phone}
                    onChange={(e) =>
                      setClient({ ...client, phone: e.target.value })
                    }
                    placeholder="Phone"
                  />
                </div>
                <Input
                  value={client.website}
                  onChange={(e) =>
                    setClient({ ...client, website: e.target.value })
                  }
                  placeholder="Website (optional)"
                />
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Mail className="w-4 h-4" /> <span>{client.email}</span>
                <Phone className="w-4 h-4 ml-3" /> <span>{client.phone}</span>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-2xl sticky top-20">
            <CardHeader>
              <CardTitle>Investment Breakdown</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center justify-between py-1">
                  <div className="text-sm">{selectedPackage.name} (base)</div>
                  <div className="text-sm font-medium">
                    {CURRENCY(selectedPackage.basePrice)}
                  </div>
                </div>
                <div className="divide-y rounded-xl border mt-2">
                  {lineItems.included
                    .filter((f) => !selectedPackage.includes.includes(f.id))
                    .map((f) => (
                      <div
                        key={f.id}
                        className="flex items-center justify-between py-2 px-3"
                      >
                        <div className="text-sm">{f.label}</div>
                        <div className="text-sm">{CURRENCY(f.price)}</div>
                      </div>
                    ))}
                </div>
                <div className="pt-3 border-t mt-2 space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span>Pages Cost</span>
                    <span className="font-medium">
                      {CURRENCY(lineItems.pagesTotal)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Add-ons Total</span>
                    <span className="font-medium">
                      {CURRENCY(lineItems.addOnsTotal)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="font-medium">
                      {CURRENCY(lineItems.subtotal)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Contingency (8%)</span>
                    <span className="font-medium">
                      {CURRENCY(lineItems.contingency)}
                    </span>
                  </div>
                  <div className="flex justify-between text-lg font-semibold mt-2">
                    <span>Total</span>
                    <span>{CURRENCY(lineItems.total)}</span>
                  </div>
                </div>
                <div className="flex gap-2 mt-3">
                  <Button
                    className="flex-1 rounded-2xl"
                    onClick={generateAIProposalPrompt}
                  >
                    <Plus className="w-4 h-4 mr-2" /> Request Proposal
                  </Button>
                  <Button variant="outline" className="rounded-2xl">
                    <Minus className="w-4 h-4 mr-2" /> Clear
                  </Button>
                </div>
                <div className="text-xs text-muted-foreground mt-2">
                  We're here to help • hello@buildmysite.com • (555) 128‑0567
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <footer className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid md:grid-cols-3 gap-4">
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle>Website Shield</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Security headers, backups, uptime monitoring, and incident alerts
              to protect your final website.
            </CardContent>
          </Card>
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle>Performance</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Core Web Vitals optimization: fast loads, image compression, and
              lazy‑loading for a snappy UX.
            </CardContent>
          </Card>
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle>Ongoing Support</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Dedicated assistance for updates, training, and minor improvements
              after launch.
            </CardContent>
          </Card>
        </div>
      </footer>
    </div>
  );
}
