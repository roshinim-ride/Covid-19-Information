import { Card, CardMedia, CardContent, Typography, Grid } from "@mui/material"
import s1 from "../assets/s4.webp"
import s2 from "../assets/s5.jpg"
import s3 from "../assets/s6.jpg"
import s4 from "../assets/s8.jpg"
import s5 from "../assets/s1.webp"
import s6 from "../assets/s2.jpg"
const News = () => {    
  return (
    <Card sx={{ p:4, m:2, }}> 
    <Grid container spacing={12} sx={{ p: 2 }}>
      <Grid item xs={12} md={4}>
        <Card>
          <CardMedia component="img" height="140" image={s1} />
          <CardContent>
            <Typography variant="h6">COVID Update</Typography>
            <Typography>New variants monitored by WHO.</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card>
          <CardMedia component="img" height="140" image={s2} />
          <CardContent>
            <Typography variant="h6">COVID Update</Typography>
            <Typography>New variants monitored by WHO.</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card>
          <CardMedia component="img" height="140" image={s3} />
          <CardContent>
            <Typography variant="h6">COVID Update</Typography>
            <Typography>New variants monitored by WHO.</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card>
          <CardMedia component="img" height="140" image={s4} />
          <CardContent>
            <Typography variant="h6">COVID Update</Typography>
            <Typography>New variants monitored by WHO.</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card>
          <CardMedia component="img" height="140" image={s5} />
          <CardContent>
            <Typography variant="h6">COVID Update</Typography>
            <Typography>New variants monitored by WHO.</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card>
          <CardMedia component="img" height="140" image={s6} />
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
