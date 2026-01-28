import React, { useState, useEffect, useContext } from "react"
import {
  Container, Typography, Table, TableHead, TableBody, TableRow, TableCell, Paper, Button, Box, Card, CardContent, Dialog, DialogTitle, DialogContent,
  DialogActions, Alert} from "@mui/material"
import { useNavigate } from "react-router-dom"
import DeleteIcon from "@mui/icons-material/Delete"
import InfoIcon from "@mui/icons-material/Info"
import { AdminContext } from "../context/AdminContext"

const DonationHistory = () => {
  const [donations, setDonations] = useState([])
  const [selectedDonation, setSelectedDonation] = useState(null)
  const [openDetails, setOpenDetails] = useState(false)
  const navigate = useNavigate()
  const { isAdmin } = useContext(AdminContext)

  useEffect(() => {
    // Load donations from localStorage
    const savedDonations = JSON.parse(localStorage.getItem("donations") || "[]")
    setDonations(savedDonations)
  }, [])

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this donation record?")) {
      const updated = donations.filter(d => d.id !== id)
      setDonations(updated)
      localStorage.setItem("donations", JSON.stringify(updated))
    }
  }

  const handleViewDetails = (donation) => {
    setSelectedDonation(donation)
    setOpenDetails(true)
  }

  const handleCloseDetails = () => {
    setOpenDetails(false)
    setSelectedDonation(null)
  }

  const calculateTotal = () => {
    return donations.reduce((sum, d) => sum + parseFloat(d.amount), 0)
  }

  return (
    <Container sx={{ mt: 4, mb: 4 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 4 }}>
        <Typography variant="h4" gutterBottom sx={{ mb: 0 }}>
          Donation History
        </Typography>
        <Button
          variant="contained"
          onClick={() => navigate("/")}
        >
          Back to Home
        </Button>
      </Box>

      {!isAdmin && (
        <Alert severity="info" sx={{ mb: 3 }}>
          You are viewing donation history. Only admins can delete records.
        </Alert>
      )}

      {donations.length === 0 ? (
        <Paper sx={{ p: 3, textAlign: "center" }}>
          <Typography variant="body1" color="textSecondary">
            No donations found. Start making a difference today!
          </Typography>
          <Button
            variant="contained"
            onClick={() => navigate("/")}
            sx={{ mt: 2 }}
          >
            Go Home
          </Button>
        </Paper>
      ) : (
        <>
   
          <Card sx={{ mb: 3, backgroundColor: "#e8f5e9" }}>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Total Amount Donated
              </Typography>
              <Typography variant="h5" sx={{ fontWeight: "bold", color: "green" }}>
                ₹{calculateTotal().toLocaleString()}
              </Typography>
              <Typography color="textSecondary" sx={{ mt: 1 }}>
                {donations.length} donation{donations.length !== 1 ? "s" : ""}
              </Typography>
            </CardContent>
          </Card>

          <Paper sx={{ overflowX: "auto" }}>
            <Table>
              <TableHead sx={{ backgroundColor: "#f5f5f5" }}>
                <TableRow>
                  <TableCell sx={{ fontWeight: "bold" }}>Date</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }} align="right">Amount</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>Type</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>Dedicated</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }} align="center">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {donations.map((donation) => (
                  <TableRow key={donation.id} hover>
                    <TableCell>{donation.date}</TableCell>
                    <TableCell align="right" sx={{ fontWeight: "bold", color: "green" }}>
                      ₹{parseFloat(donation.amount).toLocaleString()}
                    </TableCell>
                    <TableCell>
                      {donation.type === "once" ? "One-time" : "Monthly"}
                    </TableCell>
                    <TableCell>
                      {donation.dedicated ? "✓ Yes" : "No"}
                    </TableCell>
                    <TableCell align="center">
                      <Button
                        size="small"
                        startIcon={<InfoIcon />}
                        onClick={() => handleViewDetails(donation)}
                        sx={{ mr: 1 }}
                      >
                        View
                      </Button>
                      {isAdmin && (
                        <Button
                          size="small"
                          startIcon={<DeleteIcon />}
                          color="error"
                          onClick={() => handleDelete(donation.id)}
                        >
                          Delete
                        </Button>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        </>
      )}
      <Dialog open={openDetails} onClose={handleCloseDetails} maxWidth="sm" fullWidth>
        <DialogTitle>Donation Details</DialogTitle>
        <DialogContent sx={{ pt: 2 }}>
          {selectedDonation && (
            <Box>
              <Typography variant="body2" sx={{ mb: 2 }}>
                <strong>Date & Time:</strong> {selectedDonation.date}
              </Typography>
              <Typography variant="body2" sx={{ mb: 2 }}>
                <strong>Amount:</strong> ₹{parseFloat(selectedDonation.amount).toLocaleString()}
              </Typography>
              <Typography variant="body2" sx={{ mb: 2 }}>
                <strong>Donation Type:</strong> {selectedDonation.type === "once" ? "One-time" : "Monthly"}
              </Typography>
              <Typography variant="body2" sx={{ mb: 2 }}>
                <strong>Dedicated:</strong> {selectedDonation.dedicated ? "Yes" : "No"}
              </Typography>

            </Box>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDetails}>Close</Button>
        </DialogActions>
      </Dialog>
    </Container>
  )
}

export default DonationHistory
