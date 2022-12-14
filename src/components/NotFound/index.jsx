import { Alert, Stack } from '@mui/material'
import React from 'react'

const NotFound = () => {
  return (
    <Stack sx={{marginY: '45px'}}>
      <Alert severity="error">User Not Found</Alert>
    </Stack>
  )
}

export default NotFound
