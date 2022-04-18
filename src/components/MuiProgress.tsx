import { CircularProgress, LinearProgress, Stack } from '@mui/material'
import React from 'react'

const MuiProgress = () => {
  return (
    <Stack spacing={2}>
        <CircularProgress />
        <CircularProgress color="success" />
        <CircularProgress variant="determinate" value={60} color='warning' />

        <LinearProgress />
        <LinearProgress color="success" />
        <LinearProgress variant="determinate" value={60} color='warning' />
    </Stack>
  )
}

export default MuiProgress