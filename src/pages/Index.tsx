import { useState } from "react";
import { HeroSection } from "@/components/ui/hero-section";
import { ServiceCard } from "@/components/ui/service-card";
import { PricingBanner } from "@/components/ui/pricing-banner";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import {
  Wrench,
  Droplets,
  Zap,
  Wind,
  Paintbrush,
  Sparkles,
  ShieldCheck,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
// import logo from "@/assets/logo.png";

const services = [
  {
    icon: Wind,
    title: "Air Conditioning",
    description: "Complete AC installation, maintenance, and repair services",
  },
  {
    icon: Droplets,
    title: "Plumbing",
    description: "Professional plumbing solutions for all your needs",
  },
  {
    icon: Wrench,
    title: "Handyman",
    description: "General maintenance and repair services",
  },
  {
    icon: Zap,
    title: "Electrical",
    description: "Safe and reliable electrical installations and repairs",
  },
  {
    icon: Sparkles,
    title: "Cleaning",
    description: "Deep cleaning services for homes and offices",
  },
  {
    icon: Paintbrush,
    title: "Painting",
    description: "Interior and exterior painting services",
  },
  {
    icon: ShieldCheck,
    title: "Water Tank Cleaning",
    description: "Professional water tank cleaning and sanitization",
  },
  {
    icon: Wrench,
    title: "General Maintenance",
    description: "Complete property maintenance solutions",
  },
];

const Index = () => {
  const { toast } = useToast();

  const handleGetQuote = () => {
    toast({
      title: "Quote Request",
      description: "We'll contact you within 24 hours for a free quote!",
    });
  };

  const handleCallNow = () => {
    window.open("tel:+971123456789", "_self");
  };

  const handleBookService = () => {
    toast({
      title: "Service Booking",
      description: "Redirecting to our booking system...",
    });
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container flex h-16 items-center justify-between px-6">
          <div className="flex items-center space-x-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">
              MPlus
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Services
            </a>
            <a href="#about" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#contact" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Contact
            </a>
            <Button variant="outline" size="sm">
              <Phone className="mr-2 h-4 w-4" />
              Call Now
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <HeroSection
        title="Move In, Move Out Services"
        subtitle="Providing preventative and corrective maintenance so your property is ready for the next tenant or guest."
        onPrimaryClick={handleGetQuote}
        onSecondaryClick={handleCallNow}
      />

      {/* Pricing Banner */}
      <section className="py-12 bg-muted/30">
        <div className="container px-6">
          <PricingBanner
            title="High Quality Workmanship from"
            price="AED 180 only!"
            subtitle="Our new starting price for home and property maintenance callouts. *Terms & conditions apply. Price inclusive of VAT."
            onButtonClick={handleBookService}
          />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-background">
        <div className="container px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Our Professional Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive home and property maintenance solutions delivered by skilled professionals
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                onClick={() => {
                  toast({
                    title: service.title,
                    description: `Learn more about our ${service.title.toLowerCase()} services`,
                  });
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted/30">
        <div className="container px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-muted-foreground">
              Ready to book a service? Contact us today for a free quote
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white mb-4">
                <Phone className="h-6 w-6" />
              </div>
              <h3 className="font-semibold mb-2">Call Us</h3>
              <p className="text-muted-foreground">+971 12 345 6789</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white mb-4">
                <Mail className="h-6 w-6" />
              </div>
              <h3 className="font-semibold mb-2">Email Us</h3>
              <p className="text-muted-foreground">info@mplus.ae</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white mb-4">
                <MapPin className="h-6 w-6" />
              </div>
              <h3 className="font-semibold mb-2">Visit Us</h3>
              <p className="text-muted-foreground">Dubai, UAE</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button variant="hero" size="lg" onClick={handleGetQuote}>
              Get Your Free Quote Today
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-background py-12">
        <div className="container px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="text-2xl font-bold bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent mb-4">
                MPlus
              </div>
              <p className="text-muted-foreground mb-4">
                Your trusted partner for professional home and property maintenance services in Dubai and across the UAE.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Air Conditioning</li>
                <li>Plumbing</li>
                <li>Electrical</li>
                <li>Cleaning</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>+971 12 345 6789</li>
                <li>info@mplus.ae</li>
                <li>Dubai, UAE</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 MPlus. All rights reserved. Licensed and insured professional services.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;