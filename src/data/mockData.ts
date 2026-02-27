export interface Driver {
  id: string;
  name: string;
  number: number;
  team: string;
  nationality: string;
  points: number;
  wins: number;
  podiums: number;
}

export interface Team {
  id: string;
  name: string;
  points: number;
  wins: number;
  color: string;
}

export interface Race {
  id: string;
  name: string;
  location: string;
  date: string;
  circuit: string;
  status: "upcoming" | "completed";
  winner?: string;
}

export const drivers: Driver[] = [
  { id: "1", name: "Max Verstappen", number: 1, team: "Red Bull Racing", nationality: "Netherlands", points: 575, wins: 19, podiums: 21 },
  { id: "2", name: "Sergio Perez", number: 11, team: "Red Bull Racing", nationality: "Mexico", points: 285, wins: 2, podiums: 8 },
  { id: "3", name: "Lewis Hamilton", number: 44, team: "Mercedes", nationality: "United Kingdom", points: 234, wins: 0, podiums: 5 },
  { id: "4", name: "Fernando Alonso", number: 14, team: "Aston Martin", nationality: "Spain", points: 206, wins: 0, podiums: 8 },
  { id: "5", name: "Charles Leclerc", number: 16, team: "Ferrari", nationality: "Monaco", points: 206, wins: 1, podiums: 6 },
  { id: "6", name: "Carlos Sainz", number: 55, team: "Ferrari", nationality: "Spain", points: 200, wins: 1, podiums: 7 },
  { id: "7", name: "George Russell", number: 63, team: "Mercedes", nationality: "United Kingdom", points: 175, wins: 0, podiums: 3 },
  { id: "8", name: "Lando Norris", number: 4, team: "McLaren", nationality: "United Kingdom", points: 205, wins: 0, podiums: 7 },
];

export const teams: Team[] = [
  { id: "1", name: "Red Bull Racing", points: 860, wins: 21, color: "#1E41FF" },
  { id: "2", name: "Mercedes", points: 409, wins: 0, color: "#00D2BE" },
  { id: "3", name: "Ferrari", points: 406, wins: 2, color: "#DC0000" },
  { id: "4", name: "McLaren", points: 302, wins: 0, color: "#FF8700" },
  { id: "5", name: "Aston Martin", points: 280, wins: 0, color: "#006F62" },
  { id: "6", name: "Alpine", points: 120, wins: 0, color: "#0090FF" },
];

export const races: Race[] = [
  { id: "1", name: "Bahrain Grand Prix", location: "Sakhir", date: "2024-03-02", circuit: "Bahrain International Circuit", status: "completed", winner: "Max Verstappen" },
  { id: "2", name: "Saudi Arabian Grand Prix", location: "Jeddah", date: "2024-03-09", circuit: "Jeddah Corniche Circuit", status: "completed", winner: "Max Verstappen" },
  { id: "3", name: "Australian Grand Prix", location: "Melbourne", date: "2024-03-24", circuit: "Albert Park Circuit", status: "completed", winner: "Carlos Sainz" },
  { id: "4", name: "Japanese Grand Prix", location: "Suzuka", date: "2024-04-07", circuit: "Suzuka Circuit", status: "completed", winner: "Max Verstappen" },
  { id: "5", name: "Chinese Grand Prix", location: "Shanghai", date: "2024-04-21", circuit: "Shanghai International Circuit", status: "upcoming" },
  { id: "6", name: "Miami Grand Prix", location: "Miami", date: "2024-05-05", circuit: "Miami International Autodrome", status: "upcoming" },
  { id: "7", name: "Emilia Romagna Grand Prix", location: "Imola", date: "2024-05-19", circuit: "Autodromo Enzo e Dino Ferrari", status: "upcoming" },
  { id: "8", name: "Monaco Grand Prix", location: "Monte Carlo", date: "2024-05-26", circuit: "Circuit de Monaco", status: "upcoming" },
];
