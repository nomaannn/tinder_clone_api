import React from 'react'
import ReplayIcon from '@mui/icons-material/Replay';
import CloseRoundedIcon from '@mui/icons-material/Close';
import StarRateRoundedIcon from '@mui/icons-material/StarRate';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import IconButton from '@mui/material/IconButton'

function Footer() {
  return (
    <div className='fixed bottom-0 flex justify-around w-full mb-3 pb-3	'>
        <IconButton className="shadow-md">
            <ReplayIcon  fontSize='large' className='text-blue-400'/>
        </IconButton>
        <IconButton className=" shadow-md ">
            <CloseRoundedIcon fontSize='large' className='text-red-400'/>
        </IconButton>
        <IconButton className=" shadow-md">
            <StarRateRoundedIcon fontSize='large' className='text-orange-400'/>
        </IconButton>
        <IconButton className=" shadow-md">
            <FavoriteBorderOutlinedIcon fontSize='large' className='text-green-400'/>
        </IconButton>
        
      
    </div>
  )
}

export default Footer