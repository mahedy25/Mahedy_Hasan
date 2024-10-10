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

  const [hoveredIcon, setHoveredIcon] = useState(null); 

  const handleMouseEnter = (name) => {
    setHoveredIcon(name);
  };

  const handleMouseLeave = () => {
    setHoveredIcon(null);
  };
    
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

      <div className="flex gap-4 lg:ml-4 sm:ml-24 ml-4  lg:gap-4  ">


     {/* fiverr Link */}
     <div className='relative'>
          <Link href="https://www.fiverr.com/mahedy_hasan25"
                onMouseEnter={() => handleMouseEnter('Fiverr')}
                onMouseLeave={handleMouseLeave}>
            <Image src="/images/Fiverr.png" alt="Fiverr link" width={24} height={24} />
          </Link>
          {hoveredIcon === 'Fiverr' && (
            <p className="absolute -top-10 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-black text-white rounded text-xs opacity-0 transition-opacity duration-300"
               style={{ opacity: hoveredIcon === 'Fiverr' ? 1 : 0 }}>
              Fiverr
            </p>
          )}
        </div>

    


       {/* LinkedIn Link */}
       <div className='relative'>
          <Link href="https://www.linkedin.com/in/mahedy-hasan-359a84321/"
                onMouseEnter={() => handleMouseEnter('LinkedIn')}
                onMouseLeave={handleMouseLeave}>
            <Image src="/images/linkedin.png" alt="LinkedIn link" width={24} height={24} />
          </Link>
          {hoveredIcon === 'LinkedIn' && (
            <p className="absolute -top-10 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-black text-white rounded text-xs opacity-0 transition-opacity duration-300"
               style={{ opacity: hoveredIcon === 'LinkedIn' ? 1 : 0 }}>
              LinkedIn
            </p>
          )}
       </div>

        
      {/* upwork Link */}
      <div className='relative'>
          <Link href="https://www.upwork.com/freelancers/~01d4fad6920d552e7f"
                onMouseEnter={() => handleMouseEnter('UpWork')}
                onMouseLeave={handleMouseLeave}>
            <Image src="/images/Upwork.png" alt="UpWork link" width={28} height={24} />
          </Link>
          {hoveredIcon === 'UpWork' && (
            <p className="absolute -top-10 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-black text-white rounded text-xs opacity-0 transition-opacity duration-300"
               style={{ opacity: hoveredIcon === 'UpWork' ? 1 : 0 }}>
              UpWork
            </p>
          )}
        </div>


        {/* Vercel Link */}
        <div className='relative'>
          <Link href="https://vercel.com/mahedy-hasans-projects"
                onMouseEnter={() => handleMouseEnter('Vercel')}
                onMouseLeave={handleMouseLeave}>
            <Image src="/images/vercel.jpg" alt="Vercel link" width={40} height={24} className="hidden sm:flex" />
          </Link>
          {hoveredIcon === 'Vercel' && (
            <p className="absolute -top-10 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-black text-white rounded text-xs opacity-0 transition-opacity duration-300"
               style={{ opacity: hoveredIcon === 'Vercel' ? 1 : 0 }}>
              Vercel
            </p>
          )}
        </div>
        

        {/* Instagram Link */}
        <div className='relative'>
          <Link href="https://www.instagram.com/mahedyhasan253/"
                onMouseEnter={() => handleMouseEnter('Instagram')}
                onMouseLeave={handleMouseLeave}>
            <Image src="/images/instagram.png" alt="Instagram link" width={24} height={24} />
          </Link>
          {hoveredIcon === 'Instagram' && (
            <p className="absolute -top-10 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-black text-white rounded text-xs opacity-0 transition-opacity duration-300"
               style={{ opacity: hoveredIcon === 'Instagram' ? 1 : 0 }}>
              Instagram
            </p>
          )}
          </div>
       
        {/* Facebook Link */}
        <div className='relative'>
          <Link href="https://www.facebook.com/mahedyhasan253"
                onMouseEnter={() => handleMouseEnter('Facebook')}
                onMouseLeave={handleMouseLeave}>
            <Image src="/images/facebook.png" alt="Facebook link" width={24} height={24} />
          </Link>
          {hoveredIcon === 'Facebook' && (
            <p className="absolute -top-10 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-black text-white rounded text-xs opacity-0 transition-opacity duration-300"
               style={{ opacity: hoveredIcon === 'Facebook' ? 1 : 0 }}>
              Facebook
            </p>
          )}
       </div>

        {/* WhatsApp Link */}
        <div className='relative'>
          <Link href="https://wa.me/qr/J3MJAAS4VZ57J1"
                onMouseEnter={() => handleMouseEnter('WhatsApp')}
                onMouseLeave={handleMouseLeave}>
            <Image src="/images/whatsapp.png" alt="WhatsApp link" width={24} height={24} className="hidden sm:flex"/>
          </Link>
          {hoveredIcon === 'WhatsApp' && (
            <p className="absolute -top-10 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-black text-white rounded text-xs opacity-0 transition-opacity duration-300"
               style={{ opacity: hoveredIcon === 'WhatsApp' ? 1 : 0 }}>
              WhatsApp
            </p>
          )}
       </div>
        

        
 {/* GitHub Link */}
 <div className='relative'>
          <Link href="https://github.com/mahedy25"
                onMouseEnter={() => handleMouseEnter('GitHub')}
                onMouseLeave={handleMouseLeave}>
            <Image src="/images/github.png" alt="GitHub link" className="hidden sm:flex" width={24} height={24} />
          </Link>
          {hoveredIcon === 'GitHub' && (
            <p className="absolute -top-10 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-black text-white rounded text-xs opacity-0 transition-opacity duration-300"
               style={{ opacity: hoveredIcon === 'GitHub' ? 1 : 0 }}>
              GitHub
            </p>
          )}
        </div>
       

        {/* X (Twitter) Link */}
        <div className='relative'>
          <Link href="https://x.com/mahedy_has17156"
                onMouseEnter={() => handleMouseEnter('X')}
                onMouseLeave={handleMouseLeave}>
            <Image src="/images/x.png" alt="X link" className='hidden sm:flex' width={24} height={24} />
          </Link>
          {hoveredIcon === 'X' && (
            <p className="absolute -top-10 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-black text-white rounded text-xs opacity-0 transition-opacity duration-300"
               style={{ opacity: hoveredIcon === 'X' ? 1 : 0 }}>
              X
            </p>
          )}
        </div>

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
