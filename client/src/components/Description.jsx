import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { assets } from '../assets/assets';

const Description = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

  return (
    <div ref={ref} className='flex flex-col items-center justify-center my-24 px-6 md:px-28'>
      <motion.h1 
        className='text-3xl sm:text-4xl font-semibold mb-2'
        initial={{ opacity: 0, y: -20 }} 
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.8 }}
      >
        Create AI Images
      </motion.h1>
      <motion.p 
        className='text-gray-500 mb-8'
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Turn your imagination into visuals
      </motion.p>

      <div className='flex flex-col gap-8 md:gap-14 md:flex-row items-center'>
        <motion.img 
          src={assets.sample_img_1} 
          alt='' 
          className='w-96 rounded-2xl shadow-lg'
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8 }}
        />
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className='text-3xl font-medium max-w-lg mb-4'>
            Introducing the AI-Powered Text to Image Generator
          </h2>
          <p className='text-gray-600 leading-relaxed'>
            AI-powered text-to-image generators are advanced tools that use artificial intelligence to create images from textual descriptions. These systems, powered by deep learning and neural networks, can generate highly detailed and realistic visuals based on simple text prompts. By understanding language and interpreting context, they transform words into creative and unique images, making them valuable for artists, designers, and content creators. Whether for concept art, marketing materials, or imaginative storytelling, AI-generated images offer endless possibilities, bridging the gap between human creativity and machine intelligence.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Description;
