import { BorderRotate } from "@/components/ui/animated-gradient-border";

const BRAND_GRADIENT = { primary: "#a65700", secondary: "#e0922c", accent: "#fbb75d" };

interface AboutBlockProps {
  title: string;
  description: string;
}

export function AboutBlock({ title, description }: AboutBlockProps) {
  return (
    <BorderRotate
      className="card-lift"
      animationMode="rotate-on-hover"
      gradientColors={BRAND_GRADIENT}
      backgroundColor="#101c16"
      borderWidth={1}
      borderRadius={3}
    >
      <div className="about-block">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </BorderRotate>
  );
}
