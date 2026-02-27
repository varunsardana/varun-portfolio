import Header from "@/components/Header";
import RaceCard from "@/components/RaceCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { races } from "@/data/mockData";

const Races = () => {
  const upcomingRaces = races.filter((race) => race.status === "upcoming");
  const completedRaces = races.filter((race) => race.status === "completed");

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Race Calendar</h1>
          <p className="text-muted-foreground">
            Track all races throughout the 2024 season
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList>
            <TabsTrigger value="all">All Races</TabsTrigger>
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="mt-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {races.map((race) => (
                <RaceCard key={race.id} race={race} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="upcoming" className="mt-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingRaces.map((race) => (
                <RaceCard key={race.id} race={race} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="completed" className="mt-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {completedRaces.map((race) => (
                <RaceCard key={race.id} race={race} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Races;
