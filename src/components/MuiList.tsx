import { Avatar, Box, List, ListItem, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText, Divider } from "@mui/material";
import { Mail } from "@mui/icons-material";

const MuiList = () => {
  return (
    <Box sx={{width: '400px', bgcolor: '#efefef'}}>
        <List>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <ListItemAvatar>
                            <Avatar>
                                <Mail />  
                            </Avatar>
                        </ListItemAvatar>
                    </ListItemIcon>
                    <ListItemText primary="Item 1" secondary="This is secondary text." />
                </ListItemButton>
            </ListItem>
            <Divider/>
            <ListItem>
                <ListItemIcon>
                    <ListItemAvatar>
                        <Avatar>
                            <Mail />
                        </Avatar>
                    </ListItemAvatar>
                </ListItemIcon>
                <ListItemText primary="Item 2" secondary="This is secondary text."  />
            </ListItem>
            <Divider/>
            <ListItem>
                <ListItemIcon>
                    <ListItemAvatar>
                        <Avatar>
                            <Mail />
                        </Avatar>
                    </ListItemAvatar>
                </ListItemIcon>
                <ListItemText primary="Item 3" secondary="This is secondary text."  />
            </ListItem>
        </List>
    </Box>
  )
}

export default MuiList;