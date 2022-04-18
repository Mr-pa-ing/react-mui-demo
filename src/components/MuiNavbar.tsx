import { useState } from "react";
import { AppBar, IconButton, Toolbar, Typography, Stack, Button, Menu, MenuItem } from "@mui/material";
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import { KeyboardArrowDownOutlined } from "@mui/icons-material";

const MuiNavbar = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    }

    const handleClose = () => {
        setAnchorEl(null);
    }

  return (
    <AppBar position="static">
        <Toolbar>
            <IconButton color="inherit" edge="start" size="large" aria-label="logo">
                <CatchingPokemonIcon/>
            </IconButton>
            <Typography variant="h6" component="div" sx={{flexGrow: 1}}>POKEMONAPP</Typography>
            <Stack direction="row" spacing={4}>
                <Button color="inherit">Features</Button>
                <Button color="inherit">Pricing</Button>
                <Button color="inherit">about</Button>
                <Button color="inherit" 
                    id="resources-button"
                    aria-controls={open ? 'resources-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    endIcon={<KeyboardArrowDownOutlined/>}
                >resources</Button>
                <Button color="inherit">login</Button>
            </Stack>
            <Menu id="resources-menu"
                    anchorEl={anchorEl}  
                    open={open}
                    MenuListProps={{
                        "aria-labelledby": "resources-button"
                    }}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right'
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right'
                    }}
            >
                <MenuItem onClick={handleClose}>Blog</MenuItem>
                <MenuItem onClick={handleClose}>Podcast</MenuItem>
            </Menu>
        </Toolbar>
    </AppBar>
  )
}

export default MuiNavbar;