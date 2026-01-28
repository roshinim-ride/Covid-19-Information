import { useState, useContext } from "react"
import { AppBar, Toolbar, Typography, Button, IconButton, Box } from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import { Link } from "react-router-dom"
import SideMenu from "./SideMenu"
import DonateDialog from "./DonateDialog"
import LoginDialog from "./LoginDialog"
import { AdminContext } from "../context/AdminContext"

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false)
  const [openDonate, setOpenDonate] = useState(false)
  const [openLogin, setOpenLogin] = useState(false)
  const { isAdmin, logout } = useContext(AdminContext)
  return (
    <>
      <AppBar position="static"> 
        <Toolbar>
          <IconButton color="warning" onClick={() => setOpenMenu(true)}>
            <MenuIcon /> 
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>COVID-19</Typography>
          <Button color="inherit" component={Link} to="/health-topics">Health Topics</Button>
          <Button color="inherit" component={Link} to="/countries">Countries</Button>
          <Button color="inherit" component={Link} to="/news">News</Button>
          <Button color="inherit" component={Link} to="/emergencies">Emergencies</Button>
          <Button color="inherit" component={Link} to="/data">Data</Button>
          <Button color="inherit" component={Link} to="/about">About</Button>
          {isAdmin && (
            <Box sx={{ ml: 1 }}>
              <Typography variant="caption" sx={{ color: "#fff", mr: 2 }}>
                Admin Mode
              </Typography>
              <Button
                variant="contained"
                color="error"
                size="small"
                onClick={logout}
                sx={{ mr: 1 }}
              >
                Logout
              </Button>
            </Box>
          )}
          {!isAdmin && (
            <Button
              variant="contained"
              color="warning"
              onClick={() => setOpenLogin(true)}
              sx={{ mr: 1 }}
            >
              Admin
            </Button>
          )}
          <Button variant="contained" color="success" onClick={() => setOpenDonate(true)}>
            Donate
          </Button>
        </Toolbar>
      </AppBar>
      <SideMenu open={openMenu} setOpen={setOpenMenu} />
      <DonateDialog open={openDonate} setOpen={setOpenDonate} />
      <LoginDialog open={openLogin} setOpen={setOpenLogin} />
    </>
  )
}
export default Navbar;