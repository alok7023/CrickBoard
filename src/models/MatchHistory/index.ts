export interface Batter {
  name: string;
  r: number;
  b: number;
  "4s": number;
  "6s": number;
  sr: number;
}

export interface Bowler {
  name: string;
  o: number;
  m: number;
  r: number;
  w: number;
  econ: number;
}

export interface Match {
  matchNumber: number;
  id: number;
  date: string;
  venue: string;
  team1: string;
  team2: string;
  winner: string;
  result: string;
  team1Score: string;
  team2Score: string;
  team1Batting: Batter[];
  team2Batting: Batter[];
  team1Bowling: Bowler[];
  team2Bowling: Bowler[];
}
