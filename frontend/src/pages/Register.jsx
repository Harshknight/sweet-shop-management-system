import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api";
import { TextField, Button, Container, Typography } from "@mui/material";

export default function Register() {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const res = await api.post("/auth/register", formData);
      alert(res.data.message);
      navigate("/"); // redirect to login
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom>Register</Typography>
      {error && <Typography color="error">{error}</Typography>}
      <form onSubmit={handleSubmit}>
        <TextField fullWidth label="Name" name="name" value={formData.name} onChange={handleChange} sx={{ mb: 2 }} />
        <TextField fullWidth label="Email" name="email" value={formData.email} onChange={handleChange} sx={{ mb: 2 }} />
        <TextField fullWidth label="Password" type="password" name="password" value={formData.password} onChange={handleChange} sx={{ mb: 2 }} />
        <Button variant="contained" fullWidth type="submit">Register</Button>
      </form>
    </Container>
  );
}
