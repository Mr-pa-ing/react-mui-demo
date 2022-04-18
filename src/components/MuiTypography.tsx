import { Typography } from "@mui/material";

const MuiTypography = () => {
  return (
    <div>
      <Typography variant="h1">H1 Heading</Typography>
      <Typography variant="h2">H2 Heading</Typography>
      <Typography variant="h3">H3 Heading</Typography>
      <Typography variant="h4" component="h1" gutterBottom>H4 Heading</Typography>
      <Typography variant="h5">H5 Heading</Typography>
      <Typography variant="h5">H6 Heading</Typography>
      <Typography variant="subtitle1">Sub Title 1</Typography>
      <Typography variant="subtitle2">Sub Title 2</Typography>
      <Typography variant="body2">Body 1</Typography>
      <Typography variant="body1">Body 2</Typography>
    </div>
  )
}

export default MuiTypography;