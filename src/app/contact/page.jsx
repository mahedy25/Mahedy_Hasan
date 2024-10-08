"use client";

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Contactpage = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const text = "Thanks For Reaching Me❤️";
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    

    // Reset success and error states
    setError(false);
    setSuccess(false);

    // Correct usage of emailjs.sendForm
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,  // Correct the typo here
        process.env.NEXT_PUBLIC_TEMPLATE_ID, 
        form.current, 
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        (result) => {
          setSuccess(true);      // Set success to true if the email is sent
          form.current.reset();   // Reset the form fields after success
          
          // Remove success message after 5 seconds
          setTimeout(() => setSuccess(false), 5000);
        },
        (error) => {
          console.error('EmailJS error:', error);  // Better error logging
          setError(true);       // Set error to true if something went wrong
          
          // Remove error message after 5 seconds
          setTimeout(() => setError(false), 5000);
        }
      );
  }

  return (
    <motion.div 
      className="relative sm:flex justify-center items-center sm:mt-36 py-5 px-5 md:px-20  text-white sm:gap-20"
      initial={{ y: '-200vh' }}
      animate={{ y: '0vh' }}
      transition={{ duration: 1 }}
    >
      {/* Animated text */}
      <div className="mb-8 text-center">
        {text.split("").map((letter, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: index * 0.1,
            }}
            className="text-white text-xl sm:text-2xl font-mono font-semibold"
          >
            {letter}
          </motion.span>
        ))}
      </div>

      {/* Contact form */}
      <form 
        onSubmit={sendEmail} 
        ref={form} 
        className="rounded-sm bg-gray-800 flex flex-col justify-center items-start  px-4 pb-14 mb-8 pt-4 w-full  max-w-md gap-4"
      >
        <span className="font-bold mb-2 px-2">To Mahedy Hasan</span>
        <textarea
          rows={6}
          className="w-full p-2 mb-4 text-white outline-none bg-transparent border-b"
          name="user_message"
          placeholder="Write your message here..."
        />
        <span className="font-bold mb-2 px-2">My E-mail Address Is:</span>
        <input
          name="user_email"
          type="email"  // Use type="email" for better validation
          className="w-full p-2 mb-4 text-white outline-none bg-transparent border-b"
          placeholder="Enter your email address"
        />
        <span className="font-bold mb-4 px-2">Regards</span>
        <button
          type="submit"
          className="bg-green-500 ml-1 text-black font-bold px-8 py-2 rounded-lg hover:bg-green-400 hover:text-black active:bg-green-300 transition-all duration-300"
        >
          Send
        </button>

        

        {/* Display success or error messages */}
        {success && <span className='text-green-500 font-semibold'>Message sent successfully.</span>}
        {error && <span className='text-red-500 font-semibold'>Message not sent, something went wrong!</span>}
      </form>
      <h1 className='italic text-sm pb-5 font-bold text-cyan-400 sm:hidden'>[Reach out to me via my social handles.]</h1>
    </motion.div>
  );
};

export default Contactpage;
