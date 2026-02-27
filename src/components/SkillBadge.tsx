import { Badge } from "@/components/ui/badge";

interface SkillBadgeProps {
  skill: string;
  variant?: "primary" | "accent";
}

const SkillBadge = ({ skill, variant = "primary" }: SkillBadgeProps) => {
  return (
    <Badge 
      className={`px-4 py-2 text-sm font-medium transition-all hover:scale-110 hover:shadow-md cursor-default ${
        variant === "accent" 
          ? "bg-accent/10 text-accent border-accent/30 hover:bg-accent hover:text-accent-foreground" 
          : "bg-primary/10 text-primary border-primary/30 hover:bg-primary hover:text-primary-foreground"
      }`}
      variant="outline"
    >
      {skill}
    </Badge>
  );
};

export default SkillBadge;
