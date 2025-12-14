import { useContext, useState } from "react";
import { AuthContext } from "../auth/AuthContext";
import api from "../api/api";
import { TextField, Button, Container, Typography } from "@mui/material";

export default function Login() {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    setError("");
    try {
      const res = await api.post("/auth/login", { email, password });
      login(res.data.token); // only token
    } catch {
      setError("Invalid credentials");
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom>Login</Typography>
      {error && <Typography color="error">{error}</Typography>}

      <TextField
        fullWidth
        label="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        sx={{ mb: 2 }}
      />

      <TextField
        fullWidth
        label="Password"
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        sx={{ mb: 2 }}
      />

      <Button variant="contained" fullWidth onClick={handleLogin}>
        Login
      </Button>
    </Container>
  );
}
