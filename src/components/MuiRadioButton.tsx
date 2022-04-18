import React, { useState } from "react";
import { Box, FormControl, FormLabel, FormControlLabel, RadioGroup, Radio, FormHelperText } from "@mui/material";

const MuiRadioButton = () => {
    const [value, setValue] = useState("");

    console.log({value});

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    }

    return (
        <Box>
            <FormControl error>
                <FormLabel id="year-of-job-exp">Year Of Job Experience</FormLabel>
                <RadioGroup
                    name="job-exp-group"    
                    aria-labelledby="year-of-job-exp"
                    value={value}
                    onChange={handleChange}
                    row
                >
                        <FormControlLabel control={<Radio size="medium" color="secondary"/>} value="0-5" label="0-5" />
                        <FormControlLabel control={<Radio/>} value="5-10" label="5-10" />
                        <FormControlLabel control={<Radio/>} value="10-15" label="10-15" />
                </RadioGroup>
                <FormHelperText>Invalid selection</FormHelperText>
            </FormControl>
        </Box>
    )
}

export default MuiRadioButton;