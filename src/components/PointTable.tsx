import React from "react";
import data from "../utils/PointTableData.json";
import { Typography, Avatar, Box, Chip, Grid, Paper } from "@mui/material";

interface TeamData {
  pos: number;
  team: string;
  logo: string;
  p: number;
  w: number;
  l: number;
  nr: number;
  nrr: number;
  for: string;
  against: string;
  pts: number;
  recent_form: string[];
}

const colors = ["#e3f2fd", "#f1f8e9", "#fff8e1", "#fce4ec", "#ede7f6"];

const PointsTable: React.FC = () => {
  const teams: TeamData[] = data;

  return (
    <Box sx={{ padding: 4 }}>
      <Typography
        variant="h5"
        gutterBottom
        align="center"
        sx={{ color: "#f5f5f5" }}
      >
        Points Table
      </Typography>

      {/* Table Header */}
      <Paper
        elevation={2}
        sx={{
          borderRadius: 2,
          padding: 2,
          backgroundColor: "#e0e0e0",
          mb: 2,
        }}
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          flexWrap="wrap"
        >
          <Typography variant="subtitle2" sx={{ width: "20px", ml: 2 }}>
            #
          </Typography>
          <Typography variant="subtitle2" sx={{ minWidth: "120px" }}>
            Team
          </Typography>
          <Typography variant="subtitle2">Play</Typography>
          <Typography variant="subtitle2">Win</Typography>
          <Typography variant="subtitle2">Loss</Typography>
          <Typography variant="subtitle2">No Result</Typography>
          <Typography variant="subtitle2">Points</Typography>
          <Typography variant="subtitle2">Net Run Rate</Typography>
          <Typography variant="subtitle2" sx={{ minWidth: "230px" }}>
            Recent
          </Typography>
        </Box>
      </Paper>

      {/* Team Rows */}
      <Grid container spacing={2}>
        {teams.map((team, index) => (
          <Grid item xs={12} key={team.pos}>
            <Paper
              elevation={4}
              sx={{
                borderRadius: 3,
                padding: 2,
                backgroundColor: colors[index % colors.length],
              }}
            >
              <Grid container alignItems="center" spacing={1}>
                <Grid item xs={0.8} sx={{ ml: 2 }}>
                  <Typography
                    variant="subtitle1"
                    sx={{ textAlign: "left", minWidth: "20px" }}
                  >
                    {team.pos}
                  </Typography>
                </Grid>

                <Grid item xs={2}>
                  <Box display="flex" alignItems="center" gap={1}>
                    <Avatar
                      src={team.logo}
                      alt={team.team}
                      sx={{ width: 32, height: 32 }}
                    />
                    <Typography variant="body1" noWrap>
                      {team.team}
                    </Typography>
                  </Box>
                </Grid>

                <Grid item xs={1}>
                  <Typography variant="body2">{team.p}</Typography>
                </Grid>
                <Grid item xs={1}>
                  <Typography variant="body2">{team.w}</Typography>
                </Grid>
                <Grid item xs={1.1}>
                  <Typography variant="body2">{team.l}</Typography>
                </Grid>
                <Grid item xs={1.3}>
                  <Typography variant="body2">{team.nr}</Typography>
                </Grid>
                <Grid item xs={1.1}>
                  <Typography variant="body2">{team.pts}</Typography>
                </Grid>
                <Grid item xs={1.5}>
                  <Typography variant="body2">{team.nrr}</Typography>
                </Grid>
                <Grid item xs={2}>
                  <Box display="flex" gap={0.5} flexWrap="wrap">
                    {team.recent_form.map((result, i) => (
                      <Chip
                        key={i}
                        label={result}
                        size="small"
                        sx={{
                          backgroundColor:
                            result === "W"
                              ? "green"
                              : result === "L"
                              ? "red"
                              : "#fbc02d",
                          color: "white",
                          fontWeight: 600,
                        }}
                      />
                    ))}
                  </Box>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PointsTable;
