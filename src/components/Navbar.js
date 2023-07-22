import React from 'react'
import { Stack, Typography} from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import './style.css'
export default function Navbar() {
  return (
    <div className='navbar'>
        <Stack direction="row" spacing={2}>
        <Typography><HomeIcon/></Typography>
        <Typography>Home</Typography>
</Stack>
    </div>
    
  )
}
