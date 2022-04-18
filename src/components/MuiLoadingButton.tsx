import React from 'react'
import { Stack } from '@mui/material'
import { LoadingButton } from '@mui/lab'
import { Save } from '@mui/icons-material'

const MuiLoadingButton = () => {
  return (
      <Stack direction='row' spacing={2}>
        <LoadingButton variant='outlined'>Submit</LoadingButton>
        <LoadingButton variant='outlined' loading>Submit</LoadingButton>

        <LoadingButton variant='outlined'>Fetch Data</LoadingButton>
        <LoadingButton variant='outlined' loadingIndicator='Loading...' loading>Fetch Data</LoadingButton>

        <LoadingButton variant='outlined' startIcon={<Save/>} loadingPosition='start'>Save</LoadingButton>
        <LoadingButton variant='outlined' startIcon={<Save/>} loadingPosition='start' loading>Save</LoadingButton>
      </Stack>
  )
}

export default MuiLoadingButton