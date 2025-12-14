import {
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from "@mui/material";

export default function FilterBar({
  category,
  setCategory,
  stock,
  setStock
}) {
  return (
    <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
      <FormControl fullWidth>
        <InputLabel>Category</InputLabel>
        <Select
          value={category}
          label="Category"
          onChange={(e) => setCategory(e.target.value)}
        >
          <MenuItem value="">All</MenuItem>
          <MenuItem value="Sweet">Sweet</MenuItem>
          <MenuItem value="Chocolate">Chocolate</MenuItem>
          <MenuItem value="Bakery">Bakery</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth>
        <InputLabel>Stock</InputLabel>
        <Select
          value={stock}
          label="Stock"
          onChange={(e) => setStock(e.target.value)}
        >
          <MenuItem value="all">All</MenuItem>
          <MenuItem value="in">In Stock</MenuItem>
          <MenuItem value="out">Out of Stock</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
