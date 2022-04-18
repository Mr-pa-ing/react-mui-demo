import { Menu } from "@mui/icons-material";
import { Drawer, Box, Typography, IconButton } from "@mui/material";
import { useState } from "react";

const MuiDrawer = () => {
    const [isDrawerOpen, setDrawerOpen] = useState(false);

  return (
      <>
        <IconButton
            edge="end" 
            size="large" 
            color="inherit" 
            aria-label="logo"
            onClick={() => setDrawerOpen(true)}
        >
            <Menu/>
        </IconButton>
        <Drawer
            anchor="left"
            open={isDrawerOpen}
            onClose={() => setDrawerOpen(false)}
        >
            <Box p={2} width="250px" textAlign="center" role="presentation">
                <Typography variant="h6" component="div">Side panel</Typography>
            </Box>
        </Drawer>
      </>
  )
}

export default MuiDrawer;