import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import { Button, Link } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const pages = [
  { name: "Home", url: "/", id: "1" },
  { name: "Favorite List", url: "/favMovies", id: "2" },
];
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1976d2",
    },
  },
});
const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleCloseNavMenu = () => {
    setAnchorElNav("/");
  };

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                // display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Movieflix44
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "12", md: "flex" } }}>
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu} key={page.id}>
                  <Typography>
                    <Link href={page.url} textAlign="center">
                      {`${page.name}`}
                    </Link>
                  </Typography>
                </MenuItem>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};
export default Navbar;
