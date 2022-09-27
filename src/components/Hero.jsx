import React from 'react';
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen flex mx-auto flex-col text-center justify-center'>
            <p className='text-[#ff10f0] p-2'>GROWING WITH DATA ANALYTICS</p>
            <h1 className='font-bold md:text-7xl text-4xl md:py-6'> Grow with data</h1>
            <div className='flex justify-center'>
                <p className='md:text-5xl sm:text-4xl font-bold'>Fast, felxible, financing for</p>
                <Typed className='md:text-5xl sm:text-4xl font-bold md:pl-4 pl-2' strings ={['BTB', 'BTC', 'SAAS']} typeSpeed={120} backSpeed={140} loop/>
            </div>
            <div>
              <p className='text-xl md:text-2xl font-bold py-3 text-gray-500'>Monitor your data analytics to increase your revenue for BTB,BTC AND SAAS platforms</p>
            </div>
            <button className='font-bold bg-[#ff10f0] w-[200px] rounded-md mx-auto py-3 text-black hover:scale-105 duration-300'>Get started</button>

        </div>
    </div>
  )
}

export default Hero