import Header from "@/components/Header";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Trophy, Award } from "lucide-react";
import { teams } from "@/data/mockData";

const Teams = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Constructor Standings</h1>
          <p className="text-muted-foreground">
            Team championship standings for the 2024 season
          </p>
        </div>

        <div className="space-y-4">
          {teams.map((team, index) => (
            <Card key={team.id} className="overflow-hidden transition-all hover:shadow-lg">
              <div className="h-2" style={{ backgroundColor: team.color }} />
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-xl">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{team.name}</h3>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-primary">{team.points}</p>
                    <p className="text-sm text-muted-foreground">Points</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2">
                      <Trophy className="h-5 w-5 text-primary" />
                      <p className="text-3xl font-bold">{team.wins}</p>
                    </div>
                    <p className="text-sm text-muted-foreground">Wins</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2">
                      <Award className="h-5 w-5 text-primary" />
                      <p className="text-3xl font-bold">{Math.floor(team.points / 25)}</p>
                    </div>
                    <p className="text-sm text-muted-foreground">Podiums</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Teams;
