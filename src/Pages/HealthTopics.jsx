import { Container, CardMedia, Card, CardContent, Typography } from "@mui/material"
const HealthTopics = () => {
  return (
    <Container sx={{ mt: 4 }}>
      <Card>
        <CardMedia component="img" height="500" image="src\assets\s1.webp"/>
        <CardContent>
          <Typography variant="h4">COVID-19 Health Topics</Typography>
          <Typography>
            ✔ Prevent: Mask, Vaccination, Hand hygiene   <br />
            ✔ Reduce: Social distancing, testing  <br />
            ✔ Safe Life: Healthy diet, exercise  <br />
            ✔ Mental Health: Stress management <br />
          </Typography>
          <Typography>
            ✔ Prevent: Mask, Vaccination, Hand hygiene   <br />
            ✔ Reduce: Social distancing, testing  <br />
            ✔ Safe Life: Healthy diet, exercise  <br />
            ✔ Mental Health: Stress management <br />
          </Typography>
        </CardContent>
      </Card>
    </Container>
  )
}

export default HealthTopics;
