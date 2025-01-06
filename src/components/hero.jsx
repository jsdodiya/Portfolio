import React from 'react'
import {BsInstagram,BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import JinendraImage from '../assets/image.png'


const hero = () => {
  return (
    <section className='flex justify-around items-center p-10 space-x-10 lg:flex-row ssm:flex-col ssm:space-y-10 text-white'>
        <div className='lg:w-1/3 ssm:w-fit'>
            <p className='text-4xl mb-5 text-slate-300'> I'm</p>
            <h1 className='text-6xl'>Jinendra Pal Dodiya</h1>
            <hr/>
            <p className='mt-10  text-slate-300 font-sans '>
            Creative frontend developer dedicated to crafting seamless,
            user-centric web interfaces that blend functionality with stunning visuals,
            using the latest technologies and design principles.   
            </p>
        </div>
        <div className='w-1/3 items-center ssm:w-fit'>
          <img src={JinendraImage} alt='' width={300} height={300} className='rounded-full  border-8 border-white '/>  
        </div>
       
        <div className='w-1/3 ssm:w-fit'>
            <p className='text-4xl mb-4'>About Me</p>
            <p className='text-slate-300'>
                Let's build quality in programming and desgin with our services
            </p>
            <button className='bg-white text-indigo-600 px-10 py-2 my-3 rounded-full hover:bg-indigo-800 hover:text-white'>
                Show more...
            </button>

            <div className='flex mt-5 space-x-4 cursor-pointer'>
            <a href="https://www.instagram.com/jinendra.dodiya/" target="_blank" rel="noopener noreferrer">
    <BsInstagram size={40} className="border-4 hover:border-indigo-800 rounded-full" />
</a>
<a href="https://www.linkedin.com/in/jinendra-pal-dodiya-8a7a21151/" target="_blank" rel="noopener noreferrer">
    <BsLinkedin size={40} className="border-4 hover:border-indigo-800 rounded-full" />
</a>
<a href="https://github.com/jsdodiya" target="_blank" rel="noopener noreferrer">
    <FaGithub size={40} className="border-4 hover:border-indigo-800 rounded-full" />
</a>
   
            </div>
        </div>
    </section>
  )
}

export default hero
