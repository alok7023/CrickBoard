import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Button,
  Container,
  Typography,
  Box,
} from "@mui/material";
import LiveMatch from "./components/LiveMatch";
import PointsTable from "./components/PointTable";
import MatchSchedule from "./components/MatchSchedule";
import Login from "./components/Login";
import Register from "./components/Register";
import ProtectedRoute from "./components/ProtectedRoutes";
import { useAuth } from "./context/AuthContext";

const AppContent: React.FC = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <>
      {/* AppBar Header */}
      <AppBar position="static" sx={{ backgroundColor: "#0d47a1" }}>
        <Toolbar sx={{ gap: 2, justifyContent: "space-between" }}>
          <Box display="flex" gap={2}>
            {isAuthenticated && (
              <>
                <Button color="inherit" component={Link} to="/">
                  Live Match
                </Button>
                <Button color="inherit" component={Link} to="/points">
                  Points Table
                </Button>
                <Button color="inherit" component={Link} to="/schedule">
                  Match Schedule
                </Button>
              </>
            )}
          </Box>

          <Box>
            {!isAuthenticated ? (
              <>
                <Button color="inherit" component={Link} to="/login">
                  Login
                </Button>
                <Button color="inherit" component={Link} to="/register">
                  Register
                </Button>
              </>
            ) : (
              <Button color="inherit" onClick={handleLogout}>
                Logout
              </Button>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Box
        sx={{
          minHeight: "100vh",
          backgroundColor: "background.default",
          paddingY: 4,
        }}
      >
        <Container maxWidth="lg">
          {isAuthenticated && (
            <Typography
              variant="h4"
              gutterBottom
              align="center"
              sx={{ color: "primary.main", fontWeight: 600 }}
            >
              IPL T20 Dashboard
            </Typography>
          )}

          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <LiveMatch />
                </ProtectedRoute>
              }
            />
            <Route
              path="/points"
              element={
                <ProtectedRoute>
                  <PointsTable />
                </ProtectedRoute>
              }
            />
            <Route
              path="/schedule"
              element={
                <ProtectedRoute>
                  <MatchSchedule />
                </ProtectedRoute>
              }
            />
          </Routes>
        </Container>
      </Box>
    </>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
