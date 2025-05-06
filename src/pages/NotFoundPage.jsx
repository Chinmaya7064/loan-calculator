import { Button, Typography, Container, Paper, useTheme as useMuiTheme } from "@mui/material"
import { Link } from "react-router-dom"

function NotFoundPage() {
  const muiTheme = useMuiTheme()

  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Paper elevation={3} sx={{ p: 4, textAlign: "center" }}>
        <Typography variant="h1" sx={{ mb: 2 }}>
          404
        </Typography>
        <Typography variant="h4" sx={{ mb: 3 }}>
          Page Not Found
        </Typography>
        <Button component={Link} to="/" variant="contained" color="primary">
          Go to Home
        </Button>
      </Paper>
    </Container>
  )
}

export default NotFoundPage
