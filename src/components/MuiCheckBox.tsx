import React,{ useState } from 'react'
import { Box, FormControlLabel, Checkbox, FormControl, FormGroup, FormLabel, FormHelperText } from '@mui/material';
import { BookmarkBorder, Bookmark } from '@mui/icons-material';

const MuiCheckBox = () => {
    const [accept, setAccept] = useState(false);
    const [skills, setSkills] = useState<string[]>([])

    console.log(skills);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAccept(event.target.checked);
    }

    const handleSkill = (event: React.ChangeEvent<HTMLInputElement>) => {
        const index = skills.indexOf(event.target.value);
        if(index === -1){
            setSkills([...skills, event.target.value]);
        }else {
            setSkills(skills.filter(skill => skill !== event.target.value))
        }
    }

  return (
    <>
        <Box>
            <FormControlLabel 
            label="I've accepted term and conditions" 
            control={<Checkbox size="small" color="secondary" checked={accept} onChange={handleChange} />} />
        </Box>
        <Box>
            <Checkbox icon={<BookmarkBorder/>} checkedIcon={<Bookmark/>} checked={accept} onChange={handleChange} />
        </Box>
        <Box>
            <FormControl>
                <FormLabel>Skills</FormLabel>
                <FormGroup row>
                    <FormControlLabel 
                        control={<Checkbox/>} 
                        label="HTML"
                        value="html"
                        checked={skills.includes('html')}
                        onChange={handleSkill}
                    />
                    <FormControlLabel 
                        control={<Checkbox/>} 
                        label="CSS" 
                        value="css"
                        checked={skills.includes('css')}
                        onChange={handleSkill}
                    />
                    <FormControlLabel 
                        control={<Checkbox/>} 
                        label="Javascript" 
                        value="js"
                        checked={skills.includes('js')}
                        onChange={handleSkill}
                    />
                </FormGroup>
                <FormHelperText>Invalid Selection</FormHelperText>
            </FormControl>
        </Box>
    </>
  )
}

export default MuiCheckBox;