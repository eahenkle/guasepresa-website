import { LucideIcon } from "lucide-react";
import { BorderRotate } from "@/components/ui/animated-gradient-border";

const BRAND_GRADIENT = { primary: "#a65700", secondary: "#e0922c", accent: "#fbb75d" };

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <BorderRotate
      className="card-lift"
      animationMode="rotate-on-hover"
      gradientColors={BRAND_GRADIENT}
      backgroundColor="#060907"
      borderWidth={1}
      borderRadius={3}
    >
      <article className="service-block">
        <div className="service-block__icon">
          <Icon size={22} strokeWidth={1.8} />
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
      </article>
    </BorderRotate>
  );
}
