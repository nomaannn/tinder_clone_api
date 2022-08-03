import React from 'react'

function Skills() {
    const potfolio = [
        {
            id:1,
            src:'https://www.freeiconspng.com/thumbs/html5-icon/w3c-html5-logo-0.png',
            skill:'HTML',
            shadow: 'shadow-orange-500'
        },
        {
            id:2,
            src:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png',
            skill:'CSS',
            shadow: 'shadow-blue-500'
        },
        {
            id:3,
            src:'https://miro.medium.com/max/1024/1*S-nV902O1yWwpFbxn0P_xA.png',
            skill:'JavaScript',
            shadow: 'shadow-yellow-500'
        },
        {
            id:4,
            src:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png',
            skill:'React Js',
            shadow: 'shadow-blue-600'
        },
        {
            id:5,
            src:'https://download.logo.wine/logo/MySQL/MySQL-Logo.wine.png',
            skill:'MySQL',
            shadow: 'shadow-blue-400'
        }
    ]

  return (
    <div name="Skills" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-red-700'>
                    Skills
                </p>
                <p className='py-6'>
                    These are the technologies I have work with..
                </p>

            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                {
                    potfolio.map(({id,src,skill,shadow})=>(
                        <div key={id} className={`flex flex-col shadow-md rounded-md items-center ${shadow}`}>
                        <img className={`rounded-lg duration-100 hover:scale-105 h-24 ${shadow}`} src={src} alt="potfolio" />
                        <div className='flex justify-center my-4 rounded-md shadow-md  text-white'>
                       <p className='p-4 text-sm '>
                        {skill}
                       </p>
                        </div>
                    </div>
                    ))
                }
                
                
                
                
               
            </div>

        </div>
    </div>
  )



}

export default Skills