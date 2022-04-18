import React,{ useState } from 'react'
import { BottomNavigation, BottomNavigationAction, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';

const MuiBottomNav = () => {
    const [value, setValue] = useState(0);

  return (
    <>
        {
            value === 0 && <Typography variant='h6' color='GrayText.primary'>This is Home page.</Typography>
        }
        {
            value === 1 && <Typography variant='h6' color='GrayText.primary'>This is Favourite page.</Typography>
        }
        {
            value === 2 && <Typography variant='h6' color='GrayText.primary'>This is Profile page.</Typography>
        }
        <BottomNavigation 
            sx={{width: '100%', position: 'absolute', bottom: 0}}
            value={value}
            onChange={(event, newValue) => setValue(newValue)}
            showLabels
        >
            <BottomNavigationAction icon={<HomeIcon/>} label='Home' />
            <BottomNavigationAction icon={<FavoriteIcon />} label='Favourite' />
            <BottomNavigationAction icon={<PersonIcon/>} label='Profile' />
        </BottomNavigation>
    </>
  )
}

export default MuiBottomNav;