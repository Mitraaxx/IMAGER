import React from 'react'
import { assets } from '../assets/assets'

const Description = () => {
  return (
    <div className='flex flex-col items-center justify-center my-24
    pd-6 md:px-28'>
        <h1 className='text-3xl sm:text-4xl
        font-semibold mb-2'>Create AI Images</h1>
        <p className='text-gray-500 mb-8'>Turn your imagination into visuals</p>
    
    <div className='flex flex-col gap-5 md:gap-14 
    md:flex-row items-center'>
        <img src={assets.sample_img_1} alt='' className='w-80xl
        w-96  rounded-lg'/>
        <div>
            <h2>Introducing the AI-Powered Text to Image Generator</h2>
            <p>AI-powered text-to-image generators are advanced tools that use artificial intelligence to create images from textual descriptions. These systems, powered by deep learning and neural networks, can generate highly detailed and realistic visuals based on simple text prompts. By understanding language and interpreting context, they transform words into creative and unique images, making them valuable for artists, designers, and content creators. Whether for concept art, marketing materials, or imaginative storytelling, AI-generated images offer endless possibilities, bridging the gap between human creativity and machine intelligence.</p>
        </div>
    
    </div>
    
    </div>
  )
}

export default Description