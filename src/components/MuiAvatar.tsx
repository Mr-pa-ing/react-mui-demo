import { Stack, Avatar, AvatarGroup } from '@mui/material'

const MuiAvatar = () => {
  return (
    <Stack spacing={3}>
        <Stack direction="row" spacing={2}>
            <Avatar sx={{ bgcolor: 'primary.light' }}>CW</Avatar>
            <Avatar sx={{ bgcolor: 'secondary.light' }}>DK</Avatar>
        </Stack>
        <Stack direction="row" spacing={2}>
          <AvatarGroup max={3}>
            <Avatar sx={{ bgcolor: 'primary.light' }}>CW</Avatar>
            <Avatar sx={{ bgcolor: 'secondary.light' }}>DK</Avatar>
            <Avatar src='https://randomuser.me/api/portraits/med/men/75.jpg'></Avatar>
            <Avatar src='https://randomuser.me/api/portraits/med/women/75.jpg'></Avatar>
          </AvatarGroup>
        </Stack>
         <Stack direction="row" spacing={2}>
            <Avatar variant='square' sx={{ bgcolor: 'primary.light', width: 48, height: 48 }}>CW</Avatar>
            <Avatar variant='rounded' sx={{ bgcolor: 'secondary.light' }}>DK</Avatar>
        </Stack>
    </Stack>
  )
}

export default MuiAvatar