"use client"

import React from 'react'
import Image from 'next/image'
import { motion} from 'framer-motion'
import Link from 'next/link'

const Homepage = () => {
  return (
    <motion.div className='h-full' initial={{y:'-200vh'}} animate={{y:'0%'}} transition={{duration:1}} >
     <div className='h-full sm:flex-row w-full flex flex-col justify-center items-center sm:px-4'>

     {/* profile image */}
     <div className='items-center flex justify-center mt-12 sm:mt-0 w-60 sm:w-[700px]'>
     <Image src='/images/profile img.jpg' width={450} height={300} alt='Profile Image' className=' object-contain  rounded-full sm:rounded-md' priority/>
     </div>

    {/* text */}
    <div className='w-full md:w-1/2  py-4 text-left     px-3 '>
    <h1 className="font-bold text-2xl sm:text-4xl     md:text-3xl lg:text-5xl mb-3 ">
    From Concept to Code: <br /> Your Dream Website     Awaits.
      </h1>
  <p className='text-base md:text-xl'>Hello, I'm     Mahedy Hasan, a passionate frontend web developer. I turn ideas into reality with clean, responsive websites using cutting-edge technologies. Ready to create something amazing?</p>

  {/* buttons */}
  <div className="mt-6  flex justify-center gap-4 sm:justify-start text-xs  flex-col lg:text-base font-bold">
         <Link href='/contact'>
         <button className=' bg-black ring-2 ring-white w-full lg:w-1/3 py-2   rounded-md hover:bg-gray-800 hover:text-white active:bg-cyan-500 transition'>Contact Me</button>
        </Link>
        <Link href='/portfolio'>
         <button className=' bg-black ring-2 ring-white w-full py-2 lg:w-1/3  rounded-md hover:bg-gray-800 hover:text-white active:bg-cyan-500 transition'>View My Work</button>
        </Link>
        <Link href='Mahedy_HasanCV.pdf'>
         <button className=' bg-black ring-2 ring-white w-full py-2 lg:w-1/3 rounded-md hover:bg-gray-800 hover:text-white active:bg-cyan-500 transition'>Download CV</button>
        </Link>
      </div>
</div>

     </div>
    </motion.div> 
  )
}

export default Homepage

