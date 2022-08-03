import React from 'react'

function Contact() {
  return (
    <div name="Contact" className='w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white'>
        <div className='fles fles-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
            <div className='pb-8'>
                <p className='text-4xl  font-bold inline border-b-4 border-red-700'>
                    Contact
                </p>
                <p className='py-6'>
                        Get In Touch With Me..
                </p>
            </div>

            <div>
                <form action='https://getform.io/f/61d364b9-8a7f-4164-9c70-acf9c9c37620' method="POST" className='flex flex-col w-full md:w-1/2'>
                    <input type="name" name="name" placeholder=' Enter Your Name' className='p-2 bg-transparent border-2 rounded-md text-white outline-none'/>
                    <input type="email" name="email" placeholder=' Enter Your Email' className='p-2 my-4 bg-transparent border-2 rounded-md text-white outline-none'/>
                    <textarea name='message' placeholder='Enter Your Message' rows={10} className='p-2 bg-transparent border-2 rounded-md text-white outline-none'>

                    </textarea>
                
              <button className='text-white my-4 bg-red-700 p-2 w-1/3 rounded-md duration-200 hover:scale-105'> 
                Submit 
              </button>

                </form>
            </div>

        </div>

    </div>
  )
}

export default Contact