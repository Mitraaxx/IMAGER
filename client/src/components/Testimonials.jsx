import React from 'react';
import { motion } from 'framer-motion';
import { assets, testimonialsData } from '../assets/assets';

const Testimonials = () => {
  return (
    <div className='flex flex-col items-center justify-center my-24 px-6 md:px-28'>
      <motion.h1
        className='text-3xl sm:text-4xl font-semibold mb-2'
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
      >
        Customer Testimonials
      </motion.h1>
      <motion.p
        className='text-gray-500 mb-12'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        What our users are saying
      </motion.p>

      <div className='flex justify-center gap-6 flex-wrap md:flex-nowrap'>
        {testimonialsData.map((testimonial, index) => (
          <motion.div
            key={index}
            className='bg-white/20 p-12 rounded-lg shadow-md w-80 m-auto cursor-pointer hover:scale-105 transition-transform'
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
          >
            <div className='flex flex-col items-center'>
              <motion.img
                src={testimonial.image}
                alt=''
                className='rounded-full w-14'
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              />
              <h2 className='text-xl font-semibold mt-3'>{testimonial.name}</h2>
              <p className='text-gray-500 mb-4'>{testimonial.role}</p>
              <div className='flex mb-4'>
                {Array(testimonial.stars).fill().map((_, i) => (
                  <motion.img
                    key={i}
                    src={assets.rating_star}
                    alt=''
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                  />
                ))}
              </div>
              <p className='text-center text-sm text-gray-600'>{testimonial.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
