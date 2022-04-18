import React from 'react'
import { Box, Card, CardContent, Typography, CardActions, CardMedia, Button } from '@mui/material';

const MuiCard = () => {
  return (
    <Box width="300px">
        <Card>
            <CardMedia
                component='img'
                height='140'
                image="https://source.unsplash.com/random"
                alt="unsplash-img"
            />
            <CardContent>
                <Typography variant='h5' component='div' gutterBottom>React</Typography>
                <Typography variant="body2" color='text.secondary'>
                    React is a JavaScript libary for building user interfaces.React can be used as a base in the development of single-page or mobile applcations.
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    </Box>
  )
}

export default MuiCard;