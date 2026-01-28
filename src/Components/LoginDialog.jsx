import { useState, useContext } from "react"
import {Dialog, DialogTitle, DialogContent, DialogActions,TextField, Button, Typography} from "@mui/material"
import { AdminContext } from "../context/AdminContext"

const LoginDialog = ({ open, setOpen }) => {
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const { login } = useContext(AdminContext)

  const handleLogin = () => {
    if (password.trim() === "") {
      setError("Please enter a password")
      return
    }

    if (login(password)) {
      setError("")
      setPassword("") 
      setOpen(false)
      alert("Admin login successful!")
    } else {
      setError("Invalid admin password")
      setPassword("")
    }
  }

  const handleClose = () => {
    setOpen(false)
    setPassword("")
    setError("")
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleLogin()
    }
  }

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle>Admin Login</DialogTitle>
      <DialogContent sx={{ pt: 2 }}>
        <Typography variant="body2" sx={{ mb: 2, color: "textSecondary" }}>
          Enter your admin password to access admin features
        </Typography>
        <TextField
          label="Admin Password"
          type="password"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyPress={handleKeyPress}
          error={!!error}
          helperText={error}
          autoFocus
          sx={{ mb: 1 }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleLogin} variant="contained" color="primary">
          Login
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default LoginDialog
