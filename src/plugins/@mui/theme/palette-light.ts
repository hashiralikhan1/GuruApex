import { alpha, PaletteOptions } from '@mui/material'
import { grey, common } from '@mui/material/colors'

const palette: PaletteOptions = {
  mode: 'light',
  background: {
    default: '#F8F7FC',
    paper: common.white,
  },
  text: {
    primary: '#242033',
    secondary: '#625C70',
    disabled: grey[500],
  },
  divider: alpha('#251A3D', 0.10),
}

export default palette
