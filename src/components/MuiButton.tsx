import React, { useState } from "react";
import { Stack, Button, IconButton, ButtonGroup, ToggleButtonGroup, ToggleButton } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { FormatItalic, FormatBold, FormatUnderlined } from "@mui/icons-material";

const MuiButton = () => {
  const [formats, setFormats] = useState<string | null>(null);
  console.log({
    formats,
  })
  const handleFormatsChange = (_event: React.MouseEvent<HTMLElement>, updatedFormats: string | null) => {
    setFormats(updatedFormats);
  }

  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={2}>
        <Button variant="text" href="https://www.google.com">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button variant="contained" color="primary">primary</Button>
        <Button variant="contained" color="secondary">secondary</Button>
        <Button variant="contained" color="success">success</Button>
        <Button variant="contained" color="info">info</Button>
        <Button variant="contained" color="warning">warning</Button>
        <Button variant="contained" color="error">error</Button>
      </Stack>
      <Stack display="block" spacing={4} direction="row">
        <Button variant="contained" color="primary" size="small">small</Button>
        <Button variant="contained" color="primary" size="medium">medium</Button>
        <Button variant="contained" color="primary" size="large">large</Button>
      </Stack>
      <Stack spacing={4} direction="row">
        <Button variant="contained" color="primary" startIcon={<SendIcon/>} disableRipple onClick={() => alert('Clicked')}>Send</Button>
        <Button variant="contained" color="primary" endIcon={<SendIcon/>} disableElevation>Send</Button>
        <IconButton aria-label="send" color="success" size="small"><SendIcon/></IconButton>
      </Stack>
      <Stack direction="row">
        <ButtonGroup variant="contained" orientation="vertical" color="success" size="small" aria-label="aligement button group">
          <Button>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>
      <Stack direction="row">
        <ToggleButtonGroup
            aria-label="text formatting"
            value={formats}
            onChange={handleFormatsChange}
            size="small"
            color="info"
            orientation="vertical"
            exclusive
        >
          <ToggleButton aria-label="bold" value="bold"><FormatBold/></ToggleButton>
          <ToggleButton aria-label="italic" value="italic"><FormatItalic/></ToggleButton>
          <ToggleButton aria-label="underlined" value="underlined"><FormatUnderlined/></ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  )
}

export default MuiButton;
