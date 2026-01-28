
import { CardMedia,Container, Typography, Grid, Card, CardContent } from "@mui/material"
const About = () =>
   {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h2" gutterBottom>
        About Us
      </Typography>
      <Typography sx={{ mb: 4 }}>
        This COVID-19 information platform provides accurate, timely, and
        science-based guidance to protect public health and save lives.
      </Typography>
      <Grid container spacing={6}>
        <Grid item xs={12} md={4}>
          <Card>
             <CardMedia component="img" height="400" image="src\assets\s2.jpg" />
            <CardContent>
              <Typography variant="h5">Our Mission</Typography>
              <Typography>
                To ensure global access to trusted COVID-19 health information.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
             <CardMedia component="img" height="300" image="src\assets\s8.jpg" />
            <CardContent>
              <Typography variant="h5">Contact Us</Typography>
              <Typography>Email: support@covidinfo.org</Typography>
              <Typography>Phone: +91-9876543210</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
               <CardMedia component="img" height="140" image="src\assets\s1.webp" />
              <Typography variant="h5">Careers & Resources</Typography>
              <Typography>
                Careers, FAQs, Publications, Procurement & Library resources.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  )
}

export default About;
