import { useState, useContext } from "react"
import {Container, TextField, Button, Typography, Card, CardContent,Box, Alert, Dialog, DialogContent} from "@mui/material"
import { useNavigate } from "react-router-dom"
import { AdminContext } from "../context/AdminContext"
import LockIcon from "@mui/icons-material/Lock"
import CheckCircleIcon from "@mui/icons-material/CheckCircle"

const AdminLogin = () => {
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [successDialog, setSuccessDialog] = useState(false)
  const navigate = useNavigate()
  const { isAdmin, login, logout, adminName } = useContext(AdminContext)

  const handleLogin = () => {
    if (password.trim() === "") {
      setError("Please enter a password")
      return
    }

    if (login(password)) {
      setError("")
      setPassword("")
      setSuccessDialog(true)
      setTimeout(() => {
        setSuccessDialog(false)
        navigate("/")
      }, 2000)
    } else {
      setError("Invalid admin password")
      setPassword("")
    }
  }

  const handleLogout = () => {
    logout()
    setPassword("")
    alert("You have been logged out")
    navigate("/")
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleLogin()
    }
  }

  if (isAdmin) {
    return (
      <Container sx={{ mt: 6, maxWidth: 600 }}>
        <Card sx={{ backgroundColor: "#e8f5e9" }}>
          <CardContent>
            <Box sx={{ textAlign: "center", mb: 3 }}>
              <CheckCircleIcon sx={{ fontSize: 60, color: "green" }} />
              <Typography variant="h5" sx={{ mt: 2, fontWeight: "bold", color: "green" }}>
                Admin Access Granted
              </Typography>
            </Box>

            <Typography variant="body1" sx={{ mb: 2, textAlign: "center" }}>
              Welcome, <strong>{adminName}</strong>!
            </Typography>

            <Alert severity="success" sx={{ mb: 3 }}>
              You now have full admin access. You can:
              <ul>
                <li>Create, Edit, and Delete country records</li>
                <li>Create, Edit, and Delete state records</li>
                <li>Delete donation records</li>
                <li>Manage all system data</li>
              </ul>
            </Alert>

            <Box sx={{ display: "flex", gap: 2 }}>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={() => navigate("/data")}
              >
                Go to State Data
              </Button>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={() => navigate("/countries")}
              >
                Go to Countries
              </Button>
            </Box>

            <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={() => navigate("/donation-history")}
              >
                View Donations
              </Button>
              <Button
                variant="outlined"
                color="error"
                fullWidth
                onClick={handleLogout}
                sx={{ mt: 0 }}
              >
                Logout
              </Button>
            </Box>

            <Typography variant="caption" sx={{ display: "block", mt: 3, textAlign: "center", color: "textSecondary" }}>
              Admin mode is active. Click Logout to exit admin mode.
            </Typography>
          </CardContent>
        </Card>
      </Container>
    )
  }

  return (
    <Container sx={{ mt: 6, maxWidth: 400 }}>
      <Card>
        <CardContent>
          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <LockIcon sx={{ mr: 1, color: "primary.main" }} />
            <Typography variant="h5">
              Admin Login
            </Typography>
          </Box>

          <Typography variant="body2" sx={{ mb: 3, color: "textSecondary" }}>
            Enter your admin password to access admin features and control system data
          </Typography>

          {error && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {error}
            </Alert>
          )}

          <TextField
            label="Admin Password"
            type="password"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyPress={handleKeyPress}
            error={!!error}
            sx={{ mb: 3 }}
            autoFocus
            placeholder="Enter password"
          />
          <Button
            variant="contained"
            fullWidth
            onClick={handleLogin}
            size="large"
          >
            Login as Admin
          </Button>

          <Typography variant="caption" sx={{ display: "block", mt: 3, textAlign: "center", color: "textSecondary" }}>
            Password: <strong>1234admin</strong>
          </Typography>
        </CardContent>
      </Card>


      <Dialog open={successDialog} maxWidth="sm" fullWidth>
        <DialogContent sx={{ textAlign: "center", py: 3 }}>
          <CheckCircleIcon sx={{ fontSize: 50, color: "green", mb: 2 }} />
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Admin Login Successful!
          </Typography>
          <Typography variant="body2" sx={{ mt: 1, color: "textSecondary" }}>
            Redirecting to home page...
          </Typography>
        </DialogContent>
      </Dialog>
    </Container>
  )
}

export default AdminLogin