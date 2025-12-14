import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../auth/AuthContext";
import api from "../api/api";
import {
  Container,
  Typography,
  Grid,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Pagination,
  AppBar,
  Toolbar,
  Box,
  Paper,
  Stack,
  Chip
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import LogoutIcon from "@mui/icons-material/Logout";

import SweetCard from "../components/SweetCard";
import SearchBar from "../components/SearchBar";
import FilterBar from "../components/FilterBar";

export default function Dashboard() {
  const { user, logout } = useContext(AuthContext);
  const isAdmin = user?.role === "admin";

  const [sweets, setSweets] = useState([]);
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [stockFilter, setStockFilter] = useState("all");

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const [openModal, setOpenModal] = useState(false);
  const [currentSweet, setCurrentSweet] = useState({
    name: "",
    category: "",
    price: 0,
    quantity: 0
  });

  const fetchSweets = async () => {
    const res = await api.get("/sweets", {
      params: {
        search: search || undefined,
        category: categoryFilter || undefined,
        stock: stockFilter !== "all" ? stockFilter : undefined,
        page,
        limit: 9
      }
    });

    setSweets(res.data.data);
    setTotalPages(res.data.totalPages);
  };

  useEffect(() => {
    fetchSweets();
  }, [search, categoryFilter, stockFilter, page]);

  const handleSaveSweet = async () => {
    if (currentSweet._id) {
      await api.put(`/sweets/${currentSweet._id}`, currentSweet);
    } else {
      await api.post("/sweets", currentSweet);
    }
    setOpenModal(false);
    fetchSweets();
  };

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#f5f7fb" }}>
      {/* TOP BAR */}
      <AppBar position="sticky" elevation={0} color="inherit">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography variant="h6" fontWeight={700}>
            Sweet Shop Dashboard
          </Typography>
          <Stack direction="row" spacing={2} alignItems="center">
            <Chip label={user?.email} variant="outlined" />
            <Button
              variant="outlined"
              color="error"
              startIcon={<LogoutIcon />}
              onClick={logout}
            >
              Logout
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ mt: 4 }}>
        {/* SEARCH & FILTER */}
        <Paper sx={{ p: 3, mb: 4, borderRadius: 4 }} elevation={2}>
          <Stack spacing={2}>
            <SearchBar
              value={search}
              onChange={(value) => {
                setSearch(value);
                setPage(1);
              }}
            />
            <FilterBar
              category={categoryFilter}
              setCategory={setCategoryFilter}
              stock={stockFilter}
              setStock={setStockFilter}
            />
          </Stack>
        </Paper>

        {/* HEADER */}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", sm: "center" }}
          mb={3}
        >
          <Typography variant="h5" fontWeight={600}>
            Available Sweets
          </Typography>

          {isAdmin && (
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              sx={{ borderRadius: 3 }}
              onClick={() => {
                setCurrentSweet({ name: "", category: "", price: 0, quantity: 0 });
                setOpenModal(true);
              }}
            >
              Add Sweet
            </Button>
          )}
        </Stack>

        {/* SWEET GRID */}
        <Grid container spacing={3}>
          {sweets.map((s) => (
            <Grid item xs={12} sm={6} md={4} key={s._id}>
              <SweetCard
                sweet={s}
                isAdmin={isAdmin}
                onPurchase={async (id) => {
                  await api.post(`/sweets/${id}/purchase`);
                  fetchSweets();
                }}
                onEdit={(sweet) => {
                  setCurrentSweet(sweet);
                  setOpenModal(true);
                }}
                onDelete={async (id) => {
                  await api.delete(`/sweets/${id}`);
                  fetchSweets();
                }}
              />
            </Grid>
          ))}
        </Grid>

        {/* PAGINATION */}
        <Stack alignItems="center" mt={5}>
          <Pagination
            count={totalPages}
            page={page}
            onChange={(e, value) => setPage(value)}
            color="primary"
          />
        </Stack>
      </Container>

      {/* ADMIN Model */}
      <Dialog open={openModal} onClose={() => setOpenModal(false)} fullWidth>
        <DialogTitle fontWeight={600}>
          {currentSweet._id ? "Edit Sweet" : "Add Sweet"}
        </DialogTitle>
        <DialogContent>
          <Stack spacing={2} mt={1}>
            <TextField
              label="Sweet Name"
              value={currentSweet.name}
              onChange={(e) => setCurrentSweet({ ...currentSweet, name: e.target.value })}
            />
            <TextField
              label="Category"
              value={currentSweet.category}
              onChange={(e) => setCurrentSweet({ ...currentSweet, category: e.target.value })}
            />
            <TextField
              label="Price"
              type="number"
              value={currentSweet.price}
              onChange={(e) => setCurrentSweet({ ...currentSweet, price: +e.target.value })}
            />
            <TextField
              label="Quantity"
              type="number"
              value={currentSweet.quantity}
              onChange={(e) => setCurrentSweet({ ...currentSweet, quantity: +e.target.value })}
            />
          </Stack>
        </DialogContent>
        <DialogActions sx={{ p: 2 }}>
          <Button onClick={() => setOpenModal(false)}>Cancel</Button>
          <Button variant="contained" onClick={handleSaveSweet}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
