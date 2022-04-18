import React,{ useState, useEffect } from 'react'
import { Box, Skeleton, Stack, Avatar, Typography } from '@mui/material'

const MuiSkeleton = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000)
  }, []);

  return (
    <Box sx={{ width: '250px' }}>
      {
        loading ? (
          <Skeleton variant='rectangular' width={256} height={144} animation='wave'/>
        ) : (
          <img src='https://source.unsplash.com/random/256x144' alt="skeleton-img" />
        )
      }
      <Stack direction='row' spacing={1} sx={{ width: '100%', marginTop: '12px' }}>
        {
          loading ? (
            <Skeleton variant='circular' width={40} height={40} />
          ) : (
            <Avatar>
              V
            </Avatar>
          )
        }
        <Stack sx={{width: '80%'}}>
          {
            loading ? (
              <>
                <Typography variant='body1'><Skeleton variant='text' width='100%' animation='wave'/></Typography>
                <Typography variant='body2'><Skeleton variant='text' width='100%' animation='wave'/></Typography>
              </>
            ) : (
              <>
                <Typography variant='body1'>React Mui Skeleton Demo</Typography>
                <Typography variant='body1'>This is mui skeleton.</Typography>
              </>
            )
          }
        </Stack>
      </Stack>
    </Box>
  )
}

export default MuiSkeleton