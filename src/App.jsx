import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ThemeProvider as MuiThemeProvider, createTheme, CssBaseline } from "@mui/material"
import { ThemeProvider } from "./context/ThemeContext"
import { CurrencyProvider } from "./context/CurrencyContext"
import Navbar from "./components/Navbar"
import HomePage from "./pages/HomePage"
import ExchangeRatesPage from "./pages/ExchangeRatesPage"
import NotFoundPage from "./pages/NotFoundPage"
import { useTheme } from "./context/ThemeContext"

function AppContent() {
  const { theme } = useTheme()

  const muiTheme = createTheme({
    palette: {
      mode: theme === "dark" ? "dark" : "light",
      primary: {
        main: "#1976d2",
      },
      secondary: {
        main: "#f50057",
      },
      background: {
        default: theme === "dark" ? "#121212" : "#f5f5f5",
        paper: theme === "dark" ? "#1e1e1e" : "#ffffff",
      },
    },
  })

  return (
    <MuiThemeProvider theme={muiTheme}>
      <CssBaseline />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/exchange-rates" element={<ExchangeRatesPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </MuiThemeProvider>
  )
}

function App() {
  return (
    <ThemeProvider>
      <CurrencyProvider>
        <AppContent />
      </CurrencyProvider>
    </ThemeProvider>
  )
}

export default App
