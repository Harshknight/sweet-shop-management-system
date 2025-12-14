import { TextField } from "@mui/material";

export default function SearchBar({ value, onChange }) {
  return (
    <TextField
      label="Search by name or category"
      fullWidth
      sx={{ mt: 2, mb: 2 }}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Type to search..."
    />
  );
}
