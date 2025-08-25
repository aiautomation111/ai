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
import { Info, Plus, Minus, Phone, Mail, Globe, FileText, Download, CheckCircle2, BarChart, Zap, Moon, Shield, Palette, ShoppingCart, Briefcase, Bot, MessageSquare } from "lucide-react";
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
  desc?: string;
}

// --- Features
const FEATURES: (Feature & { icon: React.ElementType })[] = [
  { id: "push_notifications", label: "Push Notifications", price: 300, category: "Core", desc: "Send instant updates and alerts to users.", icon: Zap },
  { id: "analytics", label: "User Analytics", price: 400, category: "Core", desc: "Track user activity, retention and engagement.", icon: BarChart },
  { id: "offline_mode", label: "Offline Mode", price: 500, category: "Optimization", desc: "App continues to function without internet connection.", icon: Shield },
  { id: "dark_mode", label: "Dark Mode", price: 200, category: "UI/UX", desc: "Light & dark theme switch for better user experience.", icon: Moon },
  { id: "custom_api", label: "Custom API Integration", price: 800, category: "Custom", desc: "Connect to your business systems or external APIs.", icon: Globe },
  { id: "in_app_chat", label: "In-App Chat", price: 600, category: "Communication", desc: "Real-time messaging between users and support.", icon: MessageSquare },
  { id: "payments", label: "Payment Integration", price: 700, category: "E-commerce", desc: "Accept card & wallet payments securely.", icon: ShoppingCart },
  { id: "ai_chatbot", label: "AI Chatbot", price: 900, category: "Automation", desc: "AI-powered chatbot for support and FAQs.", icon: Bot },
];

// --- Packages
const PACKAGES: PackageTier[] = [
  { id: "starter", name: "Starter App", tagline: "Perfect for MVPs and small businesses", basePrice: 2499, includes: ["push_notifications"], pages: ["splash", "login", "dashboard"] },
  { id: "business", name: "Business App", tagline: "Scalable solution for companies", basePrice: 4999, includes: ["push_notifications", "analytics"], pages: ["splash", "login", "dashboard", "profile", "settings"] },
  { id: "enterprise", name: "Enterprise App", tagline: "Full-featured app with integrations", basePrice: 8999, includes: ["push_notifications", "analytics", "custom_api"], pages: ["splash", "login", "dashboard", "profile", "settings", "ecommerce"] },
];

// --- Pages
const PAGES: Page[] = [
  { id: 'splash', label: 'Splash Screen', price: 200, category: 'traditional', desc: 'App loading screen with branding and logo.' },
  { id: 'login', label: 'Login / Signup', price: 300, category: 'traditional', desc: 'Authentication with email, phone or social login.' },
  { id: 'dashboard', label: 'Dashboard', price: 400, category: 'traditional', desc: 'Main hub for features and user overview.' },
  { id: 'profile', label: 'User Profile', price: 250, category: 'traditional', desc: 'Personal info, avatar, and user data.' },
  { id: 'settings', label: 'Settings', price: 200, category: 'traditional', desc: 'Preferences, notifications, and privacy options.' },
  { id: 'ecommerce', label: 'E-commerce Module', price: 600, category: 'ecommerce', desc: 'Product listings, checkout and in-app purchases.' },
];

const CURRENCY = (n: number) => new Intl.NumberFormat(undefined, { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);

// Blueprint component
const FeatureBlueprint: React.FC<{ selectedFeatures: (Feature & { icon: React.ElementType })[] }> = ({ selectedFeatures }) => {
  const foundationFeature = { id: 'foundation', label: 'Core Foundation', icon: Globe };
  const featuresToShow = [foundationFeature, ...selectedFeatures.filter(f => f.id !== 'push_notifications')];

  return (
    <Card className="rounded-2xl">
      <CardHeader>
        <CardTitle>Your Mobile App Blueprint</CardTitle>
        <p className="text-sm text-muted-foreground pt-1">
          Foundation + {selectedFeatures.filter(f => f.id !== 'push_notifications').length} custom features
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
  const [selectedPackage, setSelectedPackage] = useState<PackageTier>(PACKAGES[0]);
  const [selected, setSelected] = useState<Record<string, boolean>>(() => {
    const base: Record<string, boolean> = {};
    FEATURES.forEach((f) => (base[f.id] = false));
    selectedPackage.includes.forEach((id) => (base[id] = true));
    return base;
  });

  const [client, setClient] = useState({ name: "Acme Apps", email: "team@acme.co", phone: "+1 (555) 123-4567", website: "acmeapp.com" });
  const [notes, setNotes] = useState("What should your app do for your users? Add any special requirements here.");
  const [selectedPages, setSelectedPages] = useState<Record<string, boolean>>(() => {
    const base: Record<string, boolean> = {};
    selectedPackage.pages.forEach(pageId => { base[pageId] = true; });
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
      pkg.pages.forEach(pageId => { base[pageId] = true; });
      return base;
    });
  };

  const downloadPDF = () => window.print();

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
      <header className=" border-b bg-background/70 backdrop-blur print:hidden">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-2xl bg-primary/10 flex items-center justify-center"><Globe className="w-5 h-5" /></div>
            <div>
              <div className="font-semibold leading-tight">BuildMyApp</div>
              <div className="text-xs text-muted-foreground -mt-0.5">Explore your mobile app options</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" className="rounded-2xl" onClick={downloadPDF}><Download className="w-4 h-4 mr-2" /> Export / Save PDF</Button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-6 grid md:grid-cols-5 gap-4">
        <div className="md:col-span-3 space-y-4">
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Choose Your App Package</span>
                <Badge variant="secondary" className="rounded-full">Most Popular: Business App</Badge>
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
                    <div className="text-xs text-muted-foreground mt-1">Includes {pkg.includes.length} feature(s) & {pkg.pages.length} screens</div>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle>Select App Screens</CardTitle>
              <p className="text-sm text-muted-foreground pt-1">Choose the screens your app will need.</p>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-x-8 gap-y-2">
              <div>
                <h3 className="font-semibold mb-2">Core Screens</h3>
                <div className="space-y-2">
                  {PAGES.filter(p => p.category === 'traditional').map(page => (
                    <div key={page.id} className="flex items-center space-x-2">
                      <Checkbox id={page.id} checked={!!selectedPages[page.id]} disabled={selectedPackage.pages.includes(page.id)} onCheckedChange={checked => setSelectedPages(prev => ({ ...prev, [page.id]: !!checked }))} />
                      <div className="flex items-center gap-2">
                        <label htmlFor={page.id} className={`text-sm font-medium leading-none ${selectedPackage.pages.includes(page.id) ? 'cursor-not-allowed opacity-70' : 'cursor-pointer'}`}>{page.label} ({selectedPackage.pages.includes(page.id) ? 'Included' : CURRENCY(page.price)})</label>
                        {page.desc && (
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild><Info className="w-4 h-4 opacity-70" /></TooltipTrigger>
                              <TooltipContent className="max-w-xs text-sm leading-relaxed">{page.desc}</TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">E-commerce Screens</h3>
                <div className="space-y-2">
                  {PAGES.filter(p => p.category === 'ecommerce').map(page => (
                    <div key={page.id} className="flex items-center space-x-2">
                      <Checkbox id={page.id} checked={!!selectedPages[page.id]} disabled={selectedPackage.pages.includes(page.id)} onCheckedChange={checked => setSelectedPages(prev => ({ ...prev, [page.id]: !!checked }))} />
                      <div className="flex items-center gap-2">
                        <label htmlFor={page.id} className={`text-sm font-medium leading-none ${selectedPackage.pages.includes(page.id) ? 'cursor-not-allowed opacity-70' : 'cursor-pointer'}`}>{page.label} ({selectedPackage.pages.includes(page.id) ? 'Included' : CURRENCY(page.price)})</label>
                        {page.desc && (
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild><Info className="w-4 h-4 opacity-70" /></TooltipTrigger>
                              <TooltipContent className="max-w-xs text-sm leading-relaxed">{page.desc}</TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-2xl">
            <CardHeader><CardTitle>Your Custom Mobile App Project</CardTitle></CardHeader>
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
                          checked={!!selected[f.id]}
                          onCheckedChange={(v: CheckedState) =>
                            setSelected((s) => ({ ...s, [f.id]: !!v }))
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
                          <div className="text-xs text-muted-foreground mt-0.5">One-time investment</div>
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
              <div className="grid grid-cols-1 gap-3">
                {/* --- Start of Added Code --- */}
                <div className="relative">
                  <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input placeholder="Company Name" className="pl-9" value={client.name} onChange={(e) => setClient(prev => ({...prev, name: e.target.value}))} />
                </div>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input placeholder="Email Address" type="email" className="pl-9" value={client.email} onChange={(e) => setClient(prev => ({...prev, email: e.target.value}))} />
                </div>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input placeholder="Phone Number" type="tel" className="pl-9" value={client.phone} onChange={(e) => setClient(prev => ({...prev, phone: e.target.value}))} />
                </div>
                <div className="relative">
                  <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input placeholder="Website" className="pl-9" value={client.website} onChange={(e) => setClient(prev => ({...prev, website: e.target.value}))} />
                </div>
                 {/* --- End of Added Code --- */}
              </div>
            </CardContent>
          </Card>
          
          {/* --- Start of Added Code --- */}
          <Card className="rounded-2xl sticky top-4">
             <CardHeader>
                <CardTitle>Cost Summary</CardTitle>
                <p className="text-sm text-muted-foreground pt-1">Estimated project investment.</p>
             </CardHeader>
             <CardContent className="space-y-3 text-sm">
                <div className="flex justify-between">
                   <span className="text-muted-foreground">{selectedPackage.name} Package</span>
                   <span className="font-medium">{CURRENCY(selectedPackage.basePrice)}</span>
                </div>
                <div className="flex justify-between">
                   <span className="text-muted-foreground">Additional Screens</span>
                   <span className="font-medium">{CURRENCY(lineItems.pagesTotal)}</span>
                </div>
                <div className="flex justify-between">
                   <span className="text-muted-foreground">Feature Add-ons</span>
                   <span className="font-medium">{CURRENCY(lineItems.addOnsTotal)}</span>
                </div>
                <hr className="border-dashed" />
                <div className="flex justify-between">
                   <span className="text-muted-foreground">Subtotal</span>
                   <span className="font-medium">{CURRENCY(lineItems.subtotal)}</span>
                </div>
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <span className="text-muted-foreground">Contingency (8%)</span>
                      <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild><Info className="w-3.5 h-3.5 opacity-70" /></TooltipTrigger>
                            <TooltipContent><p>Covers unforeseen complexities or minor scope changes.</p></TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                   <span className="font-medium">{CURRENCY(lineItems.contingency)}</span>
                </div>
                 <hr className="border-dashed" />
                <div className="flex justify-between items-center text-lg font-semibold pt-2">
                   <span>Total Estimated Cost</span>
                   <span>{CURRENCY(lineItems.total)}</span>
                </div>
             </CardContent>
          </Card>
          {/* --- End of Added Code --- */}
        </div>
      </main>
    </div>
  );
}