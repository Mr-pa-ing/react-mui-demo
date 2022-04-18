import React, { useState } from 'react'
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const MuiAccordin = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleExpand = (isExpanded, panel) => {
    setExpanded(isExpanded ? panel : false)
  }

  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={(event,isExpanded) => handleExpand(isExpanded, 'panel1')}>
        <AccordionSummary
          id='panel1-header'
          aria-controls='panel1-content'
          expandIcon={<ExpandMoreIcon/>}
        >
          Accordion 1
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam officia quisquam libero sunt eius ad dicta vero neque error nulla? Voluptas non officia aperiam numquam itaque similique hic ipsum architecto?
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={(event,isExpanded) => handleExpand(isExpanded, 'panel2')}>
        <AccordionSummary
          id='panel2-header'
          aria-controls='panel2-content'
          expandIcon={<ExpandMoreIcon/>}
        >
          Accordion 2
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam officia quisquam libero sunt eius ad dicta vero neque error nulla? Voluptas non officia aperiam numquam itaque similique hic ipsum architecto?
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={(event,isExpanded) => handleExpand(isExpanded, 'panel3')}>
        <AccordionSummary
          id='panel-header3'
          aria-controls='panel3-content'
          expandIcon={<ExpandMoreIcon/>}
        >
          Accordion 3
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam officia quisquam libero sunt eius ad dicta vero neque error nulla? Voluptas non officia aperiam numquam itaque similique hic ipsum architecto?
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default MuiAccordin;