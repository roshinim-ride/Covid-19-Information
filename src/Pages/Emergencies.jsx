import { TextField, Button, Container } from "@mui/material"
 const Emergencies = () => {
  return (
    <Container sx={{ mt: 4 }}>
      <TextField fullWidth label="Name" sx={{ mb: 2 }} />
      <TextField fullWidth label="Symptoms" sx={{ mb: 2 }} />
      <TextField fullWidth label="Location" sx={{ mb: 2 }} />
      <Button variant="contained">Submit</Button>
    </Container>
  )
}
export default Emergencies;