import React,{ useState } from "react";
import { InputAdornment, Stack, TextField } from "@mui/material";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const MuiTextField = () => {
    const [value, setValue] = useState('');

    return (
        <Stack spacing={4}>
            <Stack direction='row' spacing={2}>
                <TextField label="Name" variant="outlined" />
                <TextField label="Name" variant="filled" />
                <TextField label="Name" variant="standard" />
            </Stack>
            <Stack direction='row' spacing={2}>
                <TextField 
                    label="Small secondary" 
                    size="small" 
                    color="secondary" 
                    required 
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    error={!value}
                    helperText={!value ? 'Required' : 'Do not share your password'}
                />
            </Stack>
            <Stack direction='row' spacing={2}>
                <TextField label="Form Input" required />
                <TextField type='password' label="Password" helperText="Do not share your password" disabled />
                <TextField label="Read Only" InputProps={{readOnly: true}} />
            </Stack>
            <Stack direction='row' spacing={2}>
                <TextField label="Amount" InputProps={{
                    startAdornment: <InputAdornment position="start">$</InputAdornment>
                }} />
                <TextField label="Weight" InputProps={{
                    endAdornment: <InputAdornment position="end">kg</InputAdornment>
                }} />
                <TextField type="password" label="Password" InputProps={{
                    endAdornment: <InputAdornment position="end"><VisibilityOffIcon/></InputAdornment>
                }} />
            </Stack>
        </Stack>
    )
}

export default MuiTextField;