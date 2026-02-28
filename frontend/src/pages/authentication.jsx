import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AuthContext } from '../contexts/AuthContext';
import { Snackbar } from '@mui/material';

import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function Authentication() {

    

    const [username, setUsername] = React.useState();
    const [password, setPassword] = React.useState();
    const [name, setName] = React.useState();
    const [error, setError] = React.useState();
    const [message, setMessage] = React.useState();


    const [formState, setFormState] = React.useState(0);

    const [open, setOpen] = React.useState(false)


    const { handleRegister, handleLogin } = React.useContext(AuthContext);

    let handleAuth = async () => {
        try {
            if (formState === 0) {

                let result = await handleLogin(username, password)


            }
            if (formState === 1) {
                let result = await handleRegister(name, username, password);
                console.log(result);
                setUsername("");
                setMessage(result);
                setOpen(true);
                setError("")
                setFormState(0)
                setPassword("")
            }
        } catch (err) {

            console.log(err);
            let message = (err.response.data.message);
            setError(message);
        }
    }


    return (
  <ThemeProvider theme={defaultTheme}>
    <CssBaseline />

    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background:
          "linear-gradient(135deg, #020617 0%, #0f172a 55%, #7c2d12 100%)",
        px: 2,
      }}
    >
      <Paper
        elevation={0}
        sx={{
          width: "100%",
          maxWidth: 430,
          p: 4,
          borderRadius: 4,
          background: "rgba(15,23,42,0.78)",
          backdropFilter: "blur(14px)",
          boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
          color: "white",
        }}
      >
        <Box display="flex" flexDirection="column" alignItems="center">
          <Avatar
            sx={{
              m: 1,
              width: 58,
              height: 58,
              bgcolor: "#f97316",
            }}
          >
            <LockOutlinedIcon />
          </Avatar>

          <Typography variant="h5" fontWeight={700}>
            {formState === 0 ? "Welcome Back" : "Create Account"}
          </Typography>

          <Typography variant="body2" sx={{ color: "#cbd5e1", mt: 1, mb: 3 }}>
            {formState === 0
              ? "Login to continue your journey"
              : "Sign up and start building"}
          </Typography>

          {/* LOGIN SWITCH */}
          <Box
            sx={{
              display: "flex",
              width: "100%",
              background: "#1e293b",
              borderRadius: 3,
              p: 0.5,
              mb: 2,
            }}
          >
            <Button
              fullWidth
              variant={formState === 0 ? "contained" : "text"}
              onClick={() => setFormState(0)}
              sx={{
                borderRadius: 2,
                ...(formState === 0 && {
                  bgcolor: "#f97316",
                  "&:hover": { bgcolor: "#ea580c" },
                }),
              }}
            >
              Sign In
            </Button>

            <Button
              fullWidth
              variant={formState === 1 ? "contained" : "text"}
              onClick={() => setFormState(1)}
              sx={{
                borderRadius: 2,
                ...(formState === 1 && {
                  bgcolor: "#f97316",
                  "&:hover": { bgcolor: "#ea580c" },
                }),
              }}
            >
              Sign Up
            </Button>
          </Box>

          {/* GOOGLE LOGIN */}
            <Button
            fullWidth
            variant="contained"
            startIcon={<GoogleIcon />}
            sx={{
                mb: 1,
                borderRadius: 2,
                background: "#fff",
                color: "#111",
                textTransform: "none",
                fontWeight: 600,
                justifyContent: "flex-center",
                pl: 2,
                "&:hover": { background: "#f1f5f9" },
            }}
            >
            Continue with Google
            </Button>

            {/* FACEBOOK LOGIN */}
            <Button
            fullWidth
            variant="contained"
            startIcon={<FacebookIcon />}
            sx={{
                mb: 1,
                borderRadius: 2,
                background: "#1877F2",
                textTransform: "none",
                fontWeight: 600,
                justifyContent: "flex-center",
                pl: 2,
                "&:hover": { background: "#166fe5" },
            }}
            >
            Continue with Facebook
            </Button>

            {/* GITHUB LOGIN */}
            <Button
            fullWidth
            variant="contained"
            startIcon={<GitHubIcon />}
            sx={{
                mb: 2,
                borderRadius: 2,
                background: "#24292f",
                textTransform: "none",
                fontWeight: 600,
                justifyContent: "flex-center",
                pl: 2,
                "&:hover": { background: "#111" },
            }}
            >
            Continue with GitHub
            </Button>
          <Typography variant="caption" sx={{ color: "#94a3b8", mb: 1 }}>
            — OR —
          </Typography>

          {/* FORM */}
          <Box component="form" noValidate sx={{ width: "100%" }}>
            {formState === 1 && (
              <TextField
                margin="normal"
                required
                fullWidth
                label="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                InputLabelProps={{ style: { color: "#94a3b8" } }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 2,
                    color: "white",
                  },
                }}
              />
            )}

            <TextField
              margin="normal"
              required
              fullWidth
              label="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              InputLabelProps={{ style: { color: "#94a3b8" } }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: 2,
                  color: "white",
                },
              }}
            />

            <TextField
              margin="normal"
              required
              fullWidth
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputLabelProps={{ style: { color: "#94a3b8" } }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: 2,
                  color: "white",
                },
              }}
            />

            {error && (
              <Typography color="error" fontSize={13} mt={1}>
                {error}
              </Typography>
            )}

            <Button
              type="button"
              fullWidth
              variant="contained"
              onClick={handleAuth}
              sx={{
                mt: 3,
                py: 1.2,
                borderRadius: 2,
                fontWeight: 700,
                background:
                  "linear-gradient(90deg,#f97316 0%, #ea580c 100%)",
                boxShadow: "0 8px 20px rgba(249,115,22,0.4)",
                "&:hover": {
                  transform: "translateY(-2px)",
                },
                transition: "0.3s",
              }}
            >
              {formState === 0 ? "Login" : "Register"}
            </Button>
          </Box>
        </Box>
      </Paper>
    </Box>

    <Snackbar
      open={open}
      autoHideDuration={4000}
      message={message}
    />
  </ThemeProvider>
);
}