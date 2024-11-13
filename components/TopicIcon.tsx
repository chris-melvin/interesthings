import {
  Brain,
  Building2,
  Bus,
  Cloud,
  Compass,
  Code,
  Fish,
  FlaskConical,
  Globe,
  History,
  Languages,
  Leaf,
  MessageSquare,
  Microscope,
  Rocket,
  Shapes,
  Sword,
  TreePine,
  Users,
  Zap,
} from "lucide-react";

const iconMap = {
  "animal-behavior": Users,
  architecture: Building2,
  astronomy: Rocket,
  biology: Microscope,
  botany: Leaf,
  culture: Globe,
  ecology: TreePine,
  entomology: Fish,
  exploration: Compass,
  history: History,
  language: Languages,
  mathematics: Shapes,
  medicine: FlaskConical,
  meteorology: Cloud,
  physics: Zap,
  technology: Code,
  transportation: Bus,
  zoology: Brain,
  Paleontology: History,
};

export type TopicKey = keyof typeof iconMap;

interface TopicIconProps {
  topic: TopicKey;
  className?: string;
  color?: string;
}

export function TopicIcon({ topic, className, color }: TopicIconProps) {
  const IconComponent = iconMap[topic] || MessageSquare;
  const tooltipText = topic
    .replace(/-/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());

  return (
    <span className="flex items-center" title={tooltipText}>
      <IconComponent className={className} style={{ color }} />
      <span className="sr-only ">{tooltipText}</span>
    </span>
  );
}
