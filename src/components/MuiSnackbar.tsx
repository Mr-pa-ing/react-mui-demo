import React, { forwardRef, useState } from "react"
import { Snackbar, Button, AlertProps, Alert } from "@mui/material"

const SnackbarAlert = forwardRef<HTMLDivElement, AlertProps>(
    function SnackbarAlert(props, ref){
        return (
            <Alert ref={ref} {...props} />
        )
    }
)

const MuiSnackbar = () => {
    const [open, setOpen] = useState(false);

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if(reason === 'clickaway'){
            return
        }
        setOpen(false);
    }

  return (
    <div>
        <Button onClick={() => setOpen(true)}>Submit</Button>
        {/* <Snackbar
         message="Form submitted successfully" 
         autoHideDuration={4000}
         open={open}
         onClose={handleClose}
         anchorOrigin={{
             horizontal: "center",
             vertical: "top"
         }}
        /> */}
        <Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
            anchorOrigin={{
                horizontal: 'center',
                vertical: 'top'
            }}
        >
            <SnackbarAlert elevation={6} severity="success" variant="filled" onClose={handleClose}>Form submitted successfully!</SnackbarAlert>
        </Snackbar>
    </div>
  )
}

export default MuiSnackbar