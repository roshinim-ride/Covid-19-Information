import { Drawer, List, ListItem, ListItemText } from "@mui/material"

const SideMenu = ({ open, setOpen }) => {
  return (
    <Drawer open={open} onClose={() => setOpen(false)}>
      <List sx={{ width: 250 }}>
        {["Latest News", "Latest on Emergencies", "Highlights", "Campaigns", "Events"]
          .map(text => ( 
          <ListItem button key={text}>
             <ListItemText primary={text} />
            </ListItem>
          ))}
      </List>
    </Drawer>
  )
}

export default SideMenu
