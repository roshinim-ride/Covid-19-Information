import { Box, Typography } from "@mui/material"
const Footer = () => {
  return (
    <Box sx={{ p: 3, bgcolor: "#f5f5f5", mt: 4 }}>
      <Typography>Regions: Africa | Americas | Europe | South-East Asia</Typography>
      <Typography>Policies: Cybersecurity | Ethics | Terms</Typography>
      <Typography>About: Careers | FAQs | Publications</Typography>
      <Typography>Contact Us</Typography>
    </Box>
  )
}
export default Footer;