import { Check } from '@mui/icons-material';
import { Alert, AlertTitle, Stack, Button } from '@mui/material';
import React from 'react'

const MuiAlert = () => {
  return (
    <Stack spacing={1}>
        <Alert severity='info'>This is info alert.</Alert>
        <Alert severity='warning'>This is warning alert.</Alert>
        <Alert severity='error'>This is error alert.</Alert>
        <Alert severity='success'>This is success alert.</Alert>

        <Alert variant='outlined' severity='info'>This is info alert.</Alert>
        <Alert variant='outlined' severity='warning'>This is warning alert.</Alert>
        <Alert variant='outlined' severity='error'>This is error alert.</Alert>
        <Alert variant='outlined' severity='success'>This is success alert.</Alert>

        <Alert variant='filled' severity='info' onClose={() => alert('Close')}>
            This is info alert.
        </Alert>
        <Alert variant='filled' severity='warning'>This is warning alert.</Alert>
        <Alert variant='filled' severity='error'>This is error alert.</Alert>
        <Alert variant='filled' severity='success' icon={<Check/>} action={<Button color="inherit" size="small">Undo</Button>}>
            <AlertTitle>Success</AlertTitle>
            This is success alert.
        </Alert>
    </Stack>
  )
}

export default MuiAlert;