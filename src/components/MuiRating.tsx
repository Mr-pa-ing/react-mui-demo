import React,{ ChangeEvent, useState } from 'react'
import { Stack, Rating } from '@mui/material';
import { FavoriteOutlined } from '@mui/icons-material';

const MuiRating = () => {
    const [value, setValue] = useState<string | null>(null);

    console.log({value});

    const handleChange = (_event: ChangeEvent<{}>, newValue: number | null) => {
        setValue(newValue);
    }

  return (
    <Stack spacing={2}>
        <Rating value={value} onChange={handleChange} size="large" precision={0.5} 
        icon={<FavoriteOutlined fontSize='inherit' color="error"/>} emptyIcon={<FavoriteOutlined fontSize='inherit'/>}
        highlightSelectedOnly />
    </Stack>
  )
}

export default MuiRating;