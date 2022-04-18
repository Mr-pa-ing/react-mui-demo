import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import { Edit } from "@mui/icons-material";


const MuiSpeedDial = () => {
  return (
    <SpeedDial
      ariaLabel="Navigation speed dial"
      icon={<SpeedDialIcon/>}
      sx={{position: 'absolute', bottom: 16, right: 16}}
      openIcon={<Edit/>}
    >
      <SpeedDialAction icon={<FileCopyIcon/>} tooltipTitle="Copy" tooltipOpen />
      <SpeedDialAction icon={<SaveIcon/>} tooltipTitle="Save" tooltipOpen />
      <SpeedDialAction icon={<PrintIcon/>} tooltipTitle="Print" tooltipOpen />
      <SpeedDialAction icon={<ShareIcon/>} tooltipTitle="Share" tooltipOpen />
    </SpeedDial>
  )
}

export default MuiSpeedDial;