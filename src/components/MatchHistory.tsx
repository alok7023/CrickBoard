import React, { useState } from "react";
import matchData from "../utils/PlayedMatchesData.json";
import {
  Box,
  Typography,
  Card,
  CardHeader,
  CardContent,
  Divider,
  Tabs,
  Tab,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Collapse,
  IconButton,
} from "@mui/material";
import { ExpandMore, ExpandLess } from "@mui/icons-material";
import { Batter, Bowler, Match } from "../models/MatchHistory";


const MatchSchedule: React.FC = () => {
  const matches: Match[] = matchData;
  const [expandedMatchId, setExpandedMatchId] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<{ [key: number]: string }>({});

  const handleToggle = (id: number, e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation();
    }
    setExpandedMatchId(expandedMatchId === id ? null : id);
  };

  const handleTabChange = (
    matchId: number,
    newTab: string,
    e: React.SyntheticEvent
  ) => {
    e.stopPropagation();
    setActiveTab((prev) => ({ ...prev, [matchId]: newTab }));
  };

  return (
    <Box sx={{ padding: 4 }}>
      <Box sx={{ maxWidth: 600, mx: "auto" }}>
        {matches.map((match) => {
          const isExpanded = expandedMatchId === match.id;
          const currentTab = activeTab[match.id] || match.team1;

          const selectedBatting: Batter[] =
            currentTab === match.team1
              ? match.team1Batting
              : match.team2Batting;
          const selectedBowling: Bowler[] =
            currentTab === match.team1
              ? match.team2Bowling
              : match.team1Bowling;

          return (
            <Card
              key={match.id}
              sx={{
                mb: 3,
                borderRadius: 3,
                backgroundColor: "#f1f8e9",
                boxShadow: 3,
                cursor: "pointer",
                transition: "0.3s",
                "&:hover": {
                  boxShadow: 6,
                },
              }}
              onClick={() => handleToggle(match.id)}
            >
              <CardHeader
                title={
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Typography variant="subtitle1" fontWeight={600}>
                      Match {match.matchNumber}
                    </Typography>
                    <Typography variant="subtitle1" fontWeight={600}>
                      {match.team1} vs {match.team2}
                    </Typography>
                  </Box>
                }
                subheader={
                  <Typography variant="body2" color="text.secondary">
                    {match.date} | {match.venue} —{" "}
                    <strong>{match.result}</strong>
                  </Typography>
                }
              />

              <Divider />

              <CardContent>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Box display="flex" alignItems="center" gap={1}>
                    <img
                      src={`/assets/${match.team1.toLowerCase()}Logo.png`}
                      alt={match.team1}
                      style={{ width: 32, height: 32 }}
                    />
                    <Typography variant="body2">
                      {match.team1}: <strong>{match.team1Score}</strong>
                    </Typography>
                  </Box>
                  <Box display="flex" alignItems="center" gap={1}>
                    <Typography variant="body2">
                      <strong>{match.team2Score}</strong>: {match.team2}
                    </Typography>
                    <img
                      src={`/assets/${match.team2.toLowerCase()}Logo.png`}
                      alt={match.team2}
                      style={{ width: 32, height: 32 }}
                    />
                  </Box>
                </Box>

                <Box display="flex" justifyContent="center" mt={2}>
                  <IconButton
                    onClick={(e) => handleToggle(match.id, e)}
                    size="small"
                    sx={{
                      backgroundColor: "rgba(0, 0, 0, 0.04)",
                      "&:hover": {
                        backgroundColor: "rgba(0, 0, 0, 0.08)",
                      },
                    }}
                  >
                    {isExpanded ? <ExpandLess /> : <ExpandMore />}
                  </IconButton>
                </Box>
              </CardContent>

              <Collapse in={isExpanded}>
                <Divider />
                <Tabs
                  value={currentTab}
                  onChange={(e, newVal) => handleTabChange(match.id, newVal, e)}
                  variant="fullWidth"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Tab label={match.team1} value={match.team1} />
                  <Tab label={match.team2} value={match.team2} />
                </Tabs>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Batting
                  </Typography>
                  <Table size="small">
                    <TableHead>
                      <TableRow>
                        <TableCell>Player</TableCell>
                        <TableCell>R</TableCell>
                        <TableCell>B</TableCell>
                        <TableCell>4s</TableCell>
                        <TableCell>6s</TableCell>
                        <TableCell>SR</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {selectedBatting.map((batter, i) => (
                        <TableRow key={i}>
                          <TableCell>{batter.name}</TableCell>
                          <TableCell>{batter.r}</TableCell>
                          <TableCell>{batter.b}</TableCell>
                          <TableCell>{batter["4s"]}</TableCell>
                          <TableCell>{batter["6s"]}</TableCell>
                          <TableCell>{batter.sr}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>

                  <Typography variant="h6" gutterBottom mt={3}>
                    Bowling
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
                      {selectedBowling.map((bowler, i) => (
                        <TableRow key={i}>
                          <TableCell>{bowler.name}</TableCell>
                          <TableCell>{bowler.o}</TableCell>
                          <TableCell>{bowler.m}</TableCell>
                          <TableCell>{bowler.r}</TableCell>
                          <TableCell>{bowler.w}</TableCell>
                          <TableCell>{bowler.econ}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Collapse>
            </Card>
          );
        })}
      </Box>
    </Box>
  );
};

export default MatchSchedule;
