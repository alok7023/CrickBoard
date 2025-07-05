import React, { useState } from "react";
import {
  Button,
  CircularProgress,
  Stack,
  TextField,
  Typography,
  Box,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";

interface RegisterData {
  username: string;
  password: string;
  confirmPassword: string;
}

const Register: React.FC = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [formData, setFormData] = useState<RegisterData>({
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateInput = (data: RegisterData) => {
    if (!data.username)
      return (
        enqueueSnackbar("Username is required", { variant: "warning" }), false
      );
    if (data.username.length < 6)
      return (
        enqueueSnackbar("Username must be at least 6 characters", {
          variant: "warning",
        }),
        false
      );
    if (!data.password)
      return (
        enqueueSnackbar("Password is required", { variant: "warning" }), false
      );
    if (data.password.length < 6)
      return (
        enqueueSnackbar("Password must be at least 6 characters", {
          variant: "warning",
        }),
        false
      );
    if (data.password !== data.confirmPassword)
      return (
        enqueueSnackbar("Passwords do not match", { variant: "warning" }), false
      );
    return true;
  };

  const register = (formData: RegisterData) => {
    if (validateInput(formData)) {
      console.log("Form Data:", formData);
      const existingUser = localStorage.getItem("user");
      console.log("Existing User:", existingUser);

      if (existingUser) {
        const user = JSON.parse(existingUser);
        if (user.username === formData.username) {
          enqueueSnackbar("User already registered", { variant: "error" });
          return;
        }
      }
      setLoading(true);
      setTimeout(() => {
        localStorage.setItem(
          "user",
          JSON.stringify({
            username: formData.username,
            password: formData.password,
          })
        );
        enqueueSnackbar("Registered successfully", { variant: "success" });
        navigate("/login");
        setLoading(false);
      }, 1000);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "flex-start",
        minHeight: "100vh",
        boxSizing: "border-box",
        px: { xs: 2, md: 4 },
        pt: { xs: 4, md: 6 },
      }}
    >
      <Box
        className="form"
        sx={{
          backgroundColor: "#fff",
          borderRadius: 2,
          boxShadow: 3,
          width: { xs: "100%", sm: "550px" },
          mr: { xs: 0, md: 6 },
        }}
      >
        <Stack spacing={2}>
          <Typography variant="h5" className="title">
            Register
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
          <TextField
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            fullWidth
            value={formData.confirmPassword}
            onChange={handleInput}
          />
          {loading ? (
            <Box display="flex" justifyContent="center">
              <CircularProgress />
            </Box>
          ) : (
            <Button
              variant="contained"
              className="button"
              onClick={() => register(formData)}
            >
              Register Now
            </Button>
          )}
          <Typography variant="body2" className="secondary-action">
            Already have an account?{" "}
            <Link to="/login" className="link">
              Login here
            </Link>
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
};

export default Register;
