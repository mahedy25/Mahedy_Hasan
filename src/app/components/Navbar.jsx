"use client"

import React, { useState } from 'react'
import Link from 'next/link';
import Image from 'next/image'
import Navlink from './Navlink';
import {motion} from "framer-motion"



const links = [
  {url: "/", title: "Home"},
  {url: "/about", title: "About"},
  {url: "/portfolio", title: "Portfolio"},
  {url: "/contact", title: "Contact"},
];


const Navbar = () => {
    
  const [open,setOpen] = useState(false);

  const topVarients = {
    closed:{
      rotate:0,
    },
    opened:{
      rotate:45,
      
    },
  };

  const centerVarients = {
    closed:{
      opacity:1,
    },
    opened:{
      opacity:0,
    },
  };

  const bottomVarients = {
    closed:{
      rotate:0,
    },
    opened:{
      rotate:-45,
      
    },
  };

  const listVarients = {
    closed:{
      x:"100vw",
    },
    opened:{
      x:0,
      transition:{
        when: "beforeChildren",
        staggerChildren:0.2,
      },
    },
  };

  const listItemVarients = {
    closed:{
      x:-10,
      opacity:0,
    },
    opened:{
      x:0,
      opacity:1,
      
    },
  }

  return (
    <div className='h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48'> 
    <div className='hidden sm:flex gap-4 text-white w-1/3'>
      
        {links.map((link)=>(
          <Navlink link={link}/>
         ))}
      
    </div>
      {/* logo */}
      <div className=' font-semibold text-sm w-full  hidden md:text-3xl  lg:flex sm:w-1/3 justify-center'>
    
      <Link href='/'>
        <h1 className='text-white '>Mahedy <span className='text-cyan-500'> Hasan </span></h1>
      </Link>
  
      </div>
      <div className="flex gap-3 sm:gap-8 sm:mt-4 lg:gap-18 lg:mt-1 ">
      <Link href='https://vercel.com/mahedy-hasans-projects'>
        <Image src='/images/vercel.jpg ' alt='social link' width={42} height={24} className='hidden sm:flex' />
        </Link>
        <Link href='https://github.com/mahedy25'>
        <Image src='/images/github.png' alt='social link' width={24} height={24}  />
        </Link>
        <Link href='https://www.linkedin.com/in/mahedy-hasan-359a84321/'>
        <Image src='/images/linkedin.png' alt='social link' width={24} height={24}/>
        </Link>
        <Link href='https://x.com/mahedy_has17156'>
        <Image src='/images/x.png' alt='social link' width={24} height={24}  />
        </Link>
        <Link href='https://www.instagram.com/mahedyhasan253/'>
        <Image src='/images/instagram.png' alt='social link' width={24} height={24}/>
        </Link>
        <Link href='https://www.facebook.com/mahedyhasan253'>
        <Image src='/images/facebook.png' alt='social link' width={24} height={24}/>
        </Link>
        <Link href='https://wa.me/qr/J3MJAAS4VZ57J1'>
        <Image src='/images/whatsapp.png' alt='social link' width={24} height={24}/>
        </Link>
      </div>
      {/* small menu */}
      
     <div className=''>
       <button className='w-10 h-8 flex flex-col justify-between z-50 relative sm:hidden' onClick={()=>setOpen((prev) => !prev)}>
         <motion.div variants={topVarients}
         animate={open ? "opened" : "closed"}
         className='w-10 h-1 bg-white rounded origin-left'></motion.div>
         <motion.div variants={centerVarients}
         animate={open ? "opened" : "closed"}
         className='w-10 h-1 bg-white rounded'></motion.div>
         <motion.div variants={bottomVarients}
         animate={open ? "opened" : "closed"}
         className='w-10 h-1 bg-white rounded origin-left'></motion.div>
       </button>
       {/* menu list */}
       { open && (
        <motion.div variants={listVarients} initial='closed' animate='opened'  className='absolute top-0 left-0 w-screen h-screen bg-gray-800  flex flex-col items-center justify-center gap-8 text-2xl z-40'>
        {links.map((link)=>(
         <motion.div variants={listItemVarients} key={link.title}>
          <Link href={link.url} >
           {link.title}
         </Link>
         </motion.div>
        ))}
      </motion.div>
       )
        
       }
     </div>

    </div>
  )
}

export default Navbar
