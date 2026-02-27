import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Award } from "lucide-react";
import { Driver } from "@/data/mockData";
import { Link } from "react-router-dom";

interface DriverCardProps {
  driver: Driver;
  position: number;
}

const DriverCard = ({ driver, position }: DriverCardProps) => {
  return (
    <Link to={`/drivers/${driver.id}`}>
      <Card className="overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1">
        <div className="h-1 bg-primary" />
        <CardContent className="pt-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-lg">
                {position}
              </div>
              <div>
                <h3 className="font-bold text-lg">{driver.name}</h3>
                <p className="text-sm text-muted-foreground">{driver.team}</p>
              </div>
            </div>
            <Badge variant="secondary" className="font-bold">
              #{driver.number}
            </Badge>
          </div>
          
          <div className="grid grid-cols-3 gap-4 pt-4 border-t">
            <div className="text-center">
              <p className="text-2xl font-bold text-primary">{driver.points}</p>
              <p className="text-xs text-muted-foreground">Points</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1">
                <Trophy className="h-4 w-4 text-primary" />
                <p className="text-2xl font-bold">{driver.wins}</p>
              </div>
              <p className="text-xs text-muted-foreground">Wins</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1">
                <Award className="h-4 w-4 text-primary" />
                <p className="text-2xl font-bold">{driver.podiums}</p>
              </div>
              <p className="text-xs text-muted-foreground">Podiums</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default DriverCard;
