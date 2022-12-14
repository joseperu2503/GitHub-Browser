import { Stack, Typography } from '@mui/material'
import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';

const Title = () => {
  return (
    <Stack direction='row' spacing={2} sx={{alignItems: 'center'}}>
      <GitHubIcon sx={{fontSize: '50px'}}/>
      <span className='text-2xl sm:text-4xl font-semibold'>GitHub Browser</span>
    </Stack>
  )
}

export default Title
