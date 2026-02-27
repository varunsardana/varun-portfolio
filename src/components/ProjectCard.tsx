import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  github: string;
  period: string;
}

const ProjectCard = ({ title, description, tech, github, period }: ProjectCardProps) => {
  return (
    <Card className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary group">
      <div className="space-y-4">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{title}</h3>
          <a href={github} target="_blank" rel="noopener noreferrer">
            <Button size="icon" variant="ghost" className="hover:bg-primary hover:text-primary-foreground transition-all">
              <Github className="h-5 w-5" />
            </Button>
          </a>
        </div>
        
        <p className="text-sm text-muted-foreground">{period}</p>
        
        <p className="text-muted-foreground leading-relaxed">{description}</p>
        
        <div className="flex flex-wrap gap-2">
          {tech.map((t) => (
            <Badge key={t} variant="secondary" className="font-medium">
              {t}
            </Badge>
          ))}
        </div>
        
        <a href={github} target="_blank" rel="noopener noreferrer" className="block">
          <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all">
            <ExternalLink className="mr-2 h-4 w-4" />
            View on GitHub
          </Button>
        </a>
      </div>
    </Card>
  );
};

export default ProjectCard;
