import { Box, Breadcrumbs, Link, Typography } from "@mui/material"
import { NavigateNext } from "@mui/icons-material"

const MuiBreadcrumbs = () => {
  return (
    <Box m={2}>
        <Breadcrumbs 
            aria-aria-label="breadcrumbs" 
            separator={<NavigateNext/>}
            maxItems={2}
            itemsBeforeCollapse={2}
        >
            <Link href="#" underline="hover">Home</Link>
            <Link href="#" underline="hover">Catalog</Link>
            <Link href="#" underline="hover">Accessories</Link>
            <Typography color="text.primary">Shoes</Typography>
        </Breadcrumbs>
    </Box>
  )
}

export default MuiBreadcrumbs