import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Trophy } from "lucide-react";
import { Race } from "@/data/mockData";
import { format } from "date-fns";

interface RaceCardProps {
  race: Race;
}

const RaceCard = ({ race }: RaceCardProps) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1">
      <div className={`h-2 ${race.status === "completed" ? "bg-primary" : "bg-muted"}`} />
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <h3 className="font-bold text-lg">{race.name}</h3>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>{race.location}</span>
            </div>
          </div>
          <Badge variant={race.status === "completed" ? "default" : "secondary"}>
            {race.status}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="flex items-center gap-2 text-sm">
          <Calendar className="h-4 w-4 text-muted-foreground" />
          <span>{format(new Date(race.date), "MMMM d, yyyy")}</span>
        </div>
        <p className="text-sm text-muted-foreground">{race.circuit}</p>
        {race.winner && (
          <div className="flex items-center gap-2 mt-3 pt-3 border-t">
            <Trophy className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">Winner: {race.winner}</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default RaceCard;
