import React from 'react'
import heroimage from '../assets/nomaan11.jpg'
// import Typewriter from 'typewriter-effect'


function Home() {
  return (
    <div name="Home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-500'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center md:justify-between h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-centerh-full '>
                    <h2 className='text-4xl sm:text-7xl font-bold text-white '>
                        I'm A Developer
                    </h2>
                    <p className='text-gray-500 py-4 max-w-md'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It w
                    </p>
                   <div>
                    <button className="text-white py-3 px-4 mx-4 bg-gradient-to-r from-red-700 to-red-500 rounded-md font-bold">

                        Download CV
                    </button>

                   </div>
                
            </div>
      <div>
      <img src={heroimage} alt="" className="rounded-2xl mx-auto w-2/3 md:w-full md:max-h-96 "/>
      </div>
        </div>
    </div>
  )
}

export default Home