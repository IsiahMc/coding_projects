import React from 'react'
import Laptop from '../Assets/laptop.jpg'
const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-col-2'>
            <img className="w-[500px] mx-auto my-4" src={Laptop} alt="/" />
            <div className='flex flex-col justify-center items-center'>
                <p className='text-[#ff10f0] font-bold'>Data analytics dashboard</p>
                <h1 className='text-2xl md:text-4xl py-2 font-bold'> Manage Data Analytics Centrally</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                     Quia porro sequi, nobis tempore aperiam ipsam saepe aspernatur,
                      quas ut nostrum velit facilis? Sunt unde similique pariatur asperiores
                       laudantium mollitia quo! nobis tempore aperiam ipsam saepe aspernatur,
                      quas ut nostrum velit facilis?</p>
                <button className='text-[#ff10f0] bg-black font-bold border w-[200px] my-2 rounded-md py-3'>Get started</button>
            </div>
        </div>

    </div>
  )
}

export default Analytics