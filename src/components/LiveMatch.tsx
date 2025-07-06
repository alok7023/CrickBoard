import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Chip,
  Grid,
  CardHeader,
  Avatar,
  Divider,
  Collapse,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
} from "@mui/material";
import { ExpandMore, ExpandLess } from "@mui/icons-material";
import matchData from "../utils/MatchScheduleData.json";

import liveMatch from "../utils/LiveMatchData.json";
import { Match } from "../models/LiveMatch";


const LiveMatch: React.FC = () => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const isLive = liveMatch.status === "Live";

  const upcomingMatches: Match[] = matchData;

  return (
    <Box sx={{ padding: 4 }}>
      <Card
        sx={{
          maxWidth: 600,
          mx: "auto",
          borderRadius: 3,
          boxShadow: 6,
          backgroundColor: "#f1f8e9",
          mb: 4,
          cursor: "pointer",
          transition: "0.3s",
          "&:hover": {
            boxShadow: 8,
          },
        }}
        onClick={handleToggle}
      >
        <CardContent>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="subtitle1" fontWeight={600}>
              Match 11
            </Typography>
            <Chip
              label={liveMatch.status}
              color={isLive ? "error" : "warning"}
              size="small"
              sx={{ fontWeight: "bold" }}
            />
          </Box>

          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ mt: 1, mb: 1 }}
          >
            Venue: {liveMatch.venue} | {liveMatch.time}
          </Typography>
          <Divider />

          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mt={2}
          >
            <Box display="flex" alignItems="center" gap={1}>
              <Avatar src={liveMatch.team1Logo} alt={liveMatch.team1} />
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                {liveMatch.team1}
              </Typography>
            </Box>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              vs
            </Typography>
            <Box display="flex" alignItems="center" gap={1}>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                {liveMatch.team2}
              </Typography>
              <Avatar src={liveMatch.team2Logo} alt={liveMatch.team2} />
            </Box>
          </Box>

          <Typography variant="body1" sx={{ mt: 2, textAlign: "center" }}>
            <strong>
              {liveMatch.team1} {liveMatch.team1Score} | Target:{" "}
              {liveMatch.target} | {liveMatch.commentary}
            </strong>
          </Typography>

          <Box display="flex" justifyContent="center" mt={2}>
            <IconButton>
              {expanded ? <ExpandLess /> : <ExpandMore />}
            </IconButton>
          </Box>
        </CardContent>

        <Collapse in={expanded}>
          <Divider />
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Batting (CSK)
            </Typography>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Batsman</TableCell>
                  <TableCell>R</TableCell>
                  <TableCell>B</TableCell>
                  <TableCell>4s</TableCell>
                  <TableCell>6s</TableCell>
                  <TableCell>SR</TableCell>
                  <TableCell>Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {liveMatch.batsmen.map((batsman, i) => (
                  <TableRow key={i}>
                    <TableCell>{batsman.name}</TableCell>
                    <TableCell>{batsman.r}</TableCell>
                    <TableCell>{batsman.b}</TableCell>
                    <TableCell>{batsman["4s"]}</TableCell>
                    <TableCell>{batsman["6s"]}</TableCell>
                    <TableCell>{batsman.sr}</TableCell>
                    <TableCell>{batsman.out}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

            <Typography variant="h6" gutterBottom mt={3}>
              Bowling (MI)
            </Typography>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Bowler</TableCell>
                  <TableCell>O</TableCell>
                  <TableCell>M</TableCell>
                  <TableCell>R</TableCell>
                  <TableCell>W</TableCell>
                  <TableCell>Econ</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {liveMatch.bowlers.map((bowler, i) => (
                  <TableRow key={i}>
                    <TableCell>{bowler.name}</TableCell>
                    <TableCell>{bowler.o}</TableCell>
                    <TableCell>{bowler.m}</TableCell>
                    <TableCell>{bowler.r}</TableCell>
                    <TableCell>{bowler.w}</TableCell>
                    <TableCell>{bowler.econ.toFixed(2)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

            <Box mt={2}>
              <Typography variant="body2">
                <strong>Partnership:</strong> {liveMatch.partnership}
              </Typography>
              <Typography variant="body2">
                <strong>Last Wicket:</strong> {liveMatch.lastWicket}
              </Typography>
              <Typography variant="body2">
                <strong>Current RR:</strong> {liveMatch.currentRunRate} |
                <strong> Required RR:</strong> {liveMatch.requiredRunRate}
              </Typography>
            </Box>
          </CardContent>
        </Collapse>
      </Card>

      <Box sx={{ maxWidth: 600, mx: "auto" }}>
        <Grid container spacing={3}>
          {upcomingMatches.map((match) => (
            <Grid item xs={12} key={match.id}>
              <Card
                sx={{
                  borderRadius: 3,
                  backgroundColor: "#f1f8e9",
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
                      Match {match.matchNumber}
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
    </Box>
  );
};

export default LiveMatch;
