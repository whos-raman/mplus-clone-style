import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Star, ArrowRight } from "lucide-react";

interface PricingBannerProps {
  price: string;
  title: string;
  subtitle: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

export const PricingBanner = ({
  price,
  title,
  subtitle,
  buttonText = "Book Now",
  onButtonClick,
}: PricingBannerProps) => {
  return (
    <Card className="relative overflow-hidden bg-gradient-to-r from-primary via-primary to-orange-500 border-none">
      <div className="absolute inset-0 bg-white/10 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />
      
      <div className="relative p-8 text-center text-white">
        <div className="flex items-center justify-center gap-2 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        
        <h2 className="text-3xl font-bold mb-2">
          {title} <span className="text-yellow-300">{price}</span>
        </h2>
        
        <p className="text-lg mb-6 text-white/90">
          {subtitle}
        </p>
        
        <Button 
          variant="secondary"
          size="lg"
          className="bg-white text-primary hover:bg-white/90 font-semibold group"
          onClick={onButtonClick}
        >
          {buttonText}
          <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </Card>
  );
};