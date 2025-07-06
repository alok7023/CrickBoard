import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import { AppBar, Toolbar, Button, Container, Box } from "@mui/material";
import LiveMatch from "./components/LiveMatch";
import PointsTable from "./components/PointTable";
import MatchSchedule from "./components/MatchHistory";
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
      <AppBar position="static" sx={{ backgroundColor: "#45c09f" }}>
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
                  Match History
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

      <Box sx={{ paddingY: 4 }}>
        <Container maxWidth={false} disableGutters>
          {/* {isAuthenticated && (
            <Typography
              variant="h4"
              gutterBottom
              align="center"
              sx={{ color: "#fff", fontWeight: 600 }}
            >
              IPL T20 Dashboard
            </Typography>
          )} */}

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
      <Box
        sx={{
          minHeight: "100vh",
          overflow: "hidden",
          backgroundImage: `url("/assets/BackgroundCricket.jpg")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          overflowX: "hidden",
        }}
      >
        <AppContent />
      </Box>
    </Router>
  );
};

export default App;
