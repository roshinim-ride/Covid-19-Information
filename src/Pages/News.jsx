import { Card, CardMedia, CardContent, Typography, Grid } from "@mui/material"
const News = () => {    
  return (
    <Card sx={{ p:4, m:2, }}>
    <Grid container spacing={12} sx={{ p: 2 }}>
      <Grid item xs={12} md={4}>
        <Card>
          <CardMedia component="img" height="140" image="src\assets\s1.webp" />
          <CardContent>
            <Typography variant="h6">COVID Update</Typography>
            <Typography>New variants monitored by WHO.</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card>
          <CardMedia component="img" height="140" image="src\assets\s2.jpg" />
          <CardContent>
            <Typography variant="h6">COVID Update</Typography>
            <Typography>New variants monitored by WHO.</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card>
          <CardMedia component="img" height="140" image="src\assets\s3.webp" />
          <CardContent>
            <Typography variant="h6">COVID Update</Typography>
            <Typography>New variants monitored by WHO.</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card>
          <CardMedia component="img" height="140" image="src\assets\s4.webp" />
          <CardContent>
            <Typography variant="h6">COVID Update</Typography>
            <Typography>New variants monitored by WHO.</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card>
          <CardMedia component="img" height="140" image="src\assets\s5.jpg" />
          <CardContent>
            <Typography variant="h6">COVID Update</Typography>
            <Typography>New variants monitored by WHO.</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card>
          <CardMedia component="img" height="140" image="src\assets\s6.jpg" />
          <CardContent>
            <Typography variant="h6">COVID Update</Typography>
            <Typography>New variants monitored by WHO.</Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
    </Card>
  )
}
export default News;
