import React, { useState } from 'react'
import { CgNametag } from 'react-icons/cg'
import { HiMenuAlt1 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'



function nav() {

    const [toggle, setToggle] = useState(false)

    function openMenu(){
        setToggle(true);
    }

    function closeMenu(){
        setToggle(false);
    }
    
  return (
    <>
    <div className='flex items-center justify-between p-10 lg:flex-row '>
        <div >
            <a href='#' className='text-white font-mono text-3xl tracking-wider flex items-center'><CgNametag/> JINENDRA</a>
        </div>
        <div className='space-x-4 '>
            <div className='ssm:hidden lg:block space-x-2'>
            <a href='#' className='text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl cursor-pointer'>Skills</a>
            <a href='#' className='text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl cursor-pointer'>Projects</a>
            <a href='#' className='text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl cursor-pointer'>Testimonials</a>
            </div>
            <div className='ssm:block lg:hidden'>
    {toggle ? (
        <AiOutlineClose onClick={closeMenu} size={40} className='text-white cursor-pointer' />
    ) : (
        <HiMenuAlt1 onClick={openMenu} size={40} className='text-white' />
    )}
</div>

        </div>
    </div>

    <div className='ssm:block lg:hidden'>
        {toggle ? (
          <div className='flex justify-between ml-10'>
          <ul>
              <li className='text-white text-xl  mb-2 cursor-pointer'>Skills</li>
              <li className='text-white text-xl  mb-2 cursor-pointer'>Projects</li>
              <li className='text-white text-xl  mb-2 cursor-pointer'>Testimonials</li>
          </ul>
      </div>  
        ):(
            <div> </div>
        )

        }
        
        </div>    
    </>
  )
}

export default nav
