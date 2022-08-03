import React from 'react'

function Potfolio() {

    const potfolio = [
        {
            id:1,
            src:'https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=2000'
        },
        {
            id:2,
            src:'https://p0.pxfuel.com/preview/159/799/726/various-background-backgrounds-royalty-free-thumbnail.jpg'
        },
        {
            id:3,
            src:'https://i.pinimg.com/736x/7e/5f/4a/7e5f4abecea9b5f856303f773fc7123d--christmas-lights-wallpaper-holiday-wallpaper.jpg'
        }
    ]

  return (
    <div name="Potfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-red-700'>
                    Potfolio
                </p>
                <p className='py-6'>
                    Check Out some Work Done By Me..
                </p>

            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                {
                    potfolio.map(({id,src})=>(
                        <div key={id}>
                        <img className='rounded-lg duration-100 hover:scale-105' src={src} alt="potfolio"/>
                        <div className='flex justify-center my-4 rounded-md shadow-md shadow-red-700 text-white'>
                        <button className='py-2  font-bold'>Visit Now</button>
                        </div>
                    </div>
                    ))
                }
                
                
                
                
               
            </div>

        </div>
    </div>
  )
}

export default Potfolio