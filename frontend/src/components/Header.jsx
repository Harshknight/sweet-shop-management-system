import { useContext } from "react";
import { AuthContext } from "../auth/AuthContext";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

export default function Header() {
  const { user, logout } = useContext(AuthContext);

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Sweet Shop
        </Typography>
        {user && (
          <Box display="flex" alignItems="center">
            <Typography>{user.role}</Typography>
            <Button color="inherit" onClick={logout} sx={{ ml: 2 }}>
              Logout
            </Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}
