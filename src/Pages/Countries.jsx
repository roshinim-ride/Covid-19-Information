import React, { useEffect, useState, useContext } from "react"
import {
  Table, TableHead, TableRow, TableCell, TableBody, Container, Typography,
  Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField, Box, Alert
} from "@mui/material"
import EditIcon from "@mui/icons-material/Edit"
import DeleteIcon from "@mui/icons-material/Delete"
import AddIcon from "@mui/icons-material/Add"
import { fetchCountryData } from "../services/api"
import { AdminContext } from "../context/AdminContext"

const Countries = () => {
  const [countries, setCountries] = useState([])
  const [openDialog, setOpenDialog] = useState(false)
  const [editingId, setEditingId] = useState(null)
  const [formData, setFormData] = useState({ country: "", cases: "", recovered: "", deaths: "" })
  const { isAdmin } = useContext(AdminContext)

  useEffect(() => {
    const data = fetchCountryData()
    setCountries(data)
  }, [])

  const handleAddClick = () => {
    setEditingId(null)
    setFormData({ country: "", cases: "", recovered: "", deaths: "" })
    setOpenDialog(true)
  }

  const handleEditClick = (country) => {
    setEditingId(country.country)
    setFormData(country)
    setOpenDialog(true)
  }

  const handleSave = () => {
    if (!formData.country.trim() || !formData.cases || !formData.recovered || !formData.deaths) {
      alert("Please fill all fields")
      return
    }

    if (editingId) {
      // Update
      setCountries(countries.map(c => c.country === editingId ? formData : c))
      alert("Record updated successfully!")
    } else {
      // Create
      setCountries([...countries, formData])
      alert("Record added successfully!")
    }

    setOpenDialog(false)
  }

  const handleDelete = (countryName) => {
    if (window.confirm(`Are you sure you want to delete ${countryName}?`)) {
      setCountries(countries.filter(c => c.country !== countryName))
      alert("Record deleted successfully!")
    }
  }

  const handleClose = () => {
    setOpenDialog(false)
  }

  return (
    <Container sx={{ mt: 4, mb: 4 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
        <Typography variant="h4" gutterBottom sx={{ mb: 0 }}>
          Country-wise COVID-19 Data
        </Typography>
        {isAdmin && (
          <Button
            variant="contained"
            color="success"
            startIcon={<AddIcon />}
            onClick={handleAddClick}
          >
            Add Country
          </Button>
        )}
      </Box>

      {!isAdmin && (
        <Alert severity="info" sx={{ mb: 3 }}>
          Login as admin to edit or delete records
        </Alert>
      )}

      <Table>
        <TableHead sx={{ backgroundColor: "#f5f5f5" }}>
          <TableRow>
            <TableCell sx={{ fontWeight: "bold" }}>Country</TableCell>
            <TableCell sx={{ fontWeight: "bold" }} align="right">Cases</TableCell>
            <TableCell sx={{ fontWeight: "bold" }} align="right">Recovered</TableCell>
            <TableCell sx={{ fontWeight: "bold" }} align="right">Deaths</TableCell>
            {isAdmin && <TableCell sx={{ fontWeight: "bold" }} align="center">Actions</TableCell>}
          </TableRow>
        </TableHead>

        <TableBody>
          {countries.map((country) => (
            <TableRow key={country.country} hover>
              <TableCell>{country.country}</TableCell>
              <TableCell align="right">{country.cases}</TableCell>
              <TableCell align="right">{country.recovered}</TableCell>
              <TableCell align="right">{country.deaths}</TableCell>
              {isAdmin && (
                <TableCell align="center">
                  <Button
                    size="small"
                    startIcon={<EditIcon />}
                    onClick={() => handleEditClick(country)}
                    sx={{ mr: 1 }}
                  >
                    Edit
                  </Button>
                  <Button
                    size="small"
                    startIcon={<DeleteIcon />}
                    color="error"
                    onClick={() => handleDelete(country.country)}
                  >
                    Delete
                  </Button>
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Add/Edit Dialog */}
      <Dialog open={openDialog} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle>
          {editingId ? "Edit Country Data" : "Add New Country"}
        </DialogTitle>
        <DialogContent sx={{ pt: 2 }}>
          <TextField
            label="Country Name"
            fullWidth
            value={formData.country}
            onChange={(e) => setFormData({ ...formData, country: e.target.value })}
            disabled={!!editingId}
            sx={{ mb: 2 }}
          />
          <TextField
            label="Cases"
            type="number"
            fullWidth
            value={formData.cases}
            onChange={(e) => setFormData({ ...formData, cases: e.target.value })}
            sx={{ mb: 2 }}
          />
          <TextField
            label="Recovered"
            type="number"
            fullWidth
            value={formData.recovered}
            onChange={(e) => setFormData({ ...formData, recovered: e.target.value })}
            sx={{ mb: 2 }}
          />
          <TextField
            label="Deaths"
            type="number"
            fullWidth
            value={formData.deaths}
            onChange={(e) => setFormData({ ...formData, deaths: e.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave} variant="contained" color="primary">
            {editingId ? "Update" : "Add"}
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  )
}

export default Countries
