import Header from "@/components/Header";
import DriverCard from "@/components/DriverCard";
import { drivers } from "@/data/mockData";

const Drivers = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Driver Standings</h1>
          <p className="text-muted-foreground">
            Current championship standings for the 2024 season
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {drivers.map((driver, index) => (
            <DriverCard key={driver.id} driver={driver} position={index + 1} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Drivers;
