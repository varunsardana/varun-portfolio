import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Trophy, Calendar, Users } from "lucide-react";
import heroImage from "@/assets/f1-hero.jpg";
import { drivers, races } from "@/data/mockData";

const Index = () => {
  const upcomingRace = races.find((race) => race.status === "upcoming");
  const topDriver = drivers[0];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/50" />
        </div>
        
        <div className="container relative z-10 text-center space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            FORMULA 1 <span className="text-primary">TRACKER</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Track races, drivers, and teams throughout the season. Stay updated with the latest stats and standings.
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/races">
              <Button size="lg" className="font-bold">
                View Races
              </Button>
            </Link>
            <Link to="/drivers">
              <Button size="lg" variant="outline" className="font-bold">
                View Drivers
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 border-y bg-muted/50">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 rounded-full bg-primary flex items-center justify-center">
                <Trophy className="h-8 w-8 text-primary-foreground" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Championship Leader</p>
                <p className="text-2xl font-bold">{topDriver.name}</p>
                <p className="text-sm text-primary">{topDriver.points} points</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 rounded-full bg-primary flex items-center justify-center">
                <Calendar className="h-8 w-8 text-primary-foreground" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Next Race</p>
                <p className="text-2xl font-bold">{upcomingRace?.name}</p>
                <p className="text-sm text-primary">{upcomingRace?.location}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 rounded-full bg-primary flex items-center justify-center">
                <Users className="h-8 w-8 text-primary-foreground" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Drivers</p>
                <p className="text-2xl font-bold">{drivers.length}</p>
                <p className="text-sm text-primary">Active this season</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Season Overview */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center">2024 Season</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-8 border rounded-lg bg-card hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-4">Races Completed</h3>
              <p className="text-5xl font-bold text-primary mb-2">
                {races.filter((r) => r.status === "completed").length}
              </p>
              <p className="text-muted-foreground">
                {races.filter((r) => r.status === "upcoming").length} races remaining
              </p>
            </div>
            
            <div className="p-8 border rounded-lg bg-card hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-4">Total Points</h3>
              <p className="text-5xl font-bold text-primary mb-2">
                {drivers.reduce((acc, d) => acc + d.points, 0)}
              </p>
              <p className="text-muted-foreground">
                Awarded across all drivers
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
