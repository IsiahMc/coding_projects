import React from 'react'
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagramSquare,
    FaTwitterSquare
} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='max-w-[1240] mx-auto py-16 px-4 lg:grid-cols-3 gap-8 text-gray-300'>
        <div>
        <h1 className='w-full text-3xl font-bold text-[#ff10f0]'>REFLEX</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, ipsa eaque.
             Quasi voluptate iusto voluptatem ut,</p>
             <div className='flex justify-between md:w-[75%] my-6 pt-3'>
             <FaDribbbleSquare className='hover:text-[#ff10f0]' size={40}/>
             <FaFacebookSquare className='hover:text-[#ff10f0]' size={40}/>
             <FaGithubSquare className='hover:text-[#ff10f0]' size={40}/>
             <FaInstagramSquare className='hover:text-[#ff10f0]' size={40}/>
             <FaTwitterSquare className='hover:text-[#ff10f0]' size={40}/>
             </div>
        </div>
        <div className='lg:col-span-3 flex justify-between py-3 list-none'>
            <div>
                <h6 className='font-medium text-gray-400'> Solutions</h6>
                <li className="">Analytics</li>
                <li className="">Marketing</li>
                <li className="">Solutions</li>
                <li className="">Commerce</li>
            </div>
            <div>
                <h6 className='font-medium text-gray-400'> Support</h6>
                <li className="">Pricing</li>
                <li className="">Documentation</li>
                <li className="">Guides</li>
                <li className="">Api support</li>
            </div>
            <div>
                <h6 className='font-medium text-gray-400'> Company</h6>
                <li className="">Blog</li>
                <li className="">Jobs</li>
                <li className="">Press</li>
                <li className="">About</li>
            </div>
            <div>
                <h6 className='font-medium text-gray-400'> Legal</h6>
                <li className="">Claims</li>
                <li className="">Policy</li>
                <li className="">Terms</li>
                <li className="">Conditions</li>
            </div>
        </div>
    </div>
  )
}

export default Footer