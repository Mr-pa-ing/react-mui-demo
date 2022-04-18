import React,{ useState } from "react";
import { Box, TextField, MenuItem } from "@mui/material";

const MuiSelect = () => {
    const [countries, setCountries] = useState<string[]>([]);

    console.log(countries);

    const handleChange = (event: React.ChangeEvent<HTMLElement>) => {
        const value = event.target.value;
        setCountries(typeof value === 'string' ? value.split(",") : value);
    }

    return (
        <Box width="250px">
            <TextField variant="outlined" value={countries} onChange={handleChange} select label="Select Country" fullWidth SelectProps={{multiple: true}} size='small' helperText="Please select your country">
                <MenuItem value="my">Myanmar</MenuItem>
                <MenuItem value="jp">Japan</MenuItem>
                <MenuItem value="thai">Thailand</MenuItem>
            </TextField>
        </Box>
    )
}

export default MuiSelect;