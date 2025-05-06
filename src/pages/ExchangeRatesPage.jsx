import { useState } from "react"
import { useCurrency } from "../context/CurrencyContext"
import { useExchangeRates } from "../hooks/useExchangeRates"
import {
  Typography,
  Box,
  Paper,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Pagination,
  CircularProgress,
  useTheme as useMuiTheme,
} from "@mui/material"

function ExchangeRatesPage() {
  const muiTheme = useMuiTheme()
  const { baseCurrency, setBaseCurrency } = useCurrency()
  const { rates, loading, error } = useExchangeRates(baseCurrency)

  const [page, setPage] = useState(1)
  const [search, setSearch] = useState("")
  const rowsPerPage = 10

  const filteredRates = Object.entries(rates || {}).filter(([currency]) =>
    currency.toLowerCase().includes(search.toLowerCase()),
  )

  const paginatedRates = filteredRates.slice((page - 1) * rowsPerPage, page * rowsPerPage)

  const handleChangePage = (event, value) => {
    setPage(value)
  }

  return (
    <div maxWidth="lg" sx={{ py: 4 }} className="mt-14">
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h4" component="h1" sx={{ mb: 4, fontWeight: "bold" }}>
          Live Exchange Rates
        </Typography>

        <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 2, mb: 4 }}>
          <TextField
            label="Base Currency"
            value={baseCurrency}
            onChange={(e) => setBaseCurrency(e.target.value)}
            variant="outlined"
            sx={{ width: { xs: "100%", md: "25%" } }}
          />

          <TextField
            label="Search Currency"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            variant="outlined"
            sx={{ width: { xs: "100%", md: "75%" } }}
          />
        </Box>

        {loading ? (
          <Box sx={{ display: "flex", justifyContent: "center", my: 4 }}>
            <CircularProgress />
          </Box>
        ) : error ? (
          <Typography color="error" sx={{ my: 2 }}>
            Error loading exchange rates. Please try again later.
          </Typography>
        ) : (
          <>
            <TableContainer component={Paper} sx={{ mb: 2 }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Currency</TableCell>
                    <TableCell>Rate (1 {baseCurrency} =)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {paginatedRates.map(([currency, rate]) => (
                    <TableRow key={currency}>
                      <TableCell>{currency}</TableCell>
                      <TableCell>{rate}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Pagination
                count={Math.ceil(filteredRates.length / rowsPerPage)}
                page={page}
                onChange={handleChangePage}
                color="primary"
              />
            </Box>
          </>
        )}
      </Paper>
    </div>
  )
}

export default ExchangeRatesPage
