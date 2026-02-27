import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Award, Flag, ArrowLeft } from "lucide-react";
import { drivers } from "@/data/mockData";

const DriverDetail = () => {
  const { id } = useParams();
  const driver = drivers.find((d) => d.id === id);

  if (!driver) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container py-12 text-center">
          <h1 className="text-2xl font-bold">Driver not found</h1>
          <Link to="/drivers">
            <Button className="mt-4">Back to Drivers</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container py-12">
        <Link to="/drivers">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Drivers
          </Button>
        </Link>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <Card className="overflow-hidden">
              <div className="h-32 bg-gradient-to-r from-primary to-primary/70" />
              <CardHeader className="-mt-16">
                <div className="flex items-end gap-6">
                  <div className="h-32 w-32 rounded-full border-4 border-background bg-primary flex items-center justify-center">
                    <span className="text-4xl font-bold text-primary-foreground">
                      {driver.number}
                    </span>
                  </div>
                  <div className="mb-4">
                    <h1 className="text-4xl font-bold mb-1">{driver.name}</h1>
                    <p className="text-xl text-muted-foreground">{driver.team}</p>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Season Statistics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="text-center p-4 border rounded-lg">
                    <p className="text-3xl font-bold text-primary">{driver.points}</p>
                    <p className="text-sm text-muted-foreground mt-1">Points</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <div className="flex items-center justify-center gap-2">
                      <Trophy className="h-5 w-5 text-primary" />
                      <p className="text-3xl font-bold">{driver.wins}</p>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">Wins</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <div className="flex items-center justify-center gap-2">
                      <Award className="h-5 w-5 text-primary" />
                      <p className="text-3xl font-bold">{driver.podiums}</p>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">Podiums</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <div className="flex items-center justify-center gap-2">
                      <Flag className="h-5 w-5 text-primary" />
                      <p className="text-3xl font-bold">
                        {Math.floor((driver.wins / 22) * 100)}%
                      </p>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">Win Rate</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Driver Info</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground">Number</p>
                  <p className="text-xl font-bold">#{driver.number}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Nationality</p>
                  <p className="text-xl font-bold">{driver.nationality}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Team</p>
                  <p className="text-xl font-bold">{driver.team}</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Championship Position</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <p className="text-6xl font-bold text-primary">
                    {drivers.findIndex((d) => d.id === driver.id) + 1}
                  </p>
                  <p className="text-muted-foreground mt-2">Current Standing</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DriverDetail;
