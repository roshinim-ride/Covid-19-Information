import React, { useEffect } from "react";
import { Container,CardMedia, Typography, Grid, Card, CardContent, Button } from "@mui/material"
import { fetchGlobalData } from "../services/api";

const Home = () => {
  useEffect(() => {
  fetchGlobalData().then(data => console.log(data));
}, []);
  return (
    <Card sx={{mt:4 ,m:3,p:7}}>
    <Container sx={{ mt: 4 }}>
      <Typography variant="h3" gutterBottom>
        COVID-19 Information Portal
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        Trusted global information on COVID-19, prevention, vaccines, and emergency response.
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardMedia component="img" height="340" image="src\assets\s3.webp"/>
            <CardContent>
              <Typography variant="h6">Prevention</Typography>
              <Typography>
                Wear masks, maintain hygiene, get vaccinated, and avoid crowded places.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardMedia component="img" height="340" image="public\m1.jpg"/>
            <CardContent>
              <Typography variant="h6">Symptoms</Typography>
              <Typography>
                Fever, cough, tiredness, loss of taste or smell. Seek medical help if severe.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardMedia component="img" height="340" image="src\assets\s4.webp"/>
            <CardContent>
              <Typography variant="h6">Vaccination</Typography>
              <Typography>
                Vaccines reduce severe illness and death. Stay updated with booster doses.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Card sx={{ mt: 5, bgcolor: "#e3f2fd" }}>
         <CardMedia component="img" height="140" image="src\assets\s3.webp" />
        <CardContent>
          <Typography variant="h5">Need Immediate Help?</Typography>
          <Typography sx={{ mb: 2 }}>
            If you or someone near you has COVID-19 related emergency symptoms, report it now.
          </Typography>
          <Button variant="contained" color="primary" href="/emergencies">
            Report Emergency
          </Button>
        </CardContent>
      </Card>
    </Container>
    </Card>
  )
}
export default Home;