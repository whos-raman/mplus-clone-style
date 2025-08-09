import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description?: string;
  className?: string;
  onClick?: () => void;
}

export const ServiceCard = ({ icon: Icon, title, description, className, onClick }: ServiceCardProps) => {
  return (
    <Card 
      className={cn(
        "group cursor-pointer transition-all duration-300 hover:shadow-[var(--shadow-service)] bg-[var(--service-bg)] hover:bg-[var(--service-hover)] border-border/50",
        className
      )}
      onClick={onClick}
    >
      <CardContent className="p-6 text-center">
        <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-primary to-orange-500 text-white transition-transform duration-300 group-hover:scale-110">
          <Icon className="h-8 w-8" />
        </div>
        <h3 className="mb-2 text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>
        {description && (
          <p className="text-sm text-muted-foreground">
            {description}
          </p>
        )}
      </CardContent>
    </Card>
  );
};