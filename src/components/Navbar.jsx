import { useState } from "react"
import { Link } from "react-router-dom"
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Switch,
  FormControlLabel,
} from "@mui/material"
import { Menu as MenuIcon, Home as HomeIcon, CurrencyExchange, DarkMode, LightMode } from "@mui/icons-material"
import { useTheme } from "../context/ThemeContext"

function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const isDarkMode = theme === "dark"

  const navItems = [
    { text: "Home", path: "/", icon: <HomeIcon /> },
    { text: "Exchange Rates", path: "/exchange-rates", icon: <CurrencyExchange /> },
  ]

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
        bgcolor: isDarkMode ? "#121212" : "#fff",
        color: isDarkMode ? "#fff" : "#000",
        height: "100%",
      }}
    >
      <Typography variant="h6" sx={{ my: 2 }}>
        Loan Calculator
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.text} component={Link} to={item.path} sx={{ justifyContent: "center", }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              {item.icon}
              <ListItemText primary={item.text} />
            </Box>
          </ListItem>
        ))}
        <ListItem sx={{ justifyContent: "center" }}>
          <FormControlLabel
            control={<Switch checked={isDarkMode} onChange={toggleTheme} />}
            label={isDarkMode ? "Dark Mode" : "Light Mode"}
          />
        </ListItem>
      </List>
    </Box>
  )

  return (
    <>
      <AppBar position="static" sx={{ bgcolor: isDarkMode ? "#121212" : "#1976d2" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Loan Calculator
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "flex" }, alignItems: "center" }}>
            {navItems.map((item) => (
              <Button
                key={item.text}
                component={Link}
                to={item.path}
                sx={{ color: "#fff", display: "flex", alignItems: "center", gap: 1 }}
              >
                {item.icon}
                {item.text}
              </Button>
            ))}
            <Box sx={{ display: "flex", alignItems: "center", ml: 2 }}>
              {isDarkMode ? <DarkMode sx={{ mr: 1 }} /> : <LightMode sx={{ mr: 1 }} />}
              <Switch checked={isDarkMode} onChange={toggleTheme} />
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </>
  )
}

export default Navbar
