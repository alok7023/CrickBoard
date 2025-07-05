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
      <Typography variant="h5" gutterBottom align="center">
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
        <Grid container alignItems="center" spacing={1}>
          <Grid item xs={0.8}>
            <Typography variant="subtitle2" align="center">
              #
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="subtitle2">Team</Typography>
          </Grid>
          <Grid item xs={0.9}>
            <Typography variant="subtitle2">P</Typography>
          </Grid>
          <Grid item xs={1}>
            <Typography variant="subtitle2">W</Typography>
          </Grid>
          <Grid item xs={1}>
            <Typography variant="subtitle2">L</Typography>
          </Grid>
          <Grid item xs={1.2}>
            <Typography variant="subtitle2">NR</Typography>
          </Grid>
          <Grid item xs={1}>
            <Typography variant="subtitle2">Pts</Typography>
          </Grid>
          <Grid item xs={1.5}>
            <Typography variant="subtitle2">NRR</Typography>
          </Grid>
          <Grid item xs={2.4}>
            <Typography variant="subtitle2">Recent</Typography>
          </Grid>
        </Grid>
      </Paper>

      {/* Team Rows */}
      <Grid container spacing={2}>
        {teams.map((team, index) => (
          <Grid item xs={12} key={team.pos}>
            <Paper
              elevation={3}
              sx={{
                borderRadius: 3,
                padding: 2,
                backgroundColor: colors[index % colors.length],
                transition: "all 0.3s ease",
                cursor: "pointer",
                "&:hover": {
                  boxShadow: 6,
                  transform: "scale(1.01)",
                },
              }}
            >
              <Grid container alignItems="center" spacing={1}>
                <Grid item xs={0.8}>
                  <Typography
                    variant="subtitle1"
                    align="center"
                    sx={{ minWidth: "20px" }}
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

                <Grid item xs={0.9}>
                  <Typography variant="body2">{team.p}</Typography>
                </Grid>
                <Grid item xs={1}>
                  <Typography variant="body2">{team.w}</Typography>
                </Grid>
                <Grid item xs={1}>
                  <Typography variant="body2">{team.l}</Typography>
                </Grid>
                <Grid item xs={1.2}>
                  <Typography variant="body2">{team.nr}</Typography>
                </Grid>
                <Grid item xs={1}>
                  <Typography variant="body2">{team.pts}</Typography>
                </Grid>
                <Grid item xs={1.5}>
                  <Typography variant="body2">{team.nrr}</Typography>
                </Grid>
                <Grid item xs={2.4}>
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
