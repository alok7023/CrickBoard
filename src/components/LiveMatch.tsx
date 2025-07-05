import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const LiveMatch: React.FC = () => {
  const match = {
    status: "Live",
    team1: "CSK",
    team2: "MI",
    score: "155/4 (17.2)",
    venue: "Wankhede Stadium, Mumbai",
    time: "Today, 7:30 PM",
  };

  return (
    <Card sx={{ marginBottom: 4 }}>
      <CardContent>
        <Typography variant="h6">Live / Upcoming Match</Typography>
        <Typography variant="subtitle1">
          {match.team1} vs {match.team2}
        </Typography>
        <Typography variant="body2">
          {match.status === "Live" ? match.score : match.time}
        </Typography>
        <Typography variant="body2">{match.venue}</Typography>
      </CardContent>
    </Card>
  );
};

export default LiveMatch;
