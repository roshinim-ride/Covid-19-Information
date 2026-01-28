import  { useState } from "react"
import {Dialog, DialogContent, DialogActions, Button, TextField, Box, ToggleButton, ToggleButtonGroup, Checkbox, FormControlLabel,
  Typography, Grid, Paper, Link} from "@mui/material"
import { useNavigate } from "react-router-dom"
import CheckCircleIcon from "@mui/icons-material/CheckCircle"

const DonateDialog = ({ open, setOpen }) => {
  const [donationType, setDonationType] = useState("once")
  const [amount, setAmount] = useState(2500)
  const [customAmount, setCustomAmount] = useState("")
  const [dedicateFlag, setDedicateFlag] = useState(false)
  const [comment, setComment] = useState("")
  const navigate = useNavigate()

  const predefinedAmounts = [2000, 2500, 4000, 5000, 7000, 9000]

  const handleDonate = () => {
    const finalAmount = customAmount || amount
    
    const donations = JSON.parse(localStorage.getItem("donations") || "[]")
    const newDonation = {
      id: Date.now(),
      amount: finalAmount,
      type: donationType,
      dedicated: dedicateFlag,
      comment: comment,
      date: new Date().toLocaleString()
    }
    
    donations.push(newDonation)
    localStorage.setItem("donations", JSON.stringify(donations))
    
    alert(`Thank you for your ₹${finalAmount} donation!`)
    setOpen(false)
    resetForm()
  }

  const resetForm = () => {
    setDonationType("once")
    setAmount(2500)
    setCustomAmount("")
    setDedicateFlag(false)
    setComment("")
  }

  const handleClose = () => {
    setOpen(false)
    resetForm()
  }

  const handleViewHistory = () => {
    setOpen(false)
    navigate("/donation-history")
  }

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogContent sx={{ pt: 3 }}>
        <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
          <CheckCircleIcon sx={{ color: "green", mr: 1, fontSize: 28 }} />
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Secure Donation
          </Typography>
        </Box>
        <Box sx={{ mb: 3 }}>
          <ToggleButtonGroup
            value={donationType}
            exclusive
            onChange={(e, newType) => newType && setDonationType(newType)}
            fullWidth
            size="small"
      >
            <ToggleButton value="once">Give once</ToggleButton>
            <ToggleButton value="monthly">💗 Monthly</ToggleButton>
          </ToggleButtonGroup>
        </Box>

        <Box sx={{ mb: 3 }}>
          <Grid container spacing={1}>
            {predefinedAmounts.map((amt) => (
              <Grid item xs={4} key={amt}>
                <Button
                  variant={amount === amt && !customAmount ? "contained" : "outlined"}
                  fullWidth
                  onClick={() => {
                    setAmount(amt)
                    setCustomAmount("")
                  }}
                  size="small"
                >
                  ₹{amt.toLocaleString()}
                </Button>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box sx={{ mb: 3, display: "flex", gap: 1 }}>
          <TextField
            label="Custom Amount"
            type="number"
            value={customAmount}
            onChange={(e) => setCustomAmount(e.target.value)}
            size="small"
            fullWidth
            placeholder="Enter amount"
          />
          <TextField
            value="INR"
            InputProps={{ readOnly: true }}
            size="small"
            sx={{ width: 80 }}
          />

        </Box>


        <FormControlLabel
          control={
            <Checkbox
              checked={dedicateFlag}
              onChange={(e) => setDedicateFlag(e.target.checked)}
            />
          }
          label="Dedicate this donation"
          sx={{ mb: 2 }}
        />

     
       
      </DialogContent>

      <DialogActions sx={{ p: 2, flexDirection: "column", gap: 1 }}>
        <Button
          variant="contained"
          color="Success"
          fullWidth
          onClick={handleDonate}
          sx={{
            backgroundColor: "#4caf50",
            py: 1.5,
            fontSize: "1rem",
            fontWeight: "bold"
          }}
        >
          Donate
        </Button>
        <Button
          variant="outlined"
          fullWidth
          onClick={handleViewHistory}
          sx={{ py: 1 }}
        >
          View Donation History
        </Button>
        <Button
          variant="text"
          fullWidth
          onClick={handleClose}
        >
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default DonateDialog
