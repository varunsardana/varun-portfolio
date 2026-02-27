import { Card } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

interface ExperienceCardProps {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

const ExperienceCard = ({ title, company, location, period, description }: ExperienceCardProps) => {
  return (
    <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-primary">
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
          <Briefcase className="h-6 w-6 text-primary" />
        </div>
        
        <div className="flex-1">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
            <h3 className="text-xl font-bold">{title}</h3>
            <span className="text-sm text-muted-foreground">{period}</span>
          </div>
          
          <p className="text-primary font-semibold mb-1">{company}</p>
          <p className="text-sm text-muted-foreground mb-4">{location}</p>
          
          <ul className="space-y-2">
            {description.map((item, index) => (
              <li key={index} className="flex gap-2 text-muted-foreground">
                <span className="text-primary font-bold mt-1">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  );
};

export default ExperienceCard;
