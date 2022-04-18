import { Mail } from "@mui/icons-material";
import { Stack, Badge } from "@mui/material";

const MuiBadge = () => {
  return (
    <Stack direction="row" spacing={2}>
        <Badge badgeContent={5} color="error">
            <Mail/>
        </Badge>
        <Badge badgeContent={100} color="error" max="999">
            <Mail/>
        </Badge>
        <Badge badgeContent={0} color="error" showZero>
            <Mail/>
        </Badge>
        <Badge variant="dot" color="error" invisible={true}>
            <Mail/>
        </Badge>
    </Stack>
  )
}

export default MuiBadge;