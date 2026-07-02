"use client";

import { useState, useEffect, useCallback } from "react";
import {
  Building2,
  Globe,
  TrendingUp,
  Briefcase,
  FileText,
  Users,
  Stamp,
  Languages,
  Landmark,
  Crown,
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  ArrowRight,
  CheckCircle2,
  Ship,
  Warehouse,
  Handshake,
  ChevronRight,
  BadgeCheck,
  Clock,
  Shield,
  MessageCircle,
  Send,
  Loader2,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";

type Page = "home" | "construction" | "import-export" | "general-trading" | "business-setup" | "exclusive-rep" | "inquiry" | "contact";

const NAV_ITEMS: { key: Page; label: string }[] = [
  { key: "home", label: "Home" },
  { key: "construction", label: "Construction Materials" },
  { key: "import-export", label: "Import & Export" },
  { key: "general-trading", label: "General Trading" },
  { key: "business-setup", label: "Business Setup" },
  { key: "exclusive-rep", label: "Exclusive Representative" },
  { key: "inquiry", label: "Inquiry" },
  { key: "contact", label: "Contact" },
];

function NavBar({
  currentPage,
  onNavigate,
}: {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = useCallback(
    (page: Page) => {
      onNavigate(page);
      setMobileOpen(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    [onNavigate]
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <button
            onClick={() => handleNav("home")}
            className="flex items-center gap-3 group"
          >
            <img
              src="/logo.png"
              alt="Muskas Logo"
              className="h-10 sm:h-12 w-auto transition-transform group-hover:scale-105"
            />
            <div className="hidden sm:block">
              <p className="text-sm font-bold tracking-wide text-primary">
                Muskas Hainan
              </p>
            </div>
          </button>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.key}
                onClick={() => handleNav(item.key)}
                className={`px-3 xl:px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                  currentPage === item.key
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* CTA + Mobile */}
          <div className="flex items-center gap-3">
            <Button
              size="sm"
              className="hidden sm:flex bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={() => handleNav("contact")}
            >
              Get in Touch
            </Button>

            {/* Mobile Menu */}
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-72">
                <SheetTitle className="flex items-center gap-3 mb-8">
                  <img src="/logo.png" alt="Muskas" className="h-10 w-auto" />
                  <span className="font-semibold text-primary">Muskas Hainan</span>
                </SheetTitle>
                <div className="flex flex-col gap-1">
                  {NAV_ITEMS.map((item) => (
                    <button
                      key={item.key}
                      onClick={() => handleNav(item.key)}
                      className={`px-4 py-3 text-sm font-medium rounded-md transition-all text-left ${
                        currentPage === item.key
                          ? "bg-primary text-primary-foreground"
                          : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
                <Separator className="my-6" />
                <Button
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  onClick={() => handleNav("contact")}
                >
                  Get in Touch
                </Button>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
}

/* ───── HOME PAGE ───── */
function HomePage({ onNavigate }: { onNavigate: (page: Page) => void }) {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-muskas-dark via-muskas-green to-muskas-dark" />
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top_right,_var(--muskas-gold)_0%,_transparent_60%)]" />
        <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzBoLTJ2LTRoMnYtMmgtNHY2aDR2LTJ6bTAgMzBoLTJ2LTRoMnYtMmgtNHY2aDR2LTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')]" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <div className="mb-8">
            <img
              src="/logo.png"
              alt="Muskas Logo"
              className="h-24 sm:h-32 mx-auto mb-6 opacity-90"
            />
          </div>
          <Badge
            variant="secondary"
            className="mb-6 text-muskas-gold border-muskas-gold/30 bg-muskas-gold/10"
          >
            Established 2025 &middot; Hainan, China
          </Badge>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
            Muskas Hainan
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Your trusted partner for construction materials, international
            import &amp; export, and comprehensive general trading services
            connecting China to the world.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-muskas-gold hover:bg-muskas-gold/90 text-muskas-dark font-semibold px-8"
              onClick={() => onNavigate("contact")}
            >
              Contact Us <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 hover:text-white"
              onClick={() => onNavigate("construction")}
            >
              Our Services
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-1.5">
            <div className="w-1.5 h-3 rounded-full bg-white/60 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 text-primary border-primary/20">
              What We Do
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
              Our Core Business
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              We operate across five key verticals, delivering quality and
              reliability in every transaction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
            {[
              {
                icon: Building2,
                title: "Construction Materials",
                desc: "Premium building materials sourcing and supply for projects across China and international markets.",
                page: "construction" as Page,
                color: "bg-emerald-50 text-emerald-700",
              },
              {
                icon: Globe,
                title: "Import & Export",
                desc: "Seamless cross-border trade facilitation with expertise in customs, logistics, and compliance.",
                page: "import-export" as Page,
                color: "bg-amber-50 text-amber-700",
              },
              {
                icon: TrendingUp,
                title: "General Trading",
                desc: "Comprehensive trading solutions tailored to meet diverse business needs across multiple industries.",
                page: "general-trading" as Page,
                color: "bg-teal-50 text-teal-700",
              },
              {
                icon: Briefcase,
                title: "Business Setup",
                desc: "End-to-end support for companies establishing operations in Hainan — from registration to immigration and office setup.",
                page: "business-setup" as Page,
                color: "bg-violet-50 text-violet-700",
              },
              {
                icon: Crown,
                title: "Exclusive Representative",
                desc: "Exclusive China representative for foreign companies and brands — market entry, distribution, and ongoing management.",
                page: "exclusive-rep" as Page,
                color: "bg-rose-50 text-rose-700",
              },
            ].map((service) => (
              <Card
                key={service.page}
                className="group cursor-pointer border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                onClick={() => {
                  onNavigate(service.page);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                <CardContent className="p-6 lg:p-8">
                  <div
                    className={`w-14 h-14 rounded-xl ${service.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <service.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-muskas-gold transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {service.desc}
                  </p>
                  <span className="inline-flex items-center text-sm font-medium text-primary group-hover:text-muskas-gold transition-colors">
                    Learn more <ChevronRight className="ml-1 h-4 w-4" />
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 sm:py-28 bg-muskas-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 text-primary border-primary/20">
              Why Muskas
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
              The Muskas Advantage
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              We combine local expertise in Hainan with global reach, delivering
              unmatched value to our partners.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Shield,
                title: "Trust & Integrity",
                desc: "Fully licensed and registered with the Hainan Market Supervision Administration, ensuring complete transparency in every transaction.",
              },
              {
                icon: Globe,
                title: "Global Network",
                desc: "Strategically based in Hainan Free Trade Port, leveraging China's most open trade policies to connect markets worldwide.",
              },
              {
                icon: Clock,
                title: "Reliable Delivery",
                desc: "Streamlined supply chain management and logistics partnerships ensure on-time delivery for every order, large or small.",
              },
              {
                icon: Handshake,
                title: "Personal Service",
                desc: "Direct communication with our team ensures your specific requirements are understood and met with precision and care.",
              },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-white shadow-sm flex items-center justify-center mb-4">
                  <item.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-bold text-primary mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-gradient-to-r from-muskas-dark to-muskas-green">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Partner with Us?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Whether you need construction materials, import/export assistance,
            or general trading solutions, we are here to help.
          </p>
          <Button
            size="lg"
            className="bg-muskas-gold hover:bg-muskas-gold/90 text-muskas-dark font-semibold px-10"
            onClick={() => {
              onNavigate("contact");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            Start a Conversation <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>
    </>
  );
}

/* ───── SCOPE PAGE TEMPLATE ───── */
function ScopePage({
  title,
  subtitle,
  icon: Icon,
  colorClass,
  heroGradient,
  children,
}: {
  title: string;
  subtitle: string;
  icon: React.ComponentType<{ className?: string }>;
  colorClass: string;
  heroGradient: string;
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Hero */}
      <section
        className={`pt-32 pb-20 sm:pt-40 sm:pb-28 ${heroGradient} relative overflow-hidden`}
      >
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_bottom_left,_var(--muskas-gold)_0%,_transparent_60%)]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <div
              className={`w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center`}
            >
              <Icon className="h-8 w-8 text-white" />
            </div>
            <Badge className="bg-white/15 text-white border-white/20 hover:bg-white/20">
              Scope of Work
            </Badge>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            {title}
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">{subtitle}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
      </section>
    </>
  );
}

/* ───── CONSTRUCTION MATERIALS PAGE ───── */
function ConstructionMaterialsPage() {
  const materials = [
    {
      name: "Cement & Concrete Products",
      desc: "Sourcing and supply of premium Portland cement, ready-mix concrete, and specialized concrete products for infrastructure and building projects. We work directly with certified manufacturers to ensure consistent quality and competitive pricing.",
    },
    {
      name: "Steel & Structural Components",
      desc: "Supply of rebar, structural steel beams, columns, and prefabricated steel components. Our partnerships with top-tier steel mills guarantee materials that meet international construction standards.",
    },
    {
      name: "Building Finishes & Fixtures",
      desc: "Comprehensive range of interior and exterior finishing materials including tiles, sanitary ware, paint, electrical fixtures, and decorative elements sourced from leading manufacturers.",
    },
    {
      name: "Aggregates & Raw Materials",
      desc: "Reliable supply of sand, gravel, crushed stone, and other essential aggregates for construction. We manage the entire supply chain from quarry to project site.",
    },
    {
      name: "Plumbing & Electrical Supplies",
      desc: "Complete plumbing systems, PVC and copper piping, electrical wiring, switchgear, and distribution panels from trusted international and domestic brands.",
    },
    {
      name: "Timber & Wood Products",
      desc: "Imported and domestic timber, plywood, MDF boards, and engineered wood products for structural and decorative applications in residential and commercial projects.",
    },
  ];

  return (
    <ScopePage
      title="Construction Materials"
      subtitle="Premium building materials sourcing and supply for projects across China and international markets."
      icon={Building2}
      colorClass="emerald"
      heroGradient="bg-gradient-to-br from-emerald-900 via-emerald-800 to-muskas-dark"
    >
      <div className="grid lg:grid-cols-3 gap-12">
        {/* Left column */}
        <div className="lg:col-span-1">
          <div className="sticky top-28">
            <h2 className="text-2xl font-bold text-primary mb-4">
              Comprehensive Material Solutions
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Muskas provides end-to-end procurement and supply of construction
              materials, serving contractors, developers, and government
              projects throughout Hainan and beyond. Our deep relationships
              with manufacturers ensure quality materials at competitive
              prices.
            </p>
            <div className="space-y-3">
              {["Quality Assurance", "Bulk Procurement", "Timely Delivery", "Custom Sourcing"].map(
                (item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                    <span className="text-sm font-medium text-foreground">
                      {item}
                    </span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        {/* Right column - Material Cards */}
        <div className="lg:col-span-2">
          <div className="grid sm:grid-cols-2 gap-4">
            {materials.map((mat, i) => (
              <Card
                key={i}
                className="border-border/50 hover:shadow-md transition-shadow"
              >
                <CardContent className="p-5">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center mb-3">
                    <Warehouse className="h-5 w-5 text-emerald-600" />
                  </div>
                  <h3 className="font-bold text-primary mb-2">{mat.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {mat.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </ScopePage>
  );
}

/* ───── IMPORT & EXPORT PAGE ───── */
function ImportExportPage() {
  const services = [
    {
      name: "Export Facilitation",
      desc: "We help international buyers access quality Chinese products through our established export channels. From product sourcing and quality inspection to documentation and shipping, we manage the complete export process for a seamless experience.",
      icon: Ship,
    },
    {
      name: "Import Services",
      desc: "Leveraging Hainan Free Trade Port's preferential policies, we assist businesses in importing raw materials, machinery, consumer goods, and specialized equipment with full customs clearance and compliance support.",
      icon: Globe,
    },
    {
      name: "Customs & Compliance",
      desc: "Our experienced team handles all customs documentation, tariff classification, and regulatory compliance requirements. We stay current with changing trade regulations to ensure smooth cross-border transactions.",
      icon: BadgeCheck,
    },
    {
      name: "Logistics & Shipping",
      desc: "Coordinated logistics solutions including ocean freight, air cargo, and multimodal transport. We partner with reliable shipping lines and freight forwarders to deliver your goods safely and on schedule.",
      icon: Ship,
    },
  ];

  return (
    <ScopePage
      title="Import & Export"
      subtitle="Seamless cross-border trade facilitation with expertise in customs, logistics, and compliance."
      icon={Globe}
      colorClass="amber"
      heroGradient="bg-gradient-to-br from-amber-900 via-amber-800 to-muskas-dark"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl font-bold text-primary mb-4">
            Connecting Markets Across Borders
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Based in Hainan Free Trade Port, one of China&apos;s most open
            economic zones, Muskas is uniquely positioned to facilitate
            international trade with preferential policies, reduced tariffs, and
            streamlined customs procedures. We serve as your bridge between
            Chinese manufacturers and global markets.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 mb-16">
          {services.map((service, i) => (
            <Card
              key={i}
              className="border-border/50 hover:shadow-md transition-shadow"
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-amber-700" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-3">
                  {service.name}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trade Corridors */}
        <div className="bg-muskas-cream rounded-2xl p-6 sm:p-8">
          <h3 className="text-xl font-bold text-primary mb-6 text-center">
            Key Trade Corridors
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            {[
              { region: "Southeast Asia", flag: "🌏" },
              { region: "Middle East", flag: "🌍" },
              { region: "Africa", flag: "🌍" },
              { region: "Europe", flag: "🌍" },
              { region: "Australia", flag: "🇦🇺" },
              { region: "New Zealand", flag: "🇳🇿" },
              { region: "North America", flag: "🌎" },
            ].map((item) => (
              <div
                key={item.region}
                className="p-4 bg-white rounded-xl hover:shadow-sm transition-shadow"
              >
                <div className="text-2xl mb-2">{item.flag}</div>
                <p className="text-sm font-semibold text-primary">
                  {item.region}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ScopePage>
  );
}

/* ───── GENERAL TRADING PAGE ───── */
function GeneralTradingPage() {
  const categories = [
    {
      name: "Consumer Goods",
      desc: "Sourcing and distribution of everyday consumer products including electronics, home appliances, textiles, and household items. We connect manufacturers with retail and wholesale buyers across different markets.",
      items: ["Electronics & Appliances", "Textiles & Garments", "Home & Kitchen", "Personal Care"],
    },
    {
      name: "Industrial Supplies",
      desc: "Procurement and supply of industrial equipment, machinery parts, tools, and raw materials for manufacturing and production facilities. We work with factories and industrial clients to meet their specific operational needs.",
      items: ["Machinery & Equipment", "Industrial Tools", "Raw Materials", "Safety Equipment"],
    },
    {
      name: "Agricultural Products",
      desc: "Trade in agricultural commodities including food products, fertilizers, and agricultural equipment. We facilitate both domestic and international trade in this essential sector.",
      items: ["Food Commodities", "Fertilizers", "Agri-Equipment", "Processing Supplies"],
    },
    {
      name: "Commodity Trading",
      desc: "Bulk trading of key commodities including minerals, chemicals, and energy products. Our market knowledge and logistics capabilities enable efficient commodity trade across borders.",
      items: ["Minerals & Ores", "Chemical Products", "Energy Products", "Recyclable Materials"],
    },
  ];

  return (
    <ScopePage
      title="General Trading"
      subtitle="Comprehensive trading solutions tailored to meet diverse business needs across multiple industries."
      icon={TrendingUp}
      colorClass="teal"
      heroGradient="bg-gradient-to-br from-teal-900 via-teal-800 to-muskas-dark"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl font-bold text-primary mb-4">
            Diverse Trading Portfolio
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Beyond our specialized verticals, Muskas operates a broad general
            trading division that caters to a wide range of industries. Our
            flexible approach allows us to adapt to market demands and provide
            tailored solutions for each client&apos;s unique requirements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((cat, i) => (
            <Card
              key={i}
              className="border-border/50 hover:shadow-md transition-shadow"
            >
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-primary mb-3">
                  {cat.name}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {cat.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <Badge
                      key={item}
                      variant="secondary"
                      className="text-xs bg-teal-50 text-teal-700 hover:bg-teal-100"
                    >
                      {item}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-primary mb-8 text-center">
            How We Work
          </h3>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                title: "Consultation",
                desc: "We understand your requirements, market conditions, and specifications through detailed discussions.",
              },
              {
                step: "02",
                title: "Sourcing & Negotiation",
                desc: "Our team identifies the best suppliers, negotiates pricing, and arranges quality assurance inspections.",
              },
              {
                step: "03",
                title: "Delivery & Support",
                desc: "We manage logistics, documentation, and delivery while providing ongoing after-sales support.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="text-4xl font-bold text-teal-100 mb-3">
                  {item.step}
                </div>
                <h4 className="font-bold text-primary mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ScopePage>
  );
}

/* ───── CONTACT PAGE ───── */
function ContactPage() {
  return (
    <>
      <section className="pt-32 pb-20 sm:pt-40 sm:pb-28 bg-gradient-to-br from-muskas-dark via-muskas-green to-muskas-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--muskas-gold)_0%,_transparent_60%)]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Badge className="bg-white/15 text-white border-white/20 hover:bg-white/20 mb-6">
            Get in Touch
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Reach out to discuss your trading needs. We&apos;re ready to build a
            lasting partnership.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-primary mb-6">
                  Muskas (Hainan) Trading Co. Ltd
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-2">
                  穆斯卡斯（海南）贸易有限公司
                </p>
                <p className="text-sm text-muted-foreground">
                  Unified Social Credit Code: 91460000MAK1XHLY2L
                </p>
              </div>

              <Separator />

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Address</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Building 1, No. 223, Nanguang Center, Yongwan Road,
                      <br />
                      Xiuying District, Haikou City,
                      <br />
                      Hainan Province, China
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      海南省海口市秀英区永万路1号南光中心1号楼223
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Phone / WeChat</h4>
                    <a
                      href="weixin://dl/chat?18308901960"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      +86 183 0890 1960
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">WhatsApp</h4>
                    <a
                      href="https://wa.me/8618308901960"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-green-600 transition-colors"
                    >
                      +86 183 0890 1960
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Email</h4>
                    <p className="text-sm text-muted-foreground">
                      musa@muskasconsultants.com
                    </p>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="bg-muskas-cream rounded-xl p-5">
                <h4 className="font-semibold text-primary mb-2">
                  Legal Representative
                </h4>
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium">KASULE MUSA</span>
                  <br />
                  Registered with Hainan Administration for Market Regulation
                  <br />
                  <span className="text-xs">Established: December 8, 2025</span>
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <Card className="border-border/50">
                <CardContent className="p-6 sm:p-8">
                  <h3 className="text-xl font-bold text-primary mb-6">
                    Send Us a Message
                  </h3>
                  <form
                    className="space-y-5"
                    onSubmit={(e) => {
                      e.preventDefault();
                      alert("Thank you for your message! We will get back to you soon.");
                    }}
                  >
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-1"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">
                          Email *
                        </label>
                        <input
                          type="email"
                          required
                          className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-1"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-1"
                        placeholder="Your company name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">
                        Service Interest *
                      </label>
                      <select
                        required
                        className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-1"
                      >
                        <option value="">Select a service</option>
                        <option value="construction">
                          Construction Materials
                        </option>
                        <option value="import-export">Import & Export</option>
                        <option value="general">General Trading</option>
                        <option value="business-setup">Business Setup</option>
                        <option value="exclusive-rep">Exclusive Representative</option>
                        <option value="other">Other Inquiry</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">
                        Message *
                      </label>
                      <textarea
                        required
                        rows={5}
                        className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-1 resize-none"
                        placeholder="Tell us about your requirements..."
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                    >
                      Send Message <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* ───── BUSINESS SETUP PAGE ───── */
function BusinessSetupPage({ onNavigate }: { onNavigate: (page: Page) => void }) {
  const services = [
    {
      icon: Stamp,
      title: "Company Registration",
      desc: "Full company incorporation in Hainan, including WFOE (Wholly Foreign-Owned Enterprise), Joint Venture, or Representative Office setups. We handle name approval, articles of association, capital verification, and obtaining the business license from the local Administration for Market Regulation. Our team ensures your entity type is optimized for Hainan Free Trade Port policies, tax incentives, and your specific business objectives.",
      highlights: ["WFOE & JV Formation", "Name Approval", "Business License", "Capital Registration"],
    },
    {
      icon: FileText,
      title: "Accounting & Compliance",
      desc: "Ongoing accounting, bookkeeping, tax filing, and regulatory compliance services tailored for foreign-invested enterprises in China. We manage monthly financial statements, annual audits, tax declarations (corporate income tax, VAT, withholding tax), and ensure full compliance with Hainan's evolving financial regulations, so you can focus on growing your business without administrative burden.",
      highlights: ["Monthly Bookkeeping", "Tax Filing", "Annual Audit", "Regulatory Compliance"],
    },
    {
      icon: Landmark,
      title: "Office Setup",
      desc: "Finding and securing the right physical office space for your operations in Hainan. We assist with location scouting, lease negotiations, interior fit-out coordination, and ensuring the premises meet all regulatory requirements for business registration. Whether you need a registered address, shared workspace, or a dedicated commercial office, we handle every detail of establishing your physical presence.",
      highlights: ["Location Scouting", "Lease Negotiation", "Office Fit-out", "Registered Address"],
    },
    {
      icon: Users,
      title: "Staff Settling & HR Support",
      desc: "Comprehensive support for bringing your team to Hainan, including housing assistance, school search for dependents, local banking setup, SIM card registration, and orientation to life in Haikou. We act as your local HR partner, helping new employees and their families settle in smoothly so they can be productive from day one. Our onboarding support covers everything from airport pickup to understanding local customs and services.",
      highlights: ["Housing Assistance", "School Search", "Banking Setup", "City Orientation"],
    },
    {
      icon: Globe,
      title: "Immigration Guidance",
      desc: "Expert guidance navigating China's immigration process for foreign nationals, including work permit (Z visa) applications, residence permits, dependant visas, and permanent residency pathways. We liaise with the local Entry-Exit Administration Bureau on your behalf, prepare all required documentation, and ensure a smooth application process. Our team stays current with Hainan's special visa policies for the Free Trade Port.",
      highlights: ["Work Permits (Z Visa)", "Residence Permits", "Dependant Visas", "PR Pathway Guidance"],
    },
    {
      icon: Languages,
      title: "Document Translation & Apostille",
      desc: "Professional translation and legalization services for all documents required during your business setup and ongoing operations. We provide certified translations between Chinese, English, and other languages for contracts, certificates, and official documents. Our apostille and consular legalization services ensure your foreign documents are legally recognized in China, and Chinese documents are accepted abroad.",
      highlights: ["Certified Translation", "Apostille Services", "Consular Legalization", "Multi-language Support"],
    },
  ];

  return (
    <ScopePage
      title="Business Setup in Hainan"
      subtitle="End-to-end support for companies establishing operations in Hainan Free Trade Port — from registration to immigration."
      icon={Briefcase}
      colorClass="violet"
      heroGradient="bg-gradient-to-br from-violet-900 via-violet-800 to-muskas-dark"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl font-bold text-primary mb-4">
            Your Complete Hainan Launchpad
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Hainan Free Trade Port offers unprecedented opportunities for foreign
            businesses — from zero-tariff policies and reduced corporate tax
            rates to streamlined customs procedures. Muskas provides the
            on-the-ground expertise to help you navigate every step of
            establishing your business, so you can capitalize on these
            advantages from day one.
          </p>
        </div>

        <div className="space-y-6">
          {services.map((svc, i) => (
            <Card
              key={i}
              className="border-border/50 hover:shadow-md transition-shadow"
            >
              <CardContent className="p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row gap-5">
                  <div className="w-14 h-14 rounded-xl bg-violet-50 flex items-center justify-center flex-shrink-0">
                    <svc.icon className="h-7 w-7 text-violet-700" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-primary mb-3">
                      {svc.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {svc.desc}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {svc.highlights.map((h) => (
                        <Badge
                          key={h}
                          variant="secondary"
                          className="text-xs bg-violet-50 text-violet-700 hover:bg-violet-100"
                        >
                          {h}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 bg-gradient-to-r from-muskas-dark to-violet-900 rounded-2xl p-8 sm:p-12 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Ready to Establish Your Business in Hainan?
          </h3>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Submit an inquiry and our team will provide a customized roadmap for
            your business setup within 12 hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-muskas-gold hover:bg-muskas-gold/90 text-muskas-dark font-semibold px-10"
              onClick={() => {
                onNavigate("inquiry");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              Start Your Inquiry <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 hover:text-white"
              onClick={() => {
                onNavigate("contact");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              Contact Us Directly
            </Button>
          </div>
        </div>
      </div>
    </ScopePage>
  );
}

/* ───── EXCLUSIVE REPRESENTATIVE PAGE ───── */
function ExclusiveRepPage({ onNavigate }: { onNavigate: (page: Page) => void }) {
  const services = [
    {
      icon: Globe,
      title: "Market Entry Strategy",
      desc: "Comprehensive market analysis and go-to-market strategy development for foreign brands entering China. We assess market size, competitive landscape, consumer behavior, regulatory requirements, and pricing dynamics to create a tailored entry roadmap. Our team identifies the optimal market positioning, distribution channels, and launch timeline to maximize your brand's impact from day one in the Chinese market.",
      highlights: ["Market Research", "Competitive Analysis", "Entry Roadmap", "Pricing Strategy"],
    },
    {
      icon: Handshake,
      title: "Brand Representation & Distribution",
      desc: "Acting as your exclusive in-country representative, we manage all business development, distributor relationships, and sales channel partnerships on your behalf. We negotiate and manage contracts with Chinese distributors, retailers, and e-commerce platforms, ensuring your brand is represented professionally and consistently across all channels. Our on-the-ground team serves as your local face, building trust and credibility with Chinese business partners.",
      highlights: ["Distributor Management", "Sales Channels", "Contract Negotiation", "Brand Protection"],
    },
    {
      icon: TrendingUp,
      title: "Regulatory & Compliance Management",
      desc: "Navigating China's complex regulatory environment is critical for foreign brands. We manage product registration, labeling compliance, import certifications, quality standards (CCC, CIQ), and ongoing regulatory monitoring to ensure your products meet all Chinese legal requirements. Our team stays ahead of regulatory changes that could impact your business, providing proactive guidance to maintain full compliance at all times.",
      highlights: ["Product Registration", "Labeling Compliance", "Import Certification", "Regulatory Monitoring"],
    },
    {
      icon: Users,
      title: "Local Team & Operations",
      desc: "We build and manage your local team in China, handling recruitment, training, and day-to-day operations management. From sales representatives and account managers to logistics coordinators and customer service staff, we ensure you have the right people on the ground. Our HR management includes performance tracking, payroll administration, and cultural integration support so your China team operates as a seamless extension of your global organization.",
      highlights: ["Team Recruitment", "Training Programs", "Operations Management", "Performance Tracking"],
    },
    {
      icon: Building2,
      title: "Trade Show & Event Representation",
      desc: "China hosts some of the world's largest trade exhibitions — from the Canton Fair to industry-specific expos. We represent your brand at these critical events, managing booth presence, conducting meetings with potential buyers, collecting market intelligence, and generating qualified leads. Our bilingual team ensures effective communication and professional brand representation at every event, maximizing your return on exhibition investment.",
      highlights: ["Canton Fair", "Industry Expos", "Lead Generation", "Buyer Meetings"],
    },
    {
      icon: Shield,
      title: "Intellectual Property Protection",
      desc: "Protecting your brand in China requires proactive measures. We assist with trademark registration, IP monitoring, anti-counterfeiting enforcement, and domain name protection. Our legal network handles infringement cases, working with Chinese authorities and platforms like Taobao, JD.com, and WeChat to remove counterfeit listings and protect your brand reputation in the Chinese marketplace.",
      highlights: ["Trademark Registration", "Anti-Counterfeiting", "IP Monitoring", "Legal Enforcement"],
    },
  ];

  return (
    <ScopePage
      title="Exclusive China Representative"
      subtitle="Your trusted in-country partner representing foreign companies and brands across the Chinese market."
      icon={Crown}
      colorClass="rose"
      heroGradient="bg-gradient-to-br from-rose-900 via-rose-800 to-muskas-dark"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl font-bold text-primary mb-4">
            Your Brand, Our Expertise, One China Strategy
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Entering the Chinese market is complex — language barriers, regulatory
            hurdles, cultural nuances, and an unfamiliar business landscape can
            overwhelm even the most established international brands. As your
            exclusive China representative, Muskas eliminates these barriers,
            giving you a dedicated, experienced team on the ground that acts as
            an extension of your own organization. We protect your brand,
            manage your operations, and drive your growth in one of the world's
            largest consumer markets.
          </p>
        </div>

        <div className="space-y-6">
          {services.map((svc, i) => (
            <Card
              key={i}
              className="border-border/50 hover:shadow-md transition-shadow"
            >
              <CardContent className="p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row gap-5">
                  <div className="w-14 h-14 rounded-xl bg-rose-50 flex items-center justify-center flex-shrink-0">
                    <svc.icon className="h-7 w-7 text-rose-700" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-primary mb-3">
                      {svc.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {svc.desc}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {svc.highlights.map((h) => (
                        <Badge
                          key={h}
                          variant="secondary"
                          className="text-xs bg-rose-50 text-rose-700 hover:bg-rose-100"
                        >
                          {h}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 bg-gradient-to-r from-muskas-dark to-rose-900 rounded-2xl p-8 sm:p-12 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Represent Your Brand in China
          </h3>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Let us be your exclusive China partner. Submit an inquiry and
            receive a customized representation proposal within 12 hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-muskas-gold hover:bg-muskas-gold/90 text-muskas-dark font-semibold px-10"
              onClick={() => {
                onNavigate("inquiry");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              Start Your Inquiry <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 hover:text-white"
              onClick={() => {
                onNavigate("contact");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              Contact Us Directly
            </Button>
          </div>
        </div>
      </div>
    </ScopePage>
  );
}

function InquiryPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    inquiryType: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (data.success) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMsg(data.error || "Something went wrong.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please check your connection and try again.");
    }
  };

  if (status === "success") {
    return (
      <>
        <section className="pt-32 pb-20 sm:pt-40 sm:pb-28 bg-gradient-to-br from-muskas-dark via-muskas-green to-muskas-dark relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--muskas-gold)_0%,_transparent_60%)]" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Badge className="bg-white/15 text-white border-white/20 hover:bg-white/20 mb-6">
              Inquiry Submitted
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Inquiry Received
            </h1>
            <p className="text-xl text-white/80 max-w-2xl">
              Thank you for your interest in our services.
            </p>
          </div>
        </section>
        <section className="py-20 sm:py-28 bg-white">
          <div className="max-w-lg mx-auto px-4 text-center">
            <div className="w-20 h-20 mx-auto rounded-full bg-emerald-50 flex items-center justify-center mb-6">
              <CheckCircle2 className="h-10 w-10 text-emerald-600" />
            </div>
            <h2 className="text-2xl font-bold text-primary mb-4">
              Thank You, {formData.fullName}!
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Your inquiry has been received and a confirmation email has been sent to{" "}
              <strong>{formData.email}</strong>.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our team will review your request and respond within{" "}
              <strong>12 hours</strong> with a detailed reply tailored to your needs.
            </p>
            <div className="bg-muskas-cream rounded-xl p-6 mb-8 text-left">
              <h4 className="font-semibold text-primary mb-3 text-sm">
                Need a Faster Response?
              </h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p className="flex items-center gap-2">
                  <Phone className="h-4 w-4" /> Phone / WeChat:{" "}
                  <strong>+86 183 0890 1960</strong>
                </p>
                <p className="flex items-center gap-2">
                  <MessageCircle className="h-4 w-4" /> WhatsApp:{" "}
                  <strong>+86 183 0890 1960</strong>
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="h-4 w-4" /> Email:{" "}
                  <strong>musa@muskasconsultants.com</strong>
                </p>
              </div>
            </div>
            <Button
              variant="outline"
              onClick={() => {
                setStatus("idle");
                setFormData({
                  fullName: "",
                  email: "",
                  phone: "",
                  company: "",
                  service: "",
                  inquiryType: "",
                  message: "",
                });
              }}
            >
              Submit Another Inquiry
            </Button>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 sm:pt-40 sm:pb-28 bg-gradient-to-br from-muskas-dark via-muskas-green to-muskas-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top_right,_var(--muskas-gold)_0%,_transparent_60%)]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Badge className="bg-white/15 text-white border-white/20 hover:bg-white/20 mb-6">
            Get a Quote
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Make an Inquiry
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Tell us about your requirements and our team will provide a detailed
            response within 12 hours.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Why inquire with us */}
          <div className="grid sm:grid-cols-3 gap-4 mb-12">
            {[
              {
                title: "Fast Response",
                desc: "We reply within 12 hours with a tailored proposal.",
              },
              {
                title: "Expert Guidance",
                desc: "Our team provides professional recommendations for your needs.",
              },
              {
                title: "No Obligation",
                desc: "All inquiries are free. No commitment required.",
              },
            ].map((item) => (
              <div key={item.title} className="text-center p-4">
                <h4 className="font-semibold text-primary text-sm mb-1">
                  {item.title}
                </h4>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>

          <Card className="border-border/50">
            <CardContent className="p-6 sm:p-8">
              <h2 className="text-xl font-bold text-primary mb-2">Inquiry Form</h2>
              <p className="text-sm text-muted-foreground mb-8">
                Fields marked with * are required.
              </p>

              {status === "error" && (
                <div className="mb-6 flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-red-800">
                      Submission Failed
                    </p>
                    <p className="text-sm text-red-600 mt-1">{errorMsg}</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Row 1: Name + Email */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-1"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-1"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>

                {/* Row 2: Phone + Company */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-1"
                      placeholder="+1 234 567 8900"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-1"
                      placeholder="Your company name"
                    />
                  </div>
                </div>

                {/* Row 3: Service + Inquiry Type */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">
                      Service Interest *
                    </label>
                    <select
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-1"
                    >
                      <option value="">Select a service</option>
                      <option value="construction">Construction Materials</option>
                      <option value="import-export">Import &amp; Export</option>
                      <option value="general">General Trading</option>
                      <option value="business-setup">Business Setup in Hainan</option>
                      <option value="exclusive-rep">Exclusive China Representative</option>
                      <option value="other">Other / Multiple Services</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">
                      Inquiry Type *
                    </label>
                    <select
                      name="inquiryType"
                      required
                      value={formData.inquiryType}
                      onChange={handleChange}
                      className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-1"
                    >
                      <option value="">Select inquiry type</option>
                      <option value="Price Quote">Price Quote / Quotation</option>
                      <option value="Product Information">Product Information</option>
                      <option value="Partnership">Partnership / Collaboration</option>
                      <option value="Bulk Order">Bulk Order Inquiry</option>
                      <option value="General Question">General Question</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    Detailed Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-1 resize-none"
                    placeholder="Please describe your requirements in detail — include product specifications, quantities, delivery location, timeline, and any other relevant information..."
                  />
                </div>

                {/* Submit */}
                <Button
                  type="submit"
                  size="lg"
                  disabled={status === "loading"}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Submitting Inquiry...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Submit Inquiry
                    </>
                  )}
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  By submitting, you agree to be contacted by Muskas Trading
                  regarding your inquiry. Your information is kept confidential.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}

/* ───── FOOTER ───── */
function Footer({ onNavigate }: { onNavigate: (page: Page) => void }) {
  return (
    <footer className="bg-muskas-dark text-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/logo.png"
                alt="Muskas"
                className="h-10 w-auto brightness-0 invert"
              />
              <div>
                <p className="text-white font-semibold text-sm">Muskas Hainan</p>
                <p className="text-white/40 text-xs tracking-widest uppercase">
                  Hainan Trading
                </p>
              </div>
            </div>
            <p className="text-sm text-white/60 leading-relaxed">
              Your trusted partner for construction materials, import &amp;
              export, and general trading services.
            </p>
            {/* Social Media */}
            <div className="flex items-center gap-3 mt-4">
              <a
                href="https://www.instagram.com/muskashainan/"
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-muskas-gold/20 hover:text-muskas-gold transition-all"
                aria-label="Instagram"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61591720702223"
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-muskas-gold/20 hover:text-muskas-gold transition-all"
                aria-label="Facebook"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a
                href="https://www.tiktok.com/@muskashainan"
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-muskas-gold/20 hover:text-muskas-gold transition-all"
                aria-label="TikTok"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
              </a>
              <a
                href="https://x.com/muskashainan"
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-muskas-gold/20 hover:text-muskas-gold transition-all"
                aria-label="X"
              >
                <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a
                href="https://www.youtube.com/@muskashainan"
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-muskas-gold/20 hover:text-muskas-gold transition-all"
                aria-label="YouTube"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">
              Services
            </h4>
            <ul className="space-y-2">
              {NAV_ITEMS.filter((n) => n.key !== "home").map((item) => (
                <li key={item.key}>
                  <button
                    onClick={() => {
                      onNavigate(item.key);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="text-sm text-white/60 hover:text-muskas-gold transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5" />
                <a href="weixin://dl/chat?18308901960" className="hover:text-muskas-gold transition-colors">
                  +86 183 0890 1960
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="h-3.5 w-3.5" />
                <a href="https://wa.me/8618308901960" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">
                  WhatsApp
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5" />
                musa@muskasconsultants.com
              </li>
            </ul>
          </div>

          {/* Location */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Location</h4>
            <p className="text-sm text-white/60 leading-relaxed">
              Building 1, No. 223, Nanguang Center,
              <br />
              Yongwan Road, Xiuying District,
              <br />
              Haikou, Hainan, China
            </p>
          </div>
        </div>

        <Separator className="my-8 bg-white/10" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>&copy; {new Date().getFullYear()} Muskas (Hainan) Trading Company Ltd. All rights reserved.</p>
          <p>穆斯卡斯（海南）贸易有限公司</p>
        </div>
      </div>
    </footer>
  );
}

/* ───── MAIN APP ───── */
export default function Home() {
  const [currentPage, setCurrentPage] = useState<Page>("home");

  const handleNavigate = useCallback((page: Page) => {
    setCurrentPage(page);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <NavBar currentPage={currentPage} onNavigate={handleNavigate} />

      <main className="flex-1">
        {currentPage === "home" && <HomePage onNavigate={handleNavigate} />}
        {currentPage === "construction" && <ConstructionMaterialsPage />}
        {currentPage === "import-export" && <ImportExportPage />}
        {currentPage === "general-trading" && <GeneralTradingPage />}
        {currentPage === "business-setup" && <BusinessSetupPage onNavigate={handleNavigate} />}
        {currentPage === "exclusive-rep" && <ExclusiveRepPage onNavigate={handleNavigate} />}
        {currentPage === "inquiry" && <InquiryPage />}
        {currentPage === "contact" && <ContactPage />}
      </main>

      <Footer onNavigate={handleNavigate} />
    </div>
  );
}