'use client'

import React, { useMemo, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";
import {
  Info, Plus, Minus, Phone, Mail, Globe, FileText, Download, CheckCircle2,
  ShoppingCart, Calendar, Edit3, Languages, MessageSquare, Shield, Zap, Palette,
  Image as ImageIcon, Briefcase, Bot
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
  category: 'traditional' | 'ecommerce';
}

// --- Data
const FEATURES: (Feature & { icon: React.ElementType })[] = [
    { id: "seo_basic", label: "Basic Search Engine Optimization", price: 80, category: "Foundation", desc: "Meta tags, semantic HTML, sitemap, robots.txt.", icon: Zap },
    { id: "booking", label: "Booking/Scheduling System", price: 600, category: "Core", desc: "Let customers book appointments directly from your site.", icon: Calendar },
    { id: "blog", label: "Blog Management Tools", price: 400, category: "Content", desc: "Easy publishing, categories, tags, and search.", icon: Edit3 },
    { id: "multilang", label: "Multi‑language Support", price: 500, category: "Core", desc: "Serve content in multiple languages with language switcher.", icon: Languages },
    { id: "popups", label: "Pop‑ups & Lead Capture Forms", price: 300, category: "Marketing", desc: "Grow your email list with targeted forms and modals.", icon: MessageSquare },
    { id: "perf", label: "Website Performance Optimization", price: 400, category: "Optimization", desc: "Image compression, code splitting, lazy‑loading.", icon: Zap },
    { id: "shield", label: "Website Shield (Security)", price: 400, category: "Optimization", desc: "Security headers, bot protection, uptime monitor.", icon: Shield },
    { id: "custom", label: "Custom Features", price: 900, category: "Custom", desc: "Bespoke functionality tailored to your business.", recommended: true, icon: Palette },
    { id: "social_feed", label: "Social Media Feed Integration", price: 220, category: "Content", desc: "Embed dynamic Instagram/Twitter/LinkedIn feeds.", icon: ImageIcon },
    { id: "ecommerce", label: "E-commerce Shop", price: 1200, category: "Core", desc: "Full-featured online store with payment processing.", icon: ShoppingCart },
    { id: "client_portal", label: "Client Portal", price: 1000, category: "Core", desc: "Secure area for clients to log in and view documents.", icon: Briefcase },
    { id: "smart_chatbot", label: "Smart Chatbot", price: 700, category: "Automation", desc: "AI-powered chatbot for customer support.", icon: Bot },
];

const PACKAGES: PackageTier[] = [
  { id: "entry", name: "Premier Entry", tagline: "Perfect for individuals or small businesses", basePrice: 1499, includes: ["seo_basic"], pages: ['home', 'contact'] },
  { id: "core", name: "Premier Core", tagline: "Most popular starting point", basePrice: 2199, includes: ["seo_basic", "perf"], pages: ['home', 'about', 'contact', 'services'] },
  { id: "blueprint", name: "Your Website Blueprint", tagline: "Foundation + custom features", basePrice: 3299, includes: ["seo_basic", "perf", "custom"], pages: ['home', 'about', 'contact', 'services', 'blog_index'] },
];

const PAGES: Page[] = [
  { id: 'home', label: 'Homepage', price: 250, category: 'traditional' },
  { id: 'about', label: 'About Us', price: 150, category: 'traditional' },
  { id: 'contact', label: 'Contact Us', price: 150, category: 'traditional' },
  { id: 'services', label: 'Services / Features', price: 150, category: 'traditional' },
  { id: 'blog_index', label: 'Blog Index', price: 150, category: 'traditional' },
  { id: 'faq', label: 'FAQ', price: 150, category: 'traditional' },
  { id: 'portfolio', label: 'Portfolio / Gallery', price: 200, category: 'traditional' },
  { id: 'shop', label: 'Main Shop / Product Grid', price: 300, category: 'ecommerce' },
  { id: 'product_detail', label: 'Product Detail Page Template', price: 250, category: 'ecommerce' },
  { id: 'cart', label: 'Shopping Cart', price: 200, category: 'ecommerce' },
  { id: 'checkout', label: 'Checkout Page', price: 300, category: 'ecommerce' },
  { id: 'account', label: 'User Account / Order History', price: 250, category: 'ecommerce' },
];

const CURRENCY = (n: number) => new Intl.NumberFormat(undefined, { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);

const FeatureBlueprint: React.FC<{ selectedFeatures: (Feature & { icon: React.ElementType })[] }> = ({ selectedFeatures }) => {
  const foundationFeature = { id: 'foundation', label: 'Foundation', icon: Globe };
  const featuresToShow = [foundationFeature, ...selectedFeatures.filter(f => f.id !== 'seo_basic')];

  return (
    <Card className="rounded-2xl">
      <CardHeader>
        <CardTitle>Your Website Blueprint</CardTitle>
        <p className="text-sm text-muted-foreground pt-1">
          Foundation + {selectedFeatures.filter(f => f.id !== 'seo_basic').length} custom features
        </p>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap items-center gap-4">
          {featuresToShow.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <div key={feature.id} className="flex flex-col items-center text-center gap-2 w-20">
                <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center">
                  <IconComponent className="w-8 h-8 text-muted-foreground" />
                </div>
                <span className="text-xs font-medium leading-tight">{feature.label}</span>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default function ProposalBuilder() {
  const [selectedPackage, setSelectedPackage] = useState<PackageTier>(PACKAGES[1]);
  const [selected, setSelected] = useState<Record<string, boolean>>(() => {
    const base: Record<string, boolean> = {};
    FEATURES.forEach((f) => (base[f.id] = false));
    selectedPackage.includes.forEach((id) => (base[id] = true));
    return base;
  });

  const [client, setClient] = useState({ name: "Acme Co.", email: "team@acme.co", phone: "+1 (555) 123‑4567", website: "acme.co" });
  const [notes, setNotes] = useState("What jobs should your website do for your customers? Add any special requirements here.");
  const [generatedPrompt, setGeneratedPrompt] = useState<string | null>(null);
  
  const [selectedPages, setSelectedPages] = useState<Record<string, boolean>>(() => {
    const base: Record<string, boolean> = {};
    selectedPackage.pages.forEach(pageId => {
        base[pageId] = true;
    });
    return base;
  });

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
        pkg.pages.forEach(pageId => {
            base[pageId] = true;
        });
        return base;
    });
  };

  const downloadPDF = () => window.print();

  const generateAIProposalPrompt = () => {
    const featureList = lineItems.included.map(f => `- **${f.label}**: ${f.desc || 'Core feature.'}`).join('\n');
    const pageList = PAGES.filter(page => selectedPages[page.id]).map(page => `- ${page.label}`).join('\n');

    const promptText = `
You are an expert full-stack web developer AI. Your task is to generate a project structure and starter code for a new website based on the following proposal.

### Project Title
Website for ${client.name || 'a valued client'}

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
The total estimated one-time investment for this project is **${CURRENCY(lineItems.total)}**. Please ensure the proposed technical solution is appropriate for this budget.

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
    fetch("https://kyzendev.app.n8n.cloud/webhook-test/1b3a7e3d-c4a1-4805-b884-0f71efe0b77c", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ prompt: promptText }),
})
  .then(res => {
    if (!res.ok) throw new Error("Request failed");
    return res.json();
  })
  .then(data => {
    console.log("Response:", data);
  })
  .catch(err => {
    console.error("Error:", err);
  });
  };
  
  const lineItems = useMemo(() => {
    const included = FEATURES.filter((f) => selected[f.id]);
    const addOnsTotal = included.reduce((sum, f) => (selectedPackage.includes.includes(f.id) ? sum : sum + f.price), 0);
    const pagesTotal = PAGES.reduce((sum, page) => (selectedPages[page.id] && !selectedPackage.pages.includes(page.id) ? sum + page.price : sum), 0);
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
            <div className="w-9 h-9 rounded-2xl bg-primary/10 flex items-center justify-center"><Globe className="w-5 h-5" /></div>
            <div>
              <div className="font-semibold leading-tight">BuildMySite</div>
              <div className="text-xs text-muted-foreground -mt-0.5">Explore your website options</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" className="rounded-2xl" onClick={downloadPDF}><Download className="w-4 h-4 mr-2" /> Export / Save PDF</Button>
            <Dialog>
              <DialogTrigger asChild><Button className="rounded-2xl"><FileText className="w-4 h-4 mr-2" /> View Summary</Button></DialogTrigger>
              <DialogContent className="sm:max-w-lg">
                <DialogHeader><DialogTitle>Project Summary</DialogTitle></DialogHeader>
                <div className="space-y-3">
                  <div className="text-sm text-muted-foreground">{selectedPackage.name}</div>
                  <div className="divide-y">
                    {lineItems.included.map((f) => (
                      <div key={f.id} className="flex items-center justify-between py-1.5">
                        <div className="text-sm">{f.label}</div>
                        <div className="text-sm font-medium">{selectedPackage.includes.includes(f.id) ? 'Included' : CURRENCY(f.price)}</div>
                      </div>
                    ))}
                  </div>
                  <div className="border-t pt-3 text-sm">
                    <div className="flex justify-between"><span>Package Base</span><span className="font-medium">{CURRENCY(selectedPackage.basePrice)}</span></div>
                    <div className="flex justify-between"><span>Pages Cost</span><span className="font-medium">{CURRENCY(lineItems.pagesTotal)}</span></div>
                    <div className="flex justify-between"><span>Add‑ons</span><span className="font-medium">{CURRENCY(lineItems.addOnsTotal)}</span></div>
                    <div className="flex justify-between"><span>Contingency (8%)</span><span className="font-medium">{CURRENCY(lineItems.contingency)}</span></div>
                    <div className="flex justify-between text-lg font-semibold mt-2"><span>Total</span><span>{CURRENCY(lineItems.total)}</span></div>
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
                <Badge variant="secondary" className="rounded-full">Most Popular: Premier Core</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-3">
                {PACKAGES.map((pkg) => (
                  <button key={pkg.id} onClick={() => onSelectPackage(pkg)} className={`rounded-2xl border p-4 text-left hover:shadow transition-all ${selectedPackage.id === pkg.id ? "border-primary ring-2 ring-primary/20" : "border-muted"}`}>
                    <div className="flex items-center justify-between">
                      <div className="font-semibold">{pkg.name}</div>
                      {selectedPackage.id === pkg.id && <CheckCircle2 className="w-5 h-5" />}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">{pkg.tagline}</div>
                    <div className="mt-3 text-lg font-semibold">Starting at {CURRENCY(pkg.basePrice)}</div>
                    <div className="text-xs text-muted-foreground mt-1">Includes {pkg.includes.length} feature(s) & {pkg.pages.length} pages</div>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-2xl">
            <CardHeader>
                <CardTitle>Select Required Pages</CardTitle>
                <p className="text-sm text-muted-foreground pt-1">Choose the pages your website will need.</p>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-x-8 gap-y-2">
                <div>
                    <h3 className="font-semibold mb-2">Standard Pages</h3>
                    <div className="space-y-2">
                        {PAGES.filter(p => p.category === 'traditional').map(page => (
                            <div key={page.id} className="flex items-center space-x-2">
                                <Checkbox id={page.id} checked={!!selectedPages[page.id]} disabled={selectedPackage.pages.includes(page.id)} onCheckedChange={checked => setSelectedPages(prev => ({ ...prev, [page.id]: !!checked }))} />
                                <label htmlFor={page.id} className={`text-sm font-medium leading-none ${selectedPackage.pages.includes(page.id) ? 'cursor-not-allowed opacity-70' : 'cursor-pointer'}`}>{page.label} ({selectedPackage.pages.includes(page.id) ? 'Included' : CURRENCY(page.price)})</label>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <h3 className="font-semibold mb-2">E-commerce Pages</h3>
                    <div className="space-y-2">
                        {PAGES.filter(p => p.category === 'ecommerce').map(page => (
                            <div key={page.id} className="flex items-center space-x-2">
                                <Checkbox id={page.id} checked={!!selectedPages[page.id]} disabled={selectedPackage.pages.includes(page.id)} onCheckedChange={checked => setSelectedPages(prev => ({ ...prev, [page.id]: !!checked }))} />
                                <label htmlFor={page.id} className={`text-sm font-medium leading-none ${selectedPackage.pages.includes(page.id) ? 'cursor-not-allowed opacity-70' : 'cursor-pointer'}`}>{page.label} ({selectedPackage.pages.includes(page.id) ? 'Included' : CURRENCY(page.price)})</label>
                            </div>
                        ))}
                    </div>
                </div>
            </CardContent>
          </Card>

          <Card className="rounded-2xl">
            <CardHeader><CardTitle>Your Custom Website Project</CardTitle></CardHeader>
            <CardContent>
              <Tabs defaultValue={Object.keys(grouped)[0]}>
                <TabsList className="h-auto flex-wrap justify-start">
                  {Object.keys(grouped).map((cat) => (<TabsTrigger key={cat} value={cat} className="capitalize">{cat}</TabsTrigger>))}
                </TabsList>
                {Object.entries(grouped).map(([cat, items]) => (
                  <TabsContent key={cat} value={cat} className="space-y-2 pt-2">
                    {items.map((f) => (
                       <div key={f.id} className="flex items-start gap-3 py-2">
                         <Checkbox
  id={f.id}
  checked={!!selected[f.id]} // تأكد من boolean
  onCheckedChange={(v: CheckedState) =>
    setSelected((s) => ({ ...s, [f.id]: !!v })) // تحويل أي قيمة إلى boolean
  }
  disabled={selectedPackage.includes.includes(f.id)}
  className="mt-1"
/>

                         <div className="flex-1">
                           <div className="flex items-center gap-2">
                             <label htmlFor={f.id} className={`font-medium ${selectedPackage.includes.includes(f.id) ? 'cursor-not-allowed opacity-70' : 'cursor-pointer'}`}>{f.label}</label>
                             {f.recommended && <Badge className="rounded-full">Recommended</Badge>}
                             {selectedPackage.includes.includes(f.id) && <Badge variant="outline" className="rounded-full">Included</Badge>}
                             {f.desc && (
                               <TooltipProvider>
                                 <Tooltip>
                                   <TooltipTrigger asChild><Info className="w-4 h-4 opacity-70" /></TooltipTrigger>
                                   <TooltipContent className="max-w-xs text-sm leading-relaxed">{f.desc}</TooltipContent>
                                 </Tooltip>
                               </TooltipProvider>
                             )}
                           </div>
                           <div className="text-xs text-muted-foreground mt-0.5">One‑time investment</div>
                         </div>
                         <div className="font-semibold whitespace-nowrap">{CURRENCY(f.price)}</div>
                       </div>
                    ))}
                  </TabsContent>
                ))}
              </Tabs>
            </CardContent>
          </Card>

          <Card className="rounded-2xl">
            <CardHeader><CardTitle>Project Notes</CardTitle></CardHeader>
            <CardContent className="space-y-3">
              <Textarea value={notes} onChange={(e) => setNotes(e.target.value)} className="min-h-[120px]" />
              <div className="text-xs text-muted-foreground">Tip: Capture goals, target audience, integrations, and timeline.</div>
            </CardContent>
          </Card>

          
        </div>

        <div className="md:col-span-2 space-y-4">
          <FeatureBlueprint selectedFeatures={lineItems.included} />
          
          <Card className="rounded-2xl">
            <CardHeader><CardTitle>Client Details</CardTitle></CardHeader>
            <CardContent className="space-y-3">
              <div className="grid grid-cols-1 gap-2">
                <Input value={client.name} onChange={(e) => setClient({ ...client, name: e.target.value })} placeholder="Client / Company name" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <Input value={client.email} onChange={(e) => setClient({ ...client, email: e.target.value })} placeholder="Email" />
                  <Input value={client.phone} onChange={(e) => setClient({ ...client, phone: e.target.value })} placeholder="Phone" />
                </div>
                <Input value={client.website} onChange={(e) => setClient({ ...client, website: e.target.value })} placeholder="Website (optional)" />
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Mail className="w-4 h-4" /> <span>{client.email}</span>
                <Phone className="w-4 h-4 ml-3" /> <span>{client.phone}</span>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-2xl sticky top-20">
            <CardHeader><CardTitle>Investment Breakdown</CardTitle></CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center justify-between py-1">
                  <div className="text-sm">{selectedPackage.name} (base)</div>
                  <div className="text-sm font-medium">{CURRENCY(selectedPackage.basePrice)}</div>
                </div>
                <div className="divide-y rounded-xl border mt-2">
                  {lineItems.included.filter(f => !selectedPackage.includes.includes(f.id)).map((f) => (
                    <div key={f.id} className="flex items-center justify-between py-2 px-3">
                      <div className="text-sm">{f.label}</div>
                      <div className="text-sm">{CURRENCY(f.price)}</div>
                    </div>
                  ))}
                </div>
                <div className="pt-3 border-t mt-2 space-y-1 text-sm">
                  <div className="flex justify-between"><span>Pages Cost</span><span className="font-medium">{CURRENCY(lineItems.pagesTotal)}</span></div>
                  <div className="flex justify-between"><span>Add-ons Total</span><span className="font-medium">{CURRENCY(lineItems.addOnsTotal)}</span></div>
                  <div className="flex justify-between"><span>Subtotal</span><span className="font-medium">{CURRENCY(lineItems.subtotal)}</span></div>
                  <div className="flex justify-between"><span>Contingency (8%)</span><span className="font-medium">{CURRENCY(lineItems.contingency)}</span></div>
                  <div className="flex justify-between text-lg font-semibold mt-2"><span>Total</span><span>{CURRENCY(lineItems.total)}</span></div>
                </div>
                <div className="flex gap-2 mt-3">
                  <Button className="flex-1 rounded-2xl" onClick={generateAIProposalPrompt}><Plus className="w-4 h-4 mr-2" /> Request Proposal</Button>
                  <Button variant="outline" className="rounded-2xl"><Minus className="w-4 h-4 mr-2" /> Clear</Button>
                </div>
                <div className="text-xs text-muted-foreground mt-2">We're here to help • hello@buildmysite.com • (555) 128‑0567</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <footer className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid md:grid-cols-3 gap-4">
          <Card className="rounded-2xl">
            <CardHeader><CardTitle>Website Shield</CardTitle></CardHeader>
            <CardContent className="text-sm text-muted-foreground">Security headers, backups, uptime monitoring, and incident alerts to protect your final website.</CardContent>
          </Card>
          <Card className="rounded-2xl">
            <CardHeader><CardTitle>Performance</CardTitle></CardHeader>
            <CardContent className="text-sm text-muted-foreground">Core Web Vitals optimization: fast loads, image compression, and lazy‑loading for a snappy UX.</CardContent>
          </Card>
          <Card className="rounded-2xl">
            <CardHeader><CardTitle>Ongoing Support</CardTitle></CardHeader>
            <CardContent className="text-sm text-muted-foreground">Dedicated assistance for updates, training, and minor improvements after launch.</CardContent>
          </Card>
        </div>
      </footer>
    </div>
  );
}