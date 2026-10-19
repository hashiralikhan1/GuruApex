import { PaletteOptions } from '@mui/material'
import { grey } from '@mui/material/colors'

const paletteDark: PaletteOptions = {
  mode: 'dark',
  background: {
    default: '#171421',
    paper: '#211B2D',
  },
  text: {
    primary: '#F7F4FF',
    secondary: '#C7BED8',
    disabled: grey[500],
  },
  divider: 'rgba(255,255,255,0.12)',
}

export default paletteDark
