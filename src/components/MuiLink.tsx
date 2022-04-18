import { Stack, Link, Typography } from "@mui/material"

const MuiLink = () => {
  return (
    <Stack direction="row" spacing={2} m={4}>
        <Link href="#" variant="body1">Link</Link>
        <Typography variant="h6">
            <Link href="#" color="secondary" underline="none">Secondary</Link>
        </Typography>
    </Stack>
  )
}

export default MuiLink