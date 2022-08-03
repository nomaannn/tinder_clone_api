import React, { useState } from 'react'
import {FaBars,FaTimes} from 'react-icons/fa'
import { Link } from 'react-scroll'

function Navbar() {
const [ toggle , setToggle] = useState(false)

 const nav =[
    {
        id:1,
        link:"Home"
    },
    {
        id:2,
        link:"About"
    },
    {
        id:3,
        link:"Potfolio"
    },
    {
        id:4,
        link:"Skills"
    },
    {
        id:5,
        link:"Contact"
    }
 ]


  return (
    <div className='flex justify-between items-center w-full h-20 text-white px-4 bg-black fixed'>
        <div>
            <h1 className='text-5xl'>
                N.A
            </h1>
        </div>

      

        <ul className='hidden md:flex '>
        {
            nav.map(({id,link})=>(
               
                <li key={id}
                className='px-4 text-gray-500 font-bold capitalize cursor-pointer hover:text-gray-400 duration-200'>
                 <Link to = {link} smooth duration={500} >{link}</Link>
             
               
               
            </li>
           
            ))
        }
            
           
        </ul>

        <div onClick={()=>setToggle(!toggle)} className='cursor-pointer text-gray-500 md:hidden' >
            {
                toggle ? <FaTimes size={30}/> :<FaBars size={30}/>
            }
        </div>

      {
        toggle &&
        <ul className='flex flex-col justify-center items-center h-screen w-full absolute top-20 left-0 bg-black text-gray-500'>
        {
            nav.map(({id,link})=>(
                <li key={id}
                className='px-4 py-6  capitalize cursor-pointer text-4xl'>
                <Link to={link} smooth duration={500} onClick={()=>setToggle(!toggle)} > 
               {link}
               </Link>
            </li>
            ))
        }
            
           
        </ul>
      }
        
        


    </div>
  )
}

export default Navbar