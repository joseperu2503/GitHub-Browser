import { Stack, Typography } from '@mui/material'
import React from 'react'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const PrincipalInformation = ({userState}) => {
  const getDate = (date) => {
    return date ? (new Date(date)).getFullYear() : null
  }
  return (
    <>
      <div className='flex flex-col md:flex-row md:justify-between'>
        <div className='flex flex-col'>
          <span className='text-3xl sm:text-4xl font-bold text-center sm:text-left'>{userState.name}</span>
          <span className='text-sm'>{`@${userState.login}`}</span>
        </div>
        <div className='flex gap-1'>
          <CalendarMonthIcon/>
          <span className='flex item'>{getDate(userState.created_at)}</span>
        </div>

      </div>


    </>
  )
}

export default PrincipalInformation
