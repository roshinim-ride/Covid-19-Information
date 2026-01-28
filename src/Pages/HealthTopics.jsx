import { Container, CardMedia, Card, CardContent, Typography } from "@mui/material"
import s1 from "../assets/s1.webp"
const HealthTopics = () => {
  return (
    <Container sx={{ mt: 4 }}>
      <Card>
        <CardMedia component="img" height="500" image={s1} alt="Our Mission"/>
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
