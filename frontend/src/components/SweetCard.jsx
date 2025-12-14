import {
  Card,
  CardContent,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useState } from "react";

export default function SweetCard({
  sweet,
  onPurchase,
  onEdit,
  onDelete,
  isAdmin
}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenuOpen = (e) => setAnchorEl(e.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  return (
    <Card sx={{ width: 250, position: "relative" }}>
      {isAdmin && (
        <>
          <IconButton
            sx={{ position: "absolute", top: 8, right: 8 }}
            onClick={handleMenuOpen}
          >
            <MoreVertIcon />
          </IconButton>

          <Menu anchorEl={anchorEl} open={open} onClose={handleMenuClose}>
            <MenuItem
              onClick={() => {
                onEdit(sweet);
                handleMenuClose();
              }}
            >
              Edit
            </MenuItem>

            <MenuItem
              onClick={() => {
                onDelete(sweet._id);
                handleMenuClose();
              }}
            >
              Delete
            </MenuItem>
          </Menu>
        </>
      )}

      <CardContent>
        <Typography variant="h6">{sweet.name}</Typography>
        <Typography>Category: {sweet.category}</Typography>
        <Typography>Price: ₹{sweet.price}</Typography>
        <Typography>Quantity: {sweet.quantity}</Typography>

        <Button
          variant="contained"
          fullWidth
          sx={{ mt: 2 }}
          onClick={() => onPurchase(sweet._id)}
          disabled={sweet.quantity === 0}
        >
          {sweet.quantity === 0 ? "Out of Stock" : "Purchase"}
        </Button>
      </CardContent>
    </Card>
  );
}
