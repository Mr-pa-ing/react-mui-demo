import React, { useState } from "react"
import { Face } from '@mui/icons-material';
import { Avatar, Chip, Stack } from '@mui/material';

const MuiChip = () => {
    const [chips, setChips] = useState(['chip1', 'chip2', 'chip3']);

    const handleDelete = (chipToDelete: string) => {
        setChips(chips.filter(chip => chip !== chipToDelete));
    }

  return (
    <Stack direction="row" spacing={1}>
        <Chip icon={<Face/>} label="Chip" color="primary" size="small" />
        <Chip variant="outlined" label="Secondary Chip" color="secondary" size='small' avatar={<Avatar>V</Avatar>} />
        <Chip label="Delete" color="error" onClick={() => alert("Clicked")} onDelete={() => alert("Delete")} />
        {
            chips.map(chip => <Chip key={chip} label={chip} onDelete={() => handleDelete(chip)} />)
        }
    </Stack>
  )
}

export default MuiChip;