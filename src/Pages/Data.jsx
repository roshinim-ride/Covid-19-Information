import React, { useEffect, useState, useContext } from "react"
import { Table, TableHead, TableRow,TableCell, TableBody, Container, Typography, Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField, Box,
 Alert} from "@mui/material"
import EditIcon from "@mui/icons-material/Edit"
import DeleteIcon from "@mui/icons-material/Delete"
import AddIcon from "@mui/icons-material/Add"
import { fetchIndiaStateData } from "../services/api"
import { AdminContext } from "../context/AdminContext"

const Data = () => {
  const [states, setStates] = useState([])
  const [openDialog, setOpenDialog] = useState(false)
  const [editingId, setEditingId] = useState(null)
  const [formData, setFormData] = useState({ state: "", confirmed: "", recovered: "", deaths: "" })
  const { isAdmin } = useContext(AdminContext)

  useEffect(() => {
    const data = fetchIndiaStateData()
    setStates(data)
  }, [])

  const handleAddClick = () => {
    setEditingId(null)
    setFormData({ state: "", confirmed: "", recovered: "", deaths: "" })
    setOpenDialog(true)
  }

  const handleEditClick = (state) => {
    setEditingId(state.state)
    setFormData(state)
    setOpenDialog(true)
  }

  const handleSave = () => {
    if (!formData.state.trim() || !formData.confirmed || !formData.recovered || !formData.deaths) {
      alert("Please fill all fields")
      return
    }

    if (editingId) {
      setStates(states.map(s => s.state === editingId ? formData : s))
      alert("Record updated successfully!")
    } else {
      setStates([...states, formData])
      alert("Record added successfully!")
    }

    setOpenDialog(false)
  }

  const handleDelete = (stateName) => {
    if (window.confirm(`Are you sure you want to delete ${stateName}?`)) {
      setStates(states.filter(s => s.state !== stateName))
      alert("Record deleted successfully!")
    }
  }

  const handleClose = () => {
    setOpenDialog(false)
  }

  return (
    <Container sx={{ mt: 4, mb: 4 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
        <Typography variant="h4" sx={{ mb: 0 }}>
          India State / UT COVID-19 Data
        </Typography>
        {isAdmin && (
          <Button
            variant="contained"
            color="success"
            startIcon={<AddIcon />}
            onClick={handleAddClick}
          >
            Add State
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
            <TableCell sx={{ fontWeight: "bold" }}>State / UT</TableCell>
            <TableCell sx={{ fontWeight: "bold" }} align="right">Confirmed</TableCell>
            <TableCell sx={{ fontWeight: "bold" }} align="right">Recovered</TableCell>
            <TableCell sx={{ fontWeight: "bold" }} align="right">Deaths</TableCell>
            {isAdmin && <TableCell sx={{ fontWeight: "bold" }} align="center">Actions</TableCell>}
          </TableRow>
        </TableHead>

        <TableBody>
          {states.map((state, index) => (
            <TableRow key={index} hover>
              <TableCell>{state.state}</TableCell>
              <TableCell align="right">{state.confirmed || state.active}</TableCell>
              <TableCell align="right">{state.recovered}</TableCell>
              <TableCell align="right">{state.deaths}</TableCell>
              {isAdmin && (
                <TableCell align="center">
                  <Button
                    size="small"
                    startIcon={<EditIcon />}
                    onClick={() => handleEditClick(state)}
                    sx={{ mr: 1 }}
                  >
                    Edit
                  </Button>
                  <Button
                    size="small"
                    startIcon={<DeleteIcon />}
                    color="error"
                    onClick={() => handleDelete(state.state)}
                  >
                    Delete
                  </Button>
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Dialog open={openDialog} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle>
          {editingId ? "Edit State Data" : "Add New State"}
        </DialogTitle>
        <DialogContent sx={{ pt: 2 }}>
          <TextField
            label="State / UT Name"
            fullWidth
            value={formData.state}
            onChange={(e) => setFormData({ ...formData, state: e.target.value })}
            disabled={!!editingId}
            sx={{ mb: 2 }}
          />
          <TextField
            label="Confirmed Cases"
            type="number"
            fullWidth
            value={formData.confirmed}
            onChange={(e) => setFormData({ ...formData, confirmed: e.target.value })}
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

export default Data
