import React from "react";
import { Card, CardContent, Typography, Box, Chip } from "@mui/material";

const LiveMatch: React.FC = () => {
  const match = {
    status: "Live",
    team1: "CSK",
    team2: "MI",
    score: "155/4 (17.2)",
    venue: "Wankhede Stadium, Mumbai",
    time: "Today, 7:30 PM",
  };

  const isLive = match.status === "Live";

  return (
    <Card
      sx={{
        maxWidth: 600,
        mx: "auto",
        mt: 4,
        borderRadius: 3,
        boxShadow: 6,
        backgroundColor: "#f3f4f6",
      }}
    >
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Match Details
          </Typography>
          <Chip
            label={match.status}
            color={isLive ? "success" : "warning"}
            size="small"
          />
        </Box>

        <Typography
          variant="h5"
          sx={{ mt: 2, fontWeight: "bold", color: "#1976d2" }}
        >
          {match.team1} vs {match.team2}
        </Typography>

        <Typography variant="body1" sx={{ mt: 1 }}>
          {isLive ? (
            <strong>Score: {match.score}</strong>
          ) : (
            <strong>Time: {match.time}</strong>
          )}
        </Typography>

        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          Venue: {match.venue}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default LiveMatch;
