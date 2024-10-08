"use client"


import { AnimatePresence } from 'framer-motion'
import React from 'react'
import Navbar from './Navbar'
import {motion} from 'framer-motion'
import { usePathname } from 'next/navigation'

const TransitionProvider = ({children}) => {

  const pathname = usePathname()

  return (
    <AnimatePresence mode='wait'>
      <div key={pathname} className="w-screen h-screen bg-[#121212]">

        <motion.div className='h-screen w-screen fixed bg-gray-800 rounded-b-[100px] z-40'
        animate={{height:'0vh'}}
        exit={{height:'140vh'}}
        transition={{duration:0.5, ease:'easeOut'}}/>

        {/*path text animation */}
        <motion.div className='fixed m-auto top-0 bottom-0 left-0 right-0 text-white sm:text-8xl text-3xl cursor-default w-fit h-fit z-50'
        initial={{opacity:1}}
        animate={{opacity:'0'}}
        exit={{height:'140vh'}}
        transition={{duration:0.8, ease:'easeInOut'}}>{pathname.substring(1)}</motion.div>

        <motion.div className='h-screen w-screen fixed bg-gray-800 rounded-t-[100px] bottom-0 z-40'
        initial={{height:'140vh'}}
        animate={{height:'0vh',transition:{delay:0.5}}}


        

        />

          <div className="h-24">
            <Navbar/>
            </div>
            
            <div className="h-[calc(100vh-6rem)]">
            {children}
            </div>
          </div>
    </AnimatePresence>
  )
}

export default TransitionProvider
