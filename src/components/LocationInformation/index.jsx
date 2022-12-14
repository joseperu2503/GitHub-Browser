import { Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import LocationOnIcon from "@mui/icons-material/LocationOn";
import TwitterIcon from '@mui/icons-material/Twitter';
import LanguageIcon from "@mui/icons-material/Language";
import BusinessIcon from '@mui/icons-material/Business';

const LocationInformation = ({userState}) => {
  return (
    <div className='grid sm:grid-cols-2 gap-4 justify-center mt-8'>
      <div className='flex gap-2'>
        <LocationOnIcon/>
        <Typography>{userState.location}</Typography>
      </div>
      <div className='flex gap-2'>
        <TwitterIcon/>
        <Typography>{userState.twitter_username || 'Not avaliable'}</Typography>
      </div>
      <div className='flex gap-2'>
        <LanguageIcon/>
        <Typography>{userState.company || 'Not avaliable'}</Typography>
      </div>
      <div className='flex gap-2'>
        <BusinessIcon/>
        <Typography>{userState.blog || 'Not avaliable'}</Typography>
      </div>
    </div>
  )
}

export default LocationInformation
