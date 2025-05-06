import { useEffect } from "react"
import { Button, Typography, Container, Paper, useTheme as useMuiTheme } from "@mui/material"

function ErrorPage({ error, resetErrorBoundary }) {
  const muiTheme = useMuiTheme()

  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Paper elevation={3} sx={{ p: 4, textAlign: "center" }}>
        <Typography variant="h4" sx={{ mb: 3 }}>
          Something went wrong!
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          We apologize for the inconvenience. Please try again.
        </Typography>
        <Button variant="contained" color="primary" onClick={resetErrorBoundary}>
          Try Again
        </Button>
      </Paper>
    </Container>
  )
}

export default ErrorPage
