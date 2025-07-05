import React from "react";
import matchData from "../utils/MatchScheduleData.json";
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Avatar,
  Box,
  Grid,
  Divider,
} from "@mui/material";

interface Match {
  id: number;
  date: string;
  time: string;
  team1: string;
  team1Logo: string;
  team2: string;
  team2Logo: string;
  venue: string;
}

const MatchSchedule: React.FC = () => {
  const matches: Match[] = matchData;

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h5" gutterBottom align="center">
        Upcoming Matches
      </Typography>

      <Grid container spacing={3}>
        {matches.map((match) => (
          <Grid item xs={12} sm={6} key={match.id}>
            <Card
              sx={{
                borderRadius: 3,
                backgroundColor: "#f1f8e9", // Light green shade
                boxShadow: 3,
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.02)",
                },
              }}
            >
              <CardHeader
                title={
                  <Typography variant="subtitle1" fontWeight={600}>
                    {match.date} | {match.time}
                  </Typography>
                }
                subheader={
                  <Typography variant="body2" color="text.secondary">
                    {match.venue}
                  </Typography>
                }
              />
              <Divider />
              <CardContent>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-around"
                  flexWrap="wrap"
                  gap={2}
                >
                  <Box display="flex" alignItems="center" gap={1}>
                    <Avatar src={match.team1Logo} alt={match.team1} />
                    <Typography variant="subtitle1">{match.team1}</Typography>
                  </Box>
                  <Typography variant="h6">vs</Typography>
                  <Box display="flex" alignItems="center" gap={1}>
                    <Avatar src={match.team2Logo} alt={match.team2} />
                    <Typography variant="subtitle1">{match.team2}</Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MatchSchedule;
