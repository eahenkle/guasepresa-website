import { BorderRotate } from "@/components/ui/animated-gradient-border";

const BRAND_GRADIENT = { primary: "#a65700", secondary: "#e0922c", accent: "#fbb75d" };

interface ServiceMoreCardProps {
  title: string;
  items: string[];
  href: string;
  linkLabel: string;
}

export function ServiceMoreCard({ title, items, href, linkLabel }: ServiceMoreCardProps) {
  return (
    <BorderRotate
      className="card-lift"
      animationMode="rotate-on-hover"
      gradientColors={BRAND_GRADIENT}
      backgroundColor="#0f1a14"
      borderWidth={1}
      borderRadius={3}
    >
      <div className="service-more">
        <h3>{title}</h3>
        <ul>
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <a href={href}>{linkLabel}</a>
      </div>
    </BorderRotate>
  );
}
