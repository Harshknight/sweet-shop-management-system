import { useState, useEffect } from "react";
import { TextField, Button, Box } from "@mui/material";

export default function SweetForm({ sweet, onSubmit, onCancel }) {
  const [formData, setFormData] = useState({ name: "", category: "", price: 0, quantity: 0 });

  useEffect(() => {
    if (sweet) setFormData(sweet);
  }, [sweet]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: name === "price" || name === "quantity" ? Number(value) : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mb: 2, p: 2, border: "1px solid #ccc", borderRadius: 1 }}>
      <TextField label="Name" name="name" value={formData.name} onChange={handleChange} fullWidth required sx={{ mb: 1 }} />
      <TextField label="Category" name="category" value={formData.category} onChange={handleChange} fullWidth required sx={{ mb: 1 }} />
      <TextField label="Price" name="price" type="number" value={formData.price} onChange={handleChange} fullWidth required sx={{ mb: 1 }} />
      <TextField label="Quantity" name="quantity" type="number" value={formData.quantity} onChange={handleChange} fullWidth required sx={{ mb: 1 }} />
      <Button type="submit" variant="contained">Save</Button>
      <Button onClick={onCancel} sx={{ ml: 1 }}>Cancel</Button>
    </Box>
  );
}
