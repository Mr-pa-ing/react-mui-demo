import React,{ useState } from 'react'
import { Box, FormControl, FormControlLabel, FormGroup, FormLabel, Switch } from '@mui/material'

const MuiSwitch = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [skills, setSkills] = useState<string[]>([]);

    console.log(skills);

    const switchDark = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDarkMode(event.target.checked);
    }

    const handleSkill = (event: React.ChangeEvent<HTMLInputElement>) => {
        const index = skills.indexOf(event.target.value);
        if(index === -1){
            setSkills([...skills, event.target.value]);
        }else {
            setSkills(skills.filter(skill => skill !== event.target.value));
        }
    }


  return (
    <Box>
        <FormControlLabel label="Dark Mode" control={<Switch checked={darkMode} onChange={switchDark} color="info" />} />
        <Box>
            <FormControl>
                <FormLabel>Skills</FormLabel>
                <FormGroup row>
                    <FormControlLabel 
                        label="Docker" 
                        control={<Switch size="small"/>}  
                        value='docker'
                        checked={skills.includes('docker')}
                        onChange={handleSkill}
                    />
                    <FormControlLabel 
                        label="AWS" 
                        control={<Switch size="small"/>} 
                        value='aws'
                        checked={skills.includes('aws')}
                        onChange={handleSkill}
                    />
                    <FormControlLabel 
                        label="Linux"
                        control={<Switch size="small"/>} 
                        value='linux'
                        checked={skills.includes('linux')}
                        onChange={handleSkill}
                    />
                </FormGroup>
            </FormControl>
        </Box>
    </Box>
  )
}

export default MuiSwitch;