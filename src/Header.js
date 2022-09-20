import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import IconButton from '@mui/material/IconButton'

function Header() {
  return (
    <div className='  flex justify-around w-full  pt-3'  >
      <IconButton>
        <PersonIcon fontSize='large' className='text-blue-700'/>
      </IconButton>
      <img src="https://seeklogo.com/images/T/tinder-logo-6451FE2578-seeklogo.com.png" alt="logo" className='h-12'/>
      <IconButton>
        <ForumIcon fontSize='large' className='text-yellow-500'/>
      </IconButton>
    </div>
  )
}

export default Header