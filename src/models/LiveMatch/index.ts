export interface Match {
    matchNumber: number;
    id: number;
    date: string;
    time: string;
    team1: string;
    team1Logo: string;
    team2: string;
    team2Logo: string;
    venue: string;
  }
  
  export interface Batter {
    name: string;
    r: number;
    b: number;
    "4s": number;
    "6s": number;
    sr: number;
    out: string;
  }
  
  export interface Bowler {
    name: string;
    o: number;
    m: number;
    r: number;
    w: number;
    econ: number;
  }