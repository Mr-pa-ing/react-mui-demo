import React from 'react'
import { Accordion, AccordionSummary, AccordionDetails, Box, Paper } from '@mui/material'
import { Masonry } from '@mui/lab'
import { ExpandMore } from '@mui/icons-material';

const heights = [150, 30, 50, 100, 120, 30, 80, 100, 20, 70, 25, 43, 29, 120, 45];

function MuiMasonry() {
  return (
    <Box sx={{ width: 700, minHeight: 400 }}>
        <Masonry columns={4} spacing={1}>
            {/* {
                heights.map((height, index) => (<Paper key={index} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height, border: '1px solid' }}>{index + 1}</Paper>))
            } */}
            {
                heights.map((height, index) => (
                    <Paper sx={{border: '1px solid'}} key={index}>
                        <Accordion sx={{ minHeight: height}}>
                            <AccordionSummary expandIcon={<ExpandMore/>}>Accordion {index + 1}</AccordionSummary>
                            <AccordionDetails>Content</AccordionDetails>
                        </Accordion>
                    </Paper> 
                ))
            }
        </Masonry>
    </Box>
  )
}

export default MuiMasonry