import React, { useState } from 'react'
import { Box, Tab } from '@mui/material'
import { TabContext, TabList, TabPanel } from '@mui/lab'
import { Favorite } from '@mui/icons-material';

const MuiTab = () => {
    const [value, setValue] = useState('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue)
    }

  return (
    <Box>
        <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider', width: '300px' }}>
                <TabList aria-label='tab example' onChange={handleChange} textColor='secondary' indicatorColor='secondary' variant='scrollable' scrollButtons="auto">
                    <Tab label='Tab One' value='1' icon={<Favorite/>} iconPosition='start'></Tab>
                    <Tab label='Tab Two' value='2' disabled></Tab>
                    <Tab label='Tab Three' value='3'></Tab>
                    <Tab label='Tab Four' value='4'></Tab>
                    <Tab label='Tab Five' value='5'></Tab>
                    <Tab label='Tab Six' value='6'></Tab>
                </TabList>
            </Box>
                <TabPanel value='1'>Panel 1</TabPanel>
                <TabPanel value='2'>Panel 2</TabPanel>
                <TabPanel value='3'>Panel 3</TabPanel>
                <TabPanel value='4'>Panel 4</TabPanel>
                <TabPanel value='5'>Panel 5</TabPanel>
                <TabPanel value='6'>Panel 6</TabPanel>      
        </TabContext>
    </Box>
  )
}

export default MuiTab