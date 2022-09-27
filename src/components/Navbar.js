import React, {useState} from 'react';
// eslint-disable-next-line
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div className='flex justify-between items-center h-24 px-4 mx-auto max-w-[1240px] text-white'>
        <h1 className='w-full text-3xl font-bold text-[#ff10f0]'>REFLEX</h1>
        <ul className='hidden md:flex'>
          <li className='p-4'>Home</li>
          <li className='p-4'>About</li>
          <li className='p-4'>Contact</li>
          <li className='p-4'>Resources</li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
          
          {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} /> }

        </div>
        <div className ={!nav ? 'fixed left-0 top-0 w-[60%] border-r h-full border-r-gray-900 bg-black ease-in-out duration-500' : 'fixed left-[-100%]'}>
          <ul className='pt-24 uppercase'>
          <li className='p-4'>Home</li>
          <li className='p-4'>About</li>
          <li className='p-4'>Contact</li>
          <li className='p-4'>Resources</li>
          </ul>
        </div>
    </div>
  )
}

export default Navbar