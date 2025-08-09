import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import heroBackground from "@/assets/hero-bg.png";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

export const HeroSection = ({
  title,
  subtitle,
  primaryButtonText = "Get a Quote",
  secondaryButtonText = "Call Now",
  onPrimaryClick,
  onSecondaryClick,
}: HeroSectionProps) => {
  return (
    <div 
      className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-service-bg to-background"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-background/95 to-background/90" />
      
      <div className="relative z-10 container px-6 text-center">
        <div className="mx-auto max-w-4xl space-y-8">
          <h1 className="text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground sm:text-2xl">
            {subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="hero"
              size="lg"
              className="group min-w-[180px]"
              onClick={onPrimaryClick}
            >
              {primaryButtonText}
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button 
              variant="secondary"
              size="lg"
              className="min-w-[180px]"
              onClick={onSecondaryClick}
            >
              <Phone className="mr-2 h-5 w-5" />
              {secondaryButtonText}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};