import React,{ useState } from 'react'
import { Autocomplete, Stack, TextField } from '@mui/material';

type Skill = {
    id: number,
    label: string
}

const skills = ['html', 'css', 'javascript', 'typescript', 'react'];

const skillOptions = skills.map((skill, index) => ({
    id: index + 1,
    label: skill
}));

const MuiAutocomplete = () => {
    const [value, setValue] = useState<string | null>(null);
    const [skill, setSkill] = useState<Skill | null>(null);

    console.log({skill})

  return (
    <Stack width='250px' spacing={2}>
        <Autocomplete 
          options={skills}
          renderInput={(params) => <TextField {...params} label="skills" />}
          value={value}
          onChange={(event: any, newValue: string | null) => setValue(newValue)}
          freeSolo
        />
        <Autocomplete
          options={skillOptions}
          renderInput={(params) => <TextField {...params} label="skills options" />}
          value={skill}
          onChange={(event: any, newSkill: Skill | null) => setSkill(newSkill)}
        />
    </Stack>
  )
}

export default MuiAutocomplete;