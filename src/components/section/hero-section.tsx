'use client'

import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <div className='w-full bg-white px-6 flex justify-center items-center min-h-[55vh] md:min-h-[65vh]'>
      <div className='flex flex-col items-center text-center gap-5'>

        <motion.p
          className='text-sm md:text-base tracking-[0.3em] uppercase text-gray-600'
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Hello, I'm
        </motion.p>

        <motion.div
          className='relative inline-block pb-3'
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.25 }}
        >
          <span
            className='text-6xl md:text-8xl lg:text-9xl font-bold text-suit-teal'
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Brian Ngo.
          </span>
          <motion.span
            className='absolute left-0 bottom-0 h-[4px] w-full bg-orange-highlight'
            style={{ transformOrigin: 'left' }}
            animate={{
              scaleX: [0, 1, 1, 1],
              opacity: [1, 1, 1, 0],
            }}
            transition={{
              duration: 2.6,
              times: [0, 0.48, 0.82, 1],
              repeat: Infinity,
              repeatDelay: 0.25,
              ease: 'easeInOut',
            }}
          />
        </motion.div>

      </div>
    </div>
  );
}

export default HeroSection;
