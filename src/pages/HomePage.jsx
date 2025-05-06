import { useState } from "react"
import { useCurrency } from "../context/CurrencyContext"
import { useEmiCalculator } from "../hooks/useEmiCalculator"
import {
  Button,
  TextField,
  Typography,
  Box,
  Paper,
  Container,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  useTheme as useMuiTheme,
} from "@mui/material"

function HomePage() {
  const muiTheme = useMuiTheme()
  const { currency, setCurrency, convertAmount } = useCurrency()

  const [loanAmount, setLoanAmount] = useState("")
  const [interestRate, setInterestRate] = useState("")
  const [loanTerm, setLoanTerm] = useState("")
  const [showTable, setShowTable] = useState(false)

  const { calculateEmi, generateAmortizationSchedule, monthlyEmi, amortizationSchedule } = useEmiCalculator()

  const handleCalculate = () => {
    if (loanAmount && interestRate && loanTerm) {
      calculateEmi(Number.parseFloat(loanAmount), Number.parseFloat(interestRate), Number.parseFloat(loanTerm))
      generateAmortizationSchedule(
        Number.parseFloat(loanAmount),
        Number.parseFloat(interestRate),
        Number.parseFloat(loanTerm),
      )
      setShowTable(true)
    }
  }

  const handleReset = () => {
    setShowTable(false)
  }

  return (
    <div maxWidth="lg" sx={{ py: 4 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h4" component="h1" sx={{ mb: 4, fontWeight: "bold" }}>
          Loan Calculator Dashboard
        </Typography>

        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr 1fr" }, gap: 3, mb: 4 }}>
          <Box>
            <Typography variant="subtitle1" sx={{ mb: 1 }}>
              Loan Amount
            </Typography>
            <TextField
              fullWidth
              type="number"
              value={loanAmount}
              onChange={(e) => setLoanAmount(e.target.value)}
              placeholder="e.g., 250000"
              variant="outlined"
            />
          </Box>
          <Box>
            <Typography variant="subtitle1" sx={{ mb: 1 }}>
              Interest Rate (%)
            </Typography>
            <TextField
              fullWidth
              type="number"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
              placeholder="e.g., 8.5"
              variant="outlined"
            />
          </Box>
          <Box>
            <Typography variant="subtitle1" sx={{ mb: 1 }}>
              Term (Years)
            </Typography>
            <TextField
              fullWidth
              type="number"
              value={loanTerm}
              onChange={(e) => setLoanTerm(e.target.value)}
              placeholder="e.g., 5"
              variant="outlined"
            />
          </Box>
        </Box>

        <Button variant="contained" color="primary" onClick={handleCalculate} sx={{ mb: 4 }}>
          CALCULATE
        </Button>

        {showTable && (
          <>
            <Box sx={{ mb: 4 }}>
              <Typography variant="h5" sx={{ mb: 2 }}>
                Monthly EMI: {currency} {convertAmount(monthlyEmi).toFixed(2)}
              </Typography>

              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
                <FormControl variant="outlined" sx={{ minWidth: 120 }}>
                  <InputLabel>Currency</InputLabel>
                  <Select value={currency} onChange={(e) => setCurrency(e.target.value)} label="Currency">
                    <MenuItem value="USD">USD</MenuItem>
                    <MenuItem value="EUR">EUR</MenuItem>
                    <MenuItem value="GBP">GBP</MenuItem>
                    <MenuItem value="INR">INR</MenuItem>
                    <MenuItem value="JPY">JPY</MenuItem>
                  </Select>
                </FormControl>

                <Button variant="outlined" color="secondary" onClick={handleReset}>
                  RESET TABLE
                </Button>
              </Box>
            </Box>

            <Typography variant="h6" sx={{ mb: 1 }}>
              Amortization Schedule ({currency})
            </Typography>

            <TableContainer component={Paper} sx={{ mb: 3 }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Month</TableCell>
                    <TableCell>Principal</TableCell>
                    <TableCell>Interest</TableCell>
                    <TableCell>Remaining Balance</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {amortizationSchedule.map((row) => (
                    <TableRow key={row.month}>
                      <TableCell>{row.month}</TableCell>
                      <TableCell>
                        {currency} {convertAmount(row.principal).toFixed(2)}
                      </TableCell>
                      <TableCell>
                        {currency} {convertAmount(row.interest).toFixed(2)}
                      </TableCell>
                      <TableCell>
                        {currency} {convertAmount(row.remainingBalance).toFixed(2)}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </>
        )}
      </Paper>
    </div>
  )
}

export default HomePage
