import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import React,{ useState } from 'react'

const MuiDialog = () => {
    const [open, setOpen] = useState(false);

  return (
    <div>
        <Button variant='contained' onClick={() => setOpen(true)}>Open Dialog</Button>
        <Dialog
            aria-labelledby='dialog-title' 
            aria-describedby='dialog-description'
            open={open}
            onClose={() => setOpen(false)}
         >
            <DialogTitle id='dialog-title'>Submit the test?</DialogTitle>
            <DialogContent id='dialog-description'>
                <DialogContentText>
                    Are you sure you want to submit the test?You'll not be able to edit after submitting!
                </DialogContentText>
                <DialogActions>
                    <Button onClick={() => setOpen(false)}>Cancel</Button>
                    <Button autoFocus  onClick={() => setOpen(false)}>Submit</Button>
                </DialogActions>
            </DialogContent>
        </Dialog>
    </div>
  )
}

export default MuiDialog