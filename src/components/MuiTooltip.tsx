import { Delete } from '@mui/icons-material';
import { IconButton, Tooltip } from '@mui/material';
import React from 'react'

const MuiTooltip = () => {
  return (
    <div>
        <Tooltip title="delete" arrow placement='top' enterDelay={500} leaveDelay={200}>
            <IconButton>
                <Delete color="error"/>
            </IconButton>
        </Tooltip>
    </div>
  )
}

export default MuiTooltip;