import React, { useState } from "react";
import {
  Box,
  Button,
  CircularProgress,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useSnackbar } from "notistack";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import backGroundImage from "../assets/cricket.jpg"; // Assuming you have a background image

interface LoginData {
  username: string;
  password: string;
}

const Login: React.FC = () => {
  const { login } = useAuth();
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const [formData, setFormData] = useState<LoginData>({
    username: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateInput = (data: LoginData) => {
    console.log("Validating input:", data);
    if (!data.username)
      return (
        enqueueSnackbar("Username is required", { variant: "warning" }), false
      );
    if (!data.password)
      return (
        enqueueSnackbar("Password is required", { variant: "warning" }), false
      );
    return true;
  };

  const handleLogin = () => {
    console.log("Login data:", formData);
    if (!validateInput(formData)) return;

    const user = localStorage.getItem("user");
    if (!user) {
      enqueueSnackbar("No registered user found. Please register first.", {
        variant: "error",
      });
      return;
    }

    const parsedUser = JSON.parse(user);

    if (
      parsedUser.username === formData.username &&
      parsedUser.password === formData.password
    ) {
      setLoading(true);
      setTimeout(() => {
        login();
        enqueueSnackbar("Logged in successfully", { variant: "success" });
        navigate("/");
        setLoading(false);
      }, 1000);
    } else {
      enqueueSnackbar("Invalid username or password", { variant: "error" });
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    //   sx={{
    //     minHeight: "100vh",
    //     backgroundImage:
    //       `url(${backGroundImage})`,
    //     backgroundSize: "cover",
    //   }}
    >
      <Box className="form">
        <Stack spacing={2}>
          <Typography variant="h5" className="title">
            Login
          </Typography>

          <TextField
            label="Username"
            name="username"
            fullWidth
            value={formData.username}
            onChange={handleInput}
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            fullWidth
            value={formData.password}
            onChange={handleInput}
          />

          {loading ? (
            <Box display="flex" justifyContent="center">
              <CircularProgress />
            </Box>
          ) : (
            <Button
              variant="contained"
              onClick={handleLogin}
              className="button"
            >
              Login
            </Button>
          )}

          <Typography variant="body2" className="secondary-action">
            Don't have an account?{" "}
            <Link to="/register" className="link">
              Register here
            </Link>
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
};

export default Login;
