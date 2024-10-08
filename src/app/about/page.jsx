'use client'

import React, { useState, useTransition } from 'react'
import {motion} from 'framer-motion'
import Image from 'next/image';





const Aboutpage = () => {

  const [tab,setTab] =useState('skills');
  const [ isPending, startTransition] = useTransition();

  const handleTabchange = (id) =>{
    startTransition(()=>{
      setTab(id);
    });
  };

  const skills = [
    { name: 'HTML', imageSrc: '/images/html.png' },
    { name: 'CSS', imageSrc: '/images/css.png' },
    { name: 'JavaScript', imageSrc: '/images/javaScript.png' },
    { name: 'React', imageSrc: '/images/react.png' },
    { name: 'Next.js', imageSrc: '/images/nextJs.png' },
    { name: 'Tailwind CSS', imageSrc: '/images/tailwindCss.png' },
    { name: 'Figma', imageSrc: '/images/figma.png' },
    { name: 'Vite', imageSrc: '/images/vite.png' },
  ];


  return (
    <motion.div className=' w-full px-4' initial={{y:'-200vh'}} animate={{y:'0'}} transition={{duration:1}} >

      <div>
        <div className='w-full flex flex-col gap-10 md:gap-12 lg:gap-14 xl:gap-16'>


          {/* skills */}
         
          <div className="skills-section max-w-4xl px-4 w-full ">
          <h1 className="font-bold text-2xl mb-4 text-cyan-400  font-mono">Skills-</h1>
          <div className="grid grid-cols-3  md:grid-cols-4 lg:grid-cols-6 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="flex flex-col items-center ">
                <Image
                  src={skill.imageSrc}
                  alt={skill.name}
                  width={70}
                  height={70}
                  className="object-contain"
                />
                <p className="mt-2 text-center">{skill.name}</p>
              </div>
            ))}
          </div>
          
        </div>
    




          {/* about me */}
           
          <div className='flex flex-col gap-4 justify-center px-4'>
            <h1 className='font-bold text-2xl text-cyan-400 font-mono'>
            About Me-
            </h1>
            <p className='text-sm sm:text-lg '>Hi, I'm Md Mahedy Hasan, a passionate front-end web developer with a knack for building user-friendly and visually appealing websites. I specialize in HTML, CSS, JavaScript, and modern frameworks like React.js and Tailwind CSS. Currently, I'm enhancing my expertise in Next.js to create even more dynamic and responsive applications.

            I have a strong foundation in web development, and I love bringing designs to life while ensuring seamless user experiences. My journey started with an interest in technology, which eventually led me to pursue web development. Since then, I've worked on a range of projects, from simple static pages to fully interactive e-commerce websites.
             <br /><br />
            In addition to my technical skills, I have a good command of MS Word, Excel, and general computer operations, which helps me stay organized and productive. As I continue to grow in my career, my goal is to use my skills to help businesses and individuals create an impactful online presence.
<br /><br />
            Feel free to explore my projects—each one represents my dedication to clean, efficient code and great user experience.
            </p>
          </div>


          
      
          {/* EXPERIENCE */}
          <div className='flex flex-col gap-4 justify-center py-4  px-4'>
            <h1 className='font-bold text-2xl text-cyan-400 font-mono'>Experience-
            </h1>
            <p className='text-sm sm:text-lg'>Designed and developed full-featured e-commerce website using React and Tailwind CSS.
            </p>
            <p className='text-sm sm:text-lg' >Implemented responsive design principles, ensuring usability across devices.
            </p>
            <p className='text-sm sm:text-lg'>Integrated functionalities such as product filtering, cart management, and user authentication.</p>
            </div>

            <div className='flex flex-col gap-4 justify-center px-4 pb-8'>
            <h1 className='font-bold text-2xl text-cyan-400 font-mono'>
            My Thoughts-
            </h1>
            <p className='text-sm sm:text-lg '>In this rapidly evolving technological landscape, I believe that staying ahead is essential. I am committed to lifelong learning, constantly seeking to expand my skill set and gain valuable experience throughout my programming journey. <br /> What I do, I do with genuine passion. The joy I find in coding, tackling new challenges, and transforming innovative ideas into functional code drives my work. <br /><br /> I aim to craft user-friendly and visually appealing interfaces that enhance the overall user experience. I look forward to collaborating with like-minded individuals and organizations to bring creative visions to life.
            </p>
          </div>
            </div>
            </div>
        

      
       


    </motion.div>

  )
}

export default Aboutpage;
