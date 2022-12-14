import { Stack, Typography } from '@mui/material'
import React from 'react'
import LocationInformation from '../LocationInformation'
import PaperInformation from '../PaperInformation'

const Description = ({userState}) => {
  return (
    <>
      <div className='mt-6 text-lg'>{userState.bio || 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus rem ratione eos hic, vitae cumque eius deleniti temporibus a ea repellat tempore dolorum, placeat mollitia libero enim provident quia dignissimos!'}</div>
      <PaperInformation userState={userState}/>
      <LocationInformation userState={userState}/>
    </>
  )
}

export default Description
