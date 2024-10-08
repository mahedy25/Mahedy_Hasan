'use client'

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const items = [
  {
    id: 1,
    color: "from-cyan-400 to-blue-400",
    title: "React Ecommerce Website",
    description: "A comprehensive e-commerce platform featuring advanced functionalities like product filtering, cart management, and a responsive design.",
    image: "/images/Projects/ecommerce1.png",
    Link: "https://e-commerce-tawny-eight-44.vercel.app/"
  },
  {
    id: 2,
    color: "from-cyan-400 to-blue-400",
    title: "React Landing Page",
    description: "A visually appealing landing page designed for a hoodies store, featuring vibrant imagery and a call-to-action.",
    image: "/images/Projects/landingpage1.png",
    Link: "https://landing-page-nine-lemon.vercel.app/"
  },
  {
    id: 3,
    color: "from-cyan-400 to-blue-400",
    title: "React Ecommerce Website",
    description: "A fully functional e-commerce website built with React and Tailwind CSS, offering an elegant interface for browsing and purchasing products.",
    image: "/images/Projects/ecommerce2.png",
    Link: "https://e-commerce-aces.vercel.app/"
  },
  {
    id: 4,
    color: "from-cyan-400 to-blue-400",
    title: "React Landing Page",
    description: "A clean and minimalistic landing page with a focus on modern UI/UX design, ideal for showcasing products or services effectively.",
    image: "/images/Projects/landingpage2.png",
    Link: "https://landing-page-basic-nine.vercel.app/"
  },
];

const Portfoliopage = () => {
  return (
    <motion.div 
      className='relative  py-5 px-5 md:px-20  text-white '
      style={{ boxSizing: 'border-box' }} // Ensuring padding and borders are accounted for
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1,ease:'easeInOut' }}
    >
      {/* Header */}
      <div className='text-center mb-16'>
        <h1 className='text-5xl md:text-7xl font-bold mb-4'>My Works</h1>
        <p className='text-xl md:text-2xl'>A showcase of my latest projects</p>
      </div>

      {/* Grid Container */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-full mx-auto'> {/* Ensure max-width is full */}
        {items.map((item) => (
          <motion.div 
            className={`flex flex-col items-center justify-center bg-gradient-to-r ${item.color} rounded-xl p-6 shadow-lg w-full`} 
            key={item.id}
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <h2 className='text-4xl text-black  font-semibold'>{item.title}</h2>
            <div className='relative h-48 w-48 mt-4'>
              <Image 
                src={item.image} 
                alt={`${item.title} Image`} 
                fill 
                className='object-contain rounded-md shadow-md'
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <p className='text-lg mt-4 text-gray-800 text-center'>{item.description}</p>
            <Link href={item.Link}>
              <button className='mt-6 px-6 py-2 bg-black  text-white font-semibold rounded-lg shadow-md hover:bg-gray-800 active:bg-cyan-400 transition-all'>View Project</button>
            </Link>
          </motion.div>
        ))}
        
      </div>
      {/* svg container */}
      <div className='text-center'>
      <h1 className='text-xl md:text-3xl font-bold mt-12'>Need a website?</h1>
        </div>
        <motion.div className="flex justify-center items-center my-10">
  {/* Rotating Circle */}
  <div className="relative w-52 h-52 rounded-full border-4 border-cyan-400">
    
    {/* Rotating text around the circle using SVG */}
    <svg
  className="absolute inset-0 w-full h-full rotating-text"
  viewBox="0 0 400 400"  // Increased viewBox size
>
  <defs>
    {/* Create a larger circular path for text outside the circle */}
    <path
      id="text-circle"
      d="M 200, 200 m -150, 0 a 150,150 0 1,1 300,0 a 150,150 0 1,1 -300,0"
    />
  </defs>

  {/* Set up the text to follow the larger path */}
  <text className="text-[40px] fill-cyan-400">
    <textPath href="#text-circle" startOffset="50%" textAnchor="middle">
      Frontend Web Developer & UI/UX Designer
    </textPath>
  </text>
</svg>



    {/* Text inside circle */}
    <div className="absolute inset-0 flex flex-col justify-center items-center">
      <Link href="/contact">
        <button className="mt-2 text-black bg-cyan-400 font-bold px-3  ring-1 ring-white py-2 rounded-full hover:bg-cyan-500 active:bg-cyan-600">
          Hire Now!
        </button>
      </Link>
    </div>
  </div>
</motion.div>







    </motion.div>
  );
}

export default Portfoliopage;
