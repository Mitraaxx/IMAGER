import React, { useContext, useState } from 'react'
import { motion } from 'framer-motion'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'

const Result = () => {
  const [image, setImage] = useState(assets.sample_img_1)
  const [isImageLoaded, setIsImageLoaded] = useState(false)
  const [Loading, setLoading] = useState()
  const [input, setInput] = useState('')

  const {generateImage} = useContext(AppContext)

  const onSubmitHandler = async(e) =>{
    e.preventDefault()
    setLoading(true)

    if(input){
      const image = await generateImage(input)
      if(image){
        setIsImageLoaded(true)
        setImage(image)
      }
    }
    setLoading(false)
  }

  return (
    <motion.form 
      onSubmit={onSubmitHandler} 
      className='flex flex-col min-h-[90vh] justify-center items-center'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div>
        <motion.div className='relative'
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <motion.img 
            src={image} 
            alt='' 
            className='max-w-sm rounded shadow-lg'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />
          <motion.span 
            className={`absolute bottom-0 left-0 h-1 bg-blue-500`} 
            initial={{ width: 0 }}
            animate={{ width: Loading ? '100%' : '0%' }}
            transition={{ duration: 10 }}
          />
        </motion.div>
        <motion.p 
          className={!Loading ? 'hidden' : ''} 
          initial={{ opacity: 0 }}
          animate={{ opacity: Loading ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >Loading......</motion.p>
      </div>

      {!isImageLoaded && (
        <motion.div 
          className='flex w-full max-w-xl bg-neutral-500 text-white text-sm p-0.5 mt-10 rounded-full'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <input
            onChange={e => setInput(e.target.value)} 
            value={input}
            type='text' 
            placeholder='Describe what you want to generate'
            className='flex-1 bg-transparent outline-none ml-8 max-sum:w-20 placeholder-color'
          />
          <motion.button 
            className='bg-zinc-900 px-10 sm:px-16 py-3 rounded-full'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >Generate</motion.button>
        </motion.div>
      )}

      {isImageLoaded && (
        <motion.div 
          className='flex gap-2 flex-wrap justify-center text-white text-sm p-0.5 mt-10 rounded-full'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p 
            onClick={() => setIsImageLoaded(false)}
            className='bg-transparent border border-zinc-900 text-black px-8 py-3 rounded-full cursor-pointer'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >Generate Another</motion.p>
          <motion.a 
            href={image} 
            download 
            className='bg-zinc-500 px-10 py-3 rounded-full cursor-pointer'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >Download</motion.a>
        </motion.div>
      )}
    </motion.form>
  )
}

export default Result
